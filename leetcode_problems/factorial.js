function factorialRecursive(number){
    if(number < 1) return 0
    if(number === 2) return 2;
    return number * factorialRecursive(number -1)
}

function factorialIterative(number){
    if(number < 1) return 0
    let answer = 1;
    for(let i = number; i > 0; i--){
        answer *= i;
    }
    return answer;
}

console.log(factorialRecursive(4))

console.log(factorialIterative(4))