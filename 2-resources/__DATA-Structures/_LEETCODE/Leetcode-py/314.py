# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import defaultdict


class Solution:
    def verticalOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        d = defaultdict(list)
        queue = [(root, 0)]
        while queue:
            new_queue = []
            for node, x in queue:
                d[x].append(node.val)
                if node.left:
                    new_queue.append((node.left, x - 1))
                if node.right:
                    new_queue.append((node.right, x + 1))
            queue = new_queue
        return [d[k] for k in sorted(d)]
