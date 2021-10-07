"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def levelOrder(self, root: "Node") -> List[List[int]]:
        if not root:
            return []
        result, queue = [], [root]

        while queue:
            new_queue = []
            level = []
            for node in queue:
                if node:
                    level.append(node.val)
                    new_queue += node.children
            queue = new_queue
            if level:
                result.append(level)
        return result
