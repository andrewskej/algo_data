//given two strings S and T, 
//return if they equal when both are typed out.
//Any '#' that appears in the string counts as a backspace.

//ab#z and az#z are equal, ab#d and acc#c are not
//empty are same, uppercase matters

const string1 = 'ab#z'
const string2 = 'az#z'

const string3 = 'ab#d'
const string4 = 'acc#c'


function typedOutStringBrute(S, T){
    const s1 = []
    const s2 = []
    const isHash = '#'
    for(let i = 0; i < S.length; i++){
        if(S[i] != isHash){
            s1.push(S[i])
        } else {
            s1.pop()
        }
    }

    for(let i = 0; i < T.length; i++){
        if(T[i] != isHash){
            s2.push(T[i])
        } else {
            s2.pop()
        }
    }
    console.log(s1.join(''), s2.join(''))
    return s1.join('') == s2.join('')
}

//time: O(n)
//space: O(n)
console.log(typedOutStringBrute(string1, string2)) //true
console.log(typedOutStringBrute(string3, string4)) //false


function typedOutStringOptimal(S, T){
//use two pointers
//begin from the end
    let p1 =  S.length-1;
    let p2 =  T.length-1;

    while(p1 >= 0 || p2 >= 0){

        if(S[p1]  === '#' || T[p2] === '#'){

            if(S[p1]  === '#'){
                let backCount = 2;
                while(backCount > 0){
                    p1--;
                    backCount--;
                    if(S[p1] === '#'){
                        backCount = backCount + 2;
                    }
                }
            }

            if(T[p2]  === '#'){
                let backCount = 2;
                while(backCount > 0){
                    p2--;
                    backCount--;
                    if(T[p2] === '#'){
                        backCount = backCount + 2;
                    }
                }
            }

        } else {
            if(S[p1] !=  T[p2]){
                return false
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true
}

//time: O(n)
//space: O(1)... hm..
console.log(typedOutStringOptimal(string1, string2)) //true
console.log(typedOutStringOptimal(string3, string4)) //false
