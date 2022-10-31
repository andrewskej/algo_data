// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// The key idea of how we can solve this problem in O(N) time using hashmap is to understand 
// how we can correctly use the information from 1 iteration of calculating sums.
// Something to understand first is, 
// when Sum_i = #0 + #1 + #2 .... + #i = 6, and Sum_k #0 + #1 + #2 ... + #k = 10, 
// its pretty obvious that between #i to #k is equal to 4, 
// and we can write that mathmatically to Sum_k - Sum_i = Sumi_to_k
// So In order to find k we are basically trying to find a pair of 
// Sum_i and Sum_k such that Sum_k - Sum_i = k. 
// Since we are only iterating the array once and calculating the sum from left to right accumatively, 
// we can keep a record of all the sums up to index i, that is Sum0, Sum1...Sumi. 
// For each new sum, we can check if there is a previous Sum such that 
// Sum_current - Sum_prev = k. In order to find what is the "old_index", 
// we can just change the formula to Sum_curren - k = Sum_old and look up from our record to see 
// if we find a matching pair.
// If we did, bingo, that means we found a valid subarray.

var subarraySum = function(nums, k) {
    const map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1)
    
    for (let num of nums) {
        sum += num;
        // what does sum-k mean???  
        // sum-k means distance from current value and goal value.. 0 means euqal.
        if(map.has(sum-k)) count+= map.get(sum-k);  //if map already has a record(of match), count up by that record...?
        if(map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum,1)
    }
    
    //number of pairs that sums up k (the given number)
    return count;
};


var nums = [1,1,1,2,3,1,2]
var k = 3
console.log(subarraySum(nums, k))

var subarraySumBF = function(nums, k) {
    let counter = 0;
    for (let i=0;i<nums.length;i++) {
        let base = 0;
        for (let j=i;j<nums.length;j++) {
            base+=nums[j];
            if (base == k) counter++;
        }
    }
    return counter;
};

console.log(subarraySumBF(nums,k))