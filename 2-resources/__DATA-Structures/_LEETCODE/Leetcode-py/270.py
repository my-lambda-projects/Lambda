# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: TreeNode, target: float) -> int:
        prev = root.val
        while root:
            if abs(prev - target) > abs(root.val - target):
                prev = root.val
            if target < root.val:
                root = root.left
            else:
                root = root.right
        return prev
