# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
        def dfs(node, min_val, max_val):
            if not node:
                return max_val - min_val
            max_val = max(node.val, max_val)
            min_val = min(node.val, min_val)
            return max(
                dfs(node.left, min_val, max_val), dfs(node.right, min_val, max_val)
            )

        return dfs(root, root.val, root.val)
