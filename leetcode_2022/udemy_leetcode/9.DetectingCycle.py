#Time O(n) space O(n)
def detectingCycle(head):
    seen = []
    currNode = head
    
    while currNode not in seen:
        seen.append(currNode)
        if currNode and currNode.next:
            currNode = currNode.next
        else:
            return False
        
        if currNode in seen:
            return True
        
    return False


#Time O(n) space O(1)
def tortoiseAndHare(head):
    turtle = head
    rabbit = head
    
    while rabbit:
        if rabbit.next:
            rabbit = rabbit.next.next
            turtle = turtle.next
        else:
            return False
        
        if rabbit is turtle:
            return True
    return False    
