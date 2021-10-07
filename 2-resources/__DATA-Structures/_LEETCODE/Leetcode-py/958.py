# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        queue = deque([root])
        while queue:
            curr = queue.popleft()
            if not curr:
                if queue and queue[0]:
                    return False
                else:
                    continue
            queue.append(curr.left)
            queue.append(curr.right)
        return True
