const m1 = [
  [Infinity,  -1,       0,        Infinity],
  [Infinity,  Infinity, Infinity,       -1],
  [Infinity,  -1,       Infinity,       -1],
  [0,         -1,       Infinity, Infinity]
]

const m2 = [
  [Infinity,  -1,       0,        Infinity],
  [Infinity,  Infinity, Infinity,       -1],
  [Infinity,  -1,       Infinity,       -1],
  [0,         -1,       Infinity, Infinity]
]

console.log(m1)
//-1 is wall, 0 is gate, Infinity is empty room.
//Fill each empty room with the number of steps to the nearest gate.
//if not possible to reach a gate, leave Infinity as is
const EMPTY = Infinity
const WALL = -1
const GATE = 0
const directions = [
  [-1,0],
  [1,0],
  [0,1],
  [0,-1]
]
const wallsAndGates = (matrix) => {

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      if(matrix[row][col] === GATE){
        dfs(matrix, row, col, 0);
      }
    }
  }
  return matrix
}


const dfs = (matrix, row, col, currentStep) => {
  if(row < 0 || col < 0 || 
    row >= matrix.length || col >= matrix[0].length || 
    currentStep > matrix[row][col]){
    return;
  }
  matrix[row][col] = currentStep;

  for(let i = 0; i<directions.length; i++){
    const currentDir = directions[i]
    dfs(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1)
  }
}

//Time: O(N)
//Space: O(N)

console.log(wallsAndGates(m1))
// console.log(wallsAndGates(m2))