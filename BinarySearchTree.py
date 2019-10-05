class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self,val):
        newNode = Node(val)
        if not self.root:
            self.root = newNode
            return self

        currentNode = self.root
        while True:
            if val == currentNode.val:
                return
            if val < currentNode.val:
                if not currentNode.left:    
                    currentNode.left = newNode
                    return self
                currentNode = currentNode.left
            if val > currentNode.val:
                if not currentNode.right:
                    currentNode.right = newNode
                    return self
                currentNode = currentNode.right


    def BFS(self):
        q = []
        result = []
        if not self.root:
            return
        q.append(self.root)
        while(len(q)):
            out = q.pop(0)
            result.append(out.val)
            if out.left:
                q.append(out.left)
            if out.right:
                q.append(out.right)
        return result

    def DFS_PreOrder(self):
        visited = []
        def traverse(node):
            visited.append(node.val)
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
        
        traverse(self.root)
        return visited


    def DFS_PostOrder(self):
        visited = []
        def traverse(node):
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
            visited.append(node.val)
        
        traverse(self.root)
        return visited

    
    def DFS_Inorder(self):
        visited = []
        def traverse(node):
            if node.left:
                traverse(node.left)
            visited.append(node.val)
            if node.right:
                traverse(node.right)
        
        traverse(self.root)
        return visited






bst = BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(16)
bst.insert(20)

print('root:', bst.root.val)
print('BFS:', bst.BFS())
print('DFS_Preorder:', bst.DFS_PreOrder())
print('DFS_Postorder:', bst.DFS_PostOrder())
print('DFS_Inorder:', bst.DFS_Inorder())


    
    
            
    