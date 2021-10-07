# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rob(self, root: TreeNode) -> int:
        def dfs(node):
            if not node:
                return (0, 0)
            left, right = dfs(node.left), dfs(node.right)
            s1, s2 = node.val + left[0] + right[0], max(left) + max(right)
            return (s2, s1)

        return max(dfs(root))
