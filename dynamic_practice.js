//plain old recursion..not very effective
function fibo(n){
    if(n<=2) return 1
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6))

//memoization to skip repetitive calculation
function fibo2(n, memo=[undefined,1,1]){
    if(memo[n]!==undefined) return memo[n]

    if(n<=2) return 1;
    let res = fibo2(n-1, memo) + fibo2(n-2, memo)
    memo[n] = res
    console.log(memo)
    return res;
}

console.log(fibo2(25))


//tabulation, for better space complexity (time complexity is same O(n))
function fibo3(n){
    if(n<=2) return 1;

    let fibNums = [0,1,1]
    for(let i=3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }

    return fibNums[n]
}

console.log(fibo3(28))