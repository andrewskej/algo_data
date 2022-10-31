// ou are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
 

// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const counter = {}
    for(let i = 0; i< nums.length; i++){
        counter[nums[i]] = 0
    }

    for(let i = 0; i< nums.length; i++){
        counter[nums[i]]++
    }

    for(let key in counter){
        if(counter[key] == 1){
            return key
        }
    }

};


var leetCode_1 = function(nums){
    return nums.find(n => nums.indexOf(n) === nums.lastIndexOf(n))
}


var leetcode_binarySearch = function(nums) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      let m = Math.floor((left + right) / 2);
      if (nums[m] === nums[m - 1]) m -= 1;
      if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
        return nums[m];
      } else if ((m - left) % 2 === 1) {
        right = m;
      } else {
        left = m + 2;
      }
    }
  };

const arr1 = [1,1,2,3,3,4,4,8,8]
const arr2 = [3,3,7,7,10,11,11]

console.log(singleNonDuplicate(arr1))
console.log(singleNonDuplicate(arr2))

console.log(leetCode_1(arr1))
console.log(leetCode_1(arr2))