const isle1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,1],
  [0,0,0,1,1]
]
//2

const isle2 = [
  [0,1,0,1,0],
  [1,0,1,0,1],
  [0,1,1,1,0],
  [1,0,1,0,1]
]
//7

const numIsland = (matrix) => {
  const directions = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
  ]

  if(matrix.length === 0) return 0;

  let islandCount = 0

  for(let row = 0; row < matrix.length; row++){

    for(let col = 0; col < matrix[0].length; col++){

      if(matrix[row][col] === 1){
        islandCount++ //count up island
        matrix[row][col] = 0 //convert it to 0

        const queue = [] //js doesn't have queue. other lang has it implemented.
        queue.push([row, col]) //save current coordinates

        while(queue.length){
          const currentPos = queue.shift()
          const currentRow = currentPos[0]
          const currentCol = currentPos[1]

          for(let i = 0; i< directions.length; i++){
            const currentDir = directions[i]
            const nextRow = currentRow + currentDir[0]
            const nextCol = currentCol + currentDir[1]

            //if out of bound, continue
            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length){
              continue;
            }

            if(matrix[nextRow][nextCol] === 1){
              queue.push([nextRow, nextCol])
              matrix[nextRow][nextCol] = 0 
            }

          }
        }

      }
    }
  }

  return islandCount
}


console.log(numIsland(isle1))
console.log(numIsland(isle2))