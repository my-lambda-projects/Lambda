# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findNearestRightNode(self, root: TreeNode, u: TreeNode) -> TreeNode:
        q = [root]
        while q:
            new_q = []
            for i in range(len(q)):
                if q[i] == u:
                    return None if i == len(q) - 1 else q[i + 1]
                if q[i].left:
                    new_q.append(q[i].left)
                if q[i].right:
                    new_q.append(q[i].right)
            q = new_q
        return None
