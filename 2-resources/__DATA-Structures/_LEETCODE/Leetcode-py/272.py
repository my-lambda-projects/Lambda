# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestKValues(self, root: TreeNode, target: float, k: int) -> List[int]:
        predecessor, successor = [], []
        self.getPredecessor(root, target, predecessor)
        self.getSuccessor(root, target, successor)
        result = []
        while k > 0:
            if not predecessor:
                result.append(successor.pop())
            elif not successor:
                result.append(predecessor.pop())
            elif abs(predecessor[-1] - target) < abs(successor[-1] - target):
                result.append(predecessor.pop())
            else:
                result.append(successor.pop())
            k -= 1
        return result

    def getPredecessor(self, node, target, stack):
        if not node:
            return
        self.getPredecessor(node.left, target, stack)
        if node.val >= target:
            return
        stack.append(node.val)
        self.getPredecessor(node.right, target, stack)

    def getSuccessor(self, node, target, stack):
        if not node:
            return
        self.getSuccessor(node.right, target, stack)
        if node.val < target:
            return
        stack.append(node.val)
        self.getSuccessor(node.left, target, stack)
