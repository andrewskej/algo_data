# Two sum
# given an array of integers, 
# return the indices of the two numbers 
# that add up to a given target.

def twoSum(nums, target):
    record = {}
    
    for i in range(len(nums)):
        numberGiven = nums[i]
        
        if numberGiven in record:
            return [record[numberGiven], i]
        else:
            numberNeed = target - numberGiven
            record[numberNeed] = i 
        
    return None

print(twoSum([1,3,7,9,2], 11))
print(twoSum([1,3,7,9,2], 25)) 
print(twoSum([], 1))    
print(twoSum([5], 5))   
print(twoSum([1,6], 7))
print(twoSum([3,3], 6))

