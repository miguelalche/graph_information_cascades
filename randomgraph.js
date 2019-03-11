var Vertex = require('./vertex')

function RandomGraph(numberOfNodes, urn, edgeChance) {
    this._vertex = []
    this._edgeChance = edgeChance
    for (let i = 0; i < numberOfNodes; i++) {
        this.add(new Vertex(i, this, urn))
    }

    this._adjacencyMatrix = []
    for (let i = 0; i < numberOfNodes; i++) {
        this._adjacencyMatrix.push([])
        for (let j = 0; j < numberOfNodes; j++) {
            this._adjacencyMatrix[i].push(Math.random() < this._edgeChance)
            if (i == j) this._adjacencyMatrix[i][i] = false;
        }
    }
    this._type = "random"
}
RandomGraph.prototype.getNeighbours = function (i) {
    var neighbours = []
    let row = this._adjacencyMatrix[i]
    for (let j = 0; j < this.numberOfNodes(); j++) {
        if (row[j]) neighbours.push(this.get(j));
    }
    return neighbours;
}
RandomGraph.prototype.add = function (v) {
    this._vertex.push(v)
}
RandomGraph.prototype.get = function (i) {
    return this._vertex[i]
}
RandomGraph.prototype.numberOfNodes = function () {
    return this._vertex.length
}

RandomGraph.prototype.serialize = function(){
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


module.exports = RandomGraph;