/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {

//practice little more to completely think out loud from the scratch for each line.............!!!!!!!!!!!!!!!!!!
    const checker = {}

    for(let num of nums){
        let complement = target - num;  //get complement number that sums up to target with num

        if(complement in checker){   
            return [nums.indexOf(num), checker[complement]].sort() 
        }else{
            checker[num] = nums.indexOf(num);   //for next time we check the checker with the complement
        }
        console.log(checker)
    }
    
};



console.log(twoSum([1,2,10,3,5,7], 9))