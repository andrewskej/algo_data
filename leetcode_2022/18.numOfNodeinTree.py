import math


def getTreeHeight(root):
    height = 0
    while root.left is not None:
        height+=1
        root = root.left
    return height

def nodeExists(idxToFind, height, node):
    left = 0
    right = math.pow(2, height) - 1
    count = 0
    
    while count < height:
        midOfNode = math.ceil((left + right) / 2)
        
        if idxToFind >= midOfNode:
            node = node.right
            left = midOfNode
        else:
            node = node.left
            right = midOfNode - 1

        count+=1
        
    return node is not None

def countNodes(root):
    if not root:
        return 0
    
    height = getTreeHeight(root)
    if height == 0:
        return 1
    
    upperCount = math.pow(2, height) - 1
    left = 0
    right = upperCount
    
    while left < right:
        idxToFind = math.ceil((left+right)/2)
        if nodeExists(idxToFind, height, root):
            left = idxToFind
        else:
            right = idxToFind - 1
            
    return upperCount + left + 1
    