// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1


const isHappy = (n) => {
    let tempResult = [];
    let tempSum;

    function checker(n){
        while(!tempResult.includes(1)){
            let num2Str = String(n).split('')
            tempSum = ( num2Str.length >1 ) 
            ? num2Str.map(el => Math.pow(el,2)).reduce((acc,cur)=>{return acc+cur})
            : Math.pow(num2Str[0],2)
            if(tempSum===1){
                return true;
            }else{
                if(tempResult.includes(tempSum)){
                    return false;
                }
                tempResult.push(tempSum)
                return checker(tempSum)
            }
        }
    }
    return checker(n)
}

// console.log(isHappy(19)) //true
// console.log(isHappy(7)) //true
// console.log(isHappy(4))  //false
console.log(isHappy(78)) //false


const x =[1,1,3].map(el => Math.pow(el,2)).reduce((acc,cur)=>{return acc+cur})
console.log(x)
