# Given the root of a binary tree, the level of its root is 1,
# the level of its children is 2, and so on.
#
# Return the smallest level X such that the sum of all the values of
# nodes at level X is maximal.
#
#     1
#    /\
#   7  0
#      /\
#     7  -8
#
# Input: [1,7,0,7,-8,null,null]
# Output: 2
# Explanation:
# Level 1 sum = 1.
# Level 2 sum = 7 + 0 = 7.
# Level 3 sum = 7 + -8 = -1.
# So we return the level with the maximum sum which is level 2.
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


import collections


class Solution:
    def maxLevelSum(self, root):
        queue = collections.deque()
        queue.append(root)
        Max = [0, 0]
        level = 1
        while len(queue):
            total = 0
            num = len(queue)
            while num > 0:
                node = queue.popleft()
                total += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                num -= 1
            if Max[1] < total:
                Max[0] = level
                Max[1] = total
            level += 1
        return Max[0]
