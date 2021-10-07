# In order to implement an unordered list, we will construct what is commonly known as a
#  Linked List. We need to be sure that we can maintain the relative positioning of the
#  items. However, there is no requirement that we maintain that positioning in contiguous
#  memory.
# -----------------------------------------------------------------------------------------
# The basic building block for the linked list implementation is the node. Each node object
#  must hold at least two pieces of information. First, the node must contain the list item
#  itself. We will call this the data field of the node. In addition, each node must hold a
#  reference to the next node.
# -----------------------------------------------------------------------------------------


class Node:
    def __init__(self, value):
        self._value = value
        self._next = None  # Sometimes called 'grounding the node'

    @property
    def value(self):
        return self._value

    @value.setter
    def value(self, value):
        self._value = value

    @property
    def next(self):
        return self._next

    @next.setter
    def next(self, value):
        self._next = value


class LinkedList:
    def __init__(self):
        self._head = None

    @property
    def head(self):
        return self._head

    @head.setter
    def head(self, value):
        self._head = value


a = Node(45)
a.value = 10
print(a.value)

linked_list = LinkedList()
linked_list.head = a
print(linked_list.head.value)
