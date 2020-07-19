def longestCommonPrefix(strs):
    result = ""
    for n in zip(*strs):
        if len(set(n)) == 1:
            result += n[0]
        else:
            return result
    return result


for i in zip(["flower","flow","flight"]):
    print(set(i))

# print(longestCommonPrefix(["flower","flow","flight"]))
# print(longestCommonPrefix(["car","zdwcar","car"]))
# print(longestCommonPrefix(["aa", "a"]))
# print(longestCommonPrefix([]))