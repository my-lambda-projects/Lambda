# 2.3 Delete Middle Node

# Implement an algorithm to delete a node in the middle of a singly linked list,
    # given only access to that node.

# (i.e. any node but the first and last, not necessarily the exact middle)

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 
    
    def delete_middle(self, middle):
        if middle.next is None:
            return None
        placeholder = middle.next
        middle.data = placeholder.data
        middle.next = placeholder.next
