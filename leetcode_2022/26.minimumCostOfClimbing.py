cost = [20,15,30,5]

def minCostClimbingStairs (cost):
    n = len(cost)
    dp = {}
    return min(minCost(n-1, cost, dp), minCost(n-2, cost, dp))


def minCost (i, cost, dp):
    if i < 0:
        return 0
    if i == 0 or i == 1:
        return cost[i]
    
    dp[i] = cost[i] + min(minCost(i-1, cost, dp), minCost(i-2, cost, dp))
    return dp[i]
    
print(minCostClimbingStairs(cost))

def minCostClimbingStairs2 (cost):
    n = len(cost)
    dpOne = cost[0]
    dpTwo = cost[1]
    
    for i in range(2, n):
        current = cost[i] + min(dpOne, dpTwo)
        dpOne = dpTwo
        dpTwo = current
    return min(dpOne, dpTwo)

print(minCostClimbingStairs2(cost))