// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Given an array of strings, group anagrams together.



var anagrams = function(arr){
    const result = []
    const counter = {}

    for(let i =0; i<arr.length; i++){
        let each = arr[i].split('').sort().join('');
        counter[each] = []
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i].split('').sort().join('') in counter){
            counter[arr[i].split('').sort().join('')].push(arr[i])
        }
    }

    for(arrays in counter){
        result.push(counter[arrays])
    }

    return result
}

console.log(anagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]))


//online answer
// const groupAnagrams = strs => {
//     const map = {};
    
//     for (let str of strs) {
//         const key = [...str].sort().join('');

//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(str);
//     }
    
//     return Object.values(map);
// };