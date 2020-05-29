/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        console.log(complement)
        if(complement in map){
            return [map[complement], i]
        }
        map[nums[i]] = i;
    }
    
};


console.log(twoSum([1,2,3,5,7], 9))