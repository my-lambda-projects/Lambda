# Unlike with a stack, the performance implication of using a Python list as a queue is
# significant. The implementation shown below uses insert(0, item) to enqueue a new item,
# which will be an O(n) operation.

# many Python programmers will use the standard library’s collections.deque class
# to achieve O(1)O(1) enqueues and dequeues.


class Queue(object):
    def __init__(self):
        self._items = []

    def is_empty(self):
        return self._items == []

    def enqueue(self, item):
        self._items.insert(0, item)

    def dequeue(self):
        return self._items.pop()

    def size(self):
        return len(self._items)


# queue = Queue()
# queue.enqueue('1')
# queue.enqueue('2')
# queue.enqueue('3')
# queue.enqueue('4')
# print(queue.is_empty())
# print(queue.size())
# print(queue.dequeue())
# print(queue.dequeue())
# print(queue.dequeue())
