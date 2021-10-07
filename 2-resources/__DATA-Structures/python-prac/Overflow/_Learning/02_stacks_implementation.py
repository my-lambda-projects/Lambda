#      - Stack() creates a new, empty stack
#      - push(item) adds the given item to the top of the stack and returns nothing
#      - pop() removes and returns the top item from the stack
#      - peek() returns the top item from the stack but doesn’t remove it(the stack isn’t modified)
#      - is_empty() returns a boolean representing whether the stack is empty
#      - size() returns the number of items on the stack as an integer

# Stack Method One - top is the last item in stack - append/pop - O(1)
class Stack:
    def __init__(self, items=[]):
        self._items = items

    def is_empty(self):
        return not bool(self._items)

    def push(self, item):
        self._items.append(item)

    def pop(self):
        return self._items.pop()

    def peek(self):
        return self._items[-1]

    @property
    def size(self):
        return len(self._items)


books = Stack(["testing"])
print(books.peek())

# Stack Method Two - top is the first item in stack - insert/pop - O(n)


class Stack_2:
    def __init__(self, items=[]):
        self._items = items

    def is_empty(self):
        return not bool(self._items)

    def push(self, item):
        self._items.insert(0, item)  # O(n)

    def pop(self):
        return self._items.pop(0)  # O(n)

    def peek(self):
        return self._items[0]

    @property
    def size(self):
        return len(self._items)


books2 = Stack_2(["testing"])
print(books2.size)
