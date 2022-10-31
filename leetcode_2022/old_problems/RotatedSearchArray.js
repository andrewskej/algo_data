// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //use binary search...
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    
     while (low <= high) {
         let mid = Math.floor(low+(high-low)/2)
         
         if (target===nums[mid])
             return mid
         
         if (nums[low]<=nums[mid]) {
             if (target<nums[mid] && target>=nums[low]) {
                 high = mid - 1
             } else {
                 low = mid + 1
             }
         } 
         else {
             if (target>nums[mid] && target<=nums[high]) {
                 low = mid+1
             } else {
                 high = mid-1
             }
         }
         
     }
     return -1;
     
 };


const nums = [4,5,6,7,0,1,2]
const target1 = 0
const target2 = 3

console.log(search(nums, target1))
console.log(search(nums, target2))