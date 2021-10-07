# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        if not root:
            return []
        result = []
        self.findPath(root, str(root.val), result)
        return result

    def findPath(self, node, path, result):
        if not node.left and not node.right:
            result.append(path)
            return
        if node.left:
            self.findPath(node.left, path + "->" + str(node.left.val), result)
        if node.right:
            self.findPath(node.right, path + "->" + str(node.right.val), result)


class Solution:
    def binaryTreePaths(self, root):
        """
        :type root: TreeNode
        :rtype: List[str]
        """
        if not root:
            return []
        stack = [(root, str(root.val))]
        result = []
        while stack:
            node, s = stack.pop()
            if not node.left and not node.right:
                result.append(s)
            if node.right:
                stack.append((node.right, s + "->" + str(node.right.val)))
            if node.left:
                stack.append((node.left, s + "->" + str(node.left.val)))
        return result
