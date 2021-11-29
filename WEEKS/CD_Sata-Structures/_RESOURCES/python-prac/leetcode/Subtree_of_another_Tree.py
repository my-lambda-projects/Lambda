# Given two non-empty binary trees s and t, check whether tree t has exactly the same structure
# and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all
# of this node's descendants. The tree s could also be considered as a subtree of itself.
#
# Example 1:
# Given tree s:
#
#      3
#     / \
#    4   5
#   / \
#  1   2
# Given tree t:
#    4
#   / \
#  1   2
# Return true, because t has the same structure and node values with a subtree of s.
# Example 2:
# Given tree s:
#
#      3
#     / \
#    4   5
#   / \
#  1   2
#     /
#    0
# Given tree t:
#    4
#   / \
#  1   2
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        def preOrder(node):
            if not node:
                return "null"

            return (
                "-"
                + str(node.val)
                + "-"
                + preOrder(node.left)
                + "-"
                + preOrder(node.right)
                + "-"
            )

        return preOrder(t) in preOrder(s)
