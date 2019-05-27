var Queue = (function(){
    function Queue(){
      this.count = 0;
      this.head = null;
      this.tail = null;
    }
    
    function Node(data){
      this.data = data;
      this.next = null;
    }
    
    Queue.prototype.enqueue= function(data){
      var node = new Node(data);
      if(!this.head){
        this.head = node;
      }else{
        this.tail.next = node;
      }
      this.tail = node;
      return ++this.count;
    };
    
    Queue.prototype.dequeue = function(){
      if(!this.head){
        return false;
      }
      var data = this.head.data;
      this.head = this.head.next;
      --this.count;
      return data;
    };
    
    Queue.prototype.front = function(){
      return this.head && this.head.data;
    };
    
    return Queue;
  })();