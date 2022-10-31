// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [ //   [1,3,1], //   [1,5,1], //   [4,2,1] // ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
// Note: You can only move either down or right at any point in time.

var minPathSum = function(grid) {
    var height = grid.length;
    var width = grid[0].length;

    for (var i = 0; i < height; i++) {

      for (var j = 0; j < width; j++) {

        if (i !== 0 && j !== 0){ //crossroads
           grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        } 
        else if (i !== 0) {
           grid[i][j] += grid[i - 1][j]
        }
        else if (j !== 0) {
           grid[i][j] += grid[i][j - 1]
        }

        console.table(grid)

      }

    }

    let end = grid[height-1][width-1]

    console.log(end)

    return end;
};

const grid = [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ]

// console.log(minPathSum(grid))


function minPath(grid){
    let width = grid.length;
    let height = grid[0].length;

    for(let c = 0; c < height; c++){
        for(let r = 0; r < width; r++){

            //crossroad
            if(r !== 0 && c !== 0){
                grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1])
            }

            //row
            else if(r !== 0){
                grid[r][c] += grid[r-1][c]
            }

            //column
            else if(c !== 0){
                grid[r][c] += grid[r][c-1]
            }
        }
    }

    let goal = grid[width-1][height-1]
    return goal;
}

console.log(minPath(grid))