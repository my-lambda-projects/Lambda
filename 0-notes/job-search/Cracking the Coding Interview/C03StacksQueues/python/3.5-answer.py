# 3.5 Sort Stack

# Write a program to sort a stack such that the smallest items are on top.  
# You can use an additional temporary stack, but you may not copy the elements into 
    # any other data structure such as an array.
# The stack supports the following operations:  push, pop, peek, and isEmpty.

class Stack(object):

    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    
    def pop(self):
        popped = self.stack1.pop()
        return popped

    def push(self, item):
        self.stack1.insert(0, item)
        return self.stack1

    def isEmpty(self):
        length = len(self.stack1)
        if length == 0:
            return True
        return False 
    
    def peek(self):
        first = self.stack1[0]
        return first
    
    def sort_by_smallest(self):
        sorted = self.stack1.sort()
        return sorted