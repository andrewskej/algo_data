//Time O(n) space O(n)
const detectingCycle = (head) => {
    const seen = []
    let currentNode = head
    let hasCycle = false

    while(!seen.includes(currentNode)){
        seen.push(currentNode)
        currentNode = currentNode.next

        if(seen.includes(currentNode)){
            hasCycle = true 
        }
    }

    return hasCycle
}


//Time O(n) Space O(1)
const tortoiseAndHare = (head) => {
    let slow = head;
    let fast = head;
     
     while(fast){
         if(!fast.next) {
             return false;
         } else{
             fast = fast.next.next;
             slow = slow.next;
         }
         
         if(slow == fast){
             return true;
         }
     }
     return false;

}