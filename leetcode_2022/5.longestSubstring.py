# def longestSubstrBrute(string):
#     seen = {}
#     count = 0
#     lp = 0
#     rp = 0
    
   
    
# longestSubstrBrute("abccabb")
# longestSubstrBrute("cccccc")
# longestSubstrBrute("") 


def longestSubstrOptimal(string):
    if len(string) <= 1:
        return len(string)
    
    left, longest, seen = 0, 0, {}
    
    for right, char in enumerate(string):
        if char in seen and seen[char] >= left:
            left = seen[char] + 1
        seen[char] = right
        longest = max(longest, right - left + 1)
    return longest
        


print(longestSubstrOptimal("abccabb"))
print(longestSubstrOptimal("cccccc"))
print(longestSubstrOptimal(""))
print(longestSubstrOptimal("pwwkew"))