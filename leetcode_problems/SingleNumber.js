const arr1 = [2,2,1] //1
const arr2 = [4,1,2,1,2]  //4


const onlyOneCounter = (arr) => {
    const counter = {}
    for(let i =0; i<arr.length; i++){
        counter[arr[i]] = 0;
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i] in counter) counter[arr[i]]++;
    }

    for(key in counter){
        console.log(key)
        if(counter[key] === 1){
            return key;
        };
    }
}

console.log(onlyOneCounter(arr1))



