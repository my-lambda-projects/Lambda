"""

You are given a binary tree. Write a function that returns the binary tree's node values using an in-order traversal.

Example:
Input: [2,None,3,4]

   2
    \
     3
    /
   4
Output: [2,4,3]

[execution time limit] 4 seconds (py3)

[input] tree.integer root

[output] array.integer

"""
#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def binaryTreeInOrderTraversal(root):
    # define some helper function that we will use inside our traversal code
    def inorder_helper(root, res):
        # go to till you find the leaf
        if root is None:
            return
        inorder_helper(root.left, res)
        res.append(root.value)
        inorder_helper(root.right, res)

    # store our result
    result = []
    # pass in out root and result to the helper function
    inorder_helper(root, result)
    # after all of the calls to our helper fn are finished we can return our results
    return result
