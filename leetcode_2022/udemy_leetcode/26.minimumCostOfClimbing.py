cost = [20,15,30,5]

def minCostClimbingStairs (cost):
    
    def find_cost (i, memo = {}):
        if i in memo:
            return memo[i]
        if i <= 1:
            return cost[i]
        memo[i] = cost[i] + min(find_cost(i - 1, memo), find_cost(i - 2, memo))
        return memo[i]
    
    length = len(cost)
    return min(find_cost(length - 1), find_cost(length - 2))

    
print(minCostClimbingStairs(cost))

def minCostClimbingStairs2 (cost):
    dpOne = cost[0]
    dpTwo = cost[1]
    
    for i in range(2, len(cost)):
        current = cost[i] + min(dpOne, dpTwo)
        dpOne = dpTwo
        dpTwo = current
    return min(dpOne, dpTwo)

print(minCostClimbingStairs2(cost))