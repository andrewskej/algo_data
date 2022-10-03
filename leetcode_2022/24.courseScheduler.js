//There are total of n courses to take, labeled from 0 to n-1
//some courses have prerequisite courses. This is expressed as a pair i.e. [1,0]
//which indicates you must take course 0, before taking course 1.
//given the total number of courses and an array of prerequisite pairs, 
//return if it is possible to finish all courses


const courses = [0,1,2,3,4,5]
const prerequisites = [
  [1,0],
  [2,1],
  [2,5],
  [0,3],
  [4,3],
  [3,5],
  [4,5]
]

//time: O(n^3) for worst case?
//space: O(n^2)
const courseScheduler_BFS = (n, graph) => {
  const adjList = new Array(n).fill(0).map(() => []);
  //fill in adjList out of given graph
  for(let i = 0; i < graph.length; i++){
    const pair = graph[i]
    adjList[pair[1]].push(pair[0])
  }

  const queue = [];
  const seen = {};
  for(let v = 0; v < n; v++){

    for(let i = 0; i < adjList[v].length; i++){
      queue.push(adjList[v][i]);
    }
    //bfs
    while(queue.length){
      const current = queue.shift();
      seen[current] = true;
      if(current === v) return false;
  
      const adjacent = adjList[current];
      for(let i = 0; i < adjacent.length; i++){
        const next = adjacent[i];
        if(!seen[next]){
          queue.push(next)
        }
      }
    }
  }
  return true;
}


//topological sort
//use inDegree array
const courseScheduler_optimal = (n, graph) => {
  const inDegree = new Array(n).fill(0)
  const adjList = inDegree.map(() => [])

  for(let i = 0; i < prerequisites.length; i++){
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }

  const stack = [];
  for(let i = 0; i < inDegree.length; i++){
    if(inDegree[i] === 0){
      stack.push(i);
    }
  }
  
  let count = 0;
  while(stack.length){
    const current = stack.pop();
    count++;
    const adjacent = adjList[current];

    for(let i = 0; i < adjacent.length; i++){
      const next = adjacent[i];
      inDegree[next]--;
      if(inDegree[next] === 0){
        stack.push(next);
      }
    }
  }
  return count === n;
}


console.log(courseScheduler_BFS(6, prerequisites))
console.log(courseScheduler_optimal(6, prerequisites))