// (/[^0-9]/g, "")

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false;
    if(x == 0) return 0
    if(x < 0) neg = true;
    
    x = parseInt(x.toString().replace(/[^0-9]/g, "").split('').reverse().join(''), 10)
    if (x > Math.pow(2, 31)) return 0;
    return neg ? 0 - x : x
};


var sample1 = 1534236469
console.log(reverse(sample1))
// 321

var sample2 = -123
console.log(reverse(sample2))
// -321

var sample3 = 120
console.log(reverse(sample3))
// 21
