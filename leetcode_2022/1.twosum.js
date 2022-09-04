/* two sum again */
// given an array of integers, 
// return the indices of the two numbers 
// that add up to a given target.

// all positive? any duplicates?
// is it possible that 'no answer' case? return what then?

// O(n^2)
function twoSumBrute(nums, target){
    for(let i = 0; i < nums.length; i++){
        
        const numberToFind = target - nums[i]

        for(let j = i+1; j < nums.length; j++){
            if(numberToFind === nums[j]){
                return [i, j]
            }
        }

    }
    return null //if not found
}


console.log(twoSumBrute([1,3,7,9,2], 11))
console.log(twoSumBrute([1,3,7,9,2], 25)) //null
console.log(twoSumBrute([], 1))    //null
console.log(twoSumBrute([5], 5))   //null
console.log(twoSumBrute([1,6], 7))

//time: O(n), space: O(n)
function twoSumUdemy(nums, target){
    const record = {}

    for(let i = 0; i < nums.length; i++){
        const numberGiven = nums[i]
        
        if (numberGiven in record){
            return [record[numberGiven], i]  
        } else {
            const numberNeed = target - numberGiven
            record[numberNeed] = i
        }
    }
    return null
}


console.log(twoSumUdemy([1,3,7,9,2], 11))
// console.log(twoSumUdemy([1,3,7,9,2], 25)) //null
// console.log(twoSumUdemy([], 1))    //null
// console.log(twoSumUdemy([5], 5))   //null
// console.log(twoSumUdemy([1,6], 7))
// console.log(twoSumUdemy([3,3], 6))