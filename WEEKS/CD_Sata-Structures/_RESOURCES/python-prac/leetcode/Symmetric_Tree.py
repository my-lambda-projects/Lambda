# Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
#
# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
#
#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSymmetric(self, root):
        if not root:
            return True

        def helper(node1, node2):
            if not node1 and not node2:
                return True

            if not node1 or not node2:
                return False

            if node1.val != node2.val:
                return False

            return helper(node1.left, node2.right) and helper(node1.right, node2.left)

        return helper(root.left, root.right)

    def isSymmetricIterative(self, root):

        if not root:
            return True

        stack = []
        stack.append([root.left, root.right])

        while len(stack):
            node1, node2 = stack.pop()

            if not node1 and not node2:
                continue

            if not node1 or not node2:
                return False

            if node1.val != node2.val:
                return False

            stack.append([node1.left, node2.right])
            stack.append([node1.right, node2.left])

        return True
