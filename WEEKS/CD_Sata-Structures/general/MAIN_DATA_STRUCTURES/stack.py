# LIFO: last in first out

# create the abstract data type
class Stack:
    def __init__(self):
        # initialize it to a one dimensional array or linked list
        self.stack = []

    """
    Stack methods (push, pop, peek, is_empty, stack_size)
    """

    # function for adding item into the stack O(1)
    def push(self, data):
        self.stack.append(data)

    # function for removing last item inserted O(1)
    def pop(self):

        # first check to make sure its not an empty stack
        if self.stack_size() < 1:
            return -1

        # get the last item in the stack
        data = self.stack[-1]
        # remove it
        del self.stack[-1]
        # return the data
        return data

    # function to return the last item in the stack without removing it O(1)
    def peek(self):
        return self.stack[-1]

    # function to check if the stack is empty O(1)
    def is_empty(self):
        return self.stack == []

    # function to return the size of the stack O(1)
    def stack_size(self):
        return len(self.stack)


"""
Using the methods
"""
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Size: {stack.stack_size()}")
print(f"Popped item: {stack.pop()}")
print(f"Size: {stack.stack_size()}")
print(f"Peeked item: {stack.peek()}")
print(f"Size: {stack.stack_size()}")
