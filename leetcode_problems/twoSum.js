/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(complement in map){ //should be able to explain these lines
            return [map[complement], i] //should be able to explain these lines
        }
        map[nums[i]] = i; //should be able to explain these lines
    }
    
};


console.log(twoSum([1,2,3,5,7], 9))