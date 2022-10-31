//Given a Linkedlist and num m and n
//return it back with only positions m to n in reverse

// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 2, 4
// 1 -> 4 -> 3 -> 2 -> 5 -> null
const mAndNReversal = (head, left, right) => {
    let start = head
    let currentNode = head
    let currentPos = 1

    while(currentPos < left){
        start = currentNode
        currentNode = currentNode.next
        currentPos++
    }

    let reversedList = null
    let tail = currentNode

    while(currentPos >= left && currentPos <= right){
        const nextNode = currentNode.next
        currentNode.next = reversedList
        reversedList = currentNode
        currentNode = nextNode
        currentPos++
    }

    start.next = reversedList    
    tail.next = currentNode  // why??

    return (left > 1) ? head : reversedList
}


