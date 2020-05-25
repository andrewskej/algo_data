/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // nums.forEach((n, index) => {
    //     while(n == nums[index +1]){
    //         nums.splice(index +1, 1);
    //     }
    // });

    for(let i = 0; i < nums.length; i++){
        while(nums[i] == nums[i+1]){
            nums.splice(nums[i+1],1)
        }
    }
    

    return nums.length;
};


// console.log(removeDuplicates([1,1,2])) //2 - length of cleaned array
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) //5 - length of cleaned array