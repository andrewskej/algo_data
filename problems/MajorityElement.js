// Given an array of size n, find the majority element. 
//The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const counter = {};
  
  for(let i =0; i<nums.length; i++){
    counter[nums[i]] = 0;
  }

  for(let i =0; i<nums.length; i++){
    counter[nums[i]]++;
  }


  const arr = [];
  for(let key in counter){ 
    arr.push(counter[key])  
  }

  const [majority] = arr.sort((a,b)=> a-b).reverse();

  for(let key in counter){
    if(counter[key] == majority) return key;
  }

};


var majority_leetcode = function(nums){
       // sort the array and the middle is the majority
       // it works as the condition was special: The majority element is the element that appears more than ⌊ n/2 ⌋ times.
       nums.sort((a,b) => a - b);
       console.log(nums)
       return nums[Math.floor(nums.length/2)];
}

console.log(majority_leetcode([2,2,1,1,1,2,2,3,3,3,33,3,3,3]))
console.log(majorityElement([2,2,1,1,1,2,2,3,3,3,33,3,3,3]))