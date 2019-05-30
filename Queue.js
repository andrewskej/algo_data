class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}


class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){ //add to last
        let newNode = new Node(val)
        if(this.size===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
    }

    dequeue(){ //remove from the first
        if(!this.first) return null
        let temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.val
    }

}

//first in, first out, just like human queue

let qq = new Queue()
qq.enqueue(1)
qq.enqueue(2)
qq.enqueue(3)

// qq.dequeue()
// qq.dequeue()
// qq.dequeue()

console.log(qq)


//push & shift  ||  unshift & pop
let q = []
q.push('First')
q.push('second')
q.push('third')
q.shift()
q.unshift('sss')
console.log(q)

