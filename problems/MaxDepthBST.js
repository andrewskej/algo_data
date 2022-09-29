// Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

var maxDepth = (root) => {
    if(root === null) return 0; //this is important
    return Math.max(maxDepth(root.left) , maxDepth(root.right)) + 1;
}