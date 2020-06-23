class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next: null
        }
        this.tail= this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value){
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        let currentNode = this.head
        for(let i = 0; i<index-1; i++){
            currentNode = currentNode.next
        }

        const newNode = new Node(value);
        newNode.next = currentNode.next.next
        currentNode.next = newNode
        this.length++;
        return this;
    }

    remove(index){

    }

    reverse(){
        if (!this.head) return this.head;
    
        let node = this.head;
        let nextNode = this.head.next;
        
        node.next = null;
    
        while (nextNode) {
            const nextNextNode = nextNode.next;
            nextNode.next = node;
            node = nextNode;
            nextNode = nextNextNode;
        }
        
        return this;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.prepend(0)
// myLinkedList.insert(1, 99)
console.log(myLinkedList.head.next)

console.log(myLinkedList.printList())
myLinkedList.reverse();
console.log(myLinkedList.head)
