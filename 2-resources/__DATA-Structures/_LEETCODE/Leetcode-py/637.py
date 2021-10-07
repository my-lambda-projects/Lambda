# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        if not root:
            return []
        this_level = [root]
        result = []
        while this_level:
            temp = [node.val for node in this_level]
            result.append(sum(temp) / len(temp))
            this_level = [
                child
                for node in this_level
                for child in [node.left, node.right]
                if child
            ]
        return result
