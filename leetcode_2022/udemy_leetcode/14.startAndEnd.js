// given an array of integers in asc order,
// return the starting / ending index of a 
// given target value in an array. i.e. [x, y]
// if not found, return -1

const binarySearch = (arr, target, left, right) => {
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        const foundVal = arr[mid]

        if(foundVal === target){
            return mid
        } else if (foundVal < target){
            left = mid + 1
        } else {
            right = mid -1
        }
    }
    
    return -1
}


function startAndEnd(arr, target){ 
    if(arr.length === 0 ) return [-1, -1]

    const firstPos = binarySearch(arr, target, 0, arr.length -1)
    if(firstPos === -1) return [-1, -1]

    let startPos = firstPos
    let endPos = firstPos
    let temp1, temp2

    while(startPos !== -1){
        temp1 = startPos
        startPos = binarySearch(arr, target, 0, startPos - 1)
    }
    startPos = temp1


    while(endPos !== -1){
        temp2 = endPos
        endPos = binarySearch(arr, target, endPos + 1, arr.length - 1)
    }
    endPos = temp2

    return [startPos, endPos]
}

//space: O(1), time: O(log n)

//[3, 5]
console.log(startAndEnd([1,3,3,5,5,5,8,9], 5))

//[3, 3]
console.log(startAndEnd([1,2,3,4,5,6], 4))

//[-1, -1]
console.log(startAndEnd([1,2,3,4,5,6], 9))

//[-1, -1]
console.log(startAndEnd([], 9))