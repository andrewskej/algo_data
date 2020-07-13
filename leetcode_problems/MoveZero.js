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
    var pos = 0  //this counts zeros + 1
    for(let i = 0; i < nums.length; i++){
        if( nums[i] !== 0){  //if not zero, 
            nums[pos] =  nums[i];   
            pos++;
        }
        console.log(nums)
    }

    //pos is the position where second loop starts from -> meaning that after pos, they are extra nums to be replaced by 0
    for(let i = pos; i < nums.length; i++){
        nums[i] = 0
    }
    console.log(nums)
}


// const input = [4,1,2,3,12]
const input = [0,1,0,3,12]
moveZero(input)