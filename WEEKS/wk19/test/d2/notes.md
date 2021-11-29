# Objective 01 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a queue

## Overview

A queue is a data structure that stores its items in a first-in, first-out (FIFO) order. That is precisely why it is called a queue. It functions just like a queue (or a line) would in everyday life. If you are the first to arrive at the check-in desk at a hotel, you will be the first to be served (and therefore, the first person to exit the queue). So, in other words, the items that are added to the queue first are the first items to be removed from the queue.

## Follow Along

### Time and Space Complexity

#### Enqueue

To enqueue an item (add an item to the back of the queue) takes `O(1)` time.

#### Dequeue

To dequeue an item (remove an item from the front of the queue) takes `O(1)` time.

#### Peek

To peek at an item (inspect the item from the front of the queue without removing it) takes `O(1)` time.

#### Space

The space complexity of a queue is linear (`O(n)`). Each item in the queue will take up space in memory.

### Strengths

The primary strength of a queue is that all of its operations are fast (take `O(1)` time).

### Weaknesses

There are no weaknesses in this data structure. The reason is that it is a very targeted data structure designed to do a few things well.

### When are queues useful?

Queues are useful data structures in any situation where you want to make sure things are processes in a FIFO order. Think of a web server. The server might be trying to service thousands of page requests per minute. It would make the most sense for the server to process and respond to the requests in the same order that they were received. That way, the first client to request a page is the first client to receive a response. Also, you'll learn soon enough about traversing hierarchical data structures. One of the ways you do that is called a breadth-first traversal. To conduct a breadth-first traversal, a queue can be used.

## Challenge

1.  In your own words, explain the strengths of a queue data structure.
2.  If a queue only allows operations at the ends (front and back), what other data structure would be a perfect one to build the queue?

## Additional Resources

- [https://www.geeksforgeeks.org/queue-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/queue-data-structure/)

---

---

# Objective 02 - Recall the time and space complexity, the strengths and weaknesses, and the common uses of a stack

## Overview

A stack data structure handles information in a last-in, first-out order. This means that the last item added to the storage will be the first item removed from the storage. A stack is like having a paper tray inbox on your desk. Anytime a person walks by and drops a piece of paper or a letter in your inbox, it will go on the top of your inbox. So, when you process your inbox, the first item you would remove from the top of the stack of papers would be the last item added to it.

## Follow Along

### Time and Space Complexity

#### Push

To push an item (add an item to the top of the stack) takes `O(1)` time.

#### Pop

To pop an item (remove an item from the top of the stack) takes `O(1)` time.

#### Peek

To peek at an item (inspect the item from the top of the stack without removing it) takes `O(1)` time.

#### Space

The space complexity of a stack is linear (`O(n)`). Each item in the stack will take up space in memory.

### Strengths

The primary strength of a stack is that all of its operations are fast (take `O(1)` time).

### Weaknesses

There are no weaknesses in this data structure. The reason is that it is a very targeted data structure designed to do a few things well.

### When are stacks useful?

Stacks can be useful in any situation where you desire a LIFO order. One common use-case is for parsing strings. Let's say you wanted to parse a string to ensure that all the parentheses in your string are correctly nested. A stack could be useful for this. When you encounter an opening parenthesis, you add it to the stack. When you encounter a closing parenthesis, you remove the top opening parenthesis from the stack. After going through all the characters in the string, the stack should be empty. If it isn't or if you try to remove an item from an empty stack, you'll know that the parentheses were not correctly nested.

Additionally, function calls and execution contexts are managed on a call stack. When you call a function, it's added to the call stack. When it returns, it gets popped off of the stack. Last, an iterative depth-first-search can be done using a stack.

## Challenge

1.  In your own words, explain the strengths of a stack data structure.
2.  What two data structures would work well for implementing a stack?

## Additional Resources

- [https://www.geeksforgeeks.org/stack-data-structure/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure/)

---

---

# Objective 03 - Implement a queue using a linked list

## Overview

To implement a queue, we need to maintain two pointers. One pointer will point at the front (the first item) of the queue, and another pointer will point at the rear (the last item) of the queue.

Additionally, we need to have two methods available: `enqueue()` and `dequeue()`. `enqueue()` adds a new item after the rear. `dequeue()` removes the front node and resets the front pointer to the next node.

## Follow Along

We will use a `LinkedListNode` class for each of the items in the queue.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None
```

For our `Queue` class, we first need to define an `__init__` method. This method should initialize our instance variables `front` and `rear`.

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
```

Next, we need to define our `enqueue` method:

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node
```

Now, we need to define our `dequeue` method:

```PY
class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
    def enqueue(self, item):
        new_node = LinkedListNode(item)
        # check if queue is empty
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            # add new node to rear
            self.rear.next = new_node
            # reassign rear to new node
            self.rear = new_node
    def dequeue(self):
        # check if queue is empty
        if self.front is not None:
            # keep copy of old front
            old_front = self.front
            # set new front
            self.front = old_front.next

        # check if the queue is now empty
        if self.front is None:
            # make sure rear is also None
            self.rear = None

        return old_front
```

Now we have a `Queue` class that uses a singly-linked list as the underlying data structure.

## Challenge

## Additional Resources

- <https://www.geeksforgeeks.org/queue-linked-list-implementation/>

---

---

# Objective 04 - Implement a stack using a dynamic array

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a dynamic array (a list in Python), the `push` method appends to the array, and the `pop` method removes the last element from the array.

## Follow Along

First we need to define our `Stack` class and define the `__init__` method:

```PY
class Stack:
    def __init__(self):
        self.data = []
```

Now we need to define a `push` method to add an item to the top of our stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)
```

Next, we need to define a `pop` method to remove the top item from the stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"
```

## Challenge

## Additional Resources

- [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

---

---

Immersive Reader

# Objective 04 - Implement a stack using a dynamic array

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a dynamic array (a list in Python), the `push` method appends to the array, and the `pop` method removes the last element from the array.

## Follow Along

First we need to define our `Stack` class and define the `__init__` method:

```PY
class Stack:
    def __init__(self):
        self.data = []
```

Now we need to define a `push` method to add an item to the top of our stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)
```

Next, we need to define a `pop` method to remove the top item from the stack:

```PY
class Stack:
    def __init__(self):
        self.data = []

    def push(self, item):
        self.data.append(item)

    def pop(self):
        if len(self.data) > 0:
            return self.data.pop()
        return "The stack is empty"
```

## Challenge

## Additional Resources

- [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)

---

---

# Objective 05 - Implement a stack using a linked list

## Overview

There are two common ways to implement a stack. One is by using a linked list, and the other is by using a dynamic array. Both of these implementations work well.

In the implementation that uses a linked list, the `push` method inserts a new node at the linked list's head, and the `pop` method removes the node at the linked list's head.

## Follow Along

First, let's define our `Stack` class and its `__init__` method:

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
```

Now we need to define our `push` method to add items to the top of the stack.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        # create new node with data
        new_node = LinkedListNode(data)
        # set current top to new node's next
        new_node.next = self.top
        # reset the top pointer to the new node
        self.top = new_node
```

Next, we need to define our `pop` method to get items off the top of our stack.

```PY
class LinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        # create new node with data
        new_node = LinkedListNode(data)
        # set current top to new node's next
        new_node.next = self.top
        # reset the top pointer to the new node
        self.top = new_node

    def pop(self):
        # make sure stack is not empty
        if self.top is not None:
            # store popped node
            popped_node = self.top
            # reset top pointer to next node
            self.top = popped_node.next
            # return the value from the popped node
            return popped_node.data
```

## Challenge

## Additional Resources

- [https://www.geeksforgeeks.org/stack-data-structure-introduction-program/ (Links to an external site.)](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)
