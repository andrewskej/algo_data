// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s, count = 0) {
   let balance = 0;
	
   for (let i = 0; i < s.length; i++) {
       s.charAt(i) === '(' || s.charAt(i) === '*' ? balance++ : balance--;
       // if ever balanced, not even wildcards can save this
       if (balance < 0) return false;
   }
   // if perfectly balanced, this is a good string, dont need wildcards
   if (balance === 0) return true;
   // reset balance
   balance = 0;
   
   for (let i = s.length - 1; i >= 0; i--) {
       s.charAt(i) === ')' || s.charAt(i) === '*' ? balance++ : balance--;
       // if ever balanced, not even wildcards can save this
       if (balance < 0) return false;
   }

   
   return true;
};

const s = '()'
const s2 = "*()(())*()(()()((()(()()*)(*(())((((((((()*)(()(*)"
const s3 =  "((*))"
// console.log(checkValidString(s))
console.log(checkValidString(s2))
// console.log(checkValidString(s3))