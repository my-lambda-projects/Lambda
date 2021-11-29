"""
You are given a binary tree and you are asked to write a function that finds its minimum depth. The minimum depth can be defined as the number of nodes along the shortest path from the root down to the nearest leaf node. As a reminder, a leaf node is a node with no children.

Example:
Given the binary tree [5,7,22,None,None,17,9],

    5
   / \
  7  22
    /  \
   17   9
your function should return its minimum depth = 2.

[execution time limit] 4 seconds (py3)

[input] tree.integer root

[output] integer

"""
#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def minimumDepthBinaryTree(root):

    if root is None:
        return 0
    else:
        return 1 + min(
            minimumDepthBinaryTree(root.left), minimumDepthBinaryTree(root.right)
        )
