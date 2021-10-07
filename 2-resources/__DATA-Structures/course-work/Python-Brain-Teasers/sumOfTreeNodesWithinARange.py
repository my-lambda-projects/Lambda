# You are given the root node of a binary search tree (BST).

# You need to write a function that returns the sum of values of all the nodes with a value between lower and upper (inclusive).

# The BST is guaranteed to have unique values.

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None


def csBSTRangeSum(root, lower, upper):
    sum = 0

    # value = None
    if root is None:
        return 0
    if (
        root.left is None
        and root.right is None
        and root.value in range(lower, upper + 1)
    ):
        return root.value

    if root is not None and root.value in range(lower, upper + 1):
        value = root.value
        sum += value

    if root.left is not None:
        value = csBSTRangeSum(root.left, lower, upper)
        sum += value
    if root.right is not None:
        value = csBSTRangeSum(root.right, lower, upper)
        sum += value

    return sum
