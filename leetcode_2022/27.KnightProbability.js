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



