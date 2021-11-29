"""
    How do you find and return the middle node of a singly linked list in one pass? 
    You do not have access to the length of the list. If the list is even,
    you should return the first of the two "middle" nodes.

    - Traverse linked list using two pointers.
    - Move one pointer by one and other pointer by two.
    - When the fast pointer reaches end 
    - slow pointer will reach middle of the linked list.
"""

# node class
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    # define add
    def add(self, value):
        self.next = Node(value)

    # define find middle
    def find_middle(self):
        # set the middle to self
        middle = self
        # set end to self
        end = self
        # while there are still nodes
        while end != None:
            # set end to ends next
            print(end.value)
            end = end.next
            # if end exists
            if end:
                # set end to ends next
                end = end.next
                # set middle to middles next
                middle = middle.next
        # print the value at the middle
        return f"Middle is: {middle.value}"


root = Node(3)
cur = root
cur.add(4)
cur = cur.next
cur.add(5)
cur = cur.next
cur.add(6)
cur = cur.next
cur.add(7)
cur = cur.next
print(cur.next)
print(root.find_middle())
