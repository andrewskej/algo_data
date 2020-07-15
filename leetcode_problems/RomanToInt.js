/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const match = {};
    
    const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const integer = [1, 5, 10, 50, 100, 500, 1000];
    
    for(let i = 0; i<roman.length; i++){
        match[roman[i]] = integer[i]; 
    }
    
    const transform = s.split('').reverse().map(letter => {
        return match[letter]
    })
    
    for(let i = 1; i<transform.length; i++){
        if(transform[i] === 1){
            if(transform[i-1] === 5 || transform[i-1] === 10){
                transform[i] = -1;
            }
        }
        if(transform[i] === 10){
            if(transform[i-1] === 50 || transform[i-1] === 100){
                transform[i] = -10;
            }
        }
        if(transform[i] === 100){
            if(transform[i-1] === 500 || transform[i-1] === 1000){
                transform[i] = -100;
            }
        }
    }
    
    const result = transform.reverse().reduce((acc,cur) => {
        return acc+cur;
    })

    return result
    
    //if I + V means -1 + 5
    //if I + X means -1 + 10
    //if X + L means -10 + 50
    //if X + C means -10 + 100
    //if C + D means -100 + 500
    //if C + M means -100 + 1000
    
};



//leetcode solution
const romanToInt = s => {
    if (!s || s.length === 0) {
      return 0;
    }
  
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  
    let i = s.length - 1;
    let result = map.get(s[i]);
  
    while (i > 0) {
      const curr = map.get(s[i]);
      const prev = map.get(s[i - 1]);
  
      if (prev >= curr) {
        result += prev;
      } else {
        result -= prev;
      }
  
      i--;
    }
  
    return result;
  };