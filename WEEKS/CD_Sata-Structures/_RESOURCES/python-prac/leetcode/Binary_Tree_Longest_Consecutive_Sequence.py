# Given a binary tree, find the length of the longest consecutive sequence path.
#
# The path refers to any sequence of nodes from some starting node to any node in
# the tree along the parent-child connections. The longest consecutive path need to be
# from parent to child (cannot be the reverse).
#
# Example 1:
#
# Input:
#
#    1
#     \
#      3
#     / \
#    2   4
#         \
#          5
#
# Output: 3
#
# Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
# Example 2:
#
# Input:
#
#    2
#     \
#      3
#     /
#    2
#   /
#  1
#
# Output: 2
#
# Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def longestConsecutive(self, root):
        def helper(node, parent, length):
            if not node:
                return length

            if parent is not None and node.val == parent.val + 1:
                length += 1
            else:
                length = 1

            return max(
                length,
                max(helper(node.left, node, length), helper(node.right, node, length)),
            )

        return helper(root, None, 0)

    def longestConsecutiveIterative(self, root):
        if not root:
            return 0

        stack = []
        stack.append([root, None, 0])
        maxLength = 0
        parent = None

        while len(stack):
            node, parent, length = stack.pop()
            if parent is not None and node.val == parent.val + 1:
                length += 1
            else:
                length = 1
            parent = node
            maxLength = max(maxLength, length)
            if node.right is not None:
                stack.append([node.right, parent, length])
            if node.left is not None:
                stack.append([node.left, parent, length])

        return maxLength
