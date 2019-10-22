// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security system 
// connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

// Example 2:
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

/**
 @param {number[]} nums
 @return {number}
 */

//  //this doesn't work... we need tempSum to compare... let's start over
//  const rob = (nums) => {
//     let total = 0
//     let start
//     let leftBox = [] 
//     let rightBox = []
//     const biggest = nums.length ? nums.reduce((acc,cur)=> {return acc>cur?acc:cur}) : 0
//     start = nums.indexOf(biggest)

//     for(let i = start+2; i<nums.length; i+=2){
//         rightBox.push(nums[i])
//     }
//     for(let i = start-2; i>=0; i-=2){
//         leftBox.push(nums[i])
//     }

//     let fullBox = [...leftBox, biggest, ...rightBox]
//     total =  fullBox.reduce((acc,cur)=>{return acc+cur})
//     return total
// }

const nums1 = [1,2,3,1] // 4
const nums2 = [2,7,9,3,1] //12
const nums3 = [2,3,2] //4
const nums4 = [2,1,1,2]//4
const noNum = []


//Doesn't work as well - only option is not adjecent nums, not necessarily every other number...shit! :(
// const rob = (nums) => {
//     let tempSum1=0;
//     let tempSum2=0;
//     for(let i = 0; i<nums.length; i+=2){
//         tempSum1 += nums[i]
//     }

//     for(let i = 1; i<nums.length; i+=2){
//         tempSum2 += nums[i]
//     }

//     return Math.max(tempSum1, tempSum2)
// }


//Make this iterable and work ... 
const rob = (nums) => {
    let out = []
    let leftOvers = []
    let tempBig = 0;
    
    for(let i = 0; i<nums.length; i++){
        tempBig = (nums[i] > tempBig) ? nums[i] : tempBig
    }

    console.log(tempBig)
    out.push(nums[nums.indexOf(tempBig)-1])
    out.push(nums[nums.indexOf(tempBig)])
    out.push(nums[nums.indexOf(tempBig)+1])
    console.log(out)

    leftOvers = nums.filter(el => !out.includes(el))
    console.log('leftOvers: ', leftOvers);

    let temp2 = leftOvers.reduce((acc,cur)=> {return acc>cur?acc:cur})
    console.log(temp2)

    tempBig += temp2
    console.log('tempBig: ', tempBig);

    out.push(nums[nums.indexOf(temp2)])
    console.log(out)

    let leftOvers2 = nums.filter(el => !out.includes(el))
    console.log('leftOvers2: ', leftOvers2);

    if(leftOvers2.length){
        tempBig += leftOvers2[0]
    }

    console.log(tempBig)
    return tempBig;
}

// console.log(rob(nums1))
console.log(rob(nums2))
// console.log(rob(nums3))
// console.log(rob(nums4))
// console.log(rob(noNum))

 