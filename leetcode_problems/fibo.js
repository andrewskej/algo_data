function fibo_recursive(num){
    //0 1 1 2 3 5 8 13 21
    if(num < 2) return num;
    return fibo_recursive(num-1) + fibo_recursive(num-2)
}


function fibo_iterative(num){
    let arr = [0, 1]
    for(let i = 2; i < num+1; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[num]
}


function fibo_memo(){ //O(n), when other fibo is O(n^2)
    let cache = {};
    //closure by returning function, 
    //so it can access to let cache 
    //without resetting it
    return function fib(n){ 
        if(n in cache){
            return cache[n]
        }else{
            if(n < 2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2);
                // console.log(cache)
                return cache[n]
            }
        }
    }
}

// console.log(fibo_iterative(8))
// console.log(fibo_recursive(8))
const fibo = fibo_memo();
console.log(fibo(12));