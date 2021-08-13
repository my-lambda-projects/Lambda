"""
Given only a reference to a specific node in a linked list, delete that node from a singly-linked list.

Example:

The code below should first construct a linked list (x -> y -> z) and then delete `y` from the linked list by calling the function `delete_node`. It is your job to write the `delete_node` function.

```python
class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None

x = LinkedListNode('X')
y = LinkedListNode('Y')
z = LinkedListNode('Z')

x.next = y
y.next = z

delete_node(y)
```

*Note: We can do this in O(1) time and space! But be aware that our solution will have some side effects...*
"""


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


def delete_node(delete_this_node):
    # Your code here
    temp = delete_this_node.next
    delete_this_node.value = None
    delete_this_node.next = temp.next


def printList(node):
    temp = node
    while temp != None:
        print(temp.value, end=" ")
        temp = temp.next


x = LinkedListNode("X")
y = LinkedListNode("Y")
z = LinkedListNode("Z")

x.next = y
y.next = z

delete_node(y)
printList(x)  # output: "X" with x.next is None
printList(y)  # output: None
printList(z)  # output: "Z"
