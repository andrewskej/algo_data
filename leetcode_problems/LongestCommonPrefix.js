// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //if empty given, return empty
    if(strs.length === 0) return "";
    //pick the first word of the list
    const first = strs[0]

    //for loop on the first word to get each char
    for(let i = 0; i < first.length; i++){
        //for loop on the list
        for(let j = 1; j < strs.length; j++){
            const other = strs[j] //rest of the words

            console.log(other[i], first[i])

            if(other[i] !== first[i]){ //if they begin to unmatch
                return other.slice(0,i)  //cut the unmatching point and return the matching part.
            }
        }
    }

    return first;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["car","zdwcar","car"]))
console.log(longestCommonPrefix(["aa", "aa"]))
console.log(longestCommonPrefix([]))