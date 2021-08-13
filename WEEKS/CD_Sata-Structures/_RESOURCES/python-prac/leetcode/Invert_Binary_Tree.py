# Invert a binary tree.
#
# Example:
#
# Input:
#
#      4
#    /   \
#   2     7
#  / \   / \
# 1   3 6   9
# Output:
#
#      4
#    /   \
#   7     2
#  / \   / \
# 9   6 3   1


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


import collections


class Solution:
    def invertTree(self, root):
        def helper(node):
            if not node:
                return node

            left = helper(node.left)
            right = helper(node.right)

            node.left = right
            node.right = left

            return node

        return helper(root)

    def invertTreeIterative(self, root):
        if not root:
            return root

        queue = collections.deque()
        queue.append(root)

        while len(queue):

            node = queue.popleft()

            node.left, node.right = node.right, node.left

            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

        return root
