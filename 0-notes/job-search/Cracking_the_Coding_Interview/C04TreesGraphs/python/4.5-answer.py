# 4.5 Validate BST

# Implement a function to check if a binary tree is a binary search tree.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    # Insert the given value into the tree
    def insert(self, value):
        
        # if value is less than current value, go left
        if value < self.value:
            
            if not self.left:
                self.left = BinarySearchTree(value)
            else:
                self.left.insert(value)
        # if value is greater than/equal to current value, go right
        elif value >= self.value:

            if not self.right:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)
    
    def validate_bst(self, root):
        if root:
            if root.left < root:
                validate_bst(root.left)
            else:
                return False
            if root.right > root:
                validate_bst(root.right)
            else:
                return False
        return True
