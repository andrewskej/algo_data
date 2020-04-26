// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // keep a record of the maximum feasible index
    // if an index is unfeasible, return false

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (max < i) {
        return false;
      }else{
        console.log(max)
        max = Math.max(nums[i] + i, max);
        console.log(max)
      }  
    }
  
    return true;
};

const arr1 = [2,3,1,1,4]
const arr2 = [3,2,1,0,4]
const arr3 = [0]
const arr4 = [1,1,1,0]

console.log(canJump(arr1))  //true
// console.log(canJump(arr2))  //false
// console.log(canJump(arr3))  //true
// console.log(canJump(arr4))  //true