# 4.6 Successor

# Write an algorithm to find the "next" node (i.e. in-order successor) of a given node in a binary
    # search tree. 

# You may assume that each node has a link to its parent.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def validate_bst(self, root, node):
        if root:
            if root == node:
                return root.left
            validate_bst(root.left)
            if root == node:
                return root.right
            validate_bst(root.right)

