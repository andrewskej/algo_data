// given a string only containing round brackets and lowercase characters.
// remove the least amount of brackets so the string is valid.
// it is valid if they are empty or there are only closed brackets

function minimumBracketToRemove(givenString){
    const givenStringArr = givenString.split('')
    const stack = []

    const leftB = "("
    const rightB = ")"

    for(let i = 0; i < givenStringArr.length; i++){
        if(givenStringArr[i] === leftB){
            stack.push(i) //pushing 'i', not the value
        } else if(givenStringArr[i] === rightB && stack.length){
            stack.pop()
        } else if(givenStringArr[i] === rightB){
            givenStringArr[i] = ""
        }
    }

    while(stack.length){
        const currIdx = stack.pop()
        givenStringArr[currIdx] = ''
    }

    return givenStringArr.join('')
}


// a)bc(d) -> abc(d)
// (ab(c)d -> ab(c)d or (abc)d
// ))(( -> ""
console.log(minimumBracketToRemove("a)bc(d)"))
console.log(minimumBracketToRemove("(ab(c)d"))
console.log(minimumBracketToRemove("))(("))