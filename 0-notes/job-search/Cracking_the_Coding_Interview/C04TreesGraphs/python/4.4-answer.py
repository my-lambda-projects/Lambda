# 4.4 Check Balanced

# Implement a function to check if a binary tree is balanced.  

# For the purposes of this question, a balanced tree is defined to be a 
    # tree such that the heights of the two subtrees of any node never 
    # differ by more than one.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.left_depth = 0
        self.right_depth = 0
    
    def is_balanced(self, root):
        # need to track depths
        # if depths of left and right are 0 or 1 in difference, return true
        # else return false
        if root:
            self.left_depth += 1
            is_balanced(root.left)
            self.right_depth += 1
            is_balanced(root.right)
        if self.left_depth > self.right_depth:
            difference = self.left_depth - self.right_depth
        elif self.right_depth > self.left_depth:
            difference = self.right_depth - self.left_depth
        if difference != 0 or difference != 1:
            return False
        return True