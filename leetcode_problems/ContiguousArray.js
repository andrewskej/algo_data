// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */


// Iterate the numbers and count the number of 0s and 1s
// Save the first appearance of count in a hash map as hash = {count:index}
// When the same count appears again at i, it means between hash[count] to i, the number of 0s and 1s evened out and it's back to its previous level.

var findMaxLength = function(nums) {
    let hash = {0:-1};
    let count = 0;
    let max = 0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 0) count--;
        else count++;

        if (hash[count]!=null) max = Math.max(max, i - hash[count]);
        else hash[count] = i;

        console.log(i)
        console.log(count)
        console.log(hash)
        console.log(max)
    }
    return max;

};

const nums1 = [0,1]
const nums2 = [0,1,0]
const nums3 = [0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0]
//[0,1,0,0,0,1,0,1,1]

// console.log(findMaxLength(nums1))
// console.log(findMaxLength(nums2))
console.log(findMaxLength(nums3))