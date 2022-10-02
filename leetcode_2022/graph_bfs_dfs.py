adjList = [
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

def traversalBFS(graph):
    queue = [0]
    values = []
    seen = {}
    
    while len(queue):
        vertex = queue.pop(0)
        values.append(vertex)
        seen[vertex] = True
        
        connections = graph[vertex]
        
        for connection in connections:
            if connection not in seen:
                queue.append(connection)
                
    return values

print(traversalBFS(adjList))


def traversalDFS(vertex, graph, values, seen):
    values.append(vertex)
    seen[vertex] = True
    
    connections = graph[vertex]
    
    for connection in connections:
        if connection not in seen:
            traversalDFS(connection, graph, values, seen)
            

values = []
seen = {}

traversalDFS(0, adjList, values, seen)
print(values)