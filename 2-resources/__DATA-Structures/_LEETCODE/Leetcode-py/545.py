# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def boundaryOfBinaryTree(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        self.result = [root.val]
        self.leftBoundary(root.left)
        self.leaves(root.left)
        self.leaves(root.right)
        self.rightBoundary(root.right)
        return self.result

    def leftBoundary(self, node):
        if not node or (not node.left and not node.right):
            return
        self.result.append(node.val)
        if not node.left:
            self.leftBoundary(node.right)
        else:
            self.leftBoundary(node.left)

    def rightBoundary(self, node):
        if not node or (not node.left and not node.right):
            return
        if not node.right:
            self.rightBoundary(node.left)
        else:
            self.rightBoundary(node.right)
        self.result.append(node.val)

    def leaves(self, node):
        if not node:
            return
        if not node.left and not node.right:
            self.result.append(node.val)
            return
        self.leaves(node.left)
        self.leaves(node.right)
