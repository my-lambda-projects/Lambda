class Deque(object):
    def __init__(self):
        self._items = []

    def is_empty(self):
        return self._items == []

    def add_front(self, item):
        self._items.append(item)

    def add_rear(self, item):
        self._items.insert(0, item)

    def remove_front(self):
        return self._items.pop()

    def remove_rear(self):
        return self._items.pop(0)

    @property
    def size(self):
        return len(self._items)


deque = Deque()
deque.add_front("John")
deque.add_front("Mike")
deque.add_front("Slim")
deque.add_rear("Joe")
deque.add_rear("Harry")
deque.add_rear("Harrison")

print(deque.size)
print(deque.remove_front())
print(deque.remove_front())
print(deque.remove_front())
print(deque.remove_front())
print(deque.remove_front())
print(deque.remove_front())
