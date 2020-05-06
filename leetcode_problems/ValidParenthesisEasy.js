// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){ //if leftside shows up, stack it up
            arr.push(s[i]);
        }else{  //if rightside shows up,
            if(arr[arr.length - 1] === map[s[i]]){    //if the last stacked leftside is pair(symmetrical)
                arr.pop();                            //that pair is cleared
            }else{ 
                return false;                         //if this shows up once, good chance that its not valid...
            }
        }
    }
    return arr.length === 0;

};

const s1 = "()"
const s2 = "()[]{}"
const s3 = "(]"
const s4 = "([)]"
const s5 = "{[]}"

console.log(isValid(s1)) //t
console.log(isValid(s2)) //t
console.log(isValid(s3)) //f
console.log(isValid(s4)) //f  <-..
console.log(isValid(s5)) //t