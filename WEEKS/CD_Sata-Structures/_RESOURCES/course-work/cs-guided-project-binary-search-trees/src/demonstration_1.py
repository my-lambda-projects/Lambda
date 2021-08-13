"""
You are given a binary tree.

Write a function that can find the **maximum depth** of the binary tree. The
maximum depth can be defined as the number of nodes found along the longest
path from the root down to the furthest leaf node. Remember, a leaf node is a
node that has no children.

Example:

Given the following binary tree

    5
   / \
  12  32
     /  \
    8    4

your function should return the depth = 3.
"""


class BinaryTreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def maxDepth(root):
    # Your code here
    if root.left is None and root.right is None:
        # this is a leaf so depth is just 1
        return 1
    left_depth = 0
    right_depth = 0
    if root.left:
        left_depth = maxDepth(root.left)
    if root.right:
        right_depth = maxDepth(root.right)

    # now we have left and right depth so compare them get the max
    max_child_depth = max(left_depth, right_depth)
    return max_child_depth + 1


print(maxDepth())

# uper
# go left and right
# count steps
# compare left and right maxDepth
# return max
