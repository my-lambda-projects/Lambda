class LinkedListNode:
    def __init__(self, data):
        self.value = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None
        self.end = None

    def push(self, value):  # for stacks we insert at the head
        new_node = LinkedListNode(value)
        # is the list empty?
        if self.head is None and self.end is None:
            self.head = new_node
            self.end = new_node
        else:  # add to head
            new_node.next = self.head
            self.head = new_node

    def pop(self):  # removes from the head
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


q = Stack()
q.push(3)
q.push(34)
q.push(35)
q.push(6)

print(q.tail.value)
