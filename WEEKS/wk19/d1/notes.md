# Objective 01 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a linked list

**Why Linked List?**\
Arrays can be used to store linear data of similar types, but arrays have the following limitations.\
**1)** The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance. Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.\
**2)** Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to be shifted.\
For example, in a system, if we maintain a sorted list of IDs in an array id[].\
id[] = [1000, 1010, 1050, 2000, 2040].\
And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).\
Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete 1010 in id[], everything after 1010 has to be moved.\
**Advantages over arrays**\
**1)** Dynamic size\
**2)** Ease of insertion/deletion\
**Drawbacks:**\
**1)** Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it [here](https://www.geeksforgeeks.org/binary-search-on-singly-linked-list/).\
**2)** Extra memory space for a pointer is required with each element of the list.\
**3)** Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.\
**Representation:**\
A linked list is represented by a pointer to the first node of the linked list. The first node is called the head. If the linked list is empty, then the value of the head is NULL.\
Each node in a list consists of at least two parts:\

1. data\
2. Pointer (Or Reference) to the next node\
   In C, we can represent a node using structures. Below is an example of a linked list node with integer data.\
   In Java or C#, LinkedList can be represented as a class and a Node as a separate class. The LinkedList class contains a reference of Node class type.

## Overview

What is a linked list, and how is it different from an array? How efficient or inefficient are its operations? What are its strengths and weaknesses? How can I construct and interact with a linked list? By the end of this objective, you will be able to answer all of these questions confidently.

## Follow Along

### Basic Properties of a Linked List

A linked list is a simple, linear data structure used to store a collection of elements. Unlike an array, each element in a linked list does not have to be stored contiguously in memory.

For example, in an array, each element of the list `[43, 32, 63` is stored in memory like so:

![https://tk-assets.lambdaschool.com/61d549f9-9f66-4d1f-9572-2d43098c2767_arrays-stored-in-memory.001.jpeg](https://tk-assets.lambdaschool.com/61d549f9-9f66-4d1f-9572-2d43098c2767_arrays-stored-in-memory.001.jpeg)

`43` is the first item in the collection and is therefore stored in the first slot. `32` is the second item and is stored immediately next to `43` in memory. This pattern continues on and on.

In a linked list, each element of the list could be stored like so:

![https://tk-assets.lambdaschool.com/72151497-7a5e-4940-835c-d8beb9c88922_linked-list-in-memory.001.jpeg](https://tk-assets.lambdaschool.com/72151497-7a5e-4940-835c-d8beb9c88922_linked-list-in-memory.001.jpeg)

You can see here that the elements can be spaced out in memory. Because the elements are not stored contiguously, each element in memory must contain information about the next element in the list. The first item stores the data `43` and the location in memory (`*3`) for the next item in the list. This example is simplified; the second item in the list `32` could be located anywhere in memory. It could even come before the first item in memory.

You might also be wondering what types of data can be stored in a linked list. Pretty much any type of data can be stored in a linked list. Strings, numbers, booleans, and other data structures can be stored. You should not feel limited using a linked list based on what type of data you are trying to store.

Are the elements in a linked list are sorted or unsorted? The elements in a linked list can be either sorted or unsorted. There is nothing about the data structure that forces the elements to be sorted or unsorted. You cannot determine if a linked list's elements are sorted by determining they are stored in a linked list.

What about duplicates? Can a linked list contain them? Linked lists can contain duplicates. There is nothing about the linked list data structure that would prevent duplicates from being stored. When you encounter a linked list, you should know that it can contain duplicates.

Are there different types of linked lists? If so, what are they? There are three types of linked lists: singly linked list (SLL), doubly linked list (DLL), and circular linked list. All linked lists are made up of nodes where each node stores the data and also information about other nodes in the linked list.

Each singly linked list node stores the data and a pointer where the next node in the list is located. Because of this, you can only navigate in the forward direction in a singly linked list. To traverse an SLL, you need a reference to the first node called the head. From the head of the list, you can visit all the other nodes using the next pointers.

The difference between an SLL and a doubly linked list (DLL) is that each node in a DLL also stores a reference to the previous item. Because of this, you can navigate forward and backward in the list. A DLL also usually stores a pointer to the last item in the list (called the tail).

A Circular Linked List links the last node back to the first node in the list. This linkage causes a circular traversal; when you get to the end of the list, the next item will be back at the beginning of the list. Each type of linked list is similar but has small distinctions. When working with linked lists, it's essential to know what type of linked list.

### Time and Space Complexity

#### Lookup

To look up an item by index in a linked list is linear time (`O(n)`). To traverse through a linked list, you have to start with the head reference to the node and then follow each subsequent pointer to the next item in the chain. Because each item in the linked list is not stored contiguously in memory, you cannot access a specific index of the list using simple math. The distance in memory between one item and the next is varied and unknown.

#### Append

Adding an item to a linked list is constant time (`O(1)`). We always have a reference point to the tail of the linked list, so we can easily insert an item after the tail.

#### Insert

In the worst case, inserting an item in a linked list is linear time (`O(n)`). To insert an item at a specific index, we have to traverse --- starting at the head --- until we reach the desired index.

#### Delete

In the worst case, deleting an item in a linked list is linear time (`O(n)`). Just like insertion, deleting an item at a specific index means traversing the list starting at the head.

#### Space

The space complexity of a linked list is linear (`O(n)`). Each item in the linked list will take up space in memory.

### Strengths of a Linked List

The primary strength of a linked list is that operations on the linked list's ends are fast. This is because the linked list always has a reference to the head (the first node) and the tail (the last node) of the list. Because it has a reference, doing anything on the ends is a constant time operation (`O(1)`) no matter how many items are stored in the linked list. Additionally, just like a dynamic array, you don't have to set a capacity to a linked list when you instantiate it. If you don't know the size of the data you are storing, or if the amount of data is likely to fluctuate, linked lists can work well. One benefit over a dynamic array is that you don't have doubling appends. This is because each item doesn't have to be stored contiguously; whenever you add an item, you need to find an open spot in memory to hold the next node.

### Weaknesses of a Linked List

The main weakness of a linked list is not efficiently accessing an "index" in the middle of the list. The only way that the linked list can get to the seventh item in the linked list is by going to the head node and then traversing one node at a time until you arrive at the seventh node. You can't do simple math and jump from the first item to the seventh.

### What data structures are built on linked lists?

Remember that linked lists have efficient operations on the ends (head and tail). There are two structures that only operate on the ends; queues and stacks. So, most queue or stack implementations use a linked list as their underlying data structure.

### Why is a linked list different than an array? What problem does it solve?

We can see the difference between how a linked list and an array are stored in memory, but why is this important? Once you see the problem with the way arrays are stored in memory, the benefits of a linked list become clearer.

The primary problem with arrays is that they hold data contiguously in memory. Remember that having the data stored contiguously is the feature that gives them quick lookups. If I know where the first item is stored, I can use simple math to figure out where the fifth item is stored. The reason that this is a problem is that it means that when you create an array, you either have to know how much space in memory you need to set aside, or you have to set aside a bunch of extra memory that you might not need, just in case you do need it. In other words, you can be space-efficient by only setting aside the memory you need at the moment. But, in doing that, you are setting yourself up for low time efficiency if you run out of room and need to copy all of your elements to a newer, bigger array.

With a linked list, the elements are not stored side-by-side in memory. Each element can be stored anywhere in memory. In addition to storing the data for that element, each element also stores a pointer to the memory location of the next element in the list. The elements in a linked list do not have an index. To get to a specific element in a linked list, you have to start at the head of the linked list and work your way through the list, one element at a time, to reach the specific element you are searching for. Now you can see how a linked list solves some of the problems that the array data structure has.

### How do you represent a linked list graphically and in Python code?

Let's look at how we can represent a singly linked list graphically and in Python code. Seeing a singly linked list represented graphically and in code can help you understand it better.

How do you represent a singly linked list graphically? Let's say you wanted to store the numbers 1, 2, and 3. You would need to create three nodes. Then, each of these nodes would be linked together using the pointers.

![https://tk-assets.lambdaschool.com/baa6486b-9322-481e-95be-c660640c4966_linked-list-graphical-representation.001.jpeg](https://tk-assets.lambdaschool.com/baa6486b-9322-481e-95be-c660640c4966_linked-list-graphical-representation.001.jpeg)

Notice that the last element or node in the linked list does not have a pointer to any other node. This fact is how you know you are at the end of the linked list.

What does a singly linked list implementation look like in Python? Let's start by writing a `LinkedListNode` class for each element in the linked list.

```PY
class LinkedListNode:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
```

Now, we need to build out the class for the `LinkedList` itself:

```PY
class LinkedList:
    def __init__(self, head=None):
        self.head = head
```

Our class is super simple so far and only includes an initialization method. Let's add an `append` method so that we can add nodes to the end of our list:

```PY
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
```

Now, let's use our simple class definitions for `LinkedListNode` and `LinkedList` to create a linked list of elements `1`, `2`, and `3`.

```PY
>>> a = LinkedListNode(1)
>>> my_ll = LinkedList(a)
>>> my_ll.append(2)
>>> my_ll.append(3)
>>> my_ll.head.data
1
>>> my_ll.head.next.data
2
>>> my_ll.head.next.next.data
3
>>>
```

You must be able to understand and interact with linked lists. You now know the basic properties and types of linked lists, what makes a linked list different from an array, what problem it solves, and how to represent them both graphically and in code. You now know enough about linked lists that you should be able to solve algorithmic code challenges that require a basic understanding of linked lists.

## Challenge

1.  Draw out a model of a singly-linked list that stores the following integers in order: `3,2,6,5,7,9`.
2.  Draw out a model of a doubly-linked list that stores the following integers in order: `5,2,6,4,7,8`.

## Additional Resources

- [https://www.cs.cmu.edu/~fp/courses/15122-f15/lectures/10-linkedlist.pdf (Links to an external site.)](https://www.cs.cmu.edu/~fp/courses/15122-f15/lectures/10-linkedlist.pdf)
- [https://www.youtube.com/watch?v=njTh_OwMljA (Links to an external site.)](https://www.youtube.com/watch?v=njTh_OwMljA)[![](https://lambdaschool.instructure.com/images/play_overlay.png)](https://www.youtube.com/watch?v=njTh_OwMljA)

```py
# -*- coding: utf-8 -*-
"""Linked Lists.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/17MD2e14fi7n95HTvy1K_ttM0FZSYnLmm

# Linked Lists
- Non Contiguous abstract Data Structure
- Value (can be any value for our use we will just use numbers)
- Next (A pointer or reference to the next node in the list)

```

L1 = Node(34) L1.next = Node(45) L1.next.next = Node(90)

# while the current node is not none

# do something with the data

# traverse to next node

L1 = [34]-> [45]-> [90] -> None

Node(45) Node(90)

```py
"""

class LinkedListNode:
  """
    Simple Singly Linked List Node Class
    value -> int
    next -> LinkedListNode
  """
  def __init__(self, value):
    self.value = value
    self.next = None

  def add_node(self, value):
    # set current as a ref to self
    current = self
    # thile there is still more nodes
    while current.next is not None:
      # traverse to the next node
      current = current.next
    # create a new node and set the ref from current.next to the new node
    current.next = LinkedListNode(value)

  def insert_node(self, value, target):
    # create a new node with the value provided
    new_node = LinkedListNode(value)
    # set a ref to the current node
    current = self
    # while the current nodes value is not the target
    while current.value != target:
      # traverse to the next node
      current = current.next
    # set the new nodes next pointer to point toward the current nodes next pointer
    new_node.next = current.next
    # set the current nodes next to point to the new node
    current.next = new_node

ll_storage = []
L1 = LinkedListNode(34)
L1.next = LinkedListNode(45)
L1.next.next = LinkedListNode(90)

def print_ll(linked_list_node):
  current = linked_list_node
  while current is not None:
    print(current.value)
    current = current.next

def add_to_ll_storage(linked_list_node):
  current = linked_list_node
  while current is not None:
    ll_storage.append(current)
    current = current.next

L1.add_node(12)
print_ll(L1)
L1.add_node(24)
print()
print_ll(L1)
print()
L1.add_node(102)
print_ll(L1)
L1.insert_node(123, 90)
print()
print_ll(L1)
L1.insert_node(678, 34)
print()
print_ll(L1)
L1.insert_node(999, 102)
print()
print_ll(L1)

"""# CODE 9571"""

class LinkedListNode:
  """
    Simple Doubly Linked List Node Class
    value -> int
    next -> LinkedListNode
    prev -> LinkedListNode
  """
  def __init__(self, value):
    self.value = value
    self.next = None
    self.prev = None

"""
Given a reference to the head node of a singly-linked list, write a function
that reverses the linked list in place. The function should return the new head
of the reversed list.
In order to do this in O(1) space (in-place), you cannot make a new list, you
need to use the existing nodes.
In order to do this in O(n) time, you should only have to traverse the list
once.
*Note: If you get stuck, try drawing a picture of a small linked list and
running your function by hand. Does it actually work? Also, don't forget to
consider edge cases (like a list with only 1 or 0 elements).*
          cn         p
        None        [1] -> [2] ->[3] -> None


- setup a current variable pointing to the head of the list
- set up a prev variable pointing to None
- set up a next variable pointing to None

- while the current ref is not none
  - set next to the current.next
  - set the current.next to prev
  - set prev to current
  - set current to next

- return prev

"""
class LinkedListNode():
    def __init__(self, value):
        self.value = value
        self.next  = None

def reverse(head_of_list):
  current = head_of_list
  prev = None
  next = None

  while current:
    next = current.next
    current.next = prev
    prev = current
    current = next

  return prev

class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

[
 0["Lou", 41] -> ["Bob", 41] -> None,
 1["Steve", 41] -> None,
 2["Jen", 41] -> None,
 3["Dave", 41] -> None,
 4None,
 5["Hector", 34]-> None,
 6["Lisa", 41] -> None,
 7None,
 8None,
 9None
]
class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    Implement this.
    """

    def __init__(self, capacity):
                self.capacity = capacity  # Number of buckets in the hash table
        self.storage = [None] * capacity
        self.item_count = 0


    def get_num_slots(self):
        """
        Return the length of the list you're using to hold the hash
        table data. (Not the number of items stored in the hash table,
        but the number of slots in the main list.)
        One of the tests relies on this.
        Implement this.
        """
        # Your code here


    def get_load_factor(self):
        """
        Return the load factor for this hash table.
        Implement this.
        """
        return len(self.storage)


    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        Implement this, and/or FNV-1.
        """
        str_key = str(key).encode()

        hash = FNV_offset_basis_64

        for b in str_key:
            hash *= FNV_prime_64
            hash ^= b
            hash &= 0xffffffffffffffff  # 64-bit hash

        return hash


    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        between within the storage capacity of the hash table.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        """
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        Implement this.
        """
        index = self.hash_index(key)

        current_entry = self.storage[index]

        while current_entry is not None and current_entry.key != key:
            current_entry = current_entry.next

        if current_entry is not None:
            current_entry.value = value
        else:
            new_entry = HashTableEntry(key, value)
            new_entry.next = self.storage[index]
            self.storage[index] = new_entry


    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        Implement this.
        """
        # Your code here


    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        Implement this.
        """
        # Your code here


```
