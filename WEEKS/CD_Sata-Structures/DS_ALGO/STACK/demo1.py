"""
You've encountered a situation where you want to easily be able to pull the
largest integer from a stack.
You already have a `Stack` class that you've implemented using a dynamic array.
Use this `Stack` class to implement a new class `MaxStack` with a method
`get_max()` that returns the largest element in the stack. `get_max()` should
not remove the item.
*Note: Your stacks will contain only integers. You should be able to get a
runtime of O(1) for push(), pop(), and get_max().*
"""


class Stack:
    def __init__(self):
        """Initialize an empty stack"""
        self.items = []

    def push(self, item):
        """Push a new item onto the stack"""
        self.items.append(item)

    def pop(self):
        """Remove and return the last item"""
        # If the stack is empty, return None
        # (it would also be reasonable to throw an exception)
        if not self.items:
            return None

        return self.items.pop()

    def peek(self):
        """Return the last item without removing it"""
        if not self.items:
            return None
        return self.items[-1]


class MaxStack:
    def __init__(self):
        # Your code here
        # keep track of a normal stack to do the standard operation
        self.stack = Stack()
        # keep track of a max stack (which is just another normal stack)
        # that we put the biggest number at the top every push
        self.max_stack = Stack()

    def push(self, item):
        """Add a new item onto the top of our stack."""
        # Your code here
        # do the normal push operation
        self.stack.push(item)

        # check if our mex stack is empty?
        # or if our item is larger than or equal the top of our max stack
        if self.max_stack.peek() is None or item >= self.max_stack.peek():
            self.max_stack.push(item)

    def pop(self):
        """Remove and return the top item from our stack."""
        # do the normal pop operation storing the value that was popped off
        item = self.stack.pop()

        # or if our item is larger than or equal the top of our max stack
        if item == self.max_stack.peek():
            self.max_stack.pop()

        # return the item to the caller
        return item

    def get_max(self):
        """The last item in maxes_stack is the max item in our stack."""
        # peek the top of the max_stack
        return self.max_stack.peek()
