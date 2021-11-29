class LinkedListNode:
    def __init__(self, data):
        self.value = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.end = None

    def enqueue(self, value):  # insert at the end
        new_node = LinkedListNode(value)
        # is the list empty?
        if self.head is None and self.end is None:
            self.head = new_node
            self.end = new_node
        else:
            self.end.next = (
                new_node
            )  # creates the connection fron one node to the other
            self.tail = new_node  # this moves the arrow

    def dequeue(self):  # pop form the head
        # is the list empty:
        if self.head is None:
            return

        value = self.head.value
        # remove the node at the head and move the head
        self.head = self.head.next
        if self.head is None:
            # no more items
            self.tail = None
        return value


q = Queue()
q.enqueue(3)
q.enqueue(34)
q.enqueue(35)
q.enqueue(6)

print(q.tail.value)
