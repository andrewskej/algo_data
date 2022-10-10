//on a given n x n chessboard, a knight piece will start at the
//r-th row and c-th column. THe knight will attemps to make k moves.
//A knight can move in 8 possible ways. Each move will choose one of
//these 8 at random. The knight continues moving until it finishes k moves
//or it moves off the chessboard.
//Return the probability that the knight is on the chessboard after if finishes moving.

const n = 6 // n x n board size
const k = 2 // move count
const r = 2 // row
const c = 2 // column

const directions = [
    //8 directions
    [1,2],
    [1,-2],
    [-1,-2],
    [-1,2],
    [-2,-1],
    [-2,1],
    [2,1],
    [2,-1]
]

const knightProb_recursive = (n,k,r,c) => {
    //if initial position is out of board
    if(r < 0 || r >= n || c < 0 || c >= n){
        return 0;
    }

    //no moves left, probability is 1 (100%)
    if(k == 0){
        return 1;
    }

    let probability = 0;
    for(let i = 0; i < directions.length; i++){
        const dir = directions[i];
        probability += knightProb_recursive(n, k-1, r + dir[0], c + dir[1]) / directions.length;
    }

    return probability;
}

//recursive
//time : O(8^k)  recursively expanding 8 directions every time... 
//space: O(8^k)
console.log(knightProb_recursive(n,k,r,c))



const knightProb_memo = (n,k,r,c) => {
    const dp = new Array(k+1).fill(0).map(
        () => new Array(n).fill(0).map(() => new Array(n).fill(undefined))
    )
    return recurse(n, k, r, c, dp)
}

const recurse = (n,k,r,c,dp) => {
    if(r < 0 || c < 0 || r >= n || c >= n){
        return 0;
    }
    if(k === 0){
        return 1;
    }
    if(dp[k][r][c] !== undefined) return dp[k][r][c];

    let res = 0;
    for(let i = 0; i < directions.length; i++){
        const dir = directions[i];
        res += recurse(n, k-1, r + dir[0], c + dir[1], dp ) / 8;
    }
    dp[k][r][c] = res
    return dp[k][r][c]
}

//time: O(n^2 x k)
//space: O(n^2 x k)
console.log(knightProb_memo(n,k,r,c))


//tabulation?
//time: O(n^2 x k)
//space: O(n^2)
const knightProb_bottomUp = (n,k,r,c) => {
    let prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0))

    prevDp[r][c] = 1;

    for(let step = 1; step <= k; step++){
        for(let row = 0; row < n; row++){
            for(let col = 0; col < n; col++){
                for(let i = 0; i < directions.length; i++){
                    const dir = directions[i];
                    const prevRow = row + dir[0];
                    const prevCol = col + dir[1];
                    
                    if(prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n){
                        nextDp[row][col] += prevDp[prevRow][prevCol] / 8;
                    }
                }
            }
        }
        prevDp = nextDp;
        nextDp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    }

    let res = 0;
    for(let i =0; i<n; i++){
        for(let j = 0; j < n; j++){
            res += prevDp[i][j]
        }
    }
    return res
}

console.log(knightProb_bottomUp(n,k,r,c))