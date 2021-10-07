# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        self.result = 0

        def getDiameter(node):
            if not node:
                return 0
            left = getDiameter(node.left)
            right = getDiameter(node.right)
            self.result = max(self.result, left + right)
            return 1 + max(left, right)

        getDiameter(root)
        return self.result
