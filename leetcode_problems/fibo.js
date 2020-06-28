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


console.log(fibo_iterative(8))
console.log(fibo_recursive(8))

