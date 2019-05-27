class Node{
    constructor(val){
    this.val = val;
    this.next = null
    }
}
  
  
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
     var newNode = new Node(val)
     if(!this.head){
       this.head = newNode;
       this.tail = this.head;
     }else{
       this.tail.next = newNode;
       this.tail = newNode;
     }
      this.length +=1;
      return this;
    }
    
    traverse(){
      let current = this.head
      while(current){
        console.log(current.val)
        current = current.next
      }
    }
    
    pop(){ //remove last node(tail)
      if(!this.head) return undefined;
      let current = this.head
      let newTail = current;
      while(current.next){
        newTail = current;
        current = current.next;
      }
        this.tail = newTail;
        this.tail.next = null
        this.length -= 1;
      if(this.length === 0){
        this.head = null
        this.tail = null
      }
        return current;
    }
    
    shift(){ //remove first node(head)
      if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length -=1;
        return current;
    }
    
    unshift(val){ //adding a new node to head
      let newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      }else{
        newNode.next = this.head;
        this.head = newNode;
      }
        this.length++;
        return this;
    }
    
    get(index){ //retrieving a node by it's position in the List
      if(index < 0 || index >= this.length) return null;
      let count = 0;
      let current = this.head
      while(count !== index){
        current = current.next;
        count++;
      }
      return current;
    }
    
    set(index, val){ //changing the value of a node based on it's position in the list
      let foundNode = this.get(index) 
      if(foundNode){
        foundNode.val = val
        return true;
      }
      return false;
    }
    
    insert(index, val){ //adding a node to the linked list at a specific position
      if(index === 0) return !!this.unshift(val);
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);  // !! is a trick to return boolean for that is not boolean.
      let prevNode = this.get(index-1)
      let newNode = new Node(val)
      let nextNode = this.get(index)
      newNode.next = nextNode
      prevNode.next = newNode
      this.length++;
      return true;
    }
    
    remove(index){
      if(index === this.length-1) return this.pop();
      if(index === 0) return this.shift();
      if(index < 0 || index > this.length) return undefined;
      let prevNode = this.get(index-1)
      let removedNode = this.get(index)
      prevNode.next = removedNode.next
      this.length--;
      return removedNode;
    }
    
    reverse(){
    //head tail swap
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

  }
  
  var list = new SinglyLinkedList()
  list.push("1.Hello")
  list.push('2.man')
  list.push('3.nah')
  list.push('4.hm...')
  list.unshift('0.haha')
  
  console.log(list.print())
  list.reverse()
  console.log(list.print())
  // console.log(list.get(3))
  // console.log(list.set(1, 'shit'))
  // console.log(list.insert(2, 'new2'))
  // console.log(list.remove(1))
  // console.log(list.head.val)
  // console.log(list.head.next.val)
  // console.log(list.head.next.next.val)
  // console.log(list.head.next.next.next.val)
  // console.log(list.traverse())
  // console.log(list.pop())
  // console.log(list.shift())