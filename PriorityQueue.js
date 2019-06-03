class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    
    bubbleUp(){
        let newIndex = this.values.length - 1
        let newEl = this.values[newIndex]

        while(newIndex > 0){
            let parentIndex = Math.floor((newIndex-1)/2)
            let parentEl = this.values[parentIndex]

            if(newEl.priority >= parentEl.priority) break;

            this.values[parentIndex] = newEl;
            this.values[newIndex] = parentEl;
            newIndex = parentIndex;
        }
    }


    dequeue(){
        let removed = this.values[0]
        let newRoot = this.values.pop()
        this.values[0] = newRoot

        if(this.values.length>0){
            this.sinkDown();
        } 

        return removed;
    }
    
    sinkDown(){
        let newIndex = 0
        let newEl = this.values[0]

        while(true){
            let leftIndex = (newIndex * 2) + 1
            let rightIndex = (newIndex * 2) + 2
            let leftChild, rightChild
            let swap = null;

            if(leftIndex < this.values.length){
                leftChild = this.values[leftIndex]
                if(leftChild.priority < newEl.priority){
                    swap = leftIndex
                }
            }

            if(rightIndex < this.values.length){
                rightChild = this.values[rightIndex]
                if( (swap===null && rightChild.priority < newEl.priority) 
                    || (swap !==null && rightChild < leftChild.priority)){
                        swap = rightIndex
                    }
            }

            if(swap === null) break;

            this.values[newIndex] = this.values[swap] //value swap
            this.values[swap] = newEl  //value swap
            newIndex = swap //index of either L or R is new Index to compare

        }

    }

}

let ER = new PriorityQueue()
ER.enqueue("common cold",5)
ER.enqueue("gunshot",1)
ER.enqueue("fever", 4)
ER.enqueue('broken arm', 2)
ER.enqueue('glass', 3)


console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
// console.log(ER.dequeue())
// console.log(ER.dequeue())



console.log(ER.values)