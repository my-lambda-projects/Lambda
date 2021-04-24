# 4.3 List of Depths

# Given a binary tree, design an algorithm which creates a linked list 
    # of all the nodes at each depth.

# E.G. if you have a tree with depth D, you'll have D linked lists.

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self):
        self.head = None
    
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

    def list_of_depths(self, root):
        current_head = self.head
        if root:
            while current_head: 
                self.head = root.data
                current_head.next = root.left
            # self.head.next
            if root.left:
                list_of_depths(root.left)
            else:
                list_of_depths(root.right)

