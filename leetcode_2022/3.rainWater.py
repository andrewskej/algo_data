# //given an array of integers representing an
# //elevation map where the width of each bar is 1,
# //return how much rainwater can be trapped.

#this one needs review...

case1 = [0,1,0,2,1,0,3,1,0,1,2]  

def rainWaterBrute(arr):
    total = 0
    
    for i in range(len(arr)):
        leftP = i
        rightP = i
        maxL = 0
        maxR = 0
        
        while leftP >= 0:
            maxL = max(maxL, arr[leftP])
            leftP -= 1
        
        while rightP < len(arr):
            maxR = max(maxR, arr[rightP])
            rightP += 1
            
        temp = min(maxL, maxR) - arr[i]
        if temp >= 0:
            total += temp
        
    return total    


print(rainWaterBrute(case1))

def rainWaterOptimal(arr):
    left = 0
    right = len(arr) - 1
    maxLeft = 0
    maxRight = 0
    total = 0
    
    while left < right:
        if arr[left] <= arr[right]:
            if arr[left] >= maxLeft:
                maxLeft = arr[left]
            else:
                total += maxLeft - arr[left]
            left+=1
        else:
            if arr[right] >= maxRight:
                maxRight = arr[right]
            else:
                total += maxRight - arr[right]
            right-=1
            
    print("total:", total)
    return total

rainWaterOptimal(case1)