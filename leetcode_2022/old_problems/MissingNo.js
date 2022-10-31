// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.


var missingNumber = function(nums) {
    //first, sort the given array. Basic JS sort will do
    nums = nums.sort();
    //as it begins from 0, the total numbers of elements will be nums.length + 1
    // [0,1,3]  length 3, endNum=3, missing = 2
    const map = new Map();
    //map to contain all the elements in array of 0 - n.
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] == null){
            map[nums[i]] = true;
        }
    }
    
    const n = nums.length+1;
    for(let i = 0; i< n; i++){
        if(!map[i]) return i
    }



};

// console.log(missingNumber([1]))
console.log(missingNumber([0]))
console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))