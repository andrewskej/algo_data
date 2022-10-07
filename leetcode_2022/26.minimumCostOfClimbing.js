//for a given staircase, the i-th step is assigned a non-negative cost indicated
//by a cost array.
//once you pay the cost for a step, ou can either climb one or two steps.
//Find the minimum cost to reach the top of the staircase. 
//Your first step can either be the fist or second step.

const cost = [20,15,30,5]

const minCostClimbingStairs = (cost) => {
  const n = cost.length;
  const dp = [];
  return Math.min(minCost(n-1, cost, dp), minCost(n-2, cost, dp))
}

const minCostClimbingStairs2 = (cost) => {
  const n = cost.length;
  const dp = [];
  for(let i = 0; i < n; i++){
    if(i < 2){
      dp[i] = cost[i];
    } else {
      dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }
  }
  return Math.min(dp[n-1], dp[n-2]);
}

console.log(minCostClimbingStairs2(cost))

const minCost = (i, cost, dp) => {
  if (i < 0 )return 0;
  if (i === 0 || i === 1) return cost[i];
  if (dp[i] != undefined) return dp[i];
  
  dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp))
  return dp[i]
}

console.log(minCostClimbingStairs(cost))