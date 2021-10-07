# Given a binary tree, return the inorder traversal of its nodes' values.
#
# Example:
#
# Input: [1,null,2,3]
#    1
#     \
#      2
#     /
#    3
#
# Output: [1,3,2]
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def inorderTraversal(self, root):

        stack = []
        res = []

        while stack or root:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()

            res.append(root.val)

            root = root.right

        return res
