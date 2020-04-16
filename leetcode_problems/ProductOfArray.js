// Given an array nums of n integers where n > 1, 
// return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix 
// of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? 
// (The output array does not count as extra space for the purpose of space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    var leftMult = 1;
    var rightMult = 1;

    for(var i = nums.length-1; i>=0; i--){
        result[i] = rightMult;
        rightMult *= nums[i];
    }

    for(var j = 0; j<nums.length; j++){
        result[j] *= leftMult;
        leftMult *= nums[j];
    }
    
    return result
};

const input = [1,2,3,4,5]
console.log(productExceptSelf(input))

//How the hell would I think of these... on real time base?? 


function test(nums){
    return nums.map( (curr, i, arr) => {
        let temp = arr.slice()
        temp.splice(i, 1)
        return temp.reduce((product = 1, num) => product * num)
    })
}

console.log(test(input))