/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root => {
  if(root === null){
      return 0;
  }  
  
  return 1+ Math.max(maxDepth(root.left), maxDepth(root.right));
};