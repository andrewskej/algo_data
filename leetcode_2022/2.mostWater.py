
def mostWaterBrute(arr):
    maxArea = 0
    
    for index1 in range(0, len(arr)):
        for index2 in range(1, len(arr)):
            height = min(arr[index1], arr[index2])
            width = index2 - index1
            tempMaxArea = height * width
            maxArea = max(maxArea, tempMaxArea)

    print("maxArea", maxArea)
    return maxArea


array = [1,8,6,2,9,4]
expected = 24  # width:3 (index 5-2) * 8

mostWaterBrute(array)    

def mostWaterOptimal(arr):
    print("optimal")
    maxArea = 0
    leftIndex = 0
    rightIndex = len(arr) - 1
    
    while(leftIndex < rightIndex):
        width = rightIndex - leftIndex
        height = min(arr[leftIndex], arr[rightIndex])
        tempMaxArea = width * height
        maxArea = max(tempMaxArea, maxArea)
        
        if arr[leftIndex] <= arr[rightIndex]:
            leftIndex+=1
        else:
            rightIndex-=1
    
    print(maxArea)
    return maxArea
    
    
    
    
print(mostWaterOptimal(array) == expected)