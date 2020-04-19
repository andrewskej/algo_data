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
    const H = grid.length;
    const W = H && grid[0].length;
    let count = 0;
  
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (grid[r][c] === '0'){
                console.log(`found 0 - no count up : [${r}][${c}]`)
                continue; //continue means to skip this turn of loop.. -> no count up for '0'
            } 
            
            count++;  //count up if there's new 1 found
            console.log('found 1 - count up:', count)
            dfs(r, c);
        }
    }
    return count;
    

    function dfs(r, c) {
        if (r < 0 || c < 0 || r === H || c === W) return; //if out of the grid
        if (grid[r][c] === '0') return; //if water
        console.table(grid)
        grid[r][c] = '0'; //if land, change it to 0 so next time it will return
        //check left, right, up, down of current in recursive
        dfs(r-1, c);  
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);
    }
};


let grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']];



console.log(numIslands(grid))
