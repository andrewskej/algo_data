class HashTable {
    constructor(size = 52){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length
        }
        return total;
    }

    //set
    //1. Accepts a key and a value
    //2. Hashes the key
    //3. Stores the k-v pair in the hash table array via separate chaining(nest)
    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []            
        }
        this.keyMap[index].push([key, value]) 
    }

    //get
    //accepts and hashes the key
    //retrieves the k-v pair in the ht
    //if the key is not found, return undefined
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    //keys - loops thru the ht and returns an array of keys
    keys(){
        let keys = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!keys.includes(this.keyMap[i][j][0])){
                        keys.push( this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keys
    }

    //returns an array of values
    values(){
        let values = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push( this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values
    }

}

let ht = new HashTable()
console.log(ht)
ht.set('hi' , 'bye')
ht.set('dogs' , 'cats')
ht.set('french', 'fries')
ht.set('french', 'kiss')
ht.set('angry', 'cats')

console.log(ht.get('dogs'))
console.log(ht.get('dogss'))
console.log(ht.keys())
console.log(ht.values())
console.log(ht.keyMap)