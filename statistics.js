function Statistics(graph){
    this._graph = graph
}

Statistics.prototype.summary = function(){
    console.log("********* Statistics Summary *********","\n\n")
    let numberOfinfluencedVertex = 0
    let numberOfVertexWhoseOpinionDidntMatter = 0
    let cascadeStartingVertex;
    for (let i = 0; i < this._graph.numberOfNodes(); i++) {
        let vertex = this._graph.get(i);
        if(!vertex.opinionMatters()){
            cascadeStartingVertex = cascadeStartingVertex ? cascadeStartingVertex : i;
            numberOfVertexWhoseOpinionDidntMatter++
        }
        if(vertex.hasBeenInfluenced()) {
            numberOfinfluencedVertex++;
        }
       let influencingIndexes = vertex.getInfluencingNeighbours().map((v=>{
           return v._index
       }))
       console.log("Influencing indexes for node",i,": ",influencingIndexes)
    }
    console.log()
    if(this._graph._type == "line"){
        console.log("Cascade started at node: ", cascadeStartingVertex,"(only for linegraph)\n")
    }
    console.log("Number of nodes whose opinion didnt matter: ", numberOfVertexWhoseOpinionDidntMatter)
    console.log("Number of nodes who changed opinion towards the crowd: ", numberOfinfluencedVertex)
} 

module.exports = Statistics