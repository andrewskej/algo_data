// given a binary tree, return the level order traversal of the nodes' values as an array.
// use BFS... 


//identify level in tree
//initialize subarray
//push finished subarray into result

const levelOrder = (root) => {
    if(!root) return []
    const result = []
    const queue = [root]

    while(queue.length){
        let length = queue.length
        let count = 0
        const currentLevelValues = []

        while (count < length){
            const currentNode = queue.shift()
            currentLevelValues.push(currentNode.val)

            if(currentNode.left){
                queue.push(currentNode.left)
            }

            if(currentNode.right){
                queue.push(currentNode.right)
            }
            count++
        }
        result.push(currentLevelValues)
    }
    return result
}
