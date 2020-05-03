// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false; 
    var r = ransomNote.split('');
    var m = magazine.split('');
    var cnt = 0;

    r.forEach((item, index) => {
        if(m.includes(item)){
            cnt++
            m.splice(m.indexOf(item),1)
        }
    })

    return cnt == r.length;
};


var r = "bg"
var m = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"

// var r = "fihjjjjei"
// var m = "hjibagacbhadfaefdjaeaebgi"

var r = "aa"
var m = "aab"

// var r = "abb"
// var m = "bb"

console.log(canConstruct(r, m))