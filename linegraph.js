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


module.exports = LineGraph;