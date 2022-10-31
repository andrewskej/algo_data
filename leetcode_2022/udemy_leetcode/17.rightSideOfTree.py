def dfs(node, level, result):
    if not node:
        return 
    
    if level >= len(result):
        result.append(node.val)
    
    if node.right:
        dfs(node.right, level+1, result)

    if node.left:
        dfs(node.left, level+1, result)
    


def solution(root):
    result = []
    dfs(root, 0, result)
    return result