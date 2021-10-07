# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def longestConsecutive(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0
        result = 0
        stack = [(root, 1)]
        while stack:
            node, curr = stack.pop()
            if node.left:
                stack.append(
                    (node.left, curr + 1 if node.left.val == node.val + 1 else 1)
                )
            if node.right:
                stack.append(
                    (node.right, curr + 1 if node.right.val == node.val + 1 else 1)
                )
            result = max(result, curr)
        return result
