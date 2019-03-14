var Urn = require('./urn')
var Statistics = require("./statistics")
var LineGraph = require("./linegraph")

var RandomGraph = require("./randomgraph")


var filename = process.argv[2] || "./results.csv"
var edgeChance = process.argv[3] || 0.3
var noLogs = process.argv[4] || 'false'
var numberOfNodes = process.argv[5] || 50
var graphFileName = process.argv[6] || './graphInfo'
var explorationMode = process.argv[7] || 'bfs'
if (noLogs == 'true') console.log = function () { }

var urn = new Urn()


// var graph = new LineGraph(numberOfNodes, urn)
var graph = new RandomGraph(numberOfNodes, urn, edgeChance, explorationMode)

while (graph.traverse()) {
    let vertex = graph.getCurrentVertex();
    vertex.decide()
    console.log("Node", vertex._index, "decides: ", vertex.getDecision(), "\n")
}


var statistics = new Statistics(graph, filename, graphFileName);


statistics.summary()


// let allNodesHaveDecided = true
// for (let i = 0; i < graph.numberOfNodes(); i++) {
//     const vertex = graph.get(i);
//     if (!vertex.hasDecided()) allNodesHaveDecided = false
// }

// console.log(allNodesHaveDecided)




