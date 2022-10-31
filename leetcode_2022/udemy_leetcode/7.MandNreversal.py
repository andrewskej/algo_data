# Given a Linkedlist and num m and n
# return it back with only positions m to n in reverse
from asyncio.windows_events import NULL


def reverse(head, left, right):
    start = head
    currentNode = head
    currentPos = 1
    
    while currentPos < left:
        start = currentNode  
        currentNode = currentNode.next
        currentPos += 1
    
    reversedList = None
    tail = currentNode 
    
    while currentPos >= left and currentPos <= right:
        nextNode = currentNode.next
        currentNode.next = reversedList
        reversedList = currentNode
        currentNode = nextNode
        currentPos += 1
        
    start.next = reversedList
    tail.next = currentNode 
    
    if left > 1:
        return head
    else:
        return reversedList