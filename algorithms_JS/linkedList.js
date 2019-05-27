var LinkedList = (function(){
    function LinkedList(){
      this.length = 0;
      this.head = null;
    }
    function Node(data){
      this.data = data;
      this.next = null;
    }
    
    LinkedList.prototype.add = function(value){
      var node = new Node(value);
      var current = this.head;
      if(!current){
        this.head = node;
        this.length++;
        return node;
      }else{
        while(current.next){
          current = current.next;
        }
        current.next = node;
        this.length++;
        return node;
      }
    };
    
    LinkedList.prototype.search = function(position){
      var current = this.head;
      var count = 0;
      while(count<position){
        current = current.next;
        count++;
      }
      return current.data;
    };
    
    LinkedList.prototype.remove = function(position){
      var current = this.head;
      var before, remove;
      count = 0;
      if(position == 0){
        remove = this.head;
        this.head = this.head.next;
        this.length--;
        return remove;
      }else{
        while(count<position){
          before = current;
          remove = current.next;
          count++;
          current = current.next;
        }
        before.next = remove.next;
        this.length--;
        return remove;
      }
    };
    
    
    return LinkedList;
  })();

////////////////////
  var xx = new LinkedList()
  console.log(xx)
  xx.add(4)
  console.log(xx.head.data)
  xx.add(6)
  console.log(xx.head.next.data)
  xx.add(9)
  console.log(xx.head.next.next.data)
  xx.add(12)
  console.log(xx.head.next.next.next.data)
  console.log(xx.head.next.next.next.next)
  console.log(xx)
  // console.log(xx.length)

  ///////////////////
  //!!!! this is how to get all data from LinkedList....I guess..
  //다음노드가 있는 한 데이터를 뽑고 노드를 다음으로 넘긴다
  function getAllData(list){
    let arr = []
    let currentNode = list.head
    arr.push(currentNode.data)
    while(currentNode.next){
      currentNode = currentNode.next
      arr.push(currentNode.data)
    }
    return arr;
  }

const allListData = getAllData(xx)
console.log(allListData)

//review!!
var reverseList = function(head) {
  if(head==null || head.next==null) return head;
  let current_head = head.next
  let reverse_head = head;
  reverse_head.next = null;
  while(current_head){
      let temp = current_head;
      current_head = current_head.next;

      temp.next = reverse_head;
      reverse_head = temp;
  }
  return reverse_head
};