var Vertex = require('./vertex')

function RandomGraph(numberOfNodes, urn, connectivity) {
    this._vertex = []

    for (let i = 0; i < numberOfNodes; i++) {
        this.add(new Vertex(i, this, urn))
    }
    this._adjacencyMatrix = []
    for (let i = 0; i < numberOfNodes; i++) {
        this._adjacencyMatrix.push([])
        for (let j = 0; j < numberOfNodes; j++) {
            this._adjacencyMatrix[i].push(Math.random() > connectivity)
            if (i == j) this._adjacencyMatrix[i][i] = false;
        }
    }
    this._type = "graph"
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


module.exports = RandomGraph;