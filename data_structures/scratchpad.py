
def fibo(n, memo = {1:1, 2:1}):
    if n == 0:
        return 0
    if n not in memo:
        memo[n] = fibo(n-1) + fibo(n-2)
    return memo[n]

# print(fibo(15))


def fibo2(n):
    a, b = 1, 0
    for i in range(n):
        a, b = b, a + b
    return b

# print(fibo2(15))


class Solution:
    def reverse(self,x:int)->int:
        if x < 0:
            x = abs(x)
        x = int(str(x)[::-1])
        compare = pow(2, 31)
        if x > compare:
            return 0
        else:
            return x

#IDK if it works this way
# print(Solution.reverse(Solution,123))
# print(Solution.reverse(Solution,-123))
# print(Solution.reverse(Solution,120))



def majEl(nums):
    return sorted(nums)[len(nums)//2]


# print(majEl([2,3,3]))


