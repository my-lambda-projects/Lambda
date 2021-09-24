# Queue Data Structure | Studytonight

> Queue is an abstract data type or a linear data structure or FIFO data structure. This tutorial will help you understand Queue data structure, its implementation and its application and usage in real world.

**Queue** is also an abstract data type or a linear data structure, just like [stack data structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/stack-data-structure), in which the first element is inserted from one end called the **REAR**(also called **tail**), and the removal of existing element takes place from the other end called as **FRONT**(also called **head**).

Before you continue reading about queue data structure, check these topics before to understand it clearly:

- [Data Structures and Algorithms](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/introduction-to-data-structures)
- [Stack Data Structure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/stack-data-structure)

This makes queue as **FIFO**(First in First Out) data structure, which means that element inserted first will be removed first.

Which is exactly how queue system works in real world. If you go to a ticket counter to buy movie tickets, and are first in the queue, then you will be the first one to get the tickets. Right? Same is the case with Queue data structure. Data inserted first, will leave the queue first.

The process to add an element into queue is called **Enqueue** and the process of removal of an element from queue is called **Dequeue**.

![Introduction to Queue](https://static.studytonight.com/data-structures/images/introduction-to-queue.png)

---

## Basic features of Queue

1.  Like stack, queue is also an ordered list of elements of similar data types.
2.  Queue is a FIFO( First in First Out ) structure.
3.  Once a new element is inserted into the Queue, all the elements inserted before the new element in the queue must be removed, to remove the new element.
4.  `peek( )` function is oftenly used to return the value of first element without dequeuing it.

---

## Applications of Queue

Queue, as the name suggests is used whenever we need to manage any group of objects in an order in which the first one coming in, also gets out first while the others wait for their turn, like in the following scenarios:

1.  Serving requests on a single shared resource, like a printer, CPU task scheduling etc.
2.  In real life scenario, Call Center phone systems uses Queues to hold people calling them in an order, until a service representative is free.
3.  Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive i.e First come first served.

---

## Implementation of Queue Data Structure

Queue can be implemented using an [Array](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/c/arrays-in-c.php), [Stack](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/stack-data-structure) or [Linked List](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/introduction-to-linked-list). The easiest way of implementing a queue is by using an Array.

Initially the **head**(FRONT) and the **tail**(REAR) of the queue points at the first index of the array (starting the index of array from `0`). As we add elements to the queue, the **tail** keeps on moving ahead, always pointing to the position where the next element will be inserted, while the **head** remains at the first index.

![implementation of queue](https://static.studytonight.com/data-structures/images/implementation-of-queue.png)

When we remove an element from Queue, we can follow two possible approaches (mentioned \[A\] and \[B\] in above diagram). In \[A\] approach, we remove the element at **head** position, and then one by one shift all the other elements in forward position.

In approach \[B\] we remove the element from **head** position and then move **head** to the next position.

In approach \[A\] there is an **overhead of shifting the elements one position forward** every time we remove the first element.

In approach \[B\] there is no such overhead, but whenever we move head one position ahead, after removal of first element, the **size on Queue is reduced by one space** each time.

---

### Algorithm for ENQUEUE operation

1.  Check if the queue is full or not.
2.  If the queue is full, then print overflow error and exit the program.
3.  If the queue is not full, then increment the tail and add the element.

### Algorithm for DEQUEUE operation

1.  Check if the queue is empty or not.
2.  If the queue is empty, then print underflow error and exit the program.
3.  If the queue is not empty, then print the element at the head and increment the head.

To implement approach \[A\], you simply need to change the `dequeue` method, and include a `for` loop which will shift all the remaining elements by one position.

---

### Complexity Analysis of Queue Operations

Just like Stack, in case of a Queue too, we know exactly, on which position new element will be added and from where an element will be removed, hence both these operations requires a single step.

- Enqueue: **O(1)**
- Dequeue: **O(1)**
- Size: **O(1)**

---

---

[Source](https://www.studytonight.com/data-structures/queue-data-structure)
