courses = [0,1,2,3,4,5]
prerequisites = [
  [1,0],
  [2,1],
  [2,5],
  [0,3],
  [4,3],
  [3,5],
  [4,5]
]


def courseScheduler(n, graph):
    inDegree = [0] * n
    adjList = []
    for i in range (0, n):
        new = []
        adjList.append(new)
        
    for pair in graph:
        inDegree[pair[0]] += 1
        adjList[pair[1]].append(pair[0])
    
    stack = []
    for i, val in enumerate(inDegree):
        if val == 0:
            stack.append(i)

    count = 0
    while len(stack):
        current = stack.pop()
        count += 1
        adjacent = adjList[current]
        
        for next in adjacent:
            inDegree[next] -= 1
            if inDegree[next] == 0:
                stack.append(next)
    return count == n

    
print(courseScheduler(len(courses), prerequisites))