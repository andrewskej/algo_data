import math

def binSearch(arr, target, left, right):
    while left <= right:
        mid = math.floor((left + right) / 2)
        foundVal = arr[mid]
        
        if foundVal == target:
            return mid
        elif foundVal < target:
            left = mid + 1
        else:
            right = mid -1

    return -1


def startAndEnd(arr, target):
    if len(arr) == 0:
        return [-1, -1]
    
    firstPos = binSearch(arr, target, 0, len(arr) - 1)
    if firstPos == -1:
        return [-1, -1]
    
    startPos = firstPos
    endPos = firstPos
    temp1 = 0
    temp2 = 0
    
    while startPos != -1:
        temp1 = startPos
        startPos = binSearch(arr, target, 0, startPos - 1)
    startPos = temp1
    
    while endPos != -1: 
        temp2 = endPos
        endPos = binSearch(arr, target, endPos + 1, len(arr) - 1)
    endPos = temp2
    
    return [startPos, endPos]



print(startAndEnd([1,3,3,5,5,5,8,9], 5))

print(startAndEnd([1,2,3,4,5,6], 4))

print(startAndEnd([1,2,3,4,5,6], 9))

print(startAndEnd([], 9))