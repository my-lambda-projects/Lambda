# Given a binary tree, return the level order traversal of its nodes
# ' values. (ie, from left to right, level by level).
#
# For example:
# Given binary tree [3,9,20,null,null,15,7],
#
#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its level order traversal as:
#
# [
#   [3],
#   [9,20],
#   [15,7]
# ]
# Definition for a binary tree node.

import collections


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root):
        if not root:
            return []

        res = []
        queue = collections.deque()
        queue.append(root)

        while len(queue):
            num = len(queue)
            arr = []
            while num > 0:
                node = queue.popleft()
                arr.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                num -= 1
            res.append(arr)

        return res
