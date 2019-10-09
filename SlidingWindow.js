const sentence = 'ADOBECODEBANC'
const target2 = 'ABC'

function slidingWindow(Sentence, Target){
    let result = [0, Sentence.length]; //doesn't necessarily have to be Infinity, right? but only if you're sure that answer is there
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

        while(missing === 0){
            //compare current slow&fast and result, update with shorter ones
            if( (fast-slow) < (result[1]-result[0]) ){
                result = [slow, fast]
            }

            if(Sentence[slow] in counter){
                //this order matters...! hah yeah make sense on second look....pewh
                counter[Sentence[slow]] -= 1;

                if(counter[Sentence[slow]] === 0){
                    missing += 1;  //this will break while loop
                }
            }
            //shrink window
            slow += 1;
        }
    }
    return result
}

console.log(slidingWindow(sentence, target2)) 

