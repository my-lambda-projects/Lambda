# Given a binary tree, return all root-to-leaf paths.
#
# Note: A leaf is a node with no children.
#
# Example:
#
# Input:
#
#    1
#  /   \
# 2     3
#  \
#   5
#
# Output: ["1->2->5", "1->3"]
#
# Explanation: All root-to-leaf paths are: 1->2->5, 1->3


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def binaryTreePaths(self, root):
        res = []
        path = ""

        def helper(node, path):
            if not node:
                return
            path += str(node.val) + "->"
            if not node.left and not node.right:
                res.append(path[:-2])
                return

            helper(node.left, path)
            helper(node.right, path)

        helper(root, path)
        return res
