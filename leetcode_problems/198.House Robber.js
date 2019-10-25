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


//one liner.....ha
const rob = (nums) => {
    let p = 0
    return nums.reduce((acc, cur) => Math.max(p + cur, p = acc),0)
}

console.log(rob(nums1))
console.log(rob(nums2))
console.log(rob(nums3))
console.log(rob(nums4))
console.log(rob(noNum))

 