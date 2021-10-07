# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import defaultdict


class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        d = defaultdict(list)

        queue = [(root, 0)]
        while queue:
            new_queue = []
            temp_d = defaultdict(list)
            for node, x in queue:
                temp_d[x].append(node.val)
                if node.left:
                    new_queue.append((node.left, x - 1))
                if node.right:
                    new_queue.append((node.right, x + 1))

            for k, v in temp_d.items():
                d[k].extend(sorted(v))
            queue = new_queue

        return [d[k] for k in sorted(d)]
