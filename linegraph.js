var Vertex = require('./vertex')

function LineGraph(numberOfNodes,urn){
    this._vertex = []
    this._traverseState = false
    for (let i = 0; i < numberOfNodes; i++) {
        this.add(new Vertex(i,this,urn))
    }
}
LineGraph.prototype.getNeighboursPointingTo = function (i){
    return this._vertex.slice(0,i)
}
LineGraph.prototype.add = function(v){
    this._vertex.push(v)
}
LineGraph.prototype.get = function(i){
    return this._vertex[i]
}
LineGraph.prototype.numberOfNodes = function(){
    return this._vertex.length
}

LineGraph.prototype.traverse = function(){
    if(this._traverseState == false){
        this._currentVertexIndex = 0
        this._traverseState = true
    } else {
        this._currentVertexIndex++
        if (this._currentVertexIndex >= this.numberOfNodes()) this._traverseState = false;
    }   
    return this._traverseState;
}

LineGraph.prototype.getCurrentVertex = function(){
    return this._vertex[this._currentVertexIndex];
}

LineGraph.prototype.serialize = function(){
    var res = ''
    res += this._vertex.map(v=>v._index).toString()
    res += ';'
    for (let i = 0; i < this.numberOfNodes(); i++) {
        var neighbours = this.getNeighboursPointingTo(i)
        neighbours.forEach(element => {
            res += '('+i+','+element._index+')'+'-'
        });
    }
    res = res.slice(0,res.length-1)
    res += ";"
    res += this._vertex.map(v=>{
        var color = v.getDecision()
        if(!v.opinionMatters()){
            if (color=="blue") return 'lightblue';
            return 'pink' 
        }
        return color
    }).toString()

    return res
}

module.exports = LineGraph;