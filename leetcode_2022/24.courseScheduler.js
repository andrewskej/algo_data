//There are total of n courses to take, labeled from 0 to n-1
//some courses have prerequisite courses. This is expressed as a pair 
//i.e. [1,0]
//which indicates you must take course 0, before taking course 1.
//given the total number of courses and an array of prerequisite pairs, 
//return if it is possible to finish all courses

// -> meaning that I should find if it has cycles or not 
// use topoligical sort will determine if it is DAG(true) or not (false)


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
//Time: O(P + n^2)
//space: O(n^2)
//https://velog.io/@kimdukbae/%EC%9C%84%EC%83%81-%EC%A0%95%EB%A0%AC-Topological-Sorting
const courseScheduler_optimal = (numberOfCourses, graph) => {
  const inDegree = new Array(numberOfCourses).fill(0)
  const adjList = inDegree.map(() => [])

  for(let i = 0; i < graph.length; i++){
    const pair = graph[i];
    //pair[0] = target course
    //pair[1] = prerequisite course
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
  return count === numberOfCourses;
}


const courseScheduler_udemy = (numCourses, prerequisites) => {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = new Array(numCourses).fill(0);

  for (const pair of prerequisites) {
    // build graph map
    const [target, required] = pair

    if (graph.has(required)) {
      graph.get(required).push(target);
    } else {
      graph.set(required, [target]);
    }
    // build indegree array
    indegree[target]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length;
}

console.log(courseScheduler_BFS(courses.length, prerequisites))
console.log(courseScheduler_optimal(courses.length, prerequisites))
console.log(courseScheduler_udemy(courses.length, prerequisites))