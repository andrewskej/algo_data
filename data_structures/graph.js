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

    //recursive
    DFS_R(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                // console.log(visited)
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start)
        return result
    }

    //Iterative
    DFS_I(start){
        const S = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currentV;
        while(S.length){
            currentV = S.pop()
            result.push(currentV)

            this.adjacencyList[currentV].forEach(neighbors => {
                if(!visited[neighbors]){
                    visited[neighbors] = true;
                    S.push(neighbors)
                }
            })
        }
        return result
    }

    BFS(start){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex;
        visited[start] = true
        
        while(queue.length){
            console.log(queue)
            currentVertex = queue.shift()
            result.push(currentVertex)
            console.log(result)            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor) 
                }
            })
        }
        return result;
        
    }

}

// let g = new Graph()
// g.addVertex('Tokyo')
// g.addVertex('HongKong')
// g.addVertex('Shanghai')
// g.addEdge('Tokyo', 'HongKong')
// g.addEdge('HongKong', 'Shanghai')
// g.removeEdge('Tokyo', 'HongKong')
// g.removeVertex('HongKong')
// console.log(g)

let g2 = new Graph()
g2.addVertex("A")
g2.addVertex("B")
g2.addVertex("C")
g2.addVertex("D")
g2.addVertex("E")
g2.addVertex("F")
g2.addEdge("A","B")
g2.addEdge("B","D")
g2.addEdge("D","E")
g2.addEdge("D","F")
g2.addEdge("F", "E")
g2.addEdge("E", "C")
g2.addEdge("C", "A")
console.log(g2)

console.log(g2.DFS_R("A"))
console.log(g2.DFS_I("A"))
console.log(g2.BFS("A"))

//how to use 'delete' in Object
// let xx = {a:'aaa', b:'xyz', c:'abc'}
// let delThis = 'a'
// delete xx[delThis]
// delete xx.b
// console.log(xx)