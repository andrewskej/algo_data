// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let temp = [];
    for(let i = 0; i <= text1.length; i++) {
        temp.push(new Array(text2.length + 1).fill(0));
    }


    for(let i = 1; i < temp.length; i++) {
        console.log(i)
        for(let j = 1; j < temp[0].length; j++) {
            console.log(j)
            temp[i][j] =  (text1[i-1] === text2[j-1]) 
                            ? temp[i-1][j-1] + 1 
                            : Math.max(temp[i-1][j], temp[i][j-1]);
        }
    }


    return  temp[text1.length][text2.length];
};




var text1 = 'abcde'
var text2 = 'ace'

console.log(longestCommonSubsequence(text1, text2))