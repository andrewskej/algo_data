let reverse = function(x){
    let rev = String(Math.abs(x)).split('').reverse().join('')
    if(x<0){
        rev = 0 -rev
    } 
    let answer = Number(rev)

    return Math.abs(answer) > Math.pow(2,31) ? 0 : answer
}

console.log(reverse(123))//321
console.log(reverse(-123))//-321
console.log(reverse(120))//21