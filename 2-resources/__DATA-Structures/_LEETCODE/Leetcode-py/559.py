"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
from collections import deque


class Solution:
    def maxDepth(self, root: "Node") -> int:
        if not root:
            return 0
        queue = deque([(root, 1)])
        result = 0

        while queue:
            node, depth = queue.popleft()
            result = max(result, depth)
            if node.children:
                for child in node.children:
                    queue.append((child, depth + 1))
        return result
