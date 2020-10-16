class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph = new Map(); 
    }
    addEdge(u, v) {
        if(this.graph[u]){
            this.graph[u].push(v);
        } else {
            this.graph[u] = [v];
        }
    }
    printGraph() {
        for(let i in this.graph){
            var s = "";
            for(let j in this.graph[i]){
                s += this.graph[i][j] + " ";
            }
            console.log(i + " -> " + s);
        }
    }
}

graph = new Graph();
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(1,5);
graph.addEdge(2,4);
graph.printGraph();