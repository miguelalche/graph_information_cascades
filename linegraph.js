var Vertex = require('./vertex')

function LineGraph(numberOfNodes,urn){
    this._vertex = []

    for (let i = 0; i < numberOfNodes; i++) {
        this.add(new Vertex(i,this,urn))
    }
}
LineGraph.prototype.getNeighbours = function (i){
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

LineGraph.prototype.serialize = function(){
    var res = ''
    res += this._vertex.map(v=>v._index).toString()
    res += ';'
    for (let i = 0; i < this.numberOfNodes(); i++) {
        for (let j = 0; j < this.numberOfNodes(); j++) {
            if(this._adjacencyMatrix[i][j]) res += '('+i+','+j+')'+'-'
        }        
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