# 4.2 Minimal Tree

# Given a sorted (increasing order) array with unique integer elements, write an algorithm to 
    # create a binary search tree with minimal height.

import statistics

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
    
    def minimal_tree(self, array):
        length = len(array)
        median = statistics.median(array)
        self.insert(median)
        for x in range(0, length):
            if x != median:
                self.insert(value)
