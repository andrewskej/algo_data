function validPalinDrome(string){
    string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    if(string === "") return true
    if(string.length === 1) return true

    let left = 0
    let right = string.length -1

    while(left < right){
        if(string[left] === string[right]){
            left++
            right--
        } else {
            return false
        }
    }
    return true
    
    // or just
    // return string === string.split('').reverse().join('')
}

const validSubPalin = (string, left, right) => {
    while(left < right){
        if(string[left] != string[right]){
            return false;
        }
        left++
        right--
    }
    return true
}

//almost palin : when it is palin by removing one letter
//time: O(n)
//space: O(1)
function almostPalinDrome(string){
    string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    if(string === "") return true
    if(string.length === 1) return true

    let left = 0
    let right = string.length -1

    while(left < right){
        if(string[left] !== string[right]){
            return validSubPalin(string, left+1, right) || validSubPalin(string, left, right-1)
        } 
        left++
        right--
    }
    return true
}


// console.log(validPalinDrome("aabaa"))  //t
// console.log(validPalinDrome("aabbaa")) //t
// console.log(validPalinDrome("abc")) //f
// console.log(validPalinDrome("a")) //t
// console.log(validPalinDrome(""))  //t
// console.log(validPalinDrome("A man, a plan, a canal : Panama")) //t

console.log(almostPalinDrome("race a car"))  //t
console.log(almostPalinDrome("abccdba")) //t
console.log(almostPalinDrome("abcdefdba")) //f
console.log(almostPalinDrome("a")) //t
console.log(almostPalinDrome(""))  //t
console.log(almostPalinDrome("ab")) //t