# 4.12 Paths with Sum

# You are given a binary tree in which each node contains an integer value 
    # which might be positive or negative.
# Design an algorithm to count the number of paths that sum to a given value.
# The path does not need to start or end at the root or a leaf, but it must go
    # downwards, traveling only from parent nodes to child nodes.

class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.sum = 0
        self.running_total = 0
        self.path_count = 0
    
    def set_sum(self, sum):
        self.sum = sum
    
    def paths_with_sum(self, root):
        if root:
            self.running_total += root
            self.path_count += 1
            if self.running_total != self.sum:
                paths_with_sum(root.left)
                paths_with_sum(root.right)
            else:
                return self.path_count
            