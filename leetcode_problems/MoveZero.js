//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]

//이게 왜 인정이 안돼? 시펄
// var moveZero = (nums) => {
//     for(let i =0; i<nums.length; i++){
//         if(nums[i] == 0){
//            nums = nums.slice(0, i).concat(nums.slice(i+1,nums.length))
//            nums.push(0)
//         }
//         console.log(nums)
//     }
// }

var moveZero = (nums) => {
    var pos = 0
    for(let i =0; i<nums.length; i++){
        if( nums[i] !== 0){
            nums[pos] =  nums[i];
            pos++;
        }
        console.log(nums)
    }

    for(let i = pos; i<nums.length; i++){
        nums[i] = 0
    }
    console.log(nums)
}


// const input = [0,1,0,3,12]
const input = [0,1,0,3,12]
console.log(moveZero(input))
