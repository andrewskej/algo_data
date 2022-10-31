/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(!head) return head;  //safeCheck for empty list
 
    var current = head;  
    var nextNode = current.next;  //one after the current is nextNode

     current.next = null; //make it tail
     
    while(nextNode){ //goes until the end of the list
        var nextNext = nextNode.next; //to keep position for shifting after reversing
        nextNode.next = current;  //this reverses the arrow backwards
        
        current = nextNode;   //this shifts current/next by 1 
        nextNode = nextNext;  //this shifts current/next by 1, using kept position
    }
     
    return current;
 };