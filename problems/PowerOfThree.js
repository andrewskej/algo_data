/**
 * @param {number} n
 * @return {boolean}
 */

// solve with no loop / no recursion?
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    return isPowerOfThree(n/3);

};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(14));

console.log(Math.log10(27))
console.log(Math.log10(3))

var isPowerOfThree = function(n) {
    console.log(Math.log10(n) / Math.log10(3))
    
    return Number.isInteger(Math.log10(n) / Math.log10(3))
};


console.log(Math.log10(100))
console.log(Math.log(8)/Math.log(2))

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(14));


console.log(Math.log10(3))
console.log(Math.log(3))
console.log(Math.log(4))




