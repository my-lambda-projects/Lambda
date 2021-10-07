# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestConsecutive(self, root: TreeNode) -> int:
        def getLength(node):
            if not node:
                return [0, 0]
            increase, decrease = 1, 1
            ll = getLength(node.left)
            rr = getLength(node.right)
            if node.left:
                if node.val + 1 == node.left.val:
                    increase += ll[0]
                if node.val - 1 == node.left.val:
                    decrease += ll[1]
            if node.right:
                if node.val + 1 == node.right.val:
                    increase = max(increase, rr[0] + 1)
                if node.val - 1 == node.right.val:
                    decrease = max(decrease, rr[1] + 1)
            self.result = max(self.result, increase + decrease - 1)
            return [increase, decrease]

        self.result = 0
        getLength(root)

        return self.result
