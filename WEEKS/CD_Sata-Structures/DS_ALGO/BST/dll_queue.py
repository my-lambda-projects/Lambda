import sys
from doubly_linked_list import DoublyLinkedList


class Queue:
    def __init__(self):
        self.size = 0
        # Why is our DLL a good choice to store our elements?
        self.storage = DoublyLinkedList()

    def enqueue(self, value):
        # add the value to the DLL
        self.storage.add_to_tail(value)
        # increment size counter
        self.size += 1

    def dequeue(self):
        # decrement the size counter
        # check that size is greater than 0
        if self.size > 0:
            self.size -= 1
            # remove head of DLL and return it
            return self.storage.remove_from_head()

    def len(self):
        return self.size
