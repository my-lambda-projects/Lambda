# Given a binary tree, determine if it is a valid binary search tree (BST).
#
# Assume a BST is defined as follows:
#
# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isValidBST(self, root):
        def helper(node, lower, upper):

            if not node:
                return True
            val = node.val

            if val <= lower or val >= upper:
                print("entered 1")
                return False

            if not helper(node.right, val, upper):
                print("entered 2")
                return False

            if not helper(node.left, lower, val):
                print("entered 3")
                return False

            return True

        return helper(root, float("-inf"), float("inf"))


node = TreeNode(5)
node.left = TreeNode(4)
node.right = TreeNode(7)
node.right.left = TreeNode(6)
node.right.right = TreeNode(8)

print(Solution().isValidBST(node))
