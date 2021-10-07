# Given a Binary Search Tree and a target number, return true if there exist two
# elements in the BST such that their sum is equal to the given target.
#
# Example 1:
#
# Input:
#     5
#    / \
#   3   6
#  / \   \
# 2   4   7
#
# Target = 9
#
# Output: True
#
#
# Example 2:
#
# Input:
#     5
#    / \
#   3   6
#  / \   \
# 2   4   7
#
# Target = 28
#
# Output: False

import collections


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def findTarget(self, root, k):

        dict = {}

        queue = collections.deque()
        queue.append(root)

        while len(queue):
            node = queue.popleft()

            if k - node.val in dict:
                return True
            dict[node.val] = 1

            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)
