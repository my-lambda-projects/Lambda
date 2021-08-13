# Given a n-ary tree, find its maximum depth.
#
# The maximum depth is the number of nodes along the longest path
# from the root node down to the farthest leaf node.
#
# Input: root = [1,null,3,2,4,null,5,6]
# Output: 3
#
# Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
# Output: 5


class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def maxDepth(self, root):
        if not root:
            return 0
        stack = []
        stack.append([root, 1])
        maxDepth = 0

        while len(stack):
            node, depth = stack.pop()

            maxDepth = max(maxDepth, depth)
            depth += 1
            for child in node.children:
                stack.append([child, depth])

        return maxDepth
