let reverse = function(x){
    let rev = String(Math.abs(x)).split('').reverse().join('')
    if(x<0){
        rev = 0 - rev
    } 
    let answer = Number(rev)

    return Math.abs(answer) > Math.pow(2,31) ? 0 : answer
}

console.log(reverse(123))//321
console.log(reverse(-123))//-321
console.log(reverse(120))//21


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
class Node{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this;
        }

        let currentNode = this.root;
        while(true){
            if(val === currentNode.val) return undefined;
            
            if(val < currentNode.val){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            }else{
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

let tr = new Tree()
tr.insert(3).insert(9).insert(20).insert(15).insert(7)
console.log(tr)
console.log(tr.root.val)
console.log(tr.root.left)
console.log(tr.root.right.val)
console.log(tr.root.right.left.val)
console.log(tr.root.right.right.val)

//find maxDepth -> find the farthest leaf Node(no left right)
// var maxDepth = function(root) {
//     return !root ? 0 : Math.max( maxDepth(root.left), maxDepth(root.right) ) ;
// };

// console.log(maxDepth([3,9,20,null,null,15,7]))
//[3,9,20,null,null,15,7]  -> depth: 3

//analyse this.....
var maxDepth = function(root) {
    return helper(root);
};
function helper(root){
    if (!root) return 0;

    let left = helper(root.left);
        console.log(left)
    let right = helper(root.right);
        console.log(right)

    return 1 + Math.max(left, right);
}

console.log(maxDepth(tr.root))





var majorityElement = function(nums) {
    // let appear = {}
    // nums.forEach(el => {
    //     appear[el] = 0
    // })

    // nums.forEach(el => {
    //     appear[el] += 1
    // })


    // for(let n in appear){
    //     if (nums.length/2 < appear[n]){
    //         return n
    //     }
    // }

    //wow...... How? J'ai pas compris ca
    console.log(nums.sort())
    console.log(Math.round(nums.length / 2))
    return nums.sort()[Math.round(nums.length / 2)]

};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))



let vals = [1,2,1]
console.log(vals.reverse().join())
console.log(vals.join('') === vals.reverse().join(''))


var firstUniqChar = function(s) {
    let charCount = {}
    s = s.split('')
    s.forEach(el => {
        charCount[el] = 0
    })
    s.forEach(el => {
        charCount[el]++
    })
    let answer;
    for(let idx in charCount){
        if(charCount[idx]===1){
            answer = idx
            break;
        }
    }
    return answer ? s.indexOf(answer) : -1
};

console.log(firstUniqChar('loveleetcode'))