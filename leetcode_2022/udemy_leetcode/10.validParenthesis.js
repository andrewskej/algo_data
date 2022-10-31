//given a string containing only parenthesis,
//determine if it is valid (all closed). 

const validP = (givenString) => {
    const match = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    if(givenString.length === 0) return false

    const stack = []

    for(let i = 0; i< givenString.length; i++){
        if(match[givenString[i]]){
            stack.push(givenString[i])
        } else {
            const leftBracket = stack.pop()
            const correctBracket = match[leftBracket]

            if(givenString[i] != correctBracket){
                return false
            }
        }
    }
    return stack.length === 0
}


console.log(validP("({[(]})"))
console.log(validP("())"))
console.log(validP("()[{}]()"))
console.log(validP("()"))


