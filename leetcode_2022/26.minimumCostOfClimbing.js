//for a given staircase, the i-th step is assigned a non-negative cost indicated
//by a cost array.
//once you pay the cost for a step, ou can either climb one or two steps.
//Find the minimum cost to reach the top of the staircase. 
//Your first step can either be the fist or second step.

const cost = [20,15,30,5]

const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  return Math.min(minCost(n-1, cost), minCost(n-2, cost))
}

const minCost = (i, cost) => {
  if (i < 0 )return 0;
  if (i === 0 || i === 1) return cost[i];
  return cost[i] + Math.min(minCost(i-1, cost), minCost(i-2, cost))
}

console.log(minCostClimbingStairs(cost))