const maxDepthBinTree = (node) => {
    if(!node) return null;
    let max = Math.max(
        maxDepthBinTree(node.left), 
        maxDepthBinTree(node.right)
    )
    return max + 1
}


