function mostWaterBrute(arr){
    let maxArea = 0

    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            const height = Math.min(arr[i], arr[j])
            const width = j - i
            const tempMaxArea = height * width
            maxArea = Math.max(maxArea, tempMaxArea)
        }
    }

    
    console.log(maxArea)
    return maxArea
}


//time: O(n^2)
//space: O(1)

const array = [1,8,6,2,9,4]
const expected = 24  // width:3 (index 5-2) * 8
console.log(mostWaterBrute(array) == expected)


function mostWaterOptimal(arr){
    
    //use two Shifting pointers...
    let maxArea = 0
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex < rightIndex){
        const width = rightIndex - leftIndex
        const height = Math.min(arr[leftIndex], arr[rightIndex])
        const tempMaxArea = width * height
        maxArea = Math.max(tempMaxArea, maxArea)

        //move the smaller side, otherwise it would only grow smaller.
        if(arr[leftIndex] <= arr[rightIndex]){
            leftIndex++
        } else {
            rightIndex--
        }
    }

    console.log(maxArea)
    return maxArea
}

//time: O(n)
console.log(mostWaterOptimal(array) == expected)
