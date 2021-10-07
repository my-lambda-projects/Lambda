# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def convertBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        self.val = 0

        def visit(node):
            if node:
                visit(node.right)
                node.val += self.val
                self.val = node.val
                visit(node.left)

        visit(root)
        return root
