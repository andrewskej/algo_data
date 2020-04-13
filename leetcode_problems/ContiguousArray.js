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
var findMaxLength = function(nums) {
    if(nums.length <2) return 0;

    let left, right = 0;
    let longest = -Infinity;
    let counter = {}
    for(let i = 0; i < nums.length; i++){
        counter[nums[i]] = 0
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] in counter){
            counter[nums[i]]++
        }
    }


    while(right < nums.length){
        for(let i = 1; i<nums.length; i++){
            if(nums[i] == nums[i-1]){
                left++;
            }
        }
        
        right++;

        console.log(counter)
    }



};

const nums1 = [0,1]
const nums2 = [0,1,0]
const nums3 = [0,1,0,1]
//[0,1,0,0,0,1,0,1,1]

// console.log(findMaxLength(nums1))
// console.log(findMaxLength(nums2))
console.log(findMaxLength(nums3))