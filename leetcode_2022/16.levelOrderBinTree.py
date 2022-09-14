def levelOrder(root):
    if not root:
        return []

    result = []
    queue = [root]
    
    while len(queue):
        length = len(queue)
        count = 0
        currentLevelValues = []
        
        while count < length:
            currentNode = queue.pop(0)
            currentLevelValues.append(currentNode.val)
            
            if currentNode.left:
                queue.append(currentNode.left)    
                
            if currentNode.right:
                queue.append(currentNode.right)    
                
            count += 1
        
        result.append(currentLevelValues)

    return result