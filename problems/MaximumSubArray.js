// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


//time limit exceeded...
var maxSubArray = function(nums) {
    let biggest = nums[0];
    let addNum = 1;

    function sumCheck(biggest){
        while(addNum <= nums.length){

            for(let i = 0; i<nums.length; i++){
                let tempArr = nums.slice(i, i+addNum)
                let tempSum = tempArr.reduce((acc,cur)=> acc+ cur)
                biggest = tempSum > biggest ? tempSum : biggest;
            }
            addNum++;
            return sumCheck(biggest)
        }
        
        if(addNum > nums.length){
            return biggest;
        }
    }

    return sumCheck(biggest)
};


const testArr = [-2,1,-3,4,-1,2,1,-5,4]
// const testArr = [-1,0]

console.log(maxSubArray(testArr))



function maxSubArray2(arr) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < arr.length; i++) {
      prev = Math.max(prev + arr[i], arr[i]);
      max = Math.max(max, prev);
    }
    return max;
  }

  console.log(maxSubArray2(testArr))



  var maxSubArray3 = function(nums) {
    let max = -Infinity;
    let currentMax = 0;
    
    for(let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max);               
    }
    
    return max;
};

console.log(maxSubArray3(testArr))
