# Queue

### Queues in Python

[Queues](https://www.educative.io/blog/data-structures-stack-queue-java-tutorial) are a linear data structure that store data in a “first in, first out” \(FIFO\) order. Unlike arrays, you cannot access elements by index and instead can **only pull the next oldest element**. This makes it great for order-sensitive tasks like online order processing or voicemail storage.

You can think of a queue as a line at the grocery store; the cashier does not choose who to check out next but rather processes the person who has stood in line the longest.

We could use a Python list with `append()` and `pop()` methods to implement a queue. However, this is inefficient because lists must shift all elements by one index whenever you add a new element to the beginning.

Instead, it’s best practice to use the `deque` class from Python’s `collections` module. Deques are optimized for the append and pop operations. The deque implementation also allows you to create double-ended queues, which can access both sides of the queue through the `popleft()` and `popright()` methods.

**Advantages:**

- Automatically orders data chronologically
- Scales to meet size requirements
- Time efficient with `deque` class

**Disadvantages:**

- Can only access data on the ends

**Applications:**

- Operations on a shared resource like a printer or [CPU core](https://www.educative.io/blog/beginners-guide-to-computers-and-programming)
- Serve as temporary storage for batch systems
- Provides an easy default order for tasks of equal importance

#### Common queue interview questions in Python

- Reverse first k elements of a queue
- Implement a queue using a linked list
- Implement a stack using a queue
- {% tabs %} {% tab title="Implementation " %}

```python
"""Make a Queue class using a list!
Hint: You can use any Python list method
you'd like! Try to write each one in as
few lines as possible.
Make sure you pass the test cases too!"""

class Queue:
    def __init__(self, head=None):
        self.storage = [head]

    def enqueue(self, new_element):
        if(self.storage):
            self.storage.append(new_element)
        else:
            self.storage = [new_element]
        return new_element

    def peek(self):
        if(self.storage):
            return self.storage[0]
        else:
            return None

    def dequeue(self):
        if(self.storage):
            return self.storage.pop(0)
        else:
            return None

# Setup
q = Queue(1)
q.enqueue(2)
q.enqueue(3)

# Test peek
# Should be 1
print q.peek()

# Test dequeue
# Should be 1
print q.dequeue()

# Test enqueue
q.enqueue(4)
# Should be 2
print q.dequeue()
# Should be 3
print q.dequeue()
# Should be 4
print q.dequeue()
q.enqueue(5)
# Should be 5
print q.peek()

```

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %} {% endtabs %}

```python
"""Make a Queue class using a list!
Hint: You can use any Python list method
you'd like! Try to write each one in as
few lines as possible.
Make sure you pass the test cases too!"""

class Queue:
    def __init__(self, head=None):
        self.storage = [head]

    def enqueue(self, new_element):
        if(self.storage):
            self.storage.append(new_element)
        else:
            self.storage = [new_element]
        return new_element

    def peek(self):
        if(self.storage):
            return self.storage[0]
        else:
            return None

    def dequeue(self):
        if(self.storage):
            return self.storage.pop(0)
        else:
            return None

# Setup
q = Queue(1)
q.enqueue(2)
q.enqueue(3)

# Test peek
# Should be 1
print q.peek()

# Test dequeue
# Should be 1
print q.dequeue()

# Test enqueue
q.enqueue(4)
# Should be 2
print q.dequeue()
# Should be 3
print q.dequeue()
# Should be 4
print q.dequeue()
q.enqueue(5)
# Should be 5
print q.peek()

```
