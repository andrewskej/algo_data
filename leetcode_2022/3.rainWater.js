//given an array of integers representing an
//elevation map where the width of each bar is 1,
//return how much rainwater can be trapped.

const case1 = [0,1,0,2,1,0,3,1,0,1,2]  //8

function rainWaterBrute(arr){
    //currentWater = min(maxL, maxR) - currentHeight
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        let leftP = i;
        let rightP = i;
        let maxL = 0; 
        let maxR = 0;

        while(leftP >= 0){
            maxL = Math.max(maxL, arr[leftP]);
            leftP--;
        }

        while(rightP < arr.length){
            maxR = Math.max(maxR, arr[rightP]);
            rightP++;
        }

        const temp = Math.min(maxL, maxR) - arr[i];
        if(temp >= 0) {
            total += temp;
        }
    }

    return total
}

//time: O(n^2)
//space: O(1) -> all single calculations, not growing
console.log(rainWaterBrute(case1))


function rainWaterOptimal(arr){

//1. identify pointer with lesser value
//2. is this pointer value >= max on that side?
//3-a. if yes, update max on that side
//3-b. else get water for pointer value, add to total
//4. move pointer inwards
//5. repeat for other pointer
    let total = 0;
    let left = 0;
    let right = arr.length-1;
    let maxLeft = 0;
    let maxRight = 0;

    while(left < right){
        if(arr[left] <= arr[right]){
            if(arr[left] >= maxLeft){
                maxLeft = arr[left]
            } else {
                total += maxLeft - arr[left];
            }
            left++;
        } else {
            if(arr[right] >= maxRight){
                maxRight = arr[right]
            } else {
                total += maxRight - arr[right];
            }
            right--;
        }
    }

    return total;
}

//time: O(n)
//space: O(1)
console.log(rainWaterOptimal(case1))
