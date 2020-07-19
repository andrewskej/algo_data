// Given two strings s1 and s2, write a function to return true if 
// s2 contains the permutation of s1. In other words, 
// one of the first string's permutations is the substring of the second string.

// Example 1:
// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input:s1= "ab" s2 = "eidboaoo"
// Output: False
 
// Note:
// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
       
    function getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);  //which is 97
    }
    
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

	// add s1 to an array - map chars to indexes starting from 0
	// create a frequency array
    for(let i = 0; i < s1.length; i++){
        arr1[getIndex(s1[i])]++;
    }
    
    for (let i = 0; i < s2.length; i++) {
        arr2[getIndex(s2[i])]++;
        
        // reset changes  ... this part is important
        if (i >= s1.length) {
            arr2[getIndex(s2[i - s1.length])]--;
        }
        
        if (arr1.toString() === arr2.toString()) {
            return true;
        }
    }
    
    return false;
};  


let s1 = "ab"; let s2 = "eidbaabooo";
console.log(checkInclusion(s1, s2));

// let s3 = "ab"; let s4 = "eidbxaoo";
// console.log(checkInclusion(s3, s4));