/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true;

    s = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "")

    var start = 0;
    var end = s.length -1;
    
    while(start<end){
        if(s[start] !== s[end]){
            return false;
        }else{
            start++;
            end--;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race, a car"))


