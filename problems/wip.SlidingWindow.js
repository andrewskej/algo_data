const sentence = 'ADOBECODEBANC'
const target2 = 'ABC'

function shortSubStr(Sentence, Target){
    let result = [-Infinity, Infinity]; //doesn't necessarily have to be Infinity, right? but only if you're sure that answer is there
    let slow = 0, fast = 0;
    let missing = Target.length
    let counter = {}
    for(let i = 0; i<Target.length; i++){
        counter[Target[i]] = 0;
    }

    for(fast = 0; fast < Sentence.length; fast++){
        if(Sentence[fast] in counter){
            if(counter[Sentence[fast]] === 0){
                missing -= 1; 
            }
            counter[Sentence[fast]] += 1;
        }
        while(missing == 0){
            //compare current slow&fast and result, update with shorter ones
            if( (fast-slow) < (result[1]-result[0]) ){
                result = [slow, fast]
            }
            
            if(Sentence[slow] in counter){
                //this order matters...! 
                counter[Sentence[slow]] -= 1;

                if(counter[Sentence[slow]] === 0){
                    missing += 1;  //this will break while loop
                }
            }
            //shrink window
            slow += 1;
        }
    }
    return Sentence.slice(result[0], result[1]+1)
}

console.log(shortSubStr(sentence, target2)) 
console.log(shortSubStr('aa','aa'))
console.log(shortSubStr('bbaa','aba'))


//first version cannot process duplicated letters in target...

function shortSubStrVer2(s,t){
    let start = 0;
    let minWindow = '';
    let currWindow = '';
    
    // dict is a hash of all the characters in t and their counts
    const dict = {};
    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i);
        dict[char] = dict[char] || 0;
        dict[char]++;
    }
    
    console.log(dict)
    // count keeps track of number of characters to be matched
    let count = Object.keys(dict).length;

    // Expanding the window on the right
    for (let end = 0; end < s.length; end++) {
        // Update the characters in the current window
        const char = s.charAt(end);
        currWindow += char;
        
        // If current character is a character in T, decrement character count
        if (dict[char] !== undefined) {
            dict[char]--;
        }
        // If character count is 0, we have matched that character completely
        if (dict[char] === 0) {
            count--;
        }
        
        // If all characters have been matched, we can start shrinking the window
        // to find the minimum window
        if (count === 0) {
            while (count === 0) {
                // Update minWindow if currWindow is shorter
                if (!minWindow || currWindow.length < minWindow.length) {
                    minWindow = currWindow;
                }
                
                // As we start shrinking the window from the left, add back the
                // character to dict if it's one of the characters in T
                const char = s.charAt(start);
                if (dict[char] !== undefined) {
                    dict[char]++;
                }
                // This was previously 0. If shrinking the window results in
                // this being greater than 0, we have to increment count
                // (i.e. a previously matched character has been added back)
                if (dict[char] > 0) {
                    count++;
                }
                currWindow = currWindow.slice(1);
                start++;
            }
        } 
    }
    return minWindow;
}

console.log(shortSubStrVer2('ADOBECODEBANC','ABC'))
