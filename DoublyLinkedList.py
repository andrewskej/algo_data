class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self,val):
        node = Node(val)
        if self.length == 0:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            node.prev = self.tail
            self.tail = node
        self.length+=1
        return self

    def pop(self):
        if not self.tail:
            return None
        removeTail = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = removeTail.prev
            self.tail.next = None
        self.length -= 1
        return removeTail
    
    def traverse(self):
        current = self.head
        while current:
            print(current.val)
            current = current.next
            if not current:
                return ''

    def shift(self):
        if not self.head:
            return 'no more Nodes'
        returnHead = self.head
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = returnHead.next
            returnHead.next = None
        self.length -= 1
        return returnHead

    def unshift(self, val):
        newHead = Node(val)
        if not self.head:
            self.head = newHead
            self.tail = newHead
        else:
            self.head.prev = newHead
            newHead.next = self.head
            self.head = self.head.prev
        self.length += 1
        return self

    def get(self, idx):
        count = 0
        if not self.head:
            return None
        if idx > self.length:
            return None
        currentNode = self.head
        while count is not idx:
            currentNode = currentNode.next
            count += 1
        return currentNode

    def set(self, idx, val):
        if idx > self.length:
            return False
        foundNode = self.get(idx)
        if foundNode:
            foundNode.val = val
            return True
        else:
            return False

    def insert(self, idx, val):
        if idx < 0 or idx > self.length:
            return False
        if idx == 0:
            self.unshift(val)
        else:
            newNode = Node(val)
            oneBefore = self.get(idx-1)
            oneAfter = self.get(idx)
            oneBefore.next = newNode
            newNode.prev = oneBefore
            newNode.next = oneAfter
            oneAfter.prev = newNode
            self.length += 1
            return True

    def remove(self, idx):
        if idx < 0 or idx > self.length:
            return False
        if idx == 0:
            self.shift()
        else:
            removeThis = self.get(idx)
            oneBefore = self.get(idx-1) 
            oneAfter = self.get(idx+1)
            oneBefore.next = oneAfter
            oneAfter.prev = oneBefore
            removeThis.prev = None
            removeThis.next = None
            self.length -= 1
            return self

    def reverse(self):
        currentNode = self.tail

        # [head, tail] = [tail, head]
        temp = self.head
        self.head = self.tail 
        self.tail = temp

        #prev and next of each Node get reversed
        counter = 0
        while counter is not self.length:
            temp = currentNode.next
            currentNode.next = currentNode.prev
            currentNode.prev = temp
            currentNode = currentNode.next
            counter+=1
        return self

    


DL = DoublyLinkedList()
DL.push(0).push(2).push(3).push(4).push(5)
# print('poped:', DL.pop().val)
# print('poped:', DL.pop().val)
# print('poped:', DL.pop().val)
# print('poped:', DL.pop().val)
# print('poped:', DL.pop().val)

# print('shifted:', DL.shift().val)
# print('shifted:', DL.shift().val)
# print('shifted:', DL.shift().val)
# print('shifted:', DL.shift().val)
# print('shifted:', DL.shift().val)

DL.push('tail')
DL.unshift('head')
DL.set(10, 99)
DL.insert(2,'ins')
# DL.insert(3,500)
# DL.remove(0)

print(DL.traverse())
print('-------------')
DL.reverse()
print(DL.traverse())