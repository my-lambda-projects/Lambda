class Stack:
  def __init__(self):
    self.storage = []

  def push(self, item):
    """
    push the item on to the top of the stack
    """
    self.storage.append(item)

  def pop(self):
    """
    pop the item from the top of the stack returning said item if there is anything on the stack.
    otherwise return "The Stack is Empty"
    """
    if len(self.storage) > 0:
      return self.storage.pop()
    return "The Stack is Empty"

  def peek(self):
    if len(self.storage) > 0:
      return self.storage[-1]
    return "The Stack is Empty"


s = Stack()
s.push(10)
s.push(20)
s.push(30)
l = []
l.append(s.pop())
l.append(s.pop())
l.append(s.pop())
print(l)

class Queue:
    def __init__(self):
        self.storage = []

    def enqueue(self, item):
        self.storage.append(item)

    def pop(self):
        if len(self.storage) > 0:
            return self.storage.pop()
        return "The Stack is Empty"


class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.items:
            return None
        return self.items.pop()

    def peek(self):
        if not self.items:
            return None
        return self.items[-1]


class MaxStack:
    def __init__(self):
    def push(self, item):
    def pop(self):
    def get_max(self):


class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"


class QueueTwoStacks:
    def __init__(self):
    def enqueue(self, item):
    def dequeue(self):
