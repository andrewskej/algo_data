// let reverse = function(x){
//     let rev = String(Math.abs(x)).split('').reverse().join('')
//     if(x<0){
//         rev = 0 - rev
//     } 
//     let answer = Number(rev)

//     return Math.abs(answer) > Math.pow(2,31) ? 0 : answer
// }

// console.log(reverse(123))//321
// console.log(reverse(-123))//-321
// console.log(reverse(120))//21


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = this.right = null;
//     }
// }
// class Tree{
//     constructor(){
//         this.root = null
//     }
//     insert(val){
//         let newNode = new Node(val)
//         if(!this.root){
//             this.root = newNode
//             return this;
//         }

//         let currentNode = this.root;
//         while(true){
//             if(val === currentNode.val) return undefined;
            
//             if(val < currentNode.val){
//                 if(currentNode.left === null){
//                     currentNode.left = newNode;
//                     return this;
//                 }
//                 currentNode = currentNode.left
//             }else{
//                 if(currentNode.right === null){
//                     currentNode.right = newNode;
//                     return this;
//                 }
//                 currentNode = currentNode.right;
//             }
//         }
//     }
// }

// let tr = new Tree()
// tr.insert(3).insert(9).insert(20).insert(15).insert(7)
// console.log(tr)
// console.log(tr.root.val)
// console.log(tr.root.left)
// console.log(tr.root.right.val)
// console.log(tr.root.right.left.val)
// console.log(tr.root.right.right.val)

// //find maxDepth -> find the farthest leaf Node(no left right)
// // var maxDepth = function(root) {
// //     return !root ? 0 : Math.max( maxDepth(root.left), maxDepth(root.right) ) ;
// // };

// // console.log(maxDepth([3,9,20,null,null,15,7]))
// //[3,9,20,null,null,15,7]  -> depth: 3

// //analyse this.....
// var maxDepth = function(root) {
//     return helper(root);
// };
// function helper(root){
//     if (!root) return 0;

//     let left = helper(root.left);
//         console.log(left)
//     let right = helper(root.right);
//         console.log(right)

//     return 1 + Math.max(left, right);
// }

// console.log(maxDepth(tr.root))





// var majorityElement = function(nums) {
//     // let appear = {}
//     // nums.forEach(el => {
//     //     appear[el] = 0
//     // })

//     // nums.forEach(el => {
//     //     appear[el] += 1
//     // })


//     // for(let n in appear){
//     //     if (nums.length/2 < appear[n]){
//     //         return n
//     //     }
//     // }

//     //wow...... How? J'ai pas compris ca
//     console.log(nums.sort())
//     console.log(Math.round(nums.length / 2))
//     return nums.sort()[Math.round(nums.length / 2)]

// };

// console.log(majorityElement([3,2,3]))
// console.log(majorityElement([2,2,1,1,1,2,2]))



// let vals = [1,2,1]
// console.log(vals.reverse().join())
// console.log(vals.join('') === vals.reverse().join(''))


// var firstUniqChar = function(s) {
//     let charCount = {}
//     s = s.split('')
//     s.forEach(el => {
//         charCount[el] = 0
//     })
//     s.forEach(el => {
//         charCount[el]++
//     })
//     let answer;
//     for(let idx in charCount){
//         if(charCount[idx]===1){
//             answer = idx
//             break;
//         }
//     }
//     return answer ? s.indexOf(answer) : -1
// };

// console.log(firstUniqChar('loveleetcode'))


// var romanToInt = function(s){
//     let replace = {
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }

//     let result = 0
//     let temp = []

//     for(let i=0; i<s.length; i++){

//         let before = replace[s[i]]
//         let after = replace[s[i+1]]

//         if(before < after){
//             before = 0 - before
//         }
//         temp.push(before)
//     }

//     result = temp.reduce((acc,cur)=> {return acc + cur})
//     return result
// }


// console.log(romanToInt('IV')) //4    -1 + 5
// console.log(romanToInt('IX'))  //9   -1 + 10
// console.log(romanToInt('LVIII'))  //58   50 + 5 + 3
// console.log(romanToInt('MCMXCIV')) //1994   1000 + (1000-100) + (100-10) + 4


//this seems to work, but it cannot process big numbers... fuck man
function countPrimes(n){
    let primes = []
    if(n <= 2) return 0 
    for(let i = n-1; i>0; i--){
        if(isPrime(i)===true) {
            primes.push(i)
        }
    }
    return primes.length
}

function isPrime (num){
    let isP = true
    if(num===1) return false

    for(let i = num-1; i>1; i--){
        if(num % i === 0) isP = false        
    }
    return isP
}
// console.log(countPrimes(10))
// console.log(countPrimes(49999))
// console.log(isPrime())
//2 3 5 7 11 13 17 

//this, too can't take care big numbers   shit..... fuck you leetcode
function plusOne (digits){
    let newArr = [...digits]
    let numbered = Number(String(newArr).split(',').join(''))
    let plusOne = numbered + 1
    // if numbered is too big ? 
    let reString = String(plusOne)
    let prep = [...reString]
    let result = prep.map(el => Number(el))
    return result
}

// console.log(plusOne([9]))
// console.log(plusOne([1,2,3,5]))
// console.log(plusOne([1,2,3,9]))
// console.log(plusOne([9,9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


function countUniqueValues(arr){			
    if(arr.length === 0) return 0;			
    var i = 0;			
    for(let j = 1; j<arr.length; j++){			
      if(arr[i] !== arr[j]){			
        i++;			
        arr[i] = arr[j]			
      }			
    }			
    return i+1;			
  }			
              
              
  console.log(countUniqueValues([1,1,2,3]))			
  


  
var maxProfit = function(prices){
    let buy = prices[0]
    let sell = buy
    let profit = 0 

    for(let i = 0; i < prices.length - 1; i++){
        while(prices[i] >= prices[i+1]) i++;
        buy = prices[i]

        while(prices[i] <= prices[i+1]) i++;
        sell = prices[i]

        profit += (sell - buy)
    }
    return profit
}

  console.log(maxProfit([7,1,5,3,6,4])) //7
  console.log(maxProfit([1,2,3,4,5])) //4
  console.log(maxProfit([7,6,4,3,1])) //0


  
  class TreeNode{
      constructor(val){
          this.val = val;
          this.left = this.right = null
      }
  }
 
  var sortedArrayToBST = function(nums){
    if(!nums.length) return null;

    let mid = Math.floor(nums.length/2)
    let node = new TreeNode(nums[mid])

    node.left = sortedArrayToBST(nums.slice(0,mid));
    node.right = sortedArrayToBST(nums.slice(mid+1));

    return node
  }

  let nums = [-10,-3,0,5,9]
  console.log(sortedArrayToBST(nums))