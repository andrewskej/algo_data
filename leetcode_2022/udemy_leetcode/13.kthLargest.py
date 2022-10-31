def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


def getPartitionIdx(arr, left, right):
    pivotElement = arr[right]
    partitionIdx = left
    
    for j in range(left, right):
        if arr[j] < pivotElement:
            swap(arr, partitionIdx, j)
            partitionIdx += 1
            
    swap(arr, partitionIdx, right)
    return partitionIdx
    

def quickSort(arr, left, right):
    if left < right:
        partitionIdx = getPartitionIdx(arr, left, right)
        quickSort(arr, left, partitionIdx - 1) #leftpart
        quickSort(arr, partitionIdx + 1, right) #rightpart
        
        

def kstLargest(arr, k):
    indexToFind = len(arr) - k
    #sort
    quickSort(arr, 0, len(arr)-1)
    #return 
    return arr[indexToFind]



print(kstLargest([5,3,1,6,4,2],2))
