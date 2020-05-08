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
   // cousin is when you have same depth, different parents
    // x and y should have same depth and different parents

    //helper function to get depth and parents of x and y
    function getDepthAndParent(currentnode, given, depth, parent){
        if(!currentnode) return null;

        if(currentnode.val === given){
            return {depth, parent}
        }
        
        let goLeft = getDepthAndParent(currentnode.left, given, depth+1, currentnode);
        let goRight = getDepthAndParent(currentnode.right, given, depth+1, currentnode);
        
        //one or both of them will be null at last
        return goLeft || goRight;
    }
    
    let { xDepth, xParent} = getDepthAndParent(root, x)
    let { yDepth, yParent} = getDepthAndParent(root, y)
    
    return (xParent !== yParent  && xDepth == yDepth)
};

