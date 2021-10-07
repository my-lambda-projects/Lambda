# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def lcaDeepestLeaves(self, root: TreeNode) -> TreeNode:
        def dfs(node):
            if not node:
                return 0, None
            h1, lca1 = dfs(node.left)
            h2, lca2 = dfs(node.right)
            if h1 > h2:
                return h1 + 1, lca1
            if h2 > h1:
                return h2 + 1, lca2
            # as h1 is equal to h2, we can return either of them and the root node
            return h1 + 1, node

        return dfs(root)[1]
