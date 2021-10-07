# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def largestValues(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        result = []
        queue = [root]

        while queue:
            result.append(max(node.val for node in queue))
            queue = [
                child for node in queue for child in [node.left, node.right] if child
            ]
        return result
