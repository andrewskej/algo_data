
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let map = {}
    for(let i = 0; i<s.length; i++){
        if(map[s[i]] != null){
            map[s[i]]+=1;
        }else{
            map[s[i]] = 1;
        }   
    }
  
    for(let i = 0; i<t.length; i++){
        if(map[t[i]] != null){
            map[t[i]]-=1;
        }  
    }

    for(let k in map){
        if(map[k] > 0) return false;
    }

    return true;
};

// console.log(isAnagram('anagram', 'margana'))
console.log(isAnagram('aacc', 'ccac'))