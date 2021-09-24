# lets make a stack using a dynamic array


class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()

        return "The stack is empty!"

    def peek(self):
        if len(self.data) > 0:
            return self.data[len(self.data) - 1]
