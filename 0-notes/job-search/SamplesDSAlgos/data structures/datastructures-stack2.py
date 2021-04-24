import sys
sys.path.append('../doubly_linked_list')
from doubly_linked_list import DoublyLinkedList

# FIFO

"""
What is the difference between using an array vs. a linked list when 
    implementing a Stack?

        Major difference is, arrays are index-based data structure and 
            each element of the array is associated with an index.  

        With a linked list, it relies on pointers; each node has the data 
            and then pointers to both previous and next elements.  

        You use binary or linear searches to traverse arrays; linear to 
            traverse linked lists.  

        Arrays are directly or randomly accessed and you can access any 
            element in them; stacks are accessed via last or first 
            pointer only.
"""

# STACK
# A stack is a data structure whose primary purpose is to store and
    # return elements in (Last In First Out)/FIFO order. 

# time complexity:   Avg   | Worst
    # Access:       O(n)   |   O(n)
    # Search:       O(n)   |   O(n)
    # Insertion:    O(1)   |   O(1)
    # Deletion:     O(1)   |   O(1)

# space complexity:  O(n)


class Stack:
    def __init__(self):
        self.size = 0
        self.storage = []

    def push(self, value):
        # insert value on top of stack
        return self.storage.insert(0, value)

    def pop(self):
        # if empty, can't remove anything
        if len(self.storage) == 0:
            return None
        # else, remove first item & return it
        item = self.storage.pop(0)
        return item

    def len(self):
        # get stack length/size
        return len(self.storage)
