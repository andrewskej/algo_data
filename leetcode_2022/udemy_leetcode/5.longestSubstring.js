function longestSubstrBrute(string){
    if(string.length <= 1) return string.length 
    let longest = 0

    for(let left = 0; left < string.length; left++){
        let seen = {}
        let currentLongest = 0

        for(let right = left; right < string.length; right++){
            if(!seen[string[right]]){
                currentLongest++
                seen[string[right]] = true
                longest = Math.max(longest, currentLongest)
            } else {
                break
            }
        }
    }
    return longest
}

console.log(longestSubstrBrute("abccabb"))
console.log(longestSubstrBrute("cccccc"))
console.log(longestSubstrBrute(""))
console.log(longestSubstrBrute("pwwkew"))


function longestSubstrOptimal(string){
    if(string.length <= 1) return string.length;

    let longest = 0;
    let left = 0;
    const record = {};

    for(let right = 0; right < string.length; right++){
        const current = string[right];
        const prevSeen = record[current];

        if(prevSeen >= left){
            left = prevSeen + 1;
        }

        record[current] = right;
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}

console.log(longestSubstrOptimal("abccabb"))
console.log(longestSubstrOptimal("cccccc"))
console.log(longestSubstrOptimal(""))
console.log(longestSubstrOptimal("pwwkew"))
