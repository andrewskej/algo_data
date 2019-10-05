class Graph:
    def __init__(self):
        self.adjacencyList = {}

    
    def addVertex(self,vertexName):
        self.adjacencyList[vertexName] = []


    # def removeVertex(vertexName):


    def addEdge(self, vertex1, vertex2):
        self.adjacencyList[vertex1].append(vertex2)
        self.adjacencyList[vertex2].append(vertex1)


    # def removeEdge(vertex1, vertex2):


    # def BFS(startV):


gp = Graph()
gp.addVertex('A')
gp.addVertex('B')
gp.addVertex('C')
gp.addVertex('D')
gp.addVertex('E')
gp.addVertex('F')

gp.addEdge('A','B')
gp.addEdge('B','D')
gp.addEdge('D','E')
gp.addEdge('D','F')
gp.addEdge('F','E')
gp.addEdge('E','C')
gp.addEdge('C','A')


print(gp.adjacencyList)