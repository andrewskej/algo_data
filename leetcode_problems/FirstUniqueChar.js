// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var counter = {}; //make a counter
    var given = s.split(''); //create an array out of given sentence

    //fill the counter with 0 for each letter
    for(var i = 0; i<given.length; i++){
        counter[given[i]] = 0;
    }

    //fill up the counter with actual number of letters
    for(var i = 0; i<given.length; i++){
        counter[given[i]]++;
    }

    //prepare an empty array
    var result = [];
    //get the keys of counter object that has value of 1
    for(var key in counter){
        if(counter[key] == 1){
            result.push(key)
        }
    }

    return (result.length > 0) ? given.indexOf(result[0]) : -1;
};

const s1 = 'leetcode';
const s2 = 'loveleetcode';
console.log(firstUniqChar(s1))
console.log(firstUniqChar(s2))