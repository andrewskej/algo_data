// Cousins in Binary Tree
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are cousins.

/**
 * Definition for a binary tree node.*/
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    function getDepthAndParent(node, given, depth=0, parent){
        if(!node) return null;
        if(node.val === given){  //if found the given value
            return {depth, parent}  //return its depth and its parent
        }
        let left = getDepthAndParent(node.left, given, depth+1, node); //recursive to get left
        let right = getDepthAndParent(node.right, given, depth+1, node); //recursive to get right

        return left || right;
    }

   let {depth: xDepth, parent: xParent} = getDepthAndParent(root, x)
   let {depth: yDepth, parent: yParent} = getDepthAndParent(root, y)

    //same depth && different parent means they are cousins.
    return xDepth == yDepth && xParent !== yParent;
};

const root = [1,2,3,4]
const x = 3;
const y = 4;
console.log(isCousins(root,x,y))
