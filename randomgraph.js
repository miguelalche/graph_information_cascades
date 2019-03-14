var Vertex = require('./vertex')

function RandomGraph(numberOfNodes, urn, edgeChance, explorationMode) {
    this._vertex = []
    this._edgeChance = edgeChance
    this._explorationMode = explorationMode
    this._traverseState = false
    this._currentVertexIndex;
    this._queue = []

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
RandomGraph.prototype.getNeighboursPointingTo = function (i) {
    var neighbours = []
    let row = this._adjacencyMatrix[i]
    for (let j = 0; j < this.numberOfNodes(); j++) {
        if (row[j]) neighbours.push(this.get(j));
    }
    return neighbours;
}
RandomGraph.prototype.getNeighboursPointingFrom = function (i) {
    var neighbours = []
    for (let j = 0; j < this.numberOfNodes(); j++) {
        let row = this._adjacencyMatrix[j]
        if (row[i]) neighbours.push(this.get(j));
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

RandomGraph.prototype.serialize = function () {
    var res = ''
    res += this._vertex.map(v => v._index).toString()
    res += ';'
    for (let i = 0; i < this.numberOfNodes(); i++) {
        for (let j = 0; j < this.numberOfNodes(); j++) {
            if (this._adjacencyMatrix[i][j]) res += '(' + i + ',' + j + ')' + '-'
        }
    }
    res = res.slice(0, res.length - 1)
    res += ";"
    res += this._vertex.map(v => {
        var color = v.getDecision()
        if (!v.opinionMatters()) {
            if (color == "blue") return 'lightblue';
            return 'pink'
        }
        return color
    }).toString()

    return res
}

RandomGraph.prototype.traverse = function () {
    if (this._explorationMode == 'random') {
        if (this._traverseState === false) {
            this._currentVertexIndex = 0
            this._traverseState = 'traversing'
        } else {
            this._currentVertexIndex++
            if (this._currentVertexIndex >= this.numberOfNodes()) this._traverseState = false
        }
    } else if (this._explorationMode == 'bfs') {
        if (this._traverseState === false) {
            this._traverseState = 'traversing'
            this._currentVertexIndex = 0
            this._queue = this._queue.concat(this.getNeighboursPointingFrom(this._currentVertexIndex).map(v => v._index))
        } else {
            if (this._queue.length === 0) {
                if(this.allNodesHaveDecided()){
                    this._traverseState = false
                } else {
                    console.log("queue was reset")
                    this._queue.push(this.getUndecidedVertexIndex())
                }
            } else {
                console.log("BFS queue: ",this._queue)
                this._currentVertexIndex = this._queue[0]
                this._queue = this._queue.slice(1, this._queue.length)
                // Empujamos a la cola los vecinos que no están ya en la cola
                this._queue = this._queue.concat(this.getNeighboursPointingFrom(this._currentVertexIndex).filter((v) => {
                    return (this._queue.indexOf(v._index) === -1) && !v.hasDecided()
                }).map(v => v._index)
                )
            }
        }
    }

    return this._traverseState
}

RandomGraph.prototype.allNodesHaveDecided = function(){
    let allNodesHaveDecided = true
    for (let i = 0; i < this.numberOfNodes(); i++) {
        const vertex = this.get(i);
        if (!vertex.hasDecided()) {
            allNodesHaveDecided = false
            break;
        }
    }
    return allNodesHaveDecided
}
RandomGraph.prototype.getUndecidedVertexIndex = function (){
    for (let i = 0; i < this.numberOfNodes(); i++) {
        const vertex = this.get(i);
        if (!vertex.hasDecided()) {
            return vertex._index
        }
    }
    throw new Error("No vertex undecided")
}

RandomGraph.prototype.getCurrentVertex = function(){
    return this._vertex[this._currentVertexIndex]
}

module.exports = RandomGraph;