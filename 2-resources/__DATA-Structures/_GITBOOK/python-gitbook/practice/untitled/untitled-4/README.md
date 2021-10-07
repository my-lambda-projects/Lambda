# Linked List

###

## Linked List

- Given a linked list, in addition to the next pointer, each node has a child pointer that can point to a separate list. With the head node, flatten the list to a single-level linked list.
  - [Source](http://blog.gainlo.co/index.php/2016/06/12/flatten-a-linked-list/)
- Reverse a singly linked list. Implement it recursively and iteratively.
- Convert a binary tree to a doubly circular linked list.
- Implement an LRU cache with O\(1\) runtime for all its operations.
- Check distance between values in linked list.
- A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists.
- Given a singly linked list \(a list which can only be traversed in one direction\), find the item that is located at 'k' items from the end. So if the list is a, b, c, d and k is 2 then the answer is 'c'. The solution should not search the list twice.
- How can you tell if a Linked List is a Palindrome?

###

### Linked lists in Python

#### Implementation:

```python
# Singly-Linked List
#
# The linked list is passed around as a variable pointing to the
# root node of the linked list, or None if the list is empty.

class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

def linked_list_append(linked_list, value):
    '''Appends a value to the end of the linked list'''
    node = linked_list
    insert_node = LinkedListNode(value)
    if not node:
        return insert_node
    while node.next:
        node = node.next
    node.next = insert_node
    return linked_list

def linked_list_insert_index(linked_list, value, index):
    '''Inserts a value at a particular index'''
    node = linked_list
    insert_node = LinkedListNode(value)

    # Check if inserting at head
    if index == 0:
        insert_node.next = node
        return insert_node

    # Skip ahead
    for _ in range(index - 1):
        node = node.next
        if not node:
            raise ValueError
    insert_node.next = node.next
    node.next = insert_node
    return linked_list

def linked_list_delete(linked_list, value):
    '''Deletes the first occurrence of a value in the linked list'''
    node = linked_list

    # Check if deleting at head
    if node.value == value:
        return node.next

    # Skip ahead
    while node.next:
        if node.next.value == value:
            node.next = node.next.next
            return linked_list
        node = node.next
    raise ValueError

def linked_list_delete_index(linked_list, index):
    '''Deletes the element at a particular index in the linked list'''
    node = linked_list

    # Check if deleting at head
    if index == 0:
        return node.next

    # Skip ahead
    for _ in range(index - 1):
        node = node.next
        if not node:
            raise ValueError
    if not node.next:
        raise ValueError
    node.next = node.next.next
    return linked_list

def linked_list_iter(linked_list):
    '''Lazy iterator over each node in the linked list'''
    node = linked_list
    while node is not None:
        yield node
        node = node.next


# Append to back
linked_list = None    # Start with an empty linked list
linked_list = linked_list_append(linked_list, 1)
linked_list = linked_list_append(linked_list, 2)
linked_list = linked_list_append(linked_list, 4)
print([node.value for node in linked_list_iter(linked_list)])

# Insert by index
linked_list = linked_list_insert_index(linked_list, 0, 0) # Front
print([node.value for node in linked_list_iter(linked_list)])
linked_list = linked_list_insert_index(linked_list, 3, 3) # Back
print([node.value for node in linked_list_iter(linked_list)])

# Delete "3"
linked_list = linked_list_delete(linked_list, 3)
print([node.value for node in linked_list_iter(linked_list)])

# Delete by index
linked_list = linked_list_delete_index(linked_list, 0)
print([node.value for node in linked_list_iter(linked_list)])
linked_list = linked_list_delete_index(linked_list, 1)
print([node.value for node in linked_list_iter(linked_list)])

# Delete until empty
linked_list = linked_list_delete_index(linked_list, 0)
linked_list = linked_list_delete_index(linked_list, 0)
print([node.value for node in linked_list_iter(linked_list)])

```

#### Output:

```text
[1, 2, 4]
[0, 1, 2, 4]
[0, 1, 2, 3, 4]
[0, 1, 2, 4]
[1, 2, 4]
[1, 4]
[]
```

[Linked lists](https://www.educative.io/blog/data-structures-linked-list-java-tutorial) are a sequential collection of data that uses **relational pointers on each data node** to link to the next node in the list.

Unlike arrays, linked lists do not have objective positions in the list. Instead, they have relational positions based on their surrounding nodes.

The first node in a linked list is called the **head node,** and the final is called the **tail node**, which has a `null` pointer.

![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/5638844823633920)

![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/5638844823633920)

Linked lists can be singly or doubly linked depending if each node has just a single pointer to the next node or if it also has a second pointer to the previous node.

You can think of linked lists like a chain; individual links only have a connection to their immediate neighbors but all the links together form a larger structure.

Python does not have a built-in implementation of linked lists and therefore requires that you implement a `Node` class to hold a data value and one or more pointers.

**Advantages:**

- Efficient insertion and deletion of new elements
- Simpler to reorganize than arrays
- Useful as a starting point for advanced data structures like graphs or trees

**Disadvantages:**

- Storage of pointers with each data point increases memory usage
- Must always traverse the linked list from Head node to find a specific element

**Applications:**

- Building block for advanced data structures
- Solutions that call for frequent addition and removal of data

#### Common linked list interview questions in Python

- Print the middle element of a given linked list
- Remove duplicate elements from a sorted linked list
- Check if a singly linked list is a palindrome
- Merge K sorted linked lists
- Find the intersection point of two linked lists

{% tabs %} {% tab title="Implementation " %}

```python
"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def get_position(self, position):
        """Get an element from a particular position.
        Assume the first position is "1".
        Return "None" if position is not in the list."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(current.next==None):
                    return None
                else:
                    current=current.next
            return current
        return None

    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        current = self.head
        if(self.head):
            for i in range(position)[1:]:
                if(i==position-1):
                    after = current.next
                    current.next = new_element
                    new_element.next = after
                elif(current.next!=None):
                    current = current.next
                else:
                    return 'position out of bounds'
        pass


    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if(self.head):
            while(current.next!=None):
                if(current.next.value==value):
                    after = current.next.next
                    current.next = after
                else:
                    current = current.next

        if(self.head.value==value):
            after = self.head.next
            self.head = after
        pass

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)

# Test get_position
# Should print 3
print ll.head.next.next.value
# Should also print 3
print ll.get_position(3).value

# Test insert
ll.insert(e4,3)
# Should print 4 now
print ll.get_position(3).value

# Test delete
ll.delete(1)
# Should print 2 now
print ll.get_position(1).value
# Should print 4 now
print ll.get_position(2).value
# Should print 3 now
print ll.get_position(3).value

```

{% endtab %}

{% tab title="Simple" %}

```python
class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None

class SLinkedList:
    def __init__(self):
        self.headval = None

list1 = SLinkedList()
list1.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")
# Link first Node to second node
list1.headval.nextval = e2

# Link second Node to third node
e2.nextval = e3

```

{% endtab %}

{% tab title="Advanced" %}

```python
from __future__ import annotations

from collections.abc import Iterable, Iterator
from typing import Optional

from graph_examples.linked_lists.base_lists import (
    BaseCircularLinkedList,
    BaseLinearLinkedList,
    BaseDoublyLinkedList,
    BaseSinglyLinkedList,
)
from graph_examples.linked_lists.nodes import LinkedNode, DoublyLinkedNode, CircularLinkedNode, CircularDoublyLinkedNode
from graph_examples.linked_lists.base_nodes import T


class LinkedList(BaseLinearLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = LinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = LinkedNode(value)
            node = node.next

    def appendleft(self, value: T) -> None:
        self.head = LinkedNode(value, self.head)

    def popleft(self) -> T:
        if not self:
            raise IndexError
        node = self.head
        self.head = node.next
        return node.value

    def reverse(self) -> None:
        node = self.head
        last_node = None
        while node is not None:
            node.next, last_node, node = last_node, node, node.next
        self.head = last_node


class DoublyLinkedList(BaseLinearLinkedList[T], BaseDoublyLinkedList[T]):
    def __init__(self, values: Iterable = ()) -> None:
        values_iter = iter(values)
        try:
            self.head = DoublyLinkedNode(next(values_iter))
        except StopIteration:
            self.head = None
        node = self.head
        for value in values_iter:
            node.next = DoublyLinkedNode(value, None, node)
            node = node.next
        self.tail = node

    def __reversed__(self) -> Iterator[T]:
        node = self.tail
        while node is not None:
            yield node.value
            node = node.last

    def append(self, value: T):
        old_tail = self.tail
        self.tail = DoublyLinkedNode(value, None, old_tail)
        if old_tail is None:
            self.head = self.tail
        else:
            old_tail.next = self.tail

    def appendleft(self, value: T):
        old_head = self.head
        self.head = DoublyLinkedNode(value, old_head)
        if old_head is None:
            self.tail = self.head
        else:
            old_head.last = self.head

    def pop(self) -> T:
        if not self:
            raise IndexError
        old_tail = self.tail
        self.tail = old_tail.last
        if self.tail is None:
            self.head = None
        else:
            self.tail.next = None
        return old_tail.value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        old_head = self.head
        self.head = old_head.next
        if self.head is None:
            self.tail = None
        else:
            self.head.last = None
        return old_head.value

    def reverse(self) -> None:
        node = self.head
        self.head, self.tail = self.tail, self.head
        while node is not None:
            node.next, node.last, node = node.last, node.next, node.next


class CircularLinkedList(BaseCircularLinkedList[T], BaseSinglyLinkedList[T]):
    def __init__(self, values: Iterable[T] = ()):
        values_iter = iter(values)
        try:
            head = CircularLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularLinkedNode(value, head)
            node = node.next
        self.tail = node

    @property
    def head(self) -> CircularLinkedNode[T]:
        return self.tail.next

    @head.setter
    def head(self, node: CircularLinkedNode[T]):
        self.tail.next = node

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularLinkedNode(value)
        else:
            self.head = CircularLinkedNode(value, self.head)

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        last_node = self.tail
        while node is not self.tail:
            node.next, last_node, node = last_node, node, node.next
        self.tail.next, self.tail = last_node, self.head


class CircularDoublyLinkedList(BaseCircularLinkedList[T], BaseDoublyLinkedList[T]):
    tail: Optional[CircularDoublyLinkedNode[T]]
    head: Optional[CircularDoublyLinkedNode[T]]

    def __init__(self, values: Iterable[T] = ()) -> None:
        values_iter = iter(values)
        try:
            head = CircularDoublyLinkedNode(next(values_iter))
        except StopIteration:
            head = None
        node = head
        for value in values_iter:
            node.next = CircularDoublyLinkedNode(value, head, node)
            node = node.next
            head.last = node
        self.tail = node

    @property
    def head(self) -> CircularDoublyLinkedNode[T]:
        return self.tail.next

    def __reversed__(self) -> Iterator[T]:
        if not self:
            return
        yield self.tail.value
        node = self.tail.last
        while node is not self.tail:
            yield node.value
            node = node.last

    def append(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.tail.last.next = self.tail
            self.head.last = self.tail

    def appendleft(self, value: T) -> None:
        if not self:
            self.tail = CircularDoublyLinkedNode(value)
        else:
            self.tail.next = CircularDoublyLinkedNode(value, self.head, self.tail)
            self.head.next.last = self.tail.next

    def pop(self) -> T:
        if not self:
            raise IndexError
        value = self.tail.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.last.next, self.head.last, self.tail = self.head, self.tail.last, self.tail.last
        return value

    def popleft(self) -> T:
        if not self:
            raise IndexError
        value = self.head.value
        if self.tail is self.head:
            self.tail = None
        else:
            self.tail.next = self.tail.next.next
            self.tail.next.last = self.tail
        return value

    def reverse(self) -> None:
        if not self:
            return
        node = self.head
        while node is not self.tail:
            node.next, node.last, node = node.last, node.next, node.next
        self.tail.next, self.tail.last, self.tail = self.tail.last, self.tail.next, self.tail.next

```

{% endtab %} {% endtabs %}

A linked list is similar to an array, it holds values. However, links in a linked list do not have indexes.

- This is an example of a double ended, doubly linked list.
- Each link references the next link and the previous one.
- A Doubly Linked List \(DLL\) contains an extra pointer, typically called previous

  pointer, together with next pointer and data which are there in singly linked list.

  - Advantages over SLL - It can be traversed in both forward and backward direction.

    Delete operation is more efficient

```python
"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""
class ListNode:
  def __init__(self, value, prev=None, next=None):
    self.value = value
    self.prev = prev
    self.next = next

  """Wrap the given value in a ListNode and insert it
  after this node. Note that this node could already
  have a next node it is point to."""
  def insert_after(self, value):
    current_next = self.next
    self.next = ListNode(value, self, current_next)
    if current_next:
      current_next.prev = self.next

  """Wrap the given value in a ListNode and insert it
  before this node. Note that this node could already
  have a previous node it is point to."""
  def insert_before(self, value):
    current_prev = self.prev
    self.prev = ListNode(value, current_prev, self)
    if current_prev:
      current_prev.next = self.prev

  """Rearranges this ListNode's previous and next pointers
  accordingly, effectively deleting this ListNode."""
  def delete(self):
    if self.prev:
      self.prev.next = self.next
    if self.next:
      self.next.prev = self.prev

"""Our doubly-linked list class. It holds references to
the list's head and tail nodes."""
class DoublyLinkedList:
  def __init__(self, node=None):
    self.head = node
    self.tail = node
    self.length = 1 if node is not None else 0

  def __len__(self):
    return self.length

  def add_to_head(self, value):
    pass

  def remove_from_head(self):
    pass

  def add_to_tail(self, value):
    pass

  def remove_from_tail(self):
    pass

  def move_to_front(self, node):
    pass

  def move_to_end(self, node):
    pass

  def delete(self, node):
    pass

  def get_max(self):
    pass

```

Test:

```python
import unittest
from doubly_linked_list import ListNode
from doubly_linked_list import DoublyLinkedList

class DoublyLinkedListTests(unittest.TestCase):
  def setUp(self):
    self.node = ListNode(1)
    self.dll = DoublyLinkedList(self.node)

  def test_list_remove_from_tail(self):
    self.dll.remove_from_tail()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(33)
    self.assertEqual(self.dll.head.value, 33)
    self.assertEqual(self.dll.tail.value, 33)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 33)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(68)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_tail(), 68)
    self.assertEqual(len(self.dll), 0)

  def test_list_remove_from_head(self):
    self.dll.remove_from_head()
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_head(2)
    self.assertEqual(self.dll.head.value, 2)
    self.assertEqual(self.dll.tail.value, 2)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 2)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_head(55)
    self.assertEqual(len(self.dll), 1)
    self.assertEqual(self.dll.remove_from_head(), 55)
    self.assertEqual(len(self.dll), 0)

  def test_list_add_to_tail(self):
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(len(self.dll), 1)

    self.dll.add_to_tail(30)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(self.dll.tail.value, 30)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(20)
    self.assertEqual(self.dll.tail.prev.value, 30)
    self.assertEqual(self.dll.tail.value, 20)
    self.assertEqual(len(self.dll), 3)

  def test_node_delete(self):
    node_1 = ListNode(3)
    node_2 = ListNode(4)
    node_3 = ListNode(5)

    node_1.next = node_2
    node_2.next = node_3
    node_2.prev = node_1
    node_3.prev = node_2

    node_2.delete()

    self.assertEqual(node_1.next, node_3)
    self.assertEqual(node_3.prev, node_1)

  def test_node_insert_before(self):
    self.node.insert_before(0)
    self.assertEqual(self.node.prev.value, 0)

  def test_list_add_to_head(self):
    self.assertEqual(self.dll.head.value, 1)

    self.dll.add_to_head(10)
    self.assertEqual(self.dll.head.value, 10)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

  def test_node_insert_after(self):
    self.node.insert_after(2)
    self.assertEqual(self.node.next.value, 2)

  def test_list_move_to_end(self):
    self.dll.add_to_head(40)
    self.assertEqual(self.dll.tail.value, 1)
    self.assertEqual(self.dll.head.value, 40)

    self.dll.move_to_end(self.dll.head)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_tail(4)
    self.dll.move_to_end(self.dll.head.next)
    self.assertEqual(self.dll.tail.value, 40)
    self.assertEqual(self.dll.tail.prev.value, 4)
    self.assertEqual(len(self.dll), 3)

  def test_list_move_to_front(self):
    self.dll.add_to_tail(3)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 3)

    self.dll.move_to_front(self.dll.tail)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 1)
    self.assertEqual(len(self.dll), 2)

    self.dll.add_to_head(29)
    self.dll.move_to_front(self.dll.head.next)
    self.assertEqual(self.dll.head.value, 3)
    self.assertEqual(self.dll.head.next.value, 29)
    self.assertEqual(len(self.dll), 3)

  def test_list_delete(self):
    self.dll.delete(self.node)
    self.assertIsNone(self.dll.head)
    self.assertIsNone(self.dll.tail)
    self.assertEqual(len(self.dll), 0)

    self.dll.add_to_tail(1)
    self.dll.add_to_head(9)
    self.dll.add_to_tail(6)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 1)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 2)

    self.dll.delete(self.dll.head)
    self.assertEqual(self.dll.head.value, 6)
    self.assertEqual(self.dll.tail.value, 6)
    self.assertEqual(len(self.dll), 1)

  def test_get_max(self):
    self.assertEqual(self.dll.get_max(), 1)
    self.dll.add_to_tail(100)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(55)
    self.assertEqual(self.dll.get_max(), 100)
    self.dll.add_to_tail(101)
    self.assertEqual(self.dll.get_max(), 101)

if __name__ == '__main__':
  unittest.main()
```
