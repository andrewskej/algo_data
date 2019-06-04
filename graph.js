class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    //for undirected graph
    addVertex(vertexName){
        if(!this.adjacencyList[vertexName]){
            this.adjacencyList[vertexName] = []
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el!==vertex1)
    }

    removeVertex(vertexName){
        while(this.adjacencyList[vertexName].length){
            let adjacentVertex = this.adjacencyList[vertexName].pop()
            this.removeEdge(vertexName, adjacentVertex)
        }
        delete this.adjacencyList[vertexName]
    }

}

let g = new Graph()
g.addVertex('Tokyo')
g.addVertex('HongKong')
g.addVertex('Shanghai')
g.addEdge('Tokyo', 'HongKong')
g.addEdge('HongKong', 'Shanghai')
g.removeEdge('Tokyo', 'HongKong')
g.removeVertex('HongKong')
console.log(g)

//how to use 'delete' in Object
let xx = {a:'aaa', b:'xyz', c:'abc'}
let delThis = 'a'
delete xx[delThis]
delete xx.b
console.log(xx)