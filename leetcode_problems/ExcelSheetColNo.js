//prepare a hash table that has 1:1 match of number and alphabet.

//split given s to disect. run a loop to replace alphabet to equivalent number, use the hash table.

//reverse them to make it easy. loop it and add proper value to its diits.  Math.pow(26, i) will do, as this is '26-decimal' numbers.

//reverse it back, and add up each digit. reduce() will make it easy. return the result.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    //google up to find these two automated
    const arr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    
    const match = {}
    for(let i = 0; i< arr1.length; i++){
        match[arr1[i]] = arr2[i]; 
    }

    
    const transform = s.split('').map(letter => {
        return letter = match[letter];
    })
    
    
    const precalculation = transform.reverse().map((digit, i)=> {
        return digit * Math.pow(26, i)   
    }).reverse();
    
    
    const result = precalculation.reduce((acc,cur) => {
        return acc + cur;
    });
    
    
    return result;
    
};
