/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
    const result = [];
    
    if(root === null){
        return result;
    }
    
    const queue = [];
    let temp = [];
    let curLvlCnt = 1;
    let nextLvlCnt = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        const p = queue.shift();
        temp.push(p.val);
        curLvlCnt--;
        
        if(p.left){
            queue.push(p.left);
            nextLvlCnt++;
        }
        if(p.right){
            queue.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            result.push(temp);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            temp = [];
        }
    }
    
    return result;
};