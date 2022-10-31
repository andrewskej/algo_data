// given a binary tree, imagine you're standing to the right of the tree.
// return an array of the values of the nodes you can see ordered from top to bottom.

const BFSapproach = (root) => {
    if(!root) return [];
    const result = [];
    let queue = [root];
      
    while(queue.length) {
      let length = queue.length 
      let count = 0
      let currentNode;
  
      while(count < length) {
        currentNode = queue.shift();
        
        if(currentNode.left) {
          queue.push(currentNode.left);
        }
        
        if(currentNode.right) {
          queue.push(currentNode.right);
        }
        
        count++;
      }
  
      result.push(currentNode.value)
    }
  
    return result;
}


const dfs = (node, currentLevel, result) => {
    if(!node) return;
    if(currentLevel >= result.length){
        result.push(node)
    }

    // preorder
    if(node.right){
        dfs(node.right, currentLevel+1, result)
    }
    if(node.left){
        dfs(node.left, currentLevel+1, result)
    }
}

const DFSapproach = (root) => {
    const result = []

    dfs(root, 0, result)
    return result
}

//time: O(n)
//space: O(n)