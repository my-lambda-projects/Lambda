# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        self.result = 0
        cache = {0: 1}

        def backtrack(node, pathSum):
            if not node:
                return
            pathSum += node.val
            oldSum = pathSum - sum
            if oldSum in cache:
                self.result += cache[oldSum]
            cache[pathSum] = cache.get(pathSum, 0) + 1
            backtrack(node.left, pathSum)
            backtrack(node.right, pathSum)
            cache[pathSum] -= 1

        backtrack(root, 0)
        return self.result
