const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


const getPartitionIdx = (arr, left, right) => {
    const pivotElement = arr[right]
    let partitionIdx = left
    
    for(let j = left; j < right; j++){
        if(arr[j] < pivotElement){
            swap(arr, partitionIdx, j)
            partitionIdx++
        }
    }

    swap(arr, partitionIdx, right)
    return partitionIdx
}


const quickSort = (arr, left, right) => {
    if(left < right){
        const partitionIdx = getPartitionIdx(arr, left, right)
        quickSort(arr, left, partitionIdx - 1)
        quickSort(arr, partitionIdx + 1, right)
    }
}


// Hoare's quickSelect algorithm
// Find kth smallest element in an unordered list
const quickSelect = (arr, left, right, idxToFind) => {
    if (left < right){
        const partitionIdx = getPartitionIdx(arr, left, right)
        if (partitionIdx == idxToFind) {
            return arr[partitionIdx]
        } else if (idxToFind < partitionIdx) {
            return quickSelect(arr, left, partitionIdx - 1, idxToFind)
        } else {
            return quickSelect(arr, partitionIdx + 1, right, idxToFind)
        }
    }
}



const kstLargest = (arr, k) => {
    const indexToFind = arr.length - k
    quickSort(arr, 0, arr.length-1)
    // quickSelect(arr, 0, arr.length-1, indexToFind)
    return arr[indexToFind]
}



console.log(kstLargest([5,3,1,6,4,2],2))

// time complexity: O(N)
// divide and conquer technique
// util functions: swap, quickSort (or quickSelect), getPartitionIdx