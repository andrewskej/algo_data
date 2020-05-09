// Given a positive integer num, 
// write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:
// Input: 16
// Output: true

// Example 2:
// Input: 14
// Output: false


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 1) return false;

    let i = 1;
    while(i<=num){
        let val = num/i;
        console.log(i)
        console.log(num)
        console.log(val)
        if(val === i) {
            return true;
        }
        i++
    }
    return false;
};

let num1 = 16;
let num2 = 14;
let num3 = 1;

// console.log(isPerfectSquare(num1))
// console.log(isPerfectSquare(num2))
console.log(isPerfectSquare(num3))


//binary search will reduce the number of calculation a lot...wow
var isPerfectSquare_leetCode = function(num) {
    if (num <= 0) return false;
    let start = 1;
    let end = num;
    let mid;
    while(start<=end) {
      mid = Math.floor((start+end)/2);
      if (mid*mid > num) {
        end = mid - 1;
      } else if (mid*mid === num) {
        return true;
      } else {
        start = mid + 1;
      }
    }
    return false;
  };