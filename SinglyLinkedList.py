class Node:
    def __init__(self,val):
        self.val = val
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self,val):
        newNode = Node(val)
        if self.length == 0:
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return self    

    def traverse(self):
        current = self.head
        while current:
            print(current.val)
            current = current.next 
        
    
    def pop(self):
        if not self.head:
            return None
        current = self.head
        newTail = current
        while current.next:
            newTail = current
            current = current.next
        self.tail = newTail
        self.tail.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
        return current

    def shift(self):
        if not self.head:
            return 'how do you return undefined.. in python?'
        current = self.head
        self.head = current.next
        self.length -= 1
        return current

    def unshift(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        return self

    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        count = 0
        current = self.head
        while count is not index:
            current = current.next
            count += 1
        return current
    
    def set(self, index, val):
        foundNode = self.get(index)
        if foundNode:
            foundNode.val = val
            return True
        return False

    def insert(self, index, val):
        newNode = Node(val)
        oneBefore = self.get(index -1)
        oneAfter = self.get(index + 1)
        newNode.next = oneAfter
        oneBefore.next = newNode
        self.length += 1
        return True            

    def delete(self):
        if self.length == 0:
            return False
        elif self.length == 1:
            delNode = self.head.next
            self.head.next = None
            self.tail = self.head
            self.length -= 1
            return delNode.val
        else:
            delNode = self.head.next
            self.head.next = self.head.next.next
            self.length -= 1
            return delNode.val

    def search(self, val):
        check = self.head
        for i in range(self.length):
            if check.next.val == val:
                return Node
            check = check.next
        return None


    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node

        prev = None

        for i in range(self.length):
            next = node.next
            node.next = prev
            prev = node
            node = next
        return self
        


    
newList = SinglyLinkedList()
newList.push(5).push(10).push(15).push(20)
# print(newList.insert(1,99))
# print(newList.traverse())
print(newList.head.val)
print(newList.head.next.val)
print(newList.head.next.next.val)
print(newList.head.next.next.next.val)

newList.reverse()
print('------------------')
# print(newList.traverse())
# print(newList.pop().val)
# print(newList.pop().val)
# print(newList.pop().val)
# print(newList.set(3,9))
# print(newList.traverse())
# print(newList.head.next.next.val)
# newList.insert(5)
# newList.insert(3)
# newList.insert(99)
# print(newList.search(5))
