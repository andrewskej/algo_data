// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */


// Iterate the numbers and count the number of 0s and 1s
// Save the first appearance of count in a hash map as hash = {count:index}
// When the same count appears again at i, it means between hash[count] to i, the number of 0s and 1s evened out and it's back to its previous level.

var findMaxLength = function(nums) {
    let hash = {0:-1};
    let count = 0; //this is also key for hashmap
    let maxLength = 0;

    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 0) count--;
        else count++;

        console.log(count)
        console.log(hash[count])
        console.log(hash[-1])

        if (hash[count]!=null){ //update maxLength  when there's right value for the key
            maxLength = Math.max(maxLength, i - hash[count]); //i being current head, hash[count] being tail
            console.log(maxLength)
        }
        else { //update hashmap - if there's no right value for the key(count), current index becomes one
            console.log(i)
            hash[count] = i;
        }
        console.table(hash)
    }
    return maxLength;

};

const nums1 = [0,1]
const nums2 = [0,1,0]
const nums3 = [0,1,0,0,1,1,0]
// const nums3 = [0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0]
//[0,1,0,0,0,1,0,1,1]

// console.log(findMaxLength(nums1))
// console.log(findMaxLength(nums2))
console.log(findMaxLength(nums3))


//easier to understand
// if value is 0, we subtract 1, else we add 1 to our count variable.
// if count === 0 at current index, we update our maxLength variable as i+1. Since we are dealing with indexes (which start from 0), we add 1 to the current index and return because we are asked to return max length of continuous sub array.
// we check if our map contains the value of count so far. If current count exists in our map we update maxLength.
// return maxLength

var findMaxLength2 = function(nums) {
    let maxLength = 0; //initialize max length of continuous sub array to zero
    let map = new Map(); //initialize map to store if count 
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        nums[i] === 0 ? count -=1 : count += 1  

        if(count === 0) //this is when reached the equal number of 0 and 1
    		maxLength = i+1; 
        if(map.has(count)) { //if it is not the first time you reach that count
            maxLength = Math.max(maxLength, i-map.get(count))
        } else { //first time you reach that down or up, insert new val to map
            map.set(count, i);
        }
    }
    return maxLength;
};

const test = [0,0,1,0,0,1,0,0,1,1,1]
console.log(findMaxLength2(nums3))
console.log(findMaxLength(test))