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
    const resultBox = new Array(text1.length+1).fill(0).map(() => new Array(text2.length+1).fill(0));
    const width = resultBox.length;
    const height = resultBox[0].length;

    for(let i = 1; i < width; i++) {

        for(let j = 1; j < height; j++) {
            const [text1First, text2First] = [text1[i-1], text2[j-1]];
            resultBox[i][j] =  (text1First === text2First)
                                ? resultBox[i-1][j-1] + 1 
                                : Math.max(resultBox[i-1][j], resultBox[i][j-1]);
        }
    }

    return  resultBox[text1.length][text2.length];
};




var text1 = 'acza'
var text2 = 'daz'

console.log(longestCommonSubsequence(text1, text2))