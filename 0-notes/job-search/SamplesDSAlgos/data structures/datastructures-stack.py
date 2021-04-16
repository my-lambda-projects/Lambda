
from singly_linked_list import LinkedList

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
        self.storage = LinkedList()

    # get stack length/size
    def __len__(self):
        return self.size


    def push(self, value):
        # add one to size
        self.size += 1
        # add item to top of stack
        self.storage.add_to_head(value)

    def pop(self):
        # if stack empty, can't remove anything
        if self.size == 0:
            return None
        else:
            # subtract one from size
            self.size -= 1
            # remove from top of stack & return item
            return self.storage.remove_from_head()
