var Urn = require('./urn')
var Statistics = require("./statistics")
var LineGraph = require("./linegraph")

var RandomGraph = require("./randomgraph")

var urn = new Urn()
var numberOfNodes = 50;

// var graph = new LineGraph(numberOfNodes, urn)

var edgeChance = 0.7
var graph = new RandomGraph(numberOfNodes, urn, edgeChance)

for (let i = 0; i < graph.numberOfNodes(); i++) {
    let vertex = graph.get(i);
    vertex.decide()
    console.log("Node",vertex._index,"decides: ", vertex.getDecision(),"\n")
}


var statistics = new Statistics(graph);


statistics.summary()





