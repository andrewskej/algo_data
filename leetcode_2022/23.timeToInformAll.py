from collections import defaultdict

managers   = [2,2,4,6,-1,4,4,5]
informTime = [0,0,4,0,7,3,6,0]
isHEAD = -1

def timeToInform(n, headId, managers, informTime):
    adjList = defaultdict(list)
    for e, manager in enumerate(managers):
        if manager == isHEAD:
            continue
        
        adjList[manager].append(e)

    return dfs(headId, adjList, informTime)    
    
    


def dfs(currentId, adjList, informTime):
    if len(adjList[currentId]) == 0:
        return 0
    
    maxTime = 0
    subord = adjList[currentId]
    
    for i in range(len(subord)):
        maxTime = max(maxTime, dfs(subord[i], adjList, informTime))
    
    return maxTime + informTime[currentId]
    
    
    
print(timeToInform(len(managers),4, managers, informTime))