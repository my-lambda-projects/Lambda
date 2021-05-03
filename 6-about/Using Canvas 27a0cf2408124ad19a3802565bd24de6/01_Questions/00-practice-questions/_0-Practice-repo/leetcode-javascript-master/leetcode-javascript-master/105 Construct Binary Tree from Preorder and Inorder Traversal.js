/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
    if(!preorder || !inorder) {
        return null;
    }
    
    if(preorder.length !== inorder.length) {
        return null;
    }
    
    return generate(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};


var generate = (preorder, pl, pr, inorder, il, ir) => {
    if(pl > pr || il > ir) {
        return null
    }
    
    
    const root = new TreeNode(preorder[pl]);
    let midIndex = -1;
    
    for(let i = 0; i < inorder.length; i++) {
        if(inorder[i] === preorder[pl]) {
            midIndex = i;
            break;
        }
    }
    
    if(midIndex === -1) {
        return null;
    }
    
    const left = generate(preorder, pl + 1, pl + (midIndex - il), inorder, il, midIndex - 1);
    const right = generate(preorder, pl + (midIndex - il) + 1, pr, inorder, midIndex + 1, ir);
    
    root.left = left;
    root.right = right;
    
    return root;
}