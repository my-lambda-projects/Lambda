"""
What is the difference between using an array vs. a linked list when 
    implementing a Queue?
        Major difference is, arrays are index-based data structure and each 
            element of the array is associated with an index.  
        With a linked list, it relies on pointers; each node has the data 
            and then pointers to both previous and next elements.  
        You use binary or linear searches to traverse arrays; 
            linear to traverse linked lists.  
        Arrays are directly or randomly accessed and you can access any 
            element in them; queues are accessed via first pointer only.

What if you could only use instances of your Stack class to implement the Queue?  
What would that look like? 
    You'd need one for one direction and one for the opposite direction.
How many Stacks would you need? 
    Two
Try it!
    doubly linked list?
"""

from singly_linked_list import LinkedList


# QUEUE
# A queue is a data structure whose primary purpose is to store and
    # return elements in First In First Out order. 

# time complexity:   Avg   | Worst
    # Access:       O(n)   |   O(n)
    # Search:       O(n)   |   O(n)
    # Insertion:    O(1)   |   O(1)
    # Deletion:     O(1)   |   O(1)

# space complexity:  O(n)


class Queue:
    def __init__(self):
        self.size = 0
        self.storage = LinkedList()
    
    # return queue size/length 
    def __len__(self):
        return self.size

    def enqueue(self, value):
        # add one to queue size/length
        self.size += 1
        # add item to end of queue
        self.storage.add_to_end(value)

    def dequeue(self):
        # if queue empty, can't remove
        if self.size == 0:
            return None
        else:
            # remove one from queue size/length
            self.size -= 1
            # remove one item from top of queue
            return self.storage.remove_from_head()
