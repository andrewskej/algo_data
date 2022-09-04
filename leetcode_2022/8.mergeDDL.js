//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/
const mergeDDL = (head) => {
    if(!head) return head
    let currentNode = head

    while (currentNode != null) {
        if (currentNode.child == null) {
            currentNode = currentNode.next   //traverse
        } else {
            let currentNodeChild = currentNode.child

            while(currentNodeChild.next !== null){
                currentNodeChild = currentNodeChild.next  //traverse child
            }

            currentNodeChild.next = currentNode.next   //connect child tail -> current.next

            if(currentNodeChild.next !== null){  //if it is not the end of DLL,
                currentNodeChild.next.prev = currentNodeChild  //connect  child tail <- current.next
                                                              //so it can be  child tail <-> current.next
            }

            currentNode.next = currentNode.child   //currentNode -> current.child
            currentNode.next.prev = currentNode     //currentNode <-> current.child
            currentNode.child = null                //break current.child link
        }
    }
    return head
}

//space : O(1)
//time : O(n)