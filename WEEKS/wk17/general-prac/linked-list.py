class LinkedListNode:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def append(self, data):
        new_node = LinkedListNode(data)
        if self.head:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
        else:
            self.head = new_node


a = LinkedListNode(1)
my_ll = LinkedList(a)
my_ll.append(2)
my_ll.append(3)
my_ll.head.data
my_ll.head.next.data
my_ll.head.next.next.data
print("my_ll = LinkedList(a):", my_ll)
print("my_ll.append(2):", my_ll)
print("my_ll.append(3):", my_ll)
print("my_ll.head.data:", my_ll.head.data)
print("my_ll.head.next.data:", my_ll.head.next.data)
print("my_ll.head.next.next.data:", my_ll.head.next.next.data)
