function Vertex (i, graph,urn){
    this._index = i
    this._graph = graph 
    this._urn = urn 
    this._decision = undefined;
    this._hasDecided = false;
    this._hasBeenInfluenced = false;
    this._opinionMatters = true;
    this._influencingNeighbours = []
}


Vertex.prototype.decide = function(){
    let ownResult = this.draw() // blue
    
    console.log("Node :",this._index, "sees", ownResult)
    let decisions = this.lookNeighborsDecision() //{blue:7, red: 3}

    console.log("Looking at his neighbours sees", decisions)
    
    let max = 0 
    let min = 0
    for(option in decisions){
        max = Math.max(max, decisions[option])
        min = Math.min(min, decisions[option])
    }
    if(max-min > 1) this._opinionMatters = false;
    
    if(decisions[ownResult]){
        decisions[ownResult]++;
    } else {
        decisions[ownResult] = 1;
    }

    let ownDecision = ownResult;
    for(option in decisions){
        if(decisions[option] > decisions[ownDecision]){
            ownDecision = option
            this._hasBeenInfluenced = true
        }
    }
    this._decision = ownDecision
    if(this._hasBeenInfluenced){
        console.log("it has been influenced towards: ", this._decision)
    } else {
        console.log("mantained his decision: ", this._decision)
    }
    this._hasDecided = true
    return this._decision;
}

Vertex.prototype.draw = function (){
    return this._urn.draw()
}

Vertex.prototype.getDecision = function (){
    return this._decision
}

Vertex.prototype.lookNeighborsDecision = function (){
    var decisions = {}
    let neighbours = this._graph.getNeighboursPointingTo(this._index);
    for (let i = 0; i < neighbours.length; i++) {
        let neighbour = neighbours[i];
        if(neighbour.hasDecided()){
            let singleDecision = neighbour.getDecision()
            if(decisions[singleDecision]){
                decisions[singleDecision]++;
            } else {
                decisions[singleDecision] = 1;
            }
            this._influencingNeighbours.push(neighbour)
        }
    }
    return decisions;
}

Vertex.prototype.hasBeenInfluenced = function (){
    return this._hasBeenInfluenced
}
Vertex.prototype.opinionMatters = function (){
    return this._opinionMatters
}
Vertex.prototype.hasDecided = function (){
    return this._hasDecided
}
Vertex.prototype.getInfluencingNeighbours = function (){
    return this._influencingNeighbours
}

module.exports = Vertex