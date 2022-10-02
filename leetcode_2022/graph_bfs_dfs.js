//adjcency list
const adjList = [
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2]
]

const traversalBFS = (graph) => {
    const queue = [0]; //initial value to start
    const values = [];
    const seen = {};

    while (queue.length){
        const vertex = queue.shift();
        values.push(vertex);
        seen[vertex] = true;
        
        const connections = graph[vertex];
        
        for(let i = 0; i < connections.length; i++){
            const connection = connections[i];
            if(!seen[connection]){
                queue.push(connection)
            }
        }
    }
    return values;
}


const traversalDFS = (vertex, graph, values, seen) => {
    values.push(vertex);
    seen[vertex] = true;
    
    const connections = graph[vertex];
    
    for(let i = 0; i < connections.length; i++){
        const connection = connections[i];
        if(!seen[connection]){
            traversalDFS(connection, graph, values, seen)
        }
    }
}


console.log(traversalBFS(adjList))

//dfs is recursive, just like for many other data structure..
const values = []
const seen = {}
traversalDFS(0, adjList, values, seen)
console.log(values)