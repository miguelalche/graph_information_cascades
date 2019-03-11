var Urn = require('./urn')
var Statistics = require("./statistics")
var LineGraph = require("./linegraph")

var RandomGraph = require("./randomgraph")


// var graph = new LineGraph(numberOfNodes, urn)
var filename = process.argv[2] || "./results.csv"
var edgeChance = process.argv[3] || 0.3
var noLogs = process.argv[4] || 'false'
var numberOfNodes = process.argv[5] || 15
var graphFileName = process.argv[6] || './graphInfo'
var explorationMode = process.argv[7] || 'bfs'
if(noLogs == 'true') console.log = function(){}

var urn = new Urn()


var graph = new RandomGraph(numberOfNodes, urn, edgeChance,explorationMode)

// for (let i = 0; i < graph.numberOfNodes(); i++) {
//     let vertex = graph.get(i);
//     vertex.decide()
//     console.log("Node",vertex._index,"decides: ", vertex.getDecision(),"\n")
// }

while(graph.traverse()){
    let vertex = graph.getCurrentVertex();
    vertex.decide()
    console.log("Node",vertex._index,"decides: ", vertex.getDecision(),"\n")
}


// for (let i = 0; i < graph.numberOfNodes(); i++) {
//     let vertex = graph.get(i);
//     vertex.decide()
//     console.log("Node",vertex._index,"decides: ", vertex.getDecision(),"\n")
// }


var statistics = new Statistics(graph,filename, graphFileName);


statistics.summary()





