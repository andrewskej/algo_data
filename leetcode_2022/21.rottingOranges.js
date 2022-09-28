
const matrix1 = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1]
]

const matrix2 = [
  [2, 0, 1, 0, 0],
  [2, 2, 0, 0, 2],
  [0, 1, 1, 2, 2],
  [0, 1, 0, 0, 2]
]

const directions = [
  [-1,0], //up
  [0,1], //right
  [1,0], //down
  [0,-1] //left
]

const isRotten = 2;
const isFresh = 1;

const rottingOranges = (matrix) => {
  if(matrix.length === 0) return 0;

  const queue = [];
  let freshO = 0;

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){

      if(matrix[row][col] === isRotten){
        queue.push([row, col]) ;
      }

      if(matrix[row][col] === isFresh){
        freshO++;
      }
    }
  }

  let minutes = 0;
  let currentQSize = queue.length;

  while(queue.length > 0){
    if(currentQSize === 0){
      currentQSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];

    for(let i = 0; i < directions.length; i++){
      const currentDir = directions[i];
      const nextRow = currentDir[0] + row;
      const nextCol = currentDir[1] + col;

      if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length){
        continue;
      }

      if(matrix[nextRow][nextCol] === isFresh){
        matrix[nextRow][nextCol] = 2;
        freshO--;
        queue.push([nextRow, nextCol])
      }
    }
  }

  //for cases where there's unreachable solo fresh oranges
  if(freshO !== 0){
    return -1;
  }

  return minutes;
}


console.log(rottingOranges(matrix1))
console.log(rottingOranges(matrix2))