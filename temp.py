
def fibo(n, memo = {1:1, 2:1}):
    if n == 0:
        return 0
    if n not in memo:
        memo[n] = fibo(n-1) + fibo(n-2)
    return memo[n]

print(fibo(15))


def fibo2(n):
    a, b = 1, 0
    for i in range(n):
        a, b = b, a + b
    return b

print(fibo2(15))

