"""
You are given a binary tree.
Write a function that can find the **maximum depth** of the binary tree. The
maximum depth can be defined as the number of nodes found along the longest
path from the root down to the furthest leaf node. Remember, a leaf node is a
node that has no children.
Example:
Given the following binary tree
max_depth = 2
left_height = 0
right_height = 0

- if there is no root node then return a zero

- otherwise
  - set a left height based on a call to the max depth on the left node
  - set a right height based on a call to the max depth on the right node
  - get the max of the left height and the right height then return that plus 1

** iterative version **
- create a stack to simulate the call stack

- if the root node is not none
  - append the root node to the stack and also the height of that node (1, root)

max_depth = 0

- while the stack is not empty
  pop the tuple off the stack, extracting the current_depth and the root_node

  - if the root_node is not none
    set max_depth to the max of current_depth and the max_depth
    - push the data of (max_depth + 1, root_node.left) on to the stack
    - push the data of (max_depth + 1, root_node.right) on to the stack

return the max_depth to the caller

    5  3  
   / \
1 12  32 2
     /  \
    8     4 
  /  \   /  \
  n
your function should return the depth = 3.
"""


class BinaryTreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


r = BinarySearchTree(5)
r.left =


def maxDepthR(root):
    """
    # if we have a root of None
      # return zero

    # otherwise
      # get the left height
      # get the right height
      # return the max of the left height and the right height + 1
    pass
    """
    if root is None:
        return 0
    else:
        left_height = maxDepthR(root.left)
        right_height = maxDepthR(root.right)
        return max(left_height, right_height) + 1


def maxDepthI(root):
    pass


maxDepthR(None)
