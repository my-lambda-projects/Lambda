# Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
#
# The successor of a node p is the node with the smallest key greater than p.val.
#
# Input: root = [2, 1, 3], p = 1
# Output: 2
# Explanation: 1
# 's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
#
# Input: root = [5,3,6,2,4,null,null,1], p = 6
# Output: null
# Explanation: There is no in-order successor of the current node, so the answer is null.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def inorderSuccessor(self, root, p):

        if p.right:
            curr = p.right
            while curr.left:
                curr = curr.left
            return curr

        stack, inorder = [], float("inf")

        while stack or root:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()

            if inorder == p.val:
                return root

            inorder = root.val

            root = root.right

        return None
