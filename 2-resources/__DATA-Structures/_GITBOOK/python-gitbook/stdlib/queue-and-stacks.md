---
description: queues and stacks
---

# Queue & Stacks

If you often work with lists in Python, then you probably know that they don’t perform fast enough when you need to **pop** and **append** items on their left end. Python’s [`collections`](https://docs.python.org/3/library/collections.html#module-collections) module provides a class called [`deque`](https://docs.python.org/3/library/collections.html#collections.deque) that’s specially designed to provide fast and memory-efficient ways to append and pop item from both ends of the underlying data structure.

Python’s `deque` is a low-level and highly optimized [double-ended queue](https://en.wikipedia.org/wiki/Double-ended_queue) that’s useful for implementing elegant, efficient, and Pythonic queues and stacks, which are the most common list-like data types in computing.

**In this tutorial, you’ll learn:**

- How to create and use Python’s **`deque`** in your code
- How to efficiently **append** and **pop** items from both ends of a `deque`
- How to use `deque` to build efficient **queues** and **stacks**
- When it’s worth using **`deque`** instead of **`list`**

To better understand these topics, you should know the basics of working with Python [lists](https://realpython.com/python-lists-tuples/). It’ll also be beneficial for you to have a general understanding of [queues](https://realpython.com/python-data-structures/#queues-fifos) and [stacks](https://realpython.com/how-to-implement-python-stack/).

Finally, you’ll write a few examples that walk you through some common use cases of `deque`, which is one of Python’s most powerful data types.

**Free Bonus:** [Click here to get access to a chapter from Python Tricks: The Book](https://realpython.com/bonus/python-tricks-sample/) that shows you Python’s best practices with simple examples you can apply instantly to write more beautiful + Pythonic code.

### Getting Started With Python’s `deque`

Appending items to and popping them from the right end of a Python list are normally efficient operations. If you use the [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) for [time complexity](https://wiki.python.org/moin/TimeComplexity), then you can say that they’re _O_\(1\). However, when Python needs to reallocate memory to grow the underlying list for accepting new items, these operations are slower and can become _O_\(_n_\).

Additionally, appending and popping items on the left end of a Python list are known to be inefficient operations with _O_\(_n_\) speed.

Since Python lists provide both operations with [`.append()`](https://realpython.com/python-append/) and `.pop()`, they’re usable as [stacks](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29) and [queues](https://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29). However, the performance issues you saw before can significantly affect the overall performance of your applications.

Python’s [`deque`](https://docs.python.org/3/library/collections.html?highlight=collections#collections.deque) was the first data type added to the [`collections`](https://realpython.com/python-collections-module/) module back in [Python 2.4](https://docs.python.org/3/whatsnew/2.4.html#new-improved-and-deprecated-modules). This data type was specially designed to overcome the efficiency problems of `.append()` and `.pop()` in Python list.

Deques are sequence-like data types designed as a generalization of **stacks** and **queues**. They support memory-efficient and fast append and pop operations on both ends of the data structure.

**Note:** `deque` is pronounced as “deck.” The name stands for [**d**ouble-**e**nded **que**ue](https://en.wikipedia.org/wiki/Double-ended_queue).

Append and pop operations on both ends of a `deque` object are stable and equally efficient because deques are [implemented](https://github.com/python/cpython/blob/23acadcc1c75eb74b2459304af70d97a35001b34/Modules/_collectionsmodule.c#L34) as a [doubly linked list](https://realpython.com/linked-lists-python/#how-to-use-doubly-linked-lists). Additionally, append and pop operations on deques are also [thread safe](https://en.wikipedia.org/wiki/Thread_safety) and memory efficient. These features make deques particularly useful for creating custom stacks and queues in Python.

Deques are also the way to go if you need to keep a list of last-seen items because you can restrict the maximum length of your deques. If you do so, then once a deque is full, it automatically discards items from one end when you append new items on the opposite end.

Here’s a summary of the main characteristics of `deque`:

- Stores items of any [data type](https://realpython.com/python-data-types/)
- Is a [mutable](https://docs.python.org/3/glossary.html#term-mutable) data type
- Supports [membership operations](https://realpython.com/python-boolean/#the-in-operator) with the `in` operator
- Supports [indexing](https://realpython.com/python-lists-tuples/#list-elements-can-be-accessed-by-index), like in `a_deque[i]`
- Doesn’t support slicing, like in `a_deque[0:2]`
- Supports built-in functions that operate on sequences and iterables, such as [`len()`](https://docs.python.org/3/library/functions.html#len), [`sorted()`](https://realpython.com/python-sort/), [`reversed()`](https://realpython.com/python-reverse-list/), and more
- Doesn’t support [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) sorting
- Supports normal and reverse iteration
- Supports pickling with [`pickle`](https://realpython.com/python-pickle-module/)
- Ensures fast, memory-efficient, and thread-safe pop and append operations on both ends

Creating `deque` instances is a straightforward process. You just need to import `deque` from `collections` and call it with an optional `iterable` as an argument:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> # Create an empty deque
>>> deque()
deque([])

>>> # Use different iterables to create deques
>>> deque((1, 2, 3, 4))
deque([1, 2, 3, 4])

>>> deque([1, 2, 3, 4])
deque([1, 2, 3, 4])

>>> deque(range(1, 5))
deque([1, 2, 3, 4])

>>> deque("abcd")
deque(['a', 'b', 'c', 'd'])

>>> numbers = {"one": 1, "two": 2, "three": 3, "four": 4}
>>> deque(numbers.keys())
deque(['one', 'two', 'three', 'four'])

>>> deque(numbers.values())
deque([1, 2, 3, 4])

>>> deque(numbers.items())
deque([('one', 1), ('two', 2), ('three', 3), ('four', 4)])
```

If you instantiate `deque` without providing an `iterable` as an argument, then you get an empty deque. If you provide and input `iterable`, then `deque` initializes the new instance with data from it. The initialization goes from left to right using [`deque.append()`](https://docs.python.org/3/library/collections.html#collections.deque.append).

The `deque` initializer takes the following two optional arguments:

1. **`iterable`** holds an iterable that provides the initialization data.
2. **`maxlen`** holds an integer [number](https://realpython.com/python-numbers/) that specifies the maximum length of the deque.

As mentioned previously, if you don’t supply an `iterable`, then you get an empty deque. If you supply a value to [`maxlen`](https://docs.python.org/3/library/collections.html#collections.deque.maxlen), then your deque will only store up to `maxlen` items.

Finally, you can also use unordered iterables, such as [sets](https://realpython.com/python-sets/), to initialize your deques. In those cases, you won’t have a predefined order for the items in the final deque.[![](https://img.realpython.net/655d5b5272a07eaebc6a0885e3bc64ec)](https://srv.realpython.net/click/5212255200/?c=56207115366&p=58946116052&r=72620)[ Remove ads](https://realpython.com/account/join/)

### Popping and Appending Items Efficiently

The most important difference between `deque` and `list` is that the former allows you to perform efficient append and pop operations on both ends of the sequence. The `deque` class implements dedicated [`.popleft()`](https://docs.python.org/3/library/collections.html#collections.deque.popleft) and [`.appendleft()`](https://docs.python.org/3/library/collections.html#collections.deque.appendleft) methods that operate on the left end of the sequence directly:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> numbers = deque([1, 2, 3, 4])
>>> numbers.popleft()
1
>>> numbers.popleft()
2
>>> numbers
deque([3, 4])

>>> numbers.appendleft(2)
>>> numbers.appendleft(1)
>>> numbers
deque([1, 2, 3, 4])
```

Here, you use `.popleft()` and `.appendleft()` to remove and add values, respectively, to the left end of `numbers`. These methods are specific to the design of `deque`, and you won’t find them in `list`.

Just like `list`, `deque` also provides `.append()` and [`.pop()`](https://docs.python.org/3/library/collections.html#collections.deque.pop) methods to operate on the right end of the sequence. However, `.pop()` behaves differently:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> numbers = deque([1, 2, 3, 4])
>>> numbers.pop()
4

>>> numbers.pop(0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: pop() takes no arguments (1 given)
```

Here, `.pop()` removes and returns the last value in the deque. The method doesn’t take an index as an argument, so you can’t use it to remove arbitrary items from your deques. You can only use it to remove and return the rightmost item.

As you learned earlier, `deque` is implemented as a **doubly linked list**. So, every item in a given deque holds a reference \([pointer](https://realpython.com/pointers-in-python/)\) to the next and previous item in the sequence.

Doubly linked lists make appending and popping items from either end light and efficient operations. That’s possible because only the pointers need to be updated. As a result, both operations have similar performance, _O_\(1\). They’re also predictable performance-wise because there’s no need for reallocating memory and moving existing items to accept new ones.

Appending and popping items from the left end of a regular Python list requires shifting all the items, which ends up being an _O_\(_n_\) operation. Additionally, adding items to the right end of a list often requires Python to reallocate memory and copy the current items to the new memory location. After that, it can add the new items. This process takes longer to complete, and the append operation passes from being _O_\(1\) to _O_\(_n_\).

Consider the following performance tests for appending items to the left end of a sequence, `deque` vs `list`:

```text
# time_append.py

from collections import deque
from time import perf_counter

TIMES = 10_000
a_list = []
a_deque = deque()

def average_time(func, times):
    total = 0.0
    for i in range(times):
        start = perf_counter()
        func(i)
        total += (perf_counter() - start) * 1e9
    return total / times

list_time = average_time(lambda i: a_list.insert(0, i), TIMES)
deque_time = average_time(lambda i: a_deque.appendleft(i), TIMES)
gain = list_time / deque_time

print(f"list.insert()      {list_time:.6} ns")
print(f"deque.appendleft() {deque_time:.6} ns  ({gain:.6}x faster)")
```

In this script, `average_time()` computes the average time that executing a function \(`func`\) a given number of `times` takes. If you [run the script](https://realpython.com/run-python-scripts/) from your command line, then you get the following output:

```text
$ python time_append.py
list.insert()      3735.08 ns
deque.appendleft() 238.889 ns  (15.6352x faster)
```

In this specific example, `.appendleft()` on a `deque` is several times faster than `.insert()` on a `list`. Note that `deque.appendleft()` is _O_\(1\), which means that the execution time is constant. However, `list.insert()` on the left end of the list is _O_\(_n_\), which means that the execution time depends on the number of items to process.

In this example, if you increment the value of `TIMES`, then you’ll get higher time measurements for `list.insert()` but stable \(constant\) results for `deque.appendleft()`. If you’d like to try a similar performance test on pop operations for both deques and lists, then you can expand the exercise block below and compare your results to _Real Python_‘s after you’re done.

Exercise: Test `deque.popleft()` vs `list.pop(0)` performanceShow/Hide

Solution: Test `deque.popleft()` vs `list.pop(0)` performanceShow/Hide

The `deque` data type was designed to guarantee efficient append and pop operations on either end of the sequence. It’s ideal for approaching problems that require the implementation of queue and stack data structures in Python.

### Accessing Random Items in a `deque`

Python’s `deque` returns mutable sequences that work quite similarly to lists. Besides allowing you to append and pop items from their ends efficiently, deques provide a group of list-like methods and other sequence-like operations to work with items at arbitrary locations. Here are some of them:

| Option | Description |
| :-- | :-- |
| [`.insert(i, value)`](https://docs.python.org/3/library/collections.html#collections.deque.insert) | Insert an item `value` into a deque at index `i`. |
| [`.remove(value)`](https://docs.python.org/3/library/collections.html#collections.deque.remove) | Remove the first occurrence of `value`, raising [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) if the `value` doesn’t exist. |
| [`a_deque[i]`](https://docs.python.org/3/library/stdtypes.html#common-sequence-operations) | Retrieve the item at index `i` from a deque. |
| [`del a_deque[i]`](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) | Remove the item at index `i` from a deque. |

You can use these methods and techniques to work with items at any position inside a `deque` object. Here’s how to do that:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> letters = deque("abde")

>>> letters.insert(2, "c")
>>> letters
deque(['a', 'b', 'c', 'd', 'e'])

>>> letters.remove("d")
>>> letters
deque(['a', 'b', 'c', 'e'])

>>> letters[1]
'b'

>>> del letters[2]
>>> letters
deque(['a', 'b', 'e'])
```

Here, you first insert `"c"` into `letters` at position `2`. Then you remove `"d"` from the deque using `.remove()`. Deques also allow **indexing** to access items, which you use here to access `"b"` at index `1`. Finally, you can use the `del` [keyword](https://realpython.com/python-keywords/) to delete any existing items from a deque. Note that `.remove()` lets you delete items _by value_, while `del` removes items _by index_.

Even though `deque` objects support indexing, they don’t support **slicing**. In other words, you can’t extract a [slice](https://docs.python.org/3/glossary.html#term-slice) from an existing deque using the [slicing syntax](https://docs.python.org/3/whatsnew/2.3.html?highlight=slicing#extended-slices), `[start:stop:step]`, as you would with a regular list:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> numbers = deque([1, 2, 3, 4, 5])

>>> numbers[1:3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: sequence index must be integer, not 'slice'
```

Deques support indexing, but interestingly, they don’t support slicing. When you try to get a slice from a deque, you get a `TypeError`. In general, performing a slicing on a linked list would be inefficient, so the operation isn’t available.

So far, you’ve seen that `deque` is quite similar to `list`. However, while `list` is based on [arrays](https://en.wikipedia.org/wiki/Array_data_structure), `deque` is based on a doubly linked list.

There is a hidden cost behind `deque` being implemented as a doubly linked list: accessing, inserting, and removing arbitrary items aren’t efficient operations. To perform them, the [interpreter](https://realpython.com/interacting-with-python/#starting-the-interpreter) has to iterate through the deque until it gets to the desired item. So, they’re _O_\(_n_\) instead of _O_\(1\) operations.

Here’s a script that shows how deques and lists behave when it comes to working with arbitrary items:

```text
# time_random_access.py

from collections import deque
from time import perf_counter

TIMES = 10_000
a_list = [1] * TIMES
a_deque = deque(a_list)

def average_time(func, times):
    total = 0.0
    for _ in range(times):
        start = perf_counter()
        func()
        total += (perf_counter() - start) * 1e6
    return total / times

def time_it(sequence):
    middle = len(sequence) // 2
    sequence.insert(middle, "middle")
    sequence[middle]
    sequence.remove("middle")
    del sequence[middle]

list_time = average_time(lambda: time_it(a_list), TIMES)
deque_time = average_time(lambda: time_it(a_deque), TIMES)
gain = deque_time / list_time

print(f"list  {list_time:.6} μs ({gain:.6}x faster)")
print(f"deque {deque_time:.6} μs")
```

This script times inserting, deleting, and accessing items in the middle of a deque and a list. If you run the script, then you get an output that looks like the following:

```text
$ python time_random_access.py
list  63.8658 μs (1.44517x faster)
deque 92.2968 μs
```

Deques aren’t random-access data structures like lists. Therefore, accessing elements from the middle of a deque is less efficient than doing the same thing on a list. The main takeaway here is that deques aren’t always more efficient than lists.

Python’s `deque` is optimized for operations on either end of the sequence, so they’re consistently better than lists in this regard. On the other hand, lists are better for random-access and fixed-length operations. Here are some of the differences between deques and lists in terms of performance:

| Operation | `deque` | `list` |
| :-- | :-- | :-- |
| Accessing arbitrary items through indexing | _O_\(_n_\) | _O_\(1\) |
| Popping and appending items on the left end | _O_\(1\) | _O_\(_n_\) |
| Popping and appending items on the right end | _O_\(1\) | _O_\(1\) + reallocation |
| Inserting and deleting items in the middle | _O_\(_n_\) | _O_\(_n_\) |

In the case of lists, `.append()` has amortized performance affected by memory reallocation when the interpreter needs to grow the list to accept new items. This operation requires copying all the current items to the new memory location, which significantly affects the performance.

This summary can help you choose the appropriate data type for the problem at hand. However, make sure to profile your code before switching from lists to deques. Both of them have their performance strengths.[![](https://img.realpython.net/e822f46aa4962c3565f257bb0c4679a8)](https://srv.realpython.net/click/67002144333/?c=56207115366&p=58946116052&r=10842)[ Remove ads](https://realpython.com/account/join/)

### Building Efficient Queues With `deque`

As you already learned, `deque` is implemented as a double-ended queue that provides a generalization of **stacks** and **queues**. In this section, you’ll learn how to use `deque` for implementing your own queue [abstract data types \(ADT\)](https://en.wikipedia.org/wiki/Abstract_data_type) at a low level in an elegant, efficient, and Pythonic way.

**Note:** In the Python standard library, you’ll find [`queue`](https://docs.python.org/3/library/queue.html#module-queue). This module implements multi-producer, multi-consumer queues that allow you to exchange information between multiple threads safely.

If you’re working with queues, then favor using those high-level abstractions over `deque` unless you’re implementing your own data structure.

Queues are [collections](https://en.wikipedia.org/wiki/Collection_%28abstract_data_type%29) of items. You can modify queues by adding items at one end and removing items from the opposite end.

Queues manage their items in a **First-In/First-Out** \([FIFO](https://en.wikipedia.org/wiki/FIFO_%28computing_and_electronics%29)\) fashion. They work as a pipe where you push in new items at one end of the pipe and pop old items out from the other end. Adding an item to one end of a queue is known as an **enqueue** operation. Removing an item from the other end is called **dequeue**.

To better understand queues, take your favorite restaurant as an example. The restaurant has a queue of people waiting for a table to order their food. Typically, the last person to arrive will stand at the end of the queue. The person at the beginning of the queue will leave it as soon as a table is available.

Here’s how you can emulate the process using a bare-bones `deque` object:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> customers = deque()

>>> # People arriving
>>> customers.append("Jane")
>>> customers.append("John")
>>> customers.append("Linda")

>>> customers
deque(['Jane', 'John', 'Linda'])

>>> # People getting tables
>>> customers.popleft()
'Jane'
>>> customers.popleft()
'John'
>>> customers.popleft()
'Linda'

>>> # No people in the queue
>>> customers.popleft()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop from an empty deque
```

Here, you first create an empty `deque` object to represent the queue of people arriving at the restaurant. To enqueue a person, you use [`.append()`](https://docs.python.org/3/library/collections.html#collections.deque.append), which adds individual items to the right end. To dequeue a person, you use [`.popleft()`](https://docs.python.org/3/library/collections.html#collections.deque.popleft), which removes and returns individual items on the left end of a deque.

Cool! Your queue simulation works! However, since `deque` is a generalization, its [API](https://en.wikipedia.org/wiki/API) doesn’t match the typical queue API. For example, instead of `.enqueue()`, you have `.append()`. You also have `.popleft()` instead of `.dequeue()`. Additionally, `deque` provides several other operations that might not fit your specific needs.

The good news is that you can create custom queue classes with the functionality you need and nothing else. To do this, you can internally use a deque to store the data and provide the desired functionality in your custom queues. You can think of it as an implementation of the [adapter design pattern](https://sourcemaking.com/design_patterns/adapter), in which you convert the deque’s interface into something that looks more like a queue interface.

For example, say you need a custom queue abstract data type that provides only the following features:

- Enqueuing items
- Dequeuing items
- Returning the length of the queue
- Supporting membership tests
- Supporting normal and reverse iteration
- Providing a user-friendly string representation

In this case, you can write a `Queue` class that looks like the following:

```text
# custom_queue.py

from collections import deque

class Queue:
    def __init__(self):
        self._items = deque()

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        try:
            return self._items.popleft()
        except IndexError:
            raise IndexError("dequeue from an empty queue") from None

    def __len__(self):
        return len(self._items)

    def __contains__(self, item):
        return item in self._items

    def __iter__(self):
        yield from self._items

    def __reversed__(self):
        yield from reversed(self._items)

    def __repr__(self):
        return f"Queue({list(self._items)})"
```

Here, `._items` holds a `deque` object that allows you to store and manipulate the items in the queue. `Queue` implements `.enqueue()` using `deque.append()` to add items to the end of the queue. It also implements `.dequeue()` with `deque.popleft()` to efficiently remove items from the beginning of the queue.

The [special methods](https://docs.python.org/3/glossary.html#term-special-method) support the following features:

| Method | Support |
| :-- | :-- |
| [`.__len__()`](https://docs.python.org/3/reference/datamodel.html#object.__len__) | Length with `len()` |
| [`.__contains__()`](https://docs.python.org/3/reference/datamodel.html#object.__contains__) | Membership tests with `in` |
| [`.__iter__()`](https://docs.python.org/3/reference/datamodel.html#object.__iter__) | Normal iteration |
| [`.__reversed__()`](https://docs.python.org/3/reference/datamodel.html#object.__reversed__) | Reverse iteration |
| [`.__repr__()`](https://docs.python.org/3/reference/datamodel.html#object.__repr__) | String representation |

Ideally, `.__repr__()` should return a string representing a valid Python expression. This expression will allow you to recreate the object unambiguously with the same value.

However, in the example above, the intent is to use the method’s [return](https://realpython.com/python-return-statement/) value to gracefully display the object on the [interactive shell](https://realpython.com/interacting-with-python/). You can make it possible to build `Queue` instances from this specific string representation by accepting an initialization iterable as an argument to `.__init__()` and building instances from it.

With these final additions, your `Queue` class is complete. To use this class in your code, you can do something like the following:&gt;&gt;&gt;

```text
>>> from custom_queue import Queue

>>> numbers = Queue()
>>> numbers
Queue([])

>>> # Enqueue items
>>> for number in range(1, 5):
...     numbers.enqueue(number)
...
>>> numbers
Queue([1, 2, 3, 4])

>>> # Support len()
>>> len(numbers)
4

>>> # Support membership tests
>>> 2 in numbers
True
>>> 10 in numbers
False

>>> # Normal iteration
>>> for number in numbers:
...     print(f"Number: {number}")
...
1
2
3
4
```

As an exercise, you can test the remaining features and implement other features, such as supporting equality tests, removing and accessing random items, and more. Go ahead and give it a try![![](https://img.realpython.net/8c80de229a52f9edcdfefa85a454bbbe)](https://srv.realpython.net/click/51173158879/?c=3190889540&p=58946116052&r=98172)[ Remove ads](https://realpython.com/account/join/)

### Exploring Other Features of `deque`

In addition to the features you’ve seen so far, `deque` also provides other methods and attributes specific to their internal design. They add new and useful functionalities to this versatile data type.

In this section, you’ll learn about other methods and attributes that deques provide, how they work, and how to use them in your code.

#### Limiting the Maximum Number of Items: `maxlen`

One of the most useful features of `deque` is the possibility to specify the **maximum length** of a given deque using the `maxlen` argument when you’re instantiating the class.

If you supply a value to `maxlen`, then your deque will only store up to `maxlen` items. In this case, you have a **bounded deque**. Once a bounded deque is full with the specified number of items, adding a new item at either end automatically removes and discards the item at the opposite end:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> four_numbers = deque([0, 1, 2, 3, 4], maxlen=4) # Discard 0
>>> four_numbers
deque([1, 2, 3, 4], maxlen=4)

>>> four_numbers.append(5)  # Automatically remove 1
>>> four_numbers
deque([2, 3, 4, 5], maxlen=4)

>>> four_numbers.append(6)  # Automatically remove 2
>>> four_numbers
deque([3, 4, 5, 6], maxlen=4)

>>> four_numbers.appendleft(2) # Automatically remove 6
>>> four_numbers
deque([2, 3, 4, 5], maxlen=4)

>>> four_numbers.appendleft(1)  # Automatically remove 5
>>> four_numbers
deque([1, 2, 3, 4], maxlen=4)

>>> four_numbers.maxlen
4
```

If the number of items in the input iterable is greater than `maxlen`, then `deque` discards the left-most items \(`0` in the example\). Once the deque is full, appending an item on any end automatically removes the item on the other end.

Note that if you don’t specify a value to `maxlen`, then it defaults to [`None`](https://realpython.com/null-in-python/), and the deque can grow to an arbitrary number of items.

Having the option to restrict the maximum number of items allows you to use deques for tracking the latest elements in a given sequence of objects or events. For example, you can track the last five transactions in a bank account, the last ten open text files in an editor, the last five pages in a browser, and more.

Note that `maxlen` is available as a read-only attribute in your deques, which allows you to check if the deque is full, like in `deque.maxlen == len(deque)`.

Finally, you can set `maxlen` to any positive integer number representing the maximum number of items you want to store in a specific deque. If you supply a negative value to `maxlen`, then you get a `ValueError`.

#### Rotating the Items: `.rotate()`

Another interesting feature of deques is the possibility to rotate their elements by calling [`.rotate()`](https://docs.python.org/3/library/collections.html#collections.deque.rotate) on a non-empty deque. This method takes an integer `n` as an argument and rotates the items `n` steps to the right. In other words, it moves `n` items from the right end to the left end in a circular fashion.

The default value of `n` is `1`. If you provide a negative value to `n`, then the rotation is to the left:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> ordinals = deque(["first", "second", "third"])

>>> # Rotate items to the right
>>> ordinals.rotate()
>>> ordinals
deque(['third', 'first', 'second'])

>>> ordinals.rotate(2)
>>> ordinals
deque(['first', 'second', 'third'])

>>> # Rotate items to the left
>>> ordinals.rotate(-2)
>>> ordinals
deque(['third', 'first', 'second'])

>>> ordinals.rotate(-1)
>>> ordinals
deque(['first', 'second', 'third'])
```

In these examples, you rotate `ordinals` several times using `.rotate()` with different values of `n`. If you call `.rotate()` without an argument, then it relies on the default value of `n` and rotates the deque `1` position to the right. Calling the method with a negative `n` allows you to rotate the items to the left.

#### Adding Several Items at Once: `.extendleft()`

Like regular lists, deques provide an [`.extend()`](https://docs.python.org/3/library/collections.html#collections.deque.extend) method, which allows you to add several items to the right end of a deque using an `iterable` as an argument. Additionally, deques have a method called [`extendleft()`](https://docs.python.org/3/library/collections.html#collections.deque.extendleft), which takes an `iterable` as an argument and adds its items to the left end of the target deque in one go:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> numbers = deque([1, 2])

>>> # Extend to the right
>>> numbers.extend([3, 4, 5])
>>> numbers
deque([1, 2, 3, 4, 5])

>>> # Extend to the left
>>> numbers.extendleft([-1, -2, -3, -4, -5])
>>> numbers
deque([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
```

Calling `.extendleft()` with an `iterable` extends the target deque to the left. Internally, `.extendleft()` performs a series of individual `.appendleft()` operations that process the input iterable from left to right. This ends up adding the items in reverse order to the left end of the target deque.[![](https://img.realpython.net/babd32c4a9b6cf2453889710f58b5914)](https://srv.realpython.net/click/53616533979/?c=62098619220&p=58946116052&r=67323)[ Remove ads](https://realpython.com/account/join/)

### Using Sequence-Like Features of `deque`

Since deques are mutable sequences, they implement almost all the methods and operations that are common to [sequences](https://docs.python.org/3/library/stdtypes.html?highlight=built#common-sequence-operations) and [mutable sequences](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types). So far, you’ve learned about some of these methods and operations, such as `.insert()`, indexing, membership tests, and more.

Here are a few examples of other actions you can perform on `deque` objects:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> numbers = deque([1, 2, 2, 3, 4, 4, 5])

>>> # Concatenation
>>> numbers + deque([6, 7, 8])
deque([1, 2, 2, 3, 4, 4, 5, 6, 7, 8])

>>> # Repetition
>>> numbers * 2
deque([1, 2, 2, 3, 4, 4, 5, 1, 2, 2, 3, 4, 4, 5])

>>> # Common sequence methods
>>> numbers = deque([1, 2, 2, 3, 4, 4, 5])
>>> numbers.index(2)
1
>>> numbers.count(4)
2

>>> # Common mutable sequence methods
>>> numbers.reverse()
>>> numbers
deque([5, 4, 4, 3, 2, 2, 1])

>>> numbers.clear()
>>> numbers
deque([])
```

You can use the addition [operator](https://realpython.com/python-operators-expressions/) \(`+`\) to concatenate two existing deques. On the other hand, the multiplication operator \(`*`\) returns a new deque equivalent to repeating the original deque as many times as you want.

Regarding other sequence methods, the following table provides a summary:

| Method | Description |
| :-- | :-- |
| [`.clear()`](https://docs.python.org/3/library/collections.html#collections.deque.clear) | Remove all the elements from a deque. |
| [`.copy()`](https://docs.python.org/3/library/collections.html#collections.deque.copy) | Create a shallow copy of a deque. |
| [`.count(value)`](https://docs.python.org/3/library/collections.html#collections.deque.count) | Count the number times `value` appears in a deque. |
| [`.index(value)`](https://docs.python.org/3/library/collections.html#collections.deque.index) | Return the position of `value` in the deque. |
| [`.reverse()`](https://docs.python.org/3/library/collections.html#collections.deque.reverse) | Reverse the elements of the deque in place and then return `None`. |

Here, `.index()` can also take two optional arguments: `start` and `stop`. They allow you to restrict the search to those items at or after `start` and before `stop`. The method raises a [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError) if `value` doesn’t appear in the deque at hand.

Unlike lists, deques don’t include a `.sort()` method to sort the sequence in place. This is because sorting a linked list would be an inefficient operation. If you ever need to sort a deque, then you can still use `sorted()`.

### Putting Python’s `deque` Into Action

You can use deques in a fair amount of use cases, such as to implement queues, stacks, and [circular buffers](https://en.wikipedia.org/wiki/Circular_buffer). You can also use them to maintain an undo-redo history, enqueue incoming requests to a [web service](https://en.wikipedia.org/wiki/Web_service), keep a list of recently open files and websites, safely exchange data between multiple threads, and more.

In the following sections, you’ll code a few small examples that will help you better understand how to use deques in your code.

#### Keeping a Page History

Having a `maxlen` to restrict the maximum number of items makes `deque` suitable for solving several problems. For example, say you’re building an application that [scrapes](https://realpython.com/python-web-scraping-practical-introduction/) data from search engines and social media sites. At some point, you need to keep track of the three last sites your application requested data from.

To solve this problem, you can use a deque with a `maxlen` of `3`:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> sites = (
...     "google.com",
...     "yahoo.com",
...     "bing.com"
... )

>>> pages = deque(maxlen=3)
>>> pages.maxlen
3

>>> for site in sites:
...     pages.appendleft(site)
...

>>> pages
deque(['bing.com', 'yahoo.com', 'google.com'], maxlen=3)

>>> pages.appendleft("facebook.com")
>>> pages
deque(['facebook.com', 'bing.com', 'yahoo.com'], maxlen=3)

>>> pages.appendleft("twitter.com")
>>> pages
deque(['twitter.com', 'facebook.com', 'bing.com'], maxlen=3)
```

In this example, `pages` keeps a list of the last three sites your application visited. Once `pages` is full, adding a new site to an end of the deque automatically discards the site at the opposite end. This behavior keeps your list up to date with the last three sites you used.

Note that you can set `maxlen` to any positive integer representing the number of items to store in the deque at hand. For example, if you want to keep a list of ten sites, then you can set `maxlen` to `10`.

#### Sharing Data Between Threads

Python’s `deque` is also useful when you’re coding [multithreaded](https://realpython.com/intro-to-python-threading/) applications, as described by [Raymond Hettinger](https://twitter.com/raymondh), core Python developer and creator of `deque` and the `collections` module:

> The deque’s `.append()`, `.appendleft()`, `.pop()`, `.popleft()`, and `len(d)` operations are thread-safe in CPython. \([Source](https://bugs.python.org/msg199368)\)

Because of that, you can safely add and remove data from both ends of a deque at the same time from separate threads without the risk of data corruption or other associated issues.

To try out how `deque` works in a multithreaded application, fire up your favorite [code editor](https://realpython.com/python-ides-code-editors-guide/), create a new script called `threads.py`, and add the following code to it:

```text
# threads.py

import logging
import random
import threading
import time
from collections import deque

logging.basicConfig(level=logging.INFO, format="%(message)s")

def wait_seconds(mins, maxs):
    time.sleep(mins + random.random() * (maxs - mins))

def produce(queue, size):
    while True:
        if len(queue) < size:
            value = random.randint(0, 9)
            queue.append(value)
            logging.info("Produced: %d -> %s", value, str(queue))
        else:
            logging.info("Queue is saturated")
        wait_seconds(0.1, 0.5)

def consume(queue):
    while True:
        try:
            value = queue.popleft()
        except IndexError:
            logging.info("Queue is empty")
        else:
            logging.info("Consumed: %d -> %s", value, str(queue))
        wait_seconds(0.2, 0.7)

logging.info("Starting Threads...\n")
logging.info("Press Ctrl+C to interrupt the execution\n")

shared_queue = deque()

threading.Thread(target=produce, args=(shared_queue, 10)).start()
threading.Thread(target=consume, args=(shared_queue,)).start()
```

Here, `produce()` takes a `queue` and a `size` as arguments. Then it uses [`random.randint()`](https://docs.python.org/3/library/random.html#random.randint) in a [`while` loop](https://realpython.com/python-while-loop/) to continuously produce [random](https://realpython.com/python-random/) numbers and store them in a [global](https://realpython.com/python-scope-legb-rule/#modules-the-global-scope) deque called `shared_queue`. Since appending items to a deque is a thread-safe operation, you don’t need to use a [lock](https://en.wikipedia.org/wiki/Lock_%28computer_science%29) to protect the shared data from other threads.

The helper function `wait_seconds()` simulates that both `produce()` and `consume()` represent long-running operations. It returns a random wait-time value between a given range of seconds, `mins` and `maxs`.

In `consume()`, you call `.popleft()` inside a loop to systematically retrieve and remove data from `shared_queue`. You wrap the call to `.popleft()` in a [`try` … `except`](https://realpython.com/python-exceptions/#the-try-and-except-block-handling-exceptions) statement to handle those cases in which the shared queue is empty.

Note that while you defined `shared_queue` in the global [namespace](https://realpython.com/python-namespaces-scope/), you access it through local variables inside `produce()` and `consume()`. Accessing the global variable directly would be more problematic and definitely not a best practice.

The final two lines in the script create and start separate threads to execute `produce()` and `consume()` concurrently. If you run the script from your command line, then you’ll get an output similar to the following:

```text
$ python threads.py
Starting Threads...

Press Ctrl+C to interrupt the execution

Produced: 1 -> deque([1])
Consumed: 1 -> deque([])
Queue is empty
Produced: 3 -> deque([3])
Produced: 0 -> deque([3, 0])
Consumed: 3 -> deque([0])
Consumed: 0 -> deque([])
Produced: 1 -> deque([1])
Produced: 0 -> deque([1, 0])
  ...
```

The producer thread adds numbers to the right end of the shared deque, while the consumer thread consumes numbers from the left end. To interrupt the script execution, you can press Ctrl+C on your keyboard.

Finally, you can play a little bit with the time interval inside `produce()` and `consume()`. Change the values you pass to `wait_seconds()`, and watch how the program behaves when the producer is slower than the consumer and the other way around.[![](https://img.realpython.net/cc86980015e727765da60f4377ac2185)](https://srv.realpython.net/click/66325228902/?c=62098619220&p=58946116052&r=89098)[ Remove ads](https://realpython.com/account/join/)

#### Emulating the `tail` Command

The final example you’ll code here emulates the [`tail` command](https://en.wikipedia.org/wiki/Tail_%28Unix%29), which is available on [Unix](https://en.wikipedia.org/wiki/Unix) and [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems. The command accepts a file path at the command line and prints the last ten lines of that file to the system’s standard output. You can tweak the number of lines you need `tail` to print with the `-n`, `--lines` option.

Here’s a small Python function that emulates the core functionality of `tail`:&gt;&gt;&gt;

```text
>>> from collections import deque

>>> def tail(filename, lines=10):
...     try:
...         with open(filename) as file:
...             return deque(file, lines)
...     except OSError as error:
...         print(f'Opening file "{filename}" failed with error: {error}')
...
```

Here, you define `tail()`. The first argument, `filename`, holds the path to the target file as a [string](https://realpython.com/python-strings/). The second argument, `lines`, represents the number of lines you want to retrieve from the end of the target file. Note that `lines` defaults to `10` to simulate the default behavior of `tail`.

**Note:** The original idea for this example comes from the Python documentation on `deque`. Check out the section on [`deque` recipes](https://docs.python.org/3/library/collections.html#deque-recipes) for further examples.

The deque in the highlighted line can only store up to the number of items you pass to `lines`. This guarantees that you get the desired number of lines from the end of the input file.

As you saw before, when you create a bounded deque and initialize it with an iterable the contains more items than allowed \(`maxlen`\), the `deque` constructor discards all the leftmost items in the input. Because of that, you end up with the last `maxlen` lines of the target file.

### Conclusion

[Queues](https://realpython.com/python-data-structures/#queues-fifos) and [stacks](https://realpython.com/how-to-implement-python-stack/) are commonly used **abstract data types** in programming. They typically require efficient **pop** and **append** operations on either end of the underlying data structure. Python’s [`collections`](https://docs.python.org/3/library/collections.html#module-collections) module provides a data type called [`deque`](https://docs.python.org/3/library/collections.html#collections.deque) that’s specially designed for fast and memory-efficient append and pop operations on both ends.

With `deque`, you can code your own queues and stacks at a low level in an elegant, efficient, and Pythonic way.

**In this tutorial, you learned how to:**

- Create and use Python’s **`deque`** in your code
- Efficiently **append** and **pop** items from both ends of a sequence with `deque`
- Use `deque` to build efficient **queues** and **stacks** in Python
- Decide when to use **`deque`** instead of **`list`**

In this tutorial, you also coded a few examples that helped you approach some common use cases of `deque` in Python.
