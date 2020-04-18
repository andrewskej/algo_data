// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const H = grid.length
    const W = grid[0].length
    let count = 0;

    for(let row = 0; row < H; row++){
        for(let column = 0; column< W; column++){
            if(grid[row][column] === '0') continue;
            count++;
            dfs(row,column)
        }
    }

    return count;

    
    function dfs(row,column){
        if(row < 0 || column < 0 || row === H || column === W) return;
        if(grid[row][column] === '0') return;

        grid[row][column] = '0'
        dfs(row-1, column)
        dfs(row+1, column)
        dfs(row, column-1)
        dfs(row, column+1)
    }
};

let grid = [[],[],[],[]];
    grid[0][0] = 1;
    grid[0][1] = 1;
    grid[0][2] = 1;
    grid[0][3] = 1;
    grid[0][4] = 0;

    grid[1][0] = 1;
    grid[1][1] = 1;
    grid[1][2] = 0;
    grid[1][3] = 1;
    grid[1][4] = 0;

    grid[2][0] = 1;
    grid[2][1] = 1;
    grid[2][2] = 0;
    grid[2][3] = 0;
    grid[2][4] = 0;

    grid[3][0] = 0;
    grid[3][1] = 0;
    grid[3][2] = 0;
    grid[3][3] = 0;
    grid[3][4] = 0;

console.table(grid)


console.log(numIslands(grid))
