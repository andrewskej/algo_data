const arr = [2,5,1,5,2,3,5,1,2,4]
const arr2 = [1,2,3,4,5,6,7]

function find(arr){
    let hash = {}

    for(let i =0; i<arr.length; i++){
        if(hash[arr[i]]){
            return arr[i]
        }else{
            hash[arr[i]] = true;
        }
    }
    return 'no result'
}

console.log(find(arr))