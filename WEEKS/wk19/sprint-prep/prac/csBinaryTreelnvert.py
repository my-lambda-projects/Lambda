# Given a binary tree, write a function that inverts the tree.
#
# Example:
#
# Input:
#      6
#    /   \
#   4     8
#  / \   / \
# 2   5 7   9
#
# Output:
#      6
#    /   \
#   8     4
#  / \   / \
# 9   7 5   2
# [execution time limit] 4 seconds (py3)
#
# [input] tree.integer root
#
# [output] tree.integer
# -----------------------------------------------------------------------------------------
# Binary trees are already defined with this interface:
class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None


def csBinaryTreeInvert(root):
    if not root or (not root.left and not root.right):
        return root
    tmp = root.left
    root.left = root.right
    root.right = tmp
    csBinaryTreeInvert(root.left)
    csBinaryTreeInvert(root.right)
    return root
