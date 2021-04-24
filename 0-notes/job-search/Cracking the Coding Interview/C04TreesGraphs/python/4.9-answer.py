# 4.9 BST Sequences

# A binary search tree was created by traversing through an array from left to 
    # right and inserting each element.
# Given a binary search tree with distinct elements, print all possible arrays 
    # that could have led to this tree.

# INPUT:    2 
        # 1   3
# OUTPUT:  {2,1,3}, {2,3,1}

import itertools
class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def bst_sequences(root):
    possible_array = []
    if root:
        possible_array.append[root]
        bst_sequences(root.left)
        bst_sequences(root.right)
    
    median = possible_array[0]

    possible_array = possible_array[1:]
    possible_arrays = list(itertools.permutations(possible_array))
    length = len(possible_arrays)
    for x in range(0, length):
        possible_arrays[x].insert(0, median)
        print(possible_arrays[x])
