"""
You are given a binary tree. You need to write a function that can determin if
it is a valid binary search tree.

The rules for a valid binary search tree are:

- The node's left subtree only contains nodes with values less than the node's
value.
- The node's right subtree only contains nodes with values greater than the
node's value.
- Both the left and right subtrees must also be valid binary search trees.

Example 1:
Input:

    5
   / \
  3   7

Output: True

Example 2:
Input:

    10
   / \
  2   8
     / \
    6  12

Output: False
Explanation: The root node's value is 10 but its right child's value is 8.
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def is_valid_BST(root):
    # Your code here
    if root is None:
        return False
    if root.left is None and root.right is None:
        return False

    if root.left.value < root.value:
        is_valid_BST(root.left)
    if root.right.value > root.value:
        is_valid_BST(root.right)

    return True
