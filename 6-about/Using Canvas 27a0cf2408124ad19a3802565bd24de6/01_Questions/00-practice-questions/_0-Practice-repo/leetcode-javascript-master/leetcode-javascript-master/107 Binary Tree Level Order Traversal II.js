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
const levelOrderBottom = root => {
    const q = [];
    const result = [];
    let temp = [];
    
    if(root === null){
        return q;
    }
    
    q.push(root);
    
    let curLvlCnt = 1;
    let nextLvlCnt = 0;
    
    while(q.length !== 0){
        const p = q.shift();
        curLvlCnt--;
        temp.push(p.val);
        
        if(p.left !== null){
            q.push(p.left);
            nextLvlCnt++;
        }
        
        if(p.right !== null){
            q.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            result.unshift(temp.slice());
            temp = [];
        }
    }
    
    return result;
};