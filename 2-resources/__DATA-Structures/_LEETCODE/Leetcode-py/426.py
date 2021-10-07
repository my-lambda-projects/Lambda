"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""


class Solution:
    def treeToDoublyList(self, root: "Node") -> "Node":
        if not root:
            return root
        dummy = head = Node(0)
        stack, curr, prev = [], root, dummy
        while stack or curr:
            while curr:
                stack.append(curr)
                curr = curr.left
            top = stack.pop()
            prev.right, top.left, prev = top, prev, top
            curr = top.right
        dummy.right.left, prev.right = prev, dummy.right
        return dummy.right
