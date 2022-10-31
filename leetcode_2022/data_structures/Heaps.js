//Heaps are trees as well!
//difference
//MaxBinaryHeap : Parent nodes are always bigger than child nodes
//MinBinaryHeap : Parent nodes are always smaller than child nodes

//index of parent: children   n  =>  (2n + 1)
//         child : parent    Math.floor((n/2)-1)

//When adding new data,  add it at the end and then bubble up by comparing & swapping
//when removing data, remove the root -> replace with the most recently added, sink down


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }

    bubbleUp(){
        let newIndex = this.values.length - 1;
        let newValue = this.values[newIndex]
        
        while(newIndex > 0 ){
           let parentIndex =  Math.floor((newIndex - 1) / 2)
           let parentValue = this.values[parentIndex]
           
           if(newValue <= parentValue) break;

           this.values[parentIndex] = newValue;
           this.values[newIndex] = parentValue;
           newIndex = parentIndex
        }
    }


    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()
        this.values[0] = end
        if(this.values.length > 0){
            this.sinkDown()
        }
        return max;        
    }
    
    sinkDown(){
        let idx = 0;
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2*idx +1
            let rightChildIdx = 2*idx +2
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx]
                if(
                    //if left is smaller and right is bigger than element
                    (swap === null && rightChild > element)|| 
                    //of if left is bigger but right is event bigger than element
                    (swap !== null && rightChild > leftChild)
                ){ 
                    swap = rightChildIdx
                }
            }

            if(swap === null) break; //this means both left & right are not bigger than element

            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
    
}


let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
console.log(heap)
console.log(heap.extractMax())
console.log(heap)


