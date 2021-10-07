"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""

# Time: O(log N)
class Solution:
    def inorderSuccessor(self, node: "Node") -> "Node":
        if node.right:
            node = node.right
            while node.left:
                node = node.left
            return node

        while node.parent and node.parent.val < node.val:
            node = node.parent
        return node.parent
