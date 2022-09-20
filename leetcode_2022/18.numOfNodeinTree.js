const getTreeHeight = function(root) {
  let height = 0;
  while(root.left !== null) {
    height++;
    root = root.left;
  }
  
  return height;
}

const nodeExists = function(idxToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1, count = 0;
  
  while(count < height) {
    const midOfNode = Math.ceil((left + right) / 2);
    
    if(idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    
    count++;
  }
  
  return node !== null;
}

const countNodes = function(root) {
  if(!root) return 0;
  
  const height = getTreeHeight(root);
  
  if(height === 0) return 1;
  
  const upperCount = Math.pow(2, height) - 1
  
  let left = 0, right = upperCount;  //nice.. 
  
  while(left < right) {
    const idxToFind = Math.ceil((left + right) / 2);
    
    if(nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }
  
  return upperCount + left + 1;
};

console.log(countNodes(tree))