// 8 employees: 0,1,2,3,4,5,6,7
// headID = 4
const managers   = [2,2,4,6,-1,4,4,5]
const informTime = [0,0,4,0,7,3,6,0]

const adjacencyList = [
  //index 0 and its children nodes 
  [],
  //1
  [],
  //2
  [0,1],
  //3
  [],
  //4
  [2,5,6],
  //5
  [7],
  //6
  [3],
  //7
  [],
  //8
  []
]

const timeToInform = (n, headId, managers, informTime) => {
  const adjList = managers.map(() => []);
  console.log('m:', managers)
  console.log('adj:', adjList)
  for(let e = 0; e < n; e++){
    const manager = managers[e];

    if(manager === -1){
      continue;
    }
    adjList[manager].push(e);
  }

  return dfs(headId, adjList, informTime)
}


const dfs = (currentId, adjList, informTime) => {
  if(adjList[currentId].length === 0){
    return 0;
  }  

  let max = 0;
  const subordinates = adjList[currentId];
  // console.log(currentId, subordinates)
  for(let i = 0; i < subordinates.length; i++){
    max = Math.max(max, dfs(subordinates[i], adjList, informTime))
  }

  return max + informTime[currentId];
}


console.log(timeToInform(8, 4, managers, informTime));

//time: O(n)
//space: O(n)