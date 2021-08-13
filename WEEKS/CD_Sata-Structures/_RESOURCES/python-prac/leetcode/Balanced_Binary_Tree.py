# Given a binary tree, determine if it is height-balanced.
#
# For this problem, a height-balanced binary tree is defined as:
#
# a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
#
# Example 1:
#
# Given the following tree [3,9,20,null,null,15,7]:
#
#     3
#    / \
#   9  20
#     /  \
#    15   7
# Return true.
#
# Example 2:
#
# Given the following tree [1,2,2,3,3,null,null,4,4]:
#
#        1
#       / \
#      2   2
#     / \
#    3   3
#   / \
#  4   4
# Return false.


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class Solution:
    def isBalanced(self, root):
        def helper(root):
            if not root:
                return (True, 0)

            leftB, leftH = helper(root.left)
            rightB, rightH = helper(root.right)

            return (
                leftB and rightB and abs(leftH - rightH) <= 1,
                max(leftH, rightH) + 1,
            )

        return helper(root)[0]


if __name__ == "__main__":
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(2)
    root.left.left = TreeNode(3)
    root.right.right = TreeNode(3)
    root.left.left.left = TreeNode(4)
    root.right.right.right = TreeNode(4)
    print(Solution().isBalanced(root))
