
import re

def validPalinDrome(string):
    if len(string) == 1 or string == "":
        return True
    
    string = re.sub("[^0-9a-zA-Z\s]+",'', string.replace(" ", "")).lower()
    left = 0
    right = len(string) - 1
    
    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1    
    return True
    
    
def validSubPalin(string, left, right):
    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1   
    return True
    
    
    
    
def almostPalinDrome(string):
    if len(string) == 1 or string == "":
        return True

    string = re.sub("[^0-9a-zA-Z\s]+",'', string.replace(" ", "")).lower()
    left = 0
    right = len(string)-1
    
    while left < right:
        if string[left] != string[right]:
            return validSubPalin(string, left+1, right) or validSubPalin(string, left, right-1)
        left += 1
        right -= 1
    
    return True



# xw
print(almostPalinDrome("race a car"))  
print(almostPalinDrome("abccdba")) 
print(almostPalinDrome("abcdefdba")) 
print(almostPalinDrome("a")) 
print(almostPalinDrome(""))  
print(almostPalinDrome("ab")) 