class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val)
        if(this.length===0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined;
        let removeTail = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = removeTail.prev
            this.tail.next = null
            removeTail.prev = null;
        }
        this.length--
        return removeTail
    }

    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--;
        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let current, counter;
        if(index<=this.length/2){ //count from head
            current = this.head;
            counter = 0
            while(counter !== index){
                current = current.next
                counter++
            }
        }else{ //count from tail
            current = this.tail;
            counter = this.length -1;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current
    }

    set(index, val){
       let getNode = this.get(index) 
       if(getNode){
           getNode.val = val
           return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val)
        let oneBefore = this.get(index-1)
        let oneAfter = oneBefore.next

        oneBefore.next = newNode, newNode.prev = oneBefore
        newNode.next = oneAfter, oneAfter.prev = newNode
        
        this.length++
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let oneBefore = this.get(index-1)
        let removeThis = this.get(index)
        let oneAfter = this.get(index+1)

        oneBefore.next = oneAfter
        oneAfter.prev = oneBefore
        removeThis.next = null;
        removeThis.prev = null;

        this.length--;
        return removeThis
    }

}



let list = new DoublyLinkedList()
list.push('first')
list.push('second')
list.push('third????')
list.push('fourth!!!')

// console.log(list.pop())
// console.log(list.shift())
list.unshift('zero')
// list.unshift('one')
// list.unshift('fff')

console.log(list.get(0).val)
console.log(list.get(1).val)
console.log(list.get(2).val)
console.log(list.get(3).val)
console.log(list.get(4).val)

// console.log(list.set(3,'Haha'))
console.log(list.insert(2,'truefirst'))

console.log(list.get(0).val)
console.log(list.get(1).val)
console.log(list.get(2).val)
console.log(list.get(3).val)
console.log(list.get(4).val)
console.log(list.get(5).val)

console.log(list.remove(2))

console.log(list.get(0).val)
console.log(list.get(1).val)
console.log(list.get(2).val)
console.log(list.get(3).val)
console.log(list.get(4).val)
// console.log(list.get(5).val)
