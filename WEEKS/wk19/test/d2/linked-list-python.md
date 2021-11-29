# How to create a Linked List in Python

> How to create a Linked List in Python

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/cdn-cgi/image/f=auto,fit=cover,w=32,h=32/v2api/author/profile/6547532599525376/image/5933301341618176 'Edpresso Team')Edpresso Team

A [**linked list**](https://www.educative.io/edpresso/what-is-a-linked-list) is a data structure made of a chain of _node_ objects. Each **node** contains a value and a pointer to the next node in the chain.

Linked lists are preferred over arrays due to their dynamic size and ease of insertion and deletion properties.

The **head pointer** points to the first node, and the last element of the list points to `null`. When the list is empty, the head pointer points to `null`.

![svg viewer](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/api/edpresso/shot/5077575695073280/image/5192456339456000)

## Linked lists in Python

Original Python does not ship with a built-in linked list data structure like the one seen in [Java](https://www.educative.io/edpresso/what-is-linkedlist-in-java).

Let’s see how we can create our own implementation of a standard _class-based_ [singly linked list](https://www.educative.io/edpresso/what-is-a-singly-linked-list) in Python.

### 1\. Start with a single node

Let’s start with a single node since linking several nodes gives us a complete list. For this, we make a `Node` class that holds some `data` and a single pointer `next`, that will be used to point to the next `Node` type object in the Linked List.

Enter to Rename, Shift+Enter to Preview

### 2\. Join nodes to get a linked list

The next step is to join multiple single nodes containing `data` using the `next` pointers, and have a single `head` pointer pointing to a complete instance of a Linked List.

Using the `head` pointer, we will be able to traverse the whole list, even perform all kinds of list manipulations while we are at it.

For this, we create a `LinkedList` class with a single `head` pointer:

Enter to Rename, Shift+Enter to Preview

### 3\. Add required methods to the `LinkedList` class

Last but not least, we can add various linked list manipulation methods in our implementation.

Let’s have a look at the _insertion_ and _print_ methods for our `LinkedList` implementation below:

\# A single node of a singly linked list

```py

class Node:
  # constructor
  def \_\_init\_\_(self, data = None, next=None):
    self.data = data
    self.next = next

# A Linked List class with a single head node
class LinkedList:
  def \_\_init\_\_(self):
    self.head = None

  # insertion method for the linked list
  def insert(self, data):
    newNode = Node(data)
    if(self.head):
      current = self.head
      while(current.next):
        current = current.next
      current.next = newNode
    else:
      self.head = newNode

  # print method for the linked list
  def printLL(self):
    current = self.head
    while(current):
      print(current.data)
      current = current.next

# Singly Linked List with insertion and print methods
LL = LinkedList()
LL.insert(3)
LL.insert(4)
LL.insert(5)
LL.printLL()
```
