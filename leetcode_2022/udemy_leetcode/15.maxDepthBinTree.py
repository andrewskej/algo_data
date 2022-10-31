def maxDepthBinTree(node):
    if not node:
        return 0
    maxVal = max(maxDepthBinTree(node.left), maxDepthBinTree(node.right))
    return maxVal + 1