# 3.2 Stack Min

# How would you design a stack which, in addition to push and pop, has a function min which 
    # returns the minimum element?  Push, pop, and min should all operate in O(1) time.
  
class StackMin:
    def __init__(self):
        self.stack = []

    def pop(self):
        # last
        length = len(self.stack)
        deleted = self.stack[length]
        del self.stack[length]
        return deleted 

    def push(self, item):
        # first
        self.stack.insert(0, item)
        return self.stack

    def min(self):
        return min(self.stack)