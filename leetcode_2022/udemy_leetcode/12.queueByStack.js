//enqueue, dequeue, peek, empty

class MyQueue {
    constructor(){
        this.in = []  //for enqueue
        this.out = [] //for dequeue
    }

    enqueue(val) {
        this.in.push(val)
    }

    dequeue(){
        if(this.out.length === 0){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop()
    }

    peek(){
        if(this.out.length === 0){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length-1]
    }

    empty() {
        return this.in.length === 0 && this.out.length === 0 
    }

}

const qq = new MyQueue()
console.log(qq.empty())
console.log(qq)
qq.enqueue(1)
console.log(qq)
qq.enqueue(2)
console.log(qq)
qq.enqueue(3)
console.log(qq)
qq.enqueue(4)
console.log(qq)
qq.enqueue(5)
console.log(qq)
console.log(qq.peek())
qq.dequeue()
console.log(qq)
qq.dequeue()
console.log(qq)
qq.dequeue()
console.log(qq)
qq.dequeue()
console.log(qq.peek())
console.log(qq.empty())
console.log(qq)
