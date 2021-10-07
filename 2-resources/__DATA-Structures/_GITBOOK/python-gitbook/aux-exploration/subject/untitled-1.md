# General Data Structures

\*\*\*\*

Data structures are **vital building blocks** for efficient, real-world problem solving. Data structures are proven and optimized tools that give you an easy frame to organize your programs. After all, there’s no need for you to remake the wheel \(or structure\) every time you need it.

Each data structure has a task or situation it is **most suited to solve**. Python has 4 built-in data structures, lists, dictionaries, tuples, and sets. These built-in data structures come with default methods and behind the scenes optimizations that make them easy to use.

Most data structures in Python are modified forms of these or use the built-in structures as their backbone.

- **List**: Array-like structures that let you save a set of mutable objects of the same type to a variable.
- **Tuple**: Tuples are immutable lists, meaning the elements cannot be changed. It’s declared with parenthesis instead of square brackets.
- **Set**: Sets are unordered collections, meaning that elements are unindexed and have no set sequence. They’re declared with curly braces.
- **Dictionary \(dict\)**: Similar to hashmap or hash tables in other languages, a dictionary is a collection of key/value pairs. You initialize an empty dictionary with empty curly braces and fill it with colon separated keys and values. All keys are unique, immutable objects.

Now, let’s see how we can use these structures to create all the advanced structures interviewers are looking for.

### Arrays \(Lists\) in Python

Python does not have a built in [array](https://www.educative.io/blog/data-structures-arrays-javascript-tutorial) type, but you can use lists for all of the same tasks. An array is a collection of values of the **same type saved under the same name**.

Each value in the array is called an “element” and indexing that represents its position. You can access specific elements by calling the array name with the desired element’s index. You can also get the length of an array using the `len()` method.![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2MDAiIGhlaWdodD0iMjc0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/4556366281179136)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/4556366281179136)

Unlike programming languages like Java that have static arrays after declaration, Python’s arrays **automatically scale up or down** when elements are added/subtracted.

For example, we could use the `append()` method to add an additional element on the end of an existing array instead of declaring a new array.

This makes Python arrays particularly easy to use and adaptable on the fly.1234567cars = \["Toyota", "Tesla", "Hyundai"\]print\(len\(cars\)\)cars.append\("Honda"\)cars.pop\(1\)for x in cars: print\(x\)Run

**Advantages:**

- Simple to create and use data sequences
- Automatically scale to meet changing size requirements
- Used to create more complex data structures

**Disadvantages:**

- Not optimized for scientific data \(unlike NumPy’s array\)
- Can only manipulate the rightmost end of the list

**Applications:**

- Shared storage of related values or objects, i.e. `myDogs`
- Data collections you’ll loop through
- Collections of data structures, such as a list of tuples

#### Common arrays interview questions in Python

- Remove even integers from list
- Merge two sorted lists
- Find minimum value in a list
- Maximum sum sublist
- Print products of all elements

### Queues in Python

[Queues](https://www.educative.io/blog/data-structures-stack-queue-java-tutorial) are a linear data structure that store data in a “first in, first out” \(FIFO\) order. Unlike arrays, you cannot access elements by index and instead can **only pull the next oldest element**. This makes it great for order-sensitive tasks like online order processing or voicemail storage.

You can think of a queue as a line at the grocery store; the cashier does not choose who to check out next but rather processes the person who has stood in line the longest.

We could use a Python list with `append()` and `pop()` methods to implement a queue. However, this is inefficient because lists must shift all elements by one index whenever you add a new element to the beginning.

Instead, it’s best practice to use the `deque` class from Python’s `collections` module. Deques are optimized for the append and pop operations. The deque implementation also allows you to create double-ended queues, which can access both sides of the queue through the `popleft()` and `popright()` methods.1234567891011121314151617181920212223242526from collections import deque \# Initializing a queueq = deque\(\) \# Adding elements to a queueq.append\('a'\)q.append\('b'\)q.append\('c'\) print\("Initial queue"\)print\(q\) \# Removing elements from a queueprint\("\nElements dequeued from the queue"\)print\(q.popleft\(\)\)print\(q.popleft\(\)\)print\(q.popleft\(\)\) print\("\nQueue after removing elements"\)print\(q\) \# Uncommenting q.popleft\(\)\# will raise an IndexError\# as queue is now emptyRun

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

### Stacks in Python

[Stacks](https://www.educative.io/blog/data-structures-stack-queue-java-tutorial) are a sequential data structure that act as the Last-in, First-out \(LIFO\) version of queues. The last element inserted in a stack is considered at the **top of the stack** and is the only accessible element. To access a middle element, you must first remove enough elements to make the desired element the top of the stack.

Many developers imagine stacks as a stack of dinner plates; you can add or remove plates to the top of the stack but must move the whole stack to place one at the bottom.

Adding elements is known as a **push,** and removing elements is known as a **pop**. You can implement stacks in Python using the built-in list structure. With list implementation, push operations use the `append()` method, and pop operations use `pop()`.1234567891011121314151617181920212223242526stack = \[\] \# append\(\) function to push\# element in the stackstack.append\('a'\)stack.append\('b'\)stack.append\('c'\) print\('Initial stack'\)print\(stack\) \# pop\(\) function to pop\# element from stack in \# LIFO orderprint\('\nElements popped from stack:'\)print\(stack.pop\(\)\)print\(stack.pop\(\)\)print\(stack.pop\(\)\) print\('\nStack after elements are popped:'\)print\(stack\) \# uncommenting print\(stack.pop\(\)\) \# will cause an IndexError \# as the stack is now emptyRun

**Advantages:**

- Offers LIFO data management that’s impossible with arrays
- Automatic scaling and object cleanup
- Simple and reliable data storage system

**Disadvantages:**

- Stack memory is limited
- Too many objects on the stack leads to a stack overflow error

**Applications:**

- Used for making highly reactive systems
- Memory management systems use stacks to handle the most recent requests first
- Helpful for questions like parenthesis matching

#### Common stacks interview questions in Python

- Implement a queue using stacks
- Evaluate a Postfix expression with a stack
- Next greatest element using a stack
- Create a `min()` function using a stack

### Linked lists in Python

[Linked lists](https://www.educative.io/blog/data-structures-linked-list-java-tutorial) are a sequential collection of data that uses **relational pointers on each data node** to link to the next node in the list.

Unlike arrays, linked lists do not have objective positions in the list. Instead, they have relational positions based on their surrounding nodes.

The first node in a linked list is called the **head node,** and the final is called the **tail node**, which has a `null` pointer.![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI4MCIgaGVpZ2h0PSI0NzM1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/5638844823633920)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/5638844823633920)

Linked lists can be singly or doubly linked depending if each node has just a single pointer to the next node or if it also has a second pointer to the previous node.

You can think of linked lists like a chain; individual links only have a connection to their immediate neighbors but all the links together form a larger structure.

Python does not have a built-in implementation of linked lists and therefore requires that you implement a `Node` class to hold a data value and one or more pointers.12345678910111213141516171819class Node: def \_\_init\_\_\(self, dataval=None\): self.dataval = dataval self.nextval = None class SLinkedList: def \_\_init\_\_\(self\): self.headval = None list1 = SLinkedList\(\)list1.headval = Node\("Mon"\)e2 = Node\("Tue"\)e3 = Node\("Wed"\)\# Link first Node to second nodelist1.headval.nextval = e2 \# Link second Node to third nodee2.nextval = e3Run

Linked lists are primarily used to create advanced data structures like graphs and trees or for tasks that require frequent addition/deletion of elements across the structure.

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

### Circular linked lists in Python

The primary downside of the standard linked list is that you always have to start at the Head node.

The circular linked list fixes this problem by replacing the Tail node’s `null` pointer with a pointer **back to the Head node**. When traversing, the program will follow pointers until it reaches the node it started on.

The advantage of this setup is that you can start at any node and traverse the whole list. It also allows you to use linked lists as a loopable structure by setting a desired number of cycles through the structure.

Circular linked lists are great for processes that loop for a long time like CPU allocation in operating systems.

**Advantages:**

- Can traverse whole list starting from any node
- Makes linked lists more suited to looping structures

**Disadvantages:**

- More difficult to find the Head and Tail nodes of the list without a `null` marker

**Applications:**

- Regularly looping solutions like CPU scheduling
- Solutions where you want the freedom to start traversal at any node

#### Common circular linked list interview questions in Python

- Detect loop in a linked lists
- Reverse a circular linked list
- Reverse circular linked list in groups of give size

**Keep brushing up on Python Data Structures**

Practiced knowledge of data structures is essential for any interviewee. Educative’s text-based courses give you hundreds of hands-on practice problems to ensure you’re ready when the time comes.

[**Ace the Python Coding Interview**](https://www.educative.io/path/ace-python-coding-interview)

### Trees in Python

[Trees](https://www.educative.io/blog/data-structures-trees-java) are another relation-based data structure, which specialize in representing hierarchical structures. Like a linked list, they’re populated with `Node` objects that contain a data value and one or more pointers to define its relation to immediate nodes.

Each tree has a **root** node that all other nodes branch off from. The root contains pointers to all elements directly below it, which are known as its **child nodes**. These child nodes can then have child nodes of their own. Binary trees cannot have nodes with more than two child nodes.

Any nodes on the same level are called **sibling nodes**. Nodes with no connected child nodes are known as **leaf nodes**.![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODE4NSIgaGVpZ2h0PSI2NTgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/6470804819148800)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/6470804819148800)

The most common application of the binary tree is a **binary search tree**. Binary search trees excel at searching large collections of data, as the time complexity depends on the depth of the tree rather than the number of nodes.

> **Binary search trees have four strict rules:**
>
> - The left subtree contains only nodes with elements lesser than the root.
> - The right subtree contains only nodes with elements greater than the root.
> - Left and right subtrees must also be a binary search tree. They must follow the above rules with the “root” of their tree.
> - There can be no duplicate nodes, i.e. no two nodes can have the same value.

12345678910111213141516171819202122232425262728293031class Node: def \_\_init\_\_\(self, data\): self.left = None self.right = None self.data = data def insert\(self, data\):\# Compare the new value with the parent node if self.data: if data &lt; self.data: if self.left is None: self.left = Node\(data\) else: self.left.insert\(data\) elif data &gt; self.data: if self.right is None: self.right = Node\(data\) else: self.right.insert\(data\) else: self.data = data \# Print the tree def PrintTree\(self\): if self.left: self.left.PrintTree\(\) print\( self.data\), if self.right: self.right.PrintTree\(\)Run

**Advantages:**

- Good for representing hierarchical relationships
- Dynamic size, great at scale
- Quick insert and delete operations
- In a binary search tree, inserted nodes are sequenced immediately.
- Binary search trees are efficient at searches; length is only O\(height\)O\(height\).

**Disadvantages:**

- Time expensive, O\(logn\)4O\(logn\)4, to modify or “balance” trees or retrieve elements from a known location
- Child nodes hold no information on their parent node and can be hard to traverse backwards
- Only works for lists that are sorted. Unsorted data degrades into linear search.

**Applications:**

- Great for storing hierarchical data such as a file location
- Used to implement top searching and sorting algorithms like binary search trees and binary heaps

#### Common tree interview questions in Python

- Check if two binary trees are identical
- [Implement level order traversal of a binary tree](https://www.educative.io/blog/tree-traversal-algorithms)
- Print the perimeter of a binary search tree
- Sum all nodes along a path
- Connect all siblings of a binary tree

### Graphs in Python

[Graphs](https://www.educative.io/blog/graph-algorithms-tutorial) are a data structure used to represent a visual of relationships between data **vertices** \(the Nodes of a graph\). The links that connect vertices together are called **edges**.

Edges define which vertices are connected but does not indicate a direction flow between them. Each vertex has connections to other vertices which are saved on the vertex as a comma-separated list.Undirected

There are also special graphs called **directed graphs** that define a direction of the relationship, similar to a linked list. Directed graphs are helpful when modeling one-way relationships or a flowchart-like structure.Directed

They’re primarily used to convey visual web-structure networks in code form. These structures can model many different types of relationships like hierarchies, branching structures, or simply be an unordered relational web. The versatility and intuitiveness of graphs makes them a favorite for [data science](https://www.educative.io/blog/python-pandas-tutorial).

When written in plain text, graphs have a list of vertices and edges:

```text
V = {a, b, c, d, e}
E = {ab, ac, bd, cd, de}
```

In Python, graphs are best implemented using a dictionary with the name of each vertex as a key and the edges list as the values.12345678910\# Create the dictionary with graph elementsgraph = { "a" : \["b","c"\], "b" : \["a", "d"\], "c" : \["a", "d"\], "d" : \["e"\], "e" : \["d"\] } \# Print the graph print\(graph\)Run

**Advantages:**

- Quickly convey visual information through code
- Usable for modeling a wide range of real world problems
- Simple to learn syntax

**Disadvantages:**

- Vertex links are difficult to understand in large graphs
- Time expensive to parse data from a graph

**Applications:**

- Excellent for modeling networks or web-like structures
- Used to model social network sites like [Facebook](https://www.educative.io/blog/cracking-top-facebook-coding-interview-questions)

#### Common graph interview questions in Python

- Detect cycle in a directed graph
- Find a “Mother Vertex” in a directed graph
- Count number of edges in an undirected graph
- Check if a path exists between two vertices
- Find the shortest path between two vertices

### Hash tables in Python

[Hash tables](https://www.educative.io/blog/data-strucutres-hash-table-javascript) are a complex data structure capable of storing large amounts of information and retrieving specific elements efficiently.

This data structure uses key/value pairs, where the key is the name of the desired element and the value is the data stored under that name.![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzcwNSIgaGVpZ2h0PSIzMzIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/4827483893923840/image/download/6321108700102656)![widget](https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=300,q=10/api/page/4827483893923840/image/download/6321108700102656)

Each input key goes through a **hash function** that converts it from its starting form into an integer value, called a **hash**. Hash functions must always produce the same hash from the same input, must compute quickly, and produce fixed-length values. Python includes a built-in `hash()` function that speeds up implementation.

The table then uses the hash to find the general location of the desired value, called a **storage bucket**. The program then only has to search this subgroup for the desired value rather than the entire data pool.

Beyond this general framework, hash tables can be very different depending on the application. Some may allow keys from different data types, while some may have differently setup buckets or different hash functions.

Here is an example of a hash table in Python code:12345678910111213141516171819202122232425262728293031import pprintclass Hashtable: def \_\_init\_\_\(self, elements\): self.bucket_size = len\(elements\) self.buckets = \[\[\] for i in range\(self.bucket_size\)\] self.\_assign_buckets\(elements\) def \_assign_buckets\(self, elements\): for key, value in elements: \#calculates the hash of each key hashed_value = hash\(key\) index = hashed_value % self.bucket_size \# positions the element in the bucket using hash self.buckets\[index\].append\(\(key, value\)\) \#adds a tuple in the bucket def get_value\(self, input_key\): hashed_value = hash\(input_key\) index = hashed_value % self.bucket_size bucket = self.buckets\[index\] for key, value in bucket: if key == input_key: return\(value\) return None def \_\_str\_\_\(self\): return pprint.pformat\(self.buckets\) \# pformat returns a printable representation of the objectif \_\_name\_\_ == "\_\_main\_\_": capitals = \[ \('France', 'Paris'\), \('United States', 'Washington D.C.'\), \('Italy', 'Rome'\), \('Canada', 'Ottawa'\) \]hashtable = Hashtable\(capitals\)print\(hashtable\)print\(f"The capital of Italy is {hashtable.get_value\('Italy'\)}"\)Run

**Advantages:**

- Can covert keys in any form to integer indices
- Extremely effective for large data sets
- Very effective search function
- Constant number of steps for each search and constant efficiency for adding or deleting elements
- Optimized in [Python 3](https://www.educative.io/blog/python3-guide)

**Disadvantages:**

- Hashes must be unique, two keys converting to the same hash causes a collision error
- Collision errors require full overhaul of hash function
- Difficult to build for beginners

**Applications:**

- Used for large, frequently-searched databases
- Retrieval systems that use input keys

#### Common hash table interview questions in Python

- Build a hash table from scratch \(without built-in functions\)
- Word formation using a hash table
- Find two numbers that add up to “k”
- Implement open addressing for collision handling
- Detect if a list is cyclical using a hash table

\*\*\*\*

\*\*\*\*

**Data structures** are the fundamental constructs around which you build your programs. Each data structure provides a particular way of organizing data so it can be accessed efficiently, depending on your use case. Python ships with an extensive set of data structures in its [standard library](https://docs.python.org/3/library/index.html).

However, Python’s naming convention doesn’t provide the same level of clarity that you’ll find in other languages. In [Java](https://realpython.com/oop-in-python-vs-java/), a list isn’t just a `list`—it’s either a `LinkedList` or an `ArrayList`. Not so in Python. Even experienced Python developers sometimes wonder whether the built-in `list` type is implemented as a [linked list](https://realpython.com/linked-lists-python/) or a dynamic array.

**In this tutorial, you’ll learn:**

- Which common **abstract data types** are built into the Python standard library
- How the most common abstract data types map to Python’s **naming scheme**
- How to put abstract data types to **practical use** in various algorithms

**Note:** This tutorial is adapted from the chapter “Common Data Structures in Python” in [_Python Tricks: The Book_](https://realpython.com/products/python-tricks-book/). If you enjoy what you read below, then be sure to check out [the rest of the book](https://realpython.com/products/python-tricks-book/).

### Dictionaries, Maps, and Hash Tables

In Python, [dictionaries](https://realpython.com/python-dicts/) \(or **dicts** for short\) are a central data structure. Dicts store an arbitrary number of objects, each identified by a unique dictionary **key**.

Dictionaries are also often called **maps**, **hashmaps**, **lookup tables**, or **associative arrays**. They allow for the efficient lookup, insertion, and deletion of any object associated with a given key.

Phone books make a decent real-world analog for dictionary objects. They allow you to quickly retrieve the information \(phone number\) associated with a given key \(a person’s name\). Instead of having to read a phone book front to back to find someone’s number, you can jump more or less directly to a name and look up the associated information.

This analogy breaks down somewhat when it comes to _how_ the information is organized to allow for fast lookups. But the fundamental performance characteristics hold. Dictionaries allow you to quickly find the information associated with a given key.

Dictionaries are one of the most important and frequently used data structures in computer science. So, how does Python handle dictionaries? Let’s take a tour of the dictionary implementations available in core Python and the Python standard library.

````python
### `dict`: Your Go-To Dictionary[](https://realpython.com/python-data-structures/#dict-your-go-to-dictionary "Permanent link")

Because dictionaries are so important, Python features a robust dictionary implementation that’s built directly into the core language: the [`dict`](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict) data type.

Python also provides some useful **syntactic sugar** for working with dictionaries in your programs. For example, the curly-brace ({ }) dictionary expression syntax and [dictionary comprehensions](https://realpython.com/iterate-through-dictionary-python/#using-comprehensions) allow you to conveniently define new dictionary objects:




```py
 phonebook = {
     "bob": 7387,
     "alice": 3719,
     "jack": 7052,
 }


 squares = {x: x * x for x in range(6)}


 phonebook["alice"]
3719


 squares
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`


````

#### \`\`

There are some restrictions on which objects can be used as valid keys.

Python’s dictionaries are indexed by keys that can be of any [hashable](https://docs.python.org/3/glossary.html#term-hashable) type. A **hashable** object has a hash value that never changes during its lifetime \(see `__hash__`\), and it can be compared to other objects \(see `__eq__`\). Hashable objects that compare as equal must have the same hash value.

[**Immutable** types](https://realpython.com/courses/immutability-python/) like [strings](https://realpython.com/python-strings/) and [numbers](https://realpython.com/python-data-types/) are hashable and work well as dictionary keys. You can also use [`tuple` objects](https://realpython.com/python-lists-tuples/#python-tuples) as dictionary keys as long as they contain only hashable types themselves.

For most use cases, Python’s built-in dictionary implementation will do everything you need. Dictionaries are highly optimized and underlie many parts of the language. For example, [class attributes](https://realpython.com/python-scope-legb-rule/#class-and-instance-attributes-scope) and variables in a [stack frame](https://en.wikipedia.org/wiki/Call_stack#Structure) are both stored internally in dictionaries.

Python dictionaries are based on a well-tested and finely tuned hash table implementation that provides the performance characteristics you’d expect: _O_\(1\) time complexity for lookup, insert, update, and delete operations in the average case.

There’s little reason not to use the standard `dict` implementation included with Python. However, specialized third-party dictionary implementations exist, such as [skip lists](https://en.wikipedia.org/wiki/Skip_list) or [B-tree–based](https://en.wikipedia.org/wiki/B-tree) dictionaries.

Besides plain `dict` objects, Python’s standard library also includes a number of specialized dictionary implementations. These specialized dictionaries are all based on the built-in dictionary class \(and share its performance characteristics\) but also include some additional convenience features.

Let’s take a look at them.

\`\`

#### \`\`

#### `collections.OrderedDict`: Remember the Insertion Order of Keys

Python includes a specialized `dict` subclass that remembers the insertion order of keys added to it: [`collections.OrderedDict`](https://realpython.com/python-ordereddict/).

**Note:** `OrderedDict` is not a built-in part of the core language and must be imported from the `collections` module in the standard library.

While standard `dict` instances preserve the insertion order of keys in CPython 3.6 and above, this was simply a [side effect](https://mail.python.org/pipermail/python-dev/2016-September/146327.html) of the CPython implementation and was not defined in the language spec until Python 3.7. So, if key order is important for your algorithm to work, then it’s best to communicate this clearly by explicitly using the `OrderedDict` class:

```python
 import collections

 d = collections.OrderedDict(one=1, two=2, three=3)


 d
OrderedDict([('one', 1), ('two', 2), ('three', 3)])


 d["four"] = 4

 d
OrderedDict([('one', 1), ('two', 2),
 ('three', 3), ('four', 4)])


 d.keys()
odict_keys(['one', 'two', 'three', 'four'])`

Until [Python 3.8](https://realpython.com/python38-new-features/), you couldn’t iterate over dictionary items in reverse order using `reversed()`. Only `OrderedDict` instances offered that functionality. Even in Python 3.8, `dict` and `OrderedDict` objects aren’t exactly the same. `OrderedDict` instances have a [`.move_to_end()` method](https://realpython.com/python-data-types/) that is unavailable on plain `dict` instance, as well as a more customizable [`.popitem()` method](https://docs.python.org/3/library/collections.html#collections.OrderedDict.popitem) than the one plain `dict` instances.
```

#### `collections.defaultdict`: Return Default Values for Missing Keys

The [`defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict) class is another dictionary subclass that accepts a callable in its constructor whose return value will be used if a requested key cannot be found.

This can save you some typing and make your intentions clearer as compared to using `get()` or catching a [`KeyError` exception](https://realpython.com/python-keyerror/) in regular dictionaries:

```python
 from collections import defaultdict

 dd = defaultdict(list)


 # Accessing a missing key creates it and

 # initializes it using the default factory,

 # i.e. list() in this example:

 dd["dogs"].append("Rufus")

 dd["dogs"].append("Kathrin")

 dd["dogs"].append("Mr Sniffles")


 dd["dogs"]
['Rufus', 'Kathrin', 'Mr Sniffles']`
```

#### `collections.ChainMap`: Search Multiple Dictionaries as a Single Mapping

The [`collections.ChainMap`](https://docs.python.org/3/library/collections.html#collections.ChainMap) data structure groups multiple dictionaries into a single mapping. Lookups search the underlying mappings one by one until a key is found. Insertions, updates, and deletions only affect the first mapping added to the chain:

```python
 from collections import ChainMap

 dict1 = {"one": 1, "two": 2}

 dict2 = {"three": 3, "four": 4}

 chain = ChainMap(dict1, dict2)


 chain
ChainMap({'one': 1, 'two': 2}, {'three': 3, 'four': 4})


 # ChainMap searches each collection in the chain

 # from left to right until it finds the key (or fails):

 chain["three"]
3

 chain["one"]
1

 chain["missing"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'missing'`
```

#### `types.MappingProxyType`: A Wrapper for Making Read-Only Dictionaries

[`MappingProxyType`](https://docs.python.org/3/library/types.html#types.MappingProxyType) is a wrapper around a standard dictionary that provides a read-only view into the wrapped dictionary’s data. This class was added in Python 3.3 and can be used to create immutable proxy versions of dictionaries.

```pyMappingProxyType` can be helpful if, for example, you’d like to return a dictionary carrying internal state from a class or module while discouraging write access to this object. Using `MappingProxyType` allows you to put these restrictions in place without first having to create a full copy of the dictionary:

```python
 from types import MappingProxyType

 writable = {"one": 1, "two": 2}

 read_only = MappingProxyType(writable)


 # The proxy is read-only:

 read_only["one"]
1

 read_only["one"] = 23
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'mappingproxy' object does not support item assignment


 # Updates to the original are reflected in the proxy:

 writable["one"] = 42

 read_only
mappingproxy({'one': 42, 'two': 2})`
```

#### Dictionaries in Python: Summary

All the Python dictionary implementations listed in this tutorial are valid implementations that are built into the Python standard library.

If you’re looking for a general recommendation on which mapping type to use in your programs, I’d point you to the built-in `dict` data type. It’s a versatile and optimized hash table implementation that’s built directly into the core language.

I would recommend that you use one of the other data types listed here only if you have special requirements that go beyond what’s provided by `dict`.

All the implementations are valid options, but your code will be clearer and easier to maintain if it relies on standard Python dictionaries most of the time.

### Array Data Structures

An **array** is a fundamental data structure available in most programming languages, and it has a wide range of uses across different algorithms.

In this section, you’ll take a look at array implementations in Python that use only core language features or functionality that’s included in the Python standard library. You’ll see the strengths and weaknesses of each approach so you can decide which implementation is right for your use case.

But before we jump in, let’s cover some of the basics first. How do arrays work, and what are they used for? Arrays consist of fixed-size data records that allow each element to be efficiently located based on its index:

[![Visual representation of an array](https://files.realpython.com/media/python-linked-list-array-visualization.5b9f4c4040cb.jpeg)](https://files.realpython.com/media/python-linked-list-array-visualization.5b9f4c4040cb.jpeg)

Because arrays store information in adjoining blocks of memory, they’re considered **contiguous** data structures \(as opposed to **linked** data structures like linked lists, for example\).

A real-world analogy for an array data structure is a parking lot. You can look at the parking lot as a whole and treat it as a single object, but inside the lot there are parking spots indexed by a unique number. Parking spots are containers for vehicles—each parking spot can either be empty or have a car, a motorbike, or some other vehicle parked on it.

But not all parking lots are the same. Some parking lots may be restricted to only one type of vehicle. For example, a motor home parking lot wouldn’t allow bikes to be parked on it. A restricted parking lot corresponds to a **typed** array data structure that allows only elements that have the same data type stored in them.

Performance-wise, it’s very fast to look up an element contained in an array given the element’s index. A proper array implementation guarantees a constant _O_\(1\) access time for this case.

Python includes several array-like data structures in its standard library that each have slightly different characteristics. Let’s take a look.

### `list`: Mutable Dynamic Arrays

[Lists](https://docs.python.org/3.6/library/stdtypes.html#lists) are a part of the core Python language. Despite their name, Python’s lists are implemented as **dynamic arrays** behind the scenes.

This means a list allows elements to be added or removed, and the list will automatically adjust the backing store that holds these elements by allocating or releasing memory.

Python lists can hold arbitrary elements—everything is an object in Python, including functions. Therefore, you can mix and match different kinds of data types and store them all in a single list.

This can be a powerful feature, but the downside is that supporting multiple data types at the same time means that data is generally less tightly packed. As a result, the whole structure takes up more space:

```python


 arr = ["one", "two", "three"]

 arr[0]
'one'


 # Lists have a nice repr:

 arr
['one', 'two', 'three']


 # Lists are mutable:

 arr[1] = "hello"

 arr
['one', 'hello', 'three']


 del arr[1]

 arr
['one', 'three']


 # Lists can hold arbitrary data types:

 arr.append(23)

 arr
['one', 'three', 23]`
```

#### `tuple`: Immutable Containers

Just like lists, [tuples](https://docs.python.org/3/library/stdtypes.html#tuple) are part of the Python core language. Unlike lists, however, Python’s `tuple` objects are immutable. This means elements can’t be added or removed dynamically—all elements in a tuple must be defined at creation time.

Tuples are another data structure that can hold elements of arbitrary data types. Having this flexibility is powerful, but again, it also means that data is less tightly packed than it would be in a typed array:

```python
 arr = ("one", "two", "three")

 arr[0]
'one'


 # Tuples have a nice repr:

 arr
('one', 'two', 'three')


 # Tuples are immutable:

 arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment


 del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object doesn't support item deletion


 # Tuples can hold arbitrary data types:

 # (Adding elements creates a copy of the tuple)

 arr + (23,)
('one', 'two', 'three', 23)`
```

````

#### `array.array`: Basic Typed Arrays

Python’s `array` module provides space-efficient storage of basic C-style data types like bytes, 32-bit integers, floating-point numbers, and so on.

Arrays created with the [`array.array`](https://docs.python.org/3/library/array.html) class are mutable and behave similarly to lists except for one important difference: they’re **typed arrays** constrained to a single data type.

Because of this constraint, `array.array` objects with many elements are more space efficient than lists and tuples. The elements stored in them are tightly packed, and this can be useful if you need to store many elements of the same type.

Also, arrays support many of the same methods as regular lists, and you might be able to use them as a drop-in replacement without requiring other changes to your application code.

```python
 import array

 arr = array.array("f", (1.0, 1.5, 2.0, 2.5))

 arr[1]
1.5


 # Arrays have a nice repr:

 arr
array('f', [1.0, 1.5, 2.0, 2.5])


 # Arrays are mutable:

 arr[1] = 23.0

 arr
array('f', [1.0, 23.0, 2.0, 2.5])


 del arr[1]

 arr
array('f', [1.0, 2.0, 2.5])


 arr.append(42.0)

 arr
array('f', [1.0, 2.0, 2.5, 42.0])


 # Arrays are "typed":

 arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be real number, not str`
````

````

#### `str`: Immutable Arrays of Unicode Characters

Python 3.x uses [`str`](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) objects to store textual data as immutable sequences of [Unicode characters](https://realpython.com/python-encodings-guide/). Practically speaking, that means a `str` is an immutable array of characters. Oddly enough, it’s also a [recursive](https://realpython.com/python-thinking-recursively/) data structure—each character in a string is itself a `str` object of length 1.

String objects are space efficient because they’re tightly packed and they specialize in a single data type. If you’re storing Unicode text, then you should use a string.

Because strings are immutable in Python, modifying a string requires creating a modified copy. The closest equivalent to a mutable string is storing individual characters inside a list:

```python
 arr = "abcd"

 arr[1]
'b'


 arr
'abcd'


 # Strings are immutable:

 arr[1] = "e"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment


 del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object doesn't support item deletion


 # Strings can be unpacked into a list to

 # get a mutable representation:

 list("abcd")
['a', 'b', 'c', 'd']

 "".join(list("abcd"))
'abcd'


 # Strings are recursive data structures:

 type("abc")
"<class 'str'>"

 type("abc"[0])
"<class 'str'>"`
````

````

#### `bytes`: Immutable Arrays of Single Bytes

[`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes-objects) objects are immutable sequences of single bytes, or integers in the range 0 ≤ _x_ ≤ 255. Conceptually, `bytes` objects are similar to `str` objects, and you can also think of them as immutable arrays of bytes.

Like strings, `bytes` have their own literal syntax for creating objects and are space efficient. `bytes` objects are immutable, but unlike strings, there’s a dedicated mutable byte array data type called `bytearray` that they can be unpacked into:

```text
 arr = bytes((0, 1, 2, 3))

 arr[1]
1


 # Bytes literals have their own syntax:

 arr
b'\x00\x01\x02\x03'

 arr = b"\x00\x01\x02\x03"


 # Only valid `bytes` are allowed:

 bytes((0, 300))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: bytes must be in range(0, 256)


 # Bytes are immutable:

 arr[1] = 23
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'bytes' object does not support item assignment


 del arr[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'bytes' object doesn't support item deletion``
````

#### `bytearray`: Mutable Arrays of Single Bytes

The [`bytearray`](https://docs.python.org/3.1/library/functions.html#bytearray) type is a mutable sequence of integers in the range 0 ≤ _x_ ≤ 255. The `bytearray` object is closely related to the `bytes` object, with the main difference being that a `bytearray` can be modified freely—you can overwrite elements, remove existing elements, or add new ones. The `bytearray` object will grow and shrink accordingly.

A `bytearray` can be converted back into immutable `bytes` objects, but this involves copying the stored data in full—a slow operation taking _O_\(_n_\) time:

```python
 arr = bytearray((0, 1, 2, 3))

 arr[1]
1


 # The bytearray repr:

 arr
bytearray(b'\x00\x01\x02\x03')


 # Bytearrays are mutable:

 arr[1] = 23

 arr
bytearray(b'\x00\x17\x02\x03')


 arr[1]
23


 # Bytearrays can grow and shrink in size:

 del arr[1]

 arr
bytearray(b'\x00\x02\x03')


 arr.append(42)

 arr
bytearray(b'\x00\x02\x03*')


 # Bytearrays can only hold `bytes`

 # (integers in the range 0 <= x <= 255)

 arr[1] = "hello"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object cannot be interpreted as an integer


 arr[1] = 300
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: byte must be in range(0, 256)


 # Bytearrays can be converted back into bytes objects:

 # (This will copy the data)

 bytes(arr)
b'\x00\x02\x03*'``
```

#### Arrays in Python: Summary

There are a number of built-in data structures you can choose from when it comes to implementing arrays in Python. In this section, you’ve focused on core language features and data structures included in the standard library.

If you’re willing to go beyond the Python standard library, then third-party packages like [NumPy](https://realpython.com/numpy-array-programming/) and [pandas](https://realpython.com/pandas-dataframe/) offer a wide range of fast array implementations for scientific computing and data science.

If you want to restrict yourself to the array data structures included with Python, then here are a few guidelines:

- If you need to store arbitrary objects, potentially with mixed data types, then use a `list` or a `tuple`, depending on whether or not you want an immutable data structure.
- If you have numeric \(integer or floating-point\) data and tight packing and performance is important, then try out `array.array`.
- If you have textual data represented as Unicode characters, then use Python’s built-in `str`. If you need a mutable string-like data structure, then use a `list` of characters.
- If you want to store a contiguous block of bytes, then use the immutable `bytes` type or a `bytearray` if you need a mutable data structure.

In most cases, I like to start out with a simple `list`. I’ll only specialize later on if performance or storage space becomes an issue. Most of the time, using a general-purpose array data structure like `list` gives you the fastest development speed and the most programming convenience.

I’ve found that this is usually much more important in the beginning than trying to squeeze out every last drop of performance right from the start.

### Records, Structs, and Data Transfer Objects

Compared to arrays, **record** data structures provide a fixed number of fields. Each field can have a name and may also have a different type.

In this section, you’ll see how to implement records, structs, and plain old data objects in Python using only built-in data types and classes from the standard library.

**Note:** I’m using the definition of a record loosely here. For example, I’m also going to discuss types like Python’s built-in `tuple` that may or may not be considered records in a strict sense because they don’t provide named fields.

Python offers several data types that you can use to implement records, structs, and data transfer objects. In this section, you’ll get a quick look at each implementation and its unique characteristics. At the end, you’ll find a summary and a decision-making guide that will help you make your own picks.

**Note:** This tutorial is adapted from the chapter “Common Data Structures in Python” in [_Python Tricks: The Book_](https://realpython.com/products/python-tricks-book/). If you enjoy what you’re reading, then be sure to check out [the rest of the book](https://realpython.com/products/python-tricks-book/).

Alright, let’s get started!

````python
### `dict`: Simple Data Objects[](https://realpython.com/python-data-structures/#dict-simple-data-objects "Permanent link")

As mentioned [previously](https://realpython.com/python-data-structures/#dictionaries-maps-and-hash-tables), Python dictionaries store an arbitrary number of objects, each identified by a unique key. Dictionaries are also often called **maps** or **associative arrays** and allow for efficient lookup, insertion, and deletion of any object associated with a given key.

Using dictionaries as a record data type or data object in Python is possible. Dictionaries are easy to create in Python as they have their own syntactic sugar built into the language in the form of **dictionary literals**. The dictionary syntax is concise and quite convenient to type.

Data objects created using dictionaries are mutable, and there’s little protection against misspelled field names as fields can be added and removed freely at any time. Both of these properties can introduce surprising bugs, and there’s always a trade-off to be made between convenience and error resilience:




```py
 car1 = {
     "color": "red",
     "mileage": 3812.4,
     "automatic": True,
 }

 car2 = {
     "color": "blue",
     "mileage": 40231,
     "automatic": False,
 }


 # Dicts have a nice repr:

 car2
{'color': 'blue', 'automatic': False, 'mileage': 40231}


 # Get mileage:

 car2["mileage"]
40231


 # Dicts are mutable:

 car2["mileage"] = 12

 car2["windshield"] = "broken"

 car2
{'windshield': 'broken', 'color': 'blue',
 'automatic': False, 'mileage': 12}


 # No protection against wrong field names,

 # or missing/extra fields:

 car3 = {
     "colr": "green",
     "automatic": False,
     "windshield": "broken",
 }`
````

#### `tuple`: Immutable Groups of Objects

Python’s tuples are a straightforward data structure for grouping arbitrary objects. Tuples are immutable—they can’t be modified once they’ve been created.

Performance-wise, tuples take up [slightly less memory](https://github.com/python/cpython/blob/1a5856bf9295fa73995898d576e0bedf016aee1f/Include/tupleobject.h#L10-L34) than [lists in CPython](https://github.com/python/cpython/blob/b879fe82e7e5c3f7673c9a7fa4aad42bd05445d8/Include/listobject.h#L4-L41), and they’re also faster to construct.

As you can see in the bytecode disassembly below, constructing a tuple constant takes a single `LOAD_CONST` opcode, while constructing a list object with the same contents requires several more operations:

````python
 import dis

 dis.dis(compile("(23, 'a', 'b', 'c')", "", "eval"))
 0 LOAD_CONST           4 ((23, "a", "b", "c"))
 3 RETURN_VALUE


 dis.dis(compile("[23, 'a', 'b', 'c']", "", "eval"))
 0 LOAD_CONST           0 (23)
 3 LOAD_CONST           1 ('a')
 6 LOAD_CONST           2 ('b')
 9 LOAD_CONST           3 ('c')
 12 BUILD_LIST           4
 15 RETURN_VALUE`

However, you shouldn’t place too much emphasis on these differences. In practice, the performance difference will often be negligible, and trying to squeeze extra performance out of a program by switching from lists to tuples will likely be the wrong approach.

A potential downside of plain tuples is that the data you store in them can only be pulled out by accessing it through integer indexes. You can’t give names to individual properties stored in a tuple. This can impact code readability.

Also, a tuple is always an ad-hoc structure: it’s difficult to ensure that two tuples have the same number of fields and the same properties stored in them.

This makes it easy to introduce slip-of-the-mind bugs, such as mixing up the field order. Therefore, I would recommend that you keep the number of fields stored in a tuple as low as possible:




```py
 # Fields: color, mileage, automatic

 car1 = ("red", 3812.4, True)

 car2 = ("blue", 40231.0, False)


 # Tuple instances have a nice repr:

 car1
('red', 3812.4, True)

 car2
('blue', 40231.0, False)


 # Get mileage:

 car2[1]
40231.0


 # Tuples are immutable:

 car2[1] = 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment


 # No protection against missing or extra fields

 # or a wrong order:

 car3 = (3431.5, "green", True, "silver")`
````

#### Write a Custom Class: More Work, More Control

**Classes** allow you to define reusable blueprints for data objects to ensure each object provides the same set of fields.

Using regular Python classes as record data types is feasible, but it also takes manual work to get the convenience features of other implementations. For example, adding new fields to the `__init__` constructor is verbose and takes time.

Also, the default string representation for objects instantiated from custom classes isn’t very helpful. To fix that, you may have to add your own [`__repr__`](https://docs.python.org/3.4/reference/datamodel.html#object.__repr__) method, which again is usually quite verbose and must be updated each time you add a new field.

Fields stored on classes are mutable, and new fields can be added freely, which you may or may not like. It’s possible to provide more access control and to create read-only fields using the [`@property`](https://docs.python.org/3/library/functions.html#property) decorator, but once again, this requires writing more glue code.

Writing a custom class is a great option whenever you’d like to add business logic and behavior to your record objects using methods. However, this means that these objects are technically no longer plain data objects:

```python
 class Car:
     def __init__(self, color, mileage, automatic):
         self.color = color
         self.mileage = mileage
         self.automatic = automatic


 car1 = Car("red", 3812.4, True)

 car2 = Car("blue", 40231.0, False)


 # Get the mileage:

 car2.mileage
40231.0


 # Classes are mutable:

 car2.mileage = 12

 car2.windshield = "broken"


 # String representation is not very useful

 # (must add a manually written __repr__ method):

 car1
<Car object at 0x1081e69e8>`
```

#### `dataclasses.dataclass`: Python 3.7+ Data Classes

[Data classes](https://realpython.com/python-data-classes/) are available in Python 3.7 and above. They provide an excellent alternative to defining your own data storage classes from scratch.

By writing a data class instead of a plain Python class, your object instances get a few useful features out of the box that will save you some typing and manual implementation work:

- The syntax for defining instance variables is shorter, since you don’t need to implement the `.__init__()` method.
- Instances of your data class automatically get nice-looking string representation via an auto-generated `.__repr__()` method.
- Instance variables accept type annotations, making your data class self-documenting to a degree. Keep in mind that type annotations are just hints that are not enforced without a separate [type-checking](https://realpython.com/python-type-checking/) tool.

Data classes are typically created using the `@dataclass` [decorator](https://realpython.com/primer-on-python-decorators/), as you’ll see in the code example below:

```python
 from dataclasses import dataclass

 @dataclass
 class Car:
     color: str
     mileage: float
     automatic: bool


 car1 = Car("red", 3812.4, True)


 # Instances have a nice repr:

 car1
Car(color='red', mileage=3812.4, automatic=True)


 # Accessing fields:

 car1.mileage
3812.4


 # Fields are mutable:

 car1.mileage = 12

 car1.windshield = "broken"


 # Type annotations are not enforced without

 # a separate type checking tool like mypy:

 Car("red", "NOT_A_FLOAT", 99)
Car(color='red', mileage='NOT_A_FLOAT', automatic=99)`

#To learn more about Python data classes, check out the [The Ultimate Guide to Data Classes in Python 3.7](https://realpython.com/python-data-classes/).
```

#### `collections.namedtuple`: Convenient Data Objects

The [`namedtuple`](https://dbader.org/blog/writing-clean-python-with-namedtuples) class available in Python 2.6+ provides an extension of the built-in `tuple` data type. Similar to defining a custom class, using `namedtuple` allows you to define reusable blueprints for your records that ensure the correct field names are used.

```pynamedtuple` objects are immutable, just like regular tuples. This means you can’t add new fields or modify existing fields after the `namedtuple` instance is created.

Besides that, `namedtuple` objects are, well . . . named tuples. Each object stored in them can be accessed through a unique identifier. This frees you from having to remember integer indexes or resort to workarounds like defining **integer constants** as mnemonics for your indexes.

```pynamedtuple` objects are implemented as regular Python classes internally. When it comes to memory usage, they’re also better than regular classes and just as memory efficient as regular tuples:

```python
 from collections import namedtuple

 from sys import getsizeof


 p1 = namedtuple("Point", "x y z")(1, 2, 3)

 p2 = (1, 2, 3)


 getsizeof(p1)
64

 getsizeof(p2)
64`
```

> pynamedtuple\` objects can be an easy way to clean up your code and make it more readable by enforcing a better structure for your data.

I find that going from ad-hoc data types like dictionaries with a fixed format to `namedtuple` objects helps me to express the intent of my code more clearly. Often when I apply this refactoring, I magically come up with a better solution for the problem I’m facing.

Using `namedtuple` objects over regular \(unstructured\) tuples and dicts can also make your coworkers’ lives easier by making the data that’s being passed around self-documenting, at least to a degree:

```python
 from collections import namedtuple

 Car = namedtuple("Car" , "color mileage automatic")

 car1 = Car("red", 3812.4, True)


 # Instances have a nice repr:

 car1
Car(color="red", mileage=3812.4, automatic=True)


 # Accessing fields:

 car1.mileage
3812.4


 # Fields are immtuable:

 car1.mileage = 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: can't set attribute


 car1.windshield = "broken"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Car' object has no attribute 'windshield'`
```

#### `typing.NamedTuple`: Improved Namedtuples

Added in Python 3.6, [`typing.NamedTuple`](https://docs.python.org/3/library/typing.html#typing.NamedTuple) is the younger sibling of the `namedtuple` class in the `collections` module. It’s very similar to `namedtuple`, with the main difference being an updated syntax for defining new record types and added support for [type hints](https://docs.python.org/3/library/typing.html).

Please note that type annotations are not enforced without a separate type-checking tool like [mypy](http://mypy-lang.org/). But even without tool support, they can provide useful hints for other programmers \(or be terribly confusing if the type hints become out of date\):

```python
 from typing import NamedTuple


 class Car(NamedTuple):
     color: str
     mileage: float
     automatic: bool


 car1 = Car("red", 3812.4, True)


 # Instances have a nice repr:

 car1
Car(color='red', mileage=3812.4, automatic=True)


 # Accessing fields:

 car1.mileage
3812.4


 # Fields are immutable:

 car1.mileage = 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: can't set attribute


 car1.windshield = "broken"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Car' object has no attribute 'windshield'


 # Type annotations are not enforced without

 # a separate type checking tool like mypy:

 Car("red", "NOT_A_FLOAT", 99)
Car(color='red', mileage='NOT_A_FLOAT', automatic=99)`
```

#### `struct.Struct`: Serialized C Structs

The [`struct.Struct`](https://docs.python.org/3/library/struct.html#struct.Struct) class converts between Python values and C structs serialized into Python `bytes` objects. For example, it can be used to handle binary data stored in files or coming in from network connections.

Structs are defined using a mini language based on [format strings](https://docs.python.org/3/library/struct.html#struct-format-strings) that allows you to define the arrangement of various C data types like `char`, `int`, and `long` as well as their `unsigned` variants.

Serialized structs are seldom used to represent data objects meant to be handled purely inside Python code. They’re intended primarily as a data exchange format rather than as a way of holding data in memory that’s only used by Python code.

In some cases, packing primitive data into structs may use less memory than keeping it in other data types. However, in most cases that would be quite an advanced \(and probably unnecessary\) optimization:

```python
 from struct import Struct

 MyStruct = Struct("i?f")

 data = MyStruct.pack(23, False, 42.0)


 # All you get is a blob of data:

 data
b'\x17\x00\x00\x00\x00\x00\x00\x00\x00\x00(B'


 # Data blobs can be unpacked again:

 MyStruct.unpack(data)
(23, False, 42.0)`
```

#### `types.SimpleNamespace`: Fancy Attribute Access

Here’s one more slightly obscure choice for implementing data objects in Python: [`types.SimpleNamespace`](https://docs.python.org/3/library/types.html#types.SimpleNamespace). This class was added in Python 3.3 and provides **attribute access** to its namespace.

This means `SimpleNamespace` instances expose all of their keys as class attributes. You can use `obj.key` dotted attribute access instead of the `obj['key']` square-bracket indexing syntax that’s used by regular dicts. All instances also include a meaningful `__repr__` by default.

As its name proclaims, `SimpleNamespace` is simple! It’s basically a dictionary that allows attribute access and prints nicely. Attributes can be added, modified, and deleted freely:

```python
 from types import SimpleNamespace

 car1 = SimpleNamespace(color="red", mileage=3812.4, automatic=True)


 # The default repr:

 car1
namespace(automatic=True, color='red', mileage=3812.4)


 # Instances support attribute access and are mutable:

 car1.mileage = 12

 car1.windshield = "broken"

 del car1.automatic

 car1
namespace(color='red', mileage=12, windshield='broken')`
```

#### Records, Structs, and Data Objects in Python: Summary

As you’ve seen, there’s quite a number of different options for implementing records or data objects. Which type should you use for data objects in Python? Generally your decision will depend on your use case:

- If you have only a few fields, then using a plain tuple object may be okay if the field order is easy to remember or field names are superfluous. For example, think of an `(x, y, z)` point in three-dimensional space.
- If you need immutable fields, then plain tuples, `collections.namedtuple`, and `typing.NamedTuple` are all good options.
- If you need to lock down field names to avoid typos, then `collections.namedtuple` and `typing.NamedTuple` are your friends.
- If you want to keep things simple, then a plain dictionary object might be a good choice due to the convenient syntax that closely resembles [JSON](https://realpython.com/python-json/).
- If you need full control over your data structure, then it’s time to write a custom class with `@property` setters and getters.
- If you need to add behavior \(methods\) to the object, then you should write a custom class, either from scratch, or using the `dataclass` decorator, or by extending `collections.namedtuple` or `typing.NamedTuple`.
- If you need to pack data tightly to serialize it to disk or to send it over the network, then it’s time to read up on `struct.Struct` because this is a great use case for it!

If you’re looking for a safe default choice, then my general recommendation for implementing a plain record, struct, or data object in Python would be to use `collections.namedtuple` in Python 2.x and its younger sibling, `typing.NamedTuple` in Python 3.

### Sets and Multisets

In this section, you’ll see how to implement mutable and immutable [set](https://realpython.com/python-sets/) and multiset \(bag\) data structures in Python using built-in data types and classes from the standard library.

A **set** is an unordered collection of objects that doesn’t allow duplicate elements. Typically, sets are used to quickly test a value for membership in the set, to insert or delete new values from a set, and to compute the union or intersection of two sets.

In a proper set implementation, membership tests are expected to run in fast _O_\(1\) time. Union, intersection, difference, and subset operations should take _O_\(_n_\) time on average. The set implementations included in Python’s standard library [follow these performance characteristics](https://wiki.python.org/moin/TimeComplexity).

Just like dictionaries, sets get special treatment in Python and have some syntactic sugar that makes them easy to create. For example, the curly-brace set expression syntax and [set comprehensions](https://realpython.com/list-comprehension-python/#using-set-and-dictionary-comprehensions) allow you to conveniently define new set instances:

```pyvowels = {"a", "e", "i", "o", "u"} squares = {x * x for x in range(10)}`

But be careful: To create an empty set you’ll need to call the `set()` constructor. Using empty curly-braces \(`{}`\) is ambiguous and will create an empty dictionary instead.

Python and its standard library provide several set implementations. Let’s have a look at them.

````python
### `set`: Your Go-To Set[](https://realpython.com/python-data-structures/#set-your-go-to-set "Permanent link")

The [`set`](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) type is the built-in set implementation in Python. It’s mutable and allows for the dynamic insertion and deletion of elements.

Python’s sets are backed by the `dict` data type and share the same performance characteristics. Any [hashable](https://docs.python.org/3/glossary.html#term-hashable) object can be stored in a set:




```py
 vowels = {"a", "e", "i", "o", "u"}

 "e" in vowels
True


 letters = set("alice")

 letters.intersection(vowels)
{'a', 'e', 'i'}


 vowels.add("x")

 vowels
{'i', 'a', 'u', 'o', 'x', 'e'}


 len(vowels)
6`
````

#### `frozenset`: Immutable Sets

The [`frozenset`](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset) class implements an immutable version of `set` that can’t be changed after it’s been constructed.

```pyfrozenset` objects are static and allow only query operations on their elements, not inserts or deletions. Because `frozenset` objects are static and hashable, they can be used as dictionary keys or as elements of another set, something that isn’t possible with regular \(mutable\) `set` objects:

```python
 vowels = frozenset({"a", "e", "i", "o", "u"})

 vowels.add("p")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'frozenset' object has no attribute 'add'


 # Frozensets are hashable and can

 # be used as dictionary keys:

 d = { frozenset({1, 2, 3}): "hello" }

 d[frozenset({1, 2, 3})]
'hello'`
```

#### `collections.Counter`: Multisets

The [`collections.Counter`](https://docs.python.org/3/library/collections.html#collections.Counter) class in the Python standard library implements a multiset, or bag, type that allows elements in the set to have more than one occurrence.

This is useful if you need to keep track of not only _if_ an element is part of a set, but also _how many times_ it’s included in the set:

````python
 from collections import Counter

 inventory = Counter()


 loot = {"sword": 1, "bread": 3}

 inventory.update(loot)

 inventory
Counter({'bread': 3, 'sword': 1})


 more_loot = {"sword": 1, "apple": 1}

 inventory.update(more_loot)

 inventory
Counter({'bread': 3, 'sword': 2, 'apple': 1})`

One caveat for the `Counter` class is that you’ll want to be careful when counting the number of elements in a `Counter` object. Calling `len()` returns the number of _unique_ elements in the multiset, whereas the _total_ number of elements can be retrieved using `sum()`:




```py
 len(inventory)
3  # Unique elements


 sum(inventory.values())
6  # Total no. of elements`
````

#### Sets and Multisets in Python: Summary

Sets are another useful and commonly used data structure included with Python and its standard library. Here are a few guidelines for deciding which one to use:

- If you need a mutable set, then use the built-in `set` type.
- If you need hashable objects that can be used as dictionary or set keys, then use a `frozenset`.
- If you need a multiset, or bag, data structure, then use `collections.Counter`.

### Stacks \(LIFOs\)

A **stack** is a collection of objects that supports fast **Last-In/First-Out** \(LIFO\) semantics for inserts and deletes. Unlike lists or arrays, stacks typically don’t allow for random access to the objects they contain. The insert and delete operations are also often called **push** and **pop**.

A useful real-world analogy for a stack data structure is a stack of plates. New plates are added to the top of the stack, and because the plates are precious and heavy, only the topmost plate can be moved. In other words, the last plate on the stack must be the first one removed \(LIFO\). To reach the plates that are lower down in the stack, the topmost plates must be removed one by one.

Performance-wise, a proper [stack implementation](https://realpython.com/how-to-implement-python-stack/) is expected to take _O_\(1\) time for insert and delete operations.

Stacks have a wide range of uses in algorithms. For example, they’re used in language parsing as well as runtime memory management, which relies on a **call stack**. A short and beautiful algorithm using a stack is [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) \(DFS\) on a tree or graph data structure.

Python ships with several stack implementations that each have slightly different characteristics. Let’s take a look at them and compare their characteristics.

````text
### `list`: Simple, Built-In Stacks[](https://realpython.com/python-data-structures/#list-simple-built-in-stacks "Permanent link")

Python’s built-in `list` type [makes a decent stack data structure](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks) as it supports push and pop operations in [amortized](https://en.wikipedia.org/wiki/Amortized_analysis) _O_(1) time.

Python’s lists are implemented as dynamic arrays internally, which means they occasionally need to resize the storage space for elements stored in them when elements are added or removed. The list over-allocates its backing storage so that not every push or pop requires resizing. As a result, you get an amortized _O_(1) time complexity for these operations.

The downside is that this makes their performance less consistent than the stable _O_(1) inserts and deletes provided by a linked list–based implementation (as you’ll see below with `collections.deque`). On the other hand, lists do provide fast _O_(1) time random access to elements on the stack, and this can be an added benefit.

There’s an important performance caveat that you should be aware of when using lists as stacks: To get the amortized _O_(1) performance for inserts and deletes, new items must be added to the _end_ of the list with the `append()` method and removed again from the end using `pop()`. For optimum performance, stacks based on Python lists should grow towards higher indexes and shrink towards lower ones.

Adding and removing from the front is much slower and takes _O_(_n_) time, as the existing elements must be shifted around to make room for the new element. This is a performance [antipattern](https://en.wikipedia.org/wiki/Anti-pattern) that you should avoid as much as possible:




```py
 s = []

 s.append("eat")

 s.append("sleep")

 s.append("code")


 s
['eat', 'sleep', 'code']


 s.pop()
'code'

 s.pop()
'sleep'

 s.pop()
'eat'


 s.pop()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop from empty list`
````

#### `collections.deque`: Fast and Robust Stacks

The [`deque`](https://docs.python.org/3/library/collections.html#collections.deque) class implements a double-ended queue that supports adding and removing elements from either end in _O_\(1\) time \(non-amortized\). Because deques support adding and removing elements from either end equally well, they can serve both as queues and as stacks.

Python’s `deque` objects are implemented as [doubly-linked lists](https://github.com/python/cpython/blob/6e8128f02e1d36e38e5866f9dc36e051caa47bc9/Modules/_collectionsmodule.c#L33-L35), which gives them excellent and consistent performance for inserting and deleting elements but poor _O_\(_n_\) performance for randomly accessing elements in the middle of a stack.

Overall, [`collections.deque` is a great choice](https://realpython.com/linked-lists-python/#introducing-collectionsdeque) if you’re looking for a stack data structure in Python’s standard library that has the performance characteristics of a linked-list implementation:

```python
 from collections import deque

 s = deque()

 s.append("eat")

 s.append("sleep")

 s.append("code")


 s
deque(['eat', 'sleep', 'code'])


 s.pop()
'code'

 s.pop()
'sleep'

 s.pop()
'eat'


 s.pop()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop from an empty deque`
```

#### `queue.LifoQueue`: Locking Semantics for Parallel Computing

The [`LifoQueue`](https://docs.python.org/3/library/queue.html#queue.LifoQueue) stack implementation in the Python standard library is synchronized and provides **locking semantics** to support multiple concurrent producers and consumers.

Besides `LifoQueue`, the `queue` module contains several other classes that implement multi-producer, multi-consumer queues that are useful for parallel computing.

Depending on your use case, the locking semantics might be helpful, or they might just incur unneeded overhead. In this case, you’d be better off using a `list` or a `deque` as a general-purpose stack:

```python
 from queue import LifoQueue

 s = LifoQueue()

 s.put("eat")

 s.put("sleep")

 s.put("code")


 s
<queue.LifoQueue object at 0x108298dd8>


 s.get()
'code'

 s.get()
'sleep'

 s.get()
'eat'


 s.get_nowait()
queue.Empty


 s.get()  # Blocks/waits forever`
```

#### Stack Implementations in Python: Summary

As you’ve seen, Python ships with several implementations for a stack data structure. All of them have slightly different characteristics as well as performance and usage trade-offs.

If you’re not looking for parallel processing support \(or if you don’t want to handle locking and unlocking manually\), then your choice comes down to the built-in `list` type or `collections.deque`. The difference lies in the data structure used behind the scenes and overall ease of use.

**`list`** is backed by a dynamic array, which makes it great for fast random access but requires occasional resizing when elements are added or removed.

The list over-allocates its backing storage so that not every push or pop requires resizing, and you get an amortized _O_\(1\) time complexity for these operations. But you do need to be careful to only insert and remove items using `append()` and `pop()`. Otherwise, performance slows down to _O_\(_n_\).

**`collections.deque`** is backed by a doubly-linked list, which optimizes appends and deletes at both ends and provides consistent _O_\(1\) performance for these operations. Not only is its performance more stable, the `deque` class is also easier to use because you don’t have to worry about adding or removing items from the wrong end.

In summary, `collections.deque` is an excellent choice for implementing a stack \(LIFO queue\) in Python.

### Queues \(FIFOs\)

In this section, you’ll see how to implement a **First-In/First-Out** \(FIFO\) queue data structure using only built-in data types and classes from the Python standard library.

A **queue** is a collection of objects that supports fast FIFO semantics for inserts and deletes. The insert and delete operations are sometimes called **enqueue** and **dequeue**. Unlike lists or arrays, queues typically don’t allow for random access to the objects they contain.

Here’s a real-world analogy for a FIFO queue:

Imagine a line of Pythonistas waiting to pick up their conference badges on day one of PyCon registration. As new people enter the conference venue and queue up to receive their badges, they join the line \(enqueue\) at the back of the queue. Developers receive their badges and conference swag bags and then exit the line \(dequeue\) at the front of the queue.

Another way to memorize the characteristics of a queue data structure is to think of it as a pipe. You add ping-pong balls to one end, and they travel to the other end, where you remove them. While the balls are in the queue \(a solid metal pipe\) you can’t get at them. The only way to interact with the balls in the queue is to add new ones at the back of the pipe \(enqueue\) or to remove them at the front \(dequeue\).

Queues are similar to stacks. The difference between them lies in how items are removed. With a **queue**, you remove the item _least_ recently added \(FIFO\) but with a **stack**, you remove the item _most_ recently added \(LIFO\).

Performance-wise, a proper queue implementation is expected to take _O_\(1\) time for insert and delete operations. These are the two main operations performed on a queue, and in a correct implementation, they should be fast.

Queues have a wide range of applications in algorithms and often help solve scheduling and parallel programming problems. A short and beautiful algorithm using a queue is [breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search) \(BFS\) on a tree or graph data structure.

Scheduling algorithms often use **priority queues** internally. These are specialized queues. Instead of retrieving the next element by insertion time, a [priority queue](https://realpython.com/python-heapq-module/#data-structures-heaps-and-priority-queues) retrieves the _highest-priority_ element. The priority of individual elements is decided by the queue based on the ordering applied to their keys.

A regular queue, however, won’t reorder the items it carries. Just like in the pipe example, you get out what you put in, and in exactly that order.

Python ships with several queue implementations that each have slightly different characteristics. Let’s review them.

````text
### `list`: Terribly Sloooow Queues[](https://realpython.com/python-data-structures/#list-terribly-sloooow-queues "Permanent link")

It’s possible to [use a regular `list` as a queue](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues), but this is not ideal from a performance perspective. Lists are quite slow for this purpose because inserting or deleting an element at the beginning requires shifting all the other elements by one, requiring _O_(_n_) time.

Therefore, I would _not_ recommend using a `list` as a makeshift queue in Python unless you’re dealing with only a small number of elements:




```py
 q = []

 q.append("eat")

 q.append("sleep")

 q.append("code")


 q
['eat', 'sleep', 'code']


 # Careful: This is slow!

 q.pop(0)
'eat'`
````

#### `collections.deque`: Fast and Robust Queues

The `deque` class implements a double-ended queue that supports adding and removing elements from either end in _O_\(1\) time \(non-amortized\). Because deques support adding and removing elements from either end equally well, they can serve both as queues and as stacks.

Python’s `deque` objects are implemented as doubly-linked lists. This gives them excellent and consistent performance for inserting and deleting elements, but poor _O_\(_n_\) performance for randomly accessing elements in the middle of the stack.

As a result, `collections.deque` is a great default choice if you’re looking for a queue data structure in Python’s standard library:

```python
 from collections import deque

 q = deque()

 q.append("eat")

 q.append("sleep")

 q.append("code")


 q
deque(['eat', 'sleep', 'code'])


 q.popleft()
'eat'

 q.popleft()
'sleep'

 q.popleft()
'code'


 q.popleft()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: pop from an empty deque`
```

#### `queue.Queue`: Locking Semantics for Parallel Computing

The [`queue.Queue`](https://docs.python.org/3/library/queue.html#queue.Queue) implementation in the Python standard library is synchronized and provides locking semantics to support multiple concurrent producers and consumers.

The `queue` module contains several other classes implementing multi-producer, multi-consumer queues that are useful for parallel computing.

Depending on your use case, the locking semantics might be helpful or just incur unneeded overhead. In this case, you’d be better off using `collections.deque` as a general-purpose queue:

```python
 from queue import Queue

 q = Queue()

 q.put("eat")

 q.put("sleep")

 q.put("code")


 q
<queue.Queue object at 0x1070f5b38>


 q.get()
'eat'

 q.get()
'sleep'

 q.get()
'code'


 q.get_nowait()
queue.Empty


 q.get()  # Blocks/waits forever`
```

#### `multiprocessing.Queue`: Shared Job Queues

[`multiprocessing.Queue`](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Queue) is a shared job queue implementation that allows queued items to be processed in parallel by multiple concurrent workers. Process-based parallelization is popular in CPython due to the [global interpreter lock](https://realpython.com/python-gil/) \(GIL\) that prevents some forms of parallel execution on a single interpreter process.

As a specialized queue implementation meant for sharing data between processes, `multiprocessing.Queue` makes it easy to distribute work across multiple processes in order to work around the GIL limitations. This type of queue can store and transfer any [pickleable](https://realpython.com/python-pickle-module/) object across process boundaries:

```python
 from multiprocessing import Queue

 q = Queue()

 q.put("eat")

 q.put("sleep")

 q.put("code")


 q
<multiprocessing.queues.Queue object at 0x1081c12b0>


 q.get()
'eat'

 q.get()
'sleep'

 q.get()
'code'


 q.get()  # Blocks/waits forever`
```

#### Queues in Python: Summary

Python includes several queue implementations as part of the core language and its standard library.

```pylist` objects can be used as queues, but this is generally not recommended due to slow performance.

If you’re not looking for parallel processing support, then the implementation offered by `collections.deque` is an excellent default choice for implementing a FIFO queue data structure in Python. It provides the performance characteristics you’d expect from a good queue implementation and can also be used as a stack \(LIFO queue\).

### Priority Queues

A **priority queue** is a container data structure that manages a set of records with [totally-ordered](https://en.wikipedia.org/wiki/Total_order) keys to provide quick access to the record with the smallest or largest key in the set.

You can think of a priority queue as a modified queue. Instead of retrieving the next element by insertion time, it retrieves the _highest-priority_ element. The priority of individual elements is decided by the order applied to their keys.

Priority queues are commonly used for dealing with scheduling problems. For example, you might use them to give precedence to tasks with higher urgency.

Think about the job of an operating system task scheduler:

Ideally, higher-priority tasks on the system \(such as playing a real-time game\) should take precedence over lower-priority tasks \(such as downloading updates in the background\). By organizing pending tasks in a priority queue that uses task urgency as the key, the task scheduler can quickly select the highest-priority tasks and allow them to run first.

In this section, you’ll see a few options for how you can implement priority queues in Python using built-in data structures or data structures included in Python’s standard library. Each implementation will have its own upsides and downsides, but in my mind there’s a clear winner for most common scenarios. Let’s find out which one it is.

````text
### `list`: Manually Sorted Queues[](https://realpython.com/python-data-structures/#list-manually-sorted-queues "Permanent link")

You can use a sorted `list` to quickly identify and delete the smallest or largest element. The downside is that inserting new elements into a list is a slow _O_(_n_) operation.

While the insertion point can be found in _O_(log _n_) time using [`bisect.insort`](https://docs.python.org/3/library/bisect.html#bisect.insort) in the standard library, this is always dominated by the slow insertion step.

Maintaining the order by appending to the list and re-sorting also takes at least _O_(_n_ log _n_) time. Another downside is that you must manually take care of re-sorting the list when new elements are inserted. It’s easy to introduce bugs by missing this step, and the burden is always on you, the developer.

This means sorted lists are only suitable as priority queues when there will be few insertions:




```py
 q = []

 q.append((2, "code"))

 q.append((1, "eat"))

 q.append((3, "sleep"))

 # Remember to re-sort every time a new element is inserted,

 # or use bisect.insort()

 q.sort(reverse=True)


 while q:
     next_item = q.pop()
     print(next_item)

(1, 'eat')
(2, 'code')
(3, 'sleep')`
````

#### `heapq`: List-Based Binary Heaps

[`heapq`](https://docs.python.org/3/library/heapq.html) is a binary heap implementation usually backed by a plain `list`, and it supports insertion and extraction of the smallest element in _O_\(log _n_\) time.

This module is a good choice for [implementing priority queues in Python](https://realpython.com/python-heapq-module/). Since `heapq` technically provides only a min-heap implementation, [extra steps must be taken](https://docs.python.org/3/library/heapq.html#priority-queue-implementation-notes) to ensure sort stability and other features typically expected from a practical priority queue:

```python
 import heapq

 q = []

 heapq.heappush(q, (2, "code"))

 heapq.heappush(q, (1, "eat"))

 heapq.heappush(q, (3, "sleep"))


 while q:
     next_item = heapq.heappop(q)
     print(next_item)

(1, 'eat')
(2, 'code')
(3, 'sleep')`
```

#### `queue.PriorityQueue`: Beautiful Priority Queues

[`queue.PriorityQueue`](https://docs.python.org/3/library/queue.html#queue.PriorityQueue) uses `heapq` internally and shares the same time and space complexities. The difference is that `PriorityQueue` is synchronized and provides locking semantics to support multiple concurrent producers and consumers.

Depending on your use case, this might be helpful, or it might just slow your program down slightly. In any case, you might prefer the class-based interface provided by `PriorityQueue` over the function-based interface provided by `heapq`:

```python
 from queue import PriorityQueue

 q = PriorityQueue()

 q.put((2, "code"))

 q.put((1, "eat"))

 q.put((3, "sleep"))


 while not q.empty():
     next_item = q.get()
     print(next_item)

(1, 'eat')
(2, 'code')
(3, 'sleep')`
```

#### Priority Queues in Python: Summary

Python includes several priority queue implementations ready for you to use.

**`queue.PriorityQueue`** stands out from the pack with a nice object-oriented interface and a name that clearly states its intent. It should be your preferred choice.

If you’d like to avoid the locking overhead of `queue.PriorityQueue`, then using the **`heapq`** module directly is also a good option.

### Conclusion: Python Data Structures

That concludes your tour of common data structures in Python. With the knowledge you’ve gained here, you’re ready to implement efficient data structures that are just right for your specific algorithm or use case.

**In this tutorial, you’ve learned:**

- Which common **abstract data types** are built into the Python standard library
- How the most common abstract data types map to Python’s **naming scheme**
- How to put abstract data types to **practical use** in various algorithms

If you enjoyed what you learned in this sample from _Python Tricks_, then be sure to check out [the rest of the book](https://realpython.com/products/python-tricks-book/).

If you’re interested in brushing up on your general data structures knowledge, then I highly recommend [Steven S. Skiena’s _The Algorithm Design Manual_](https://realpython.com/asins/1848000693/). It strikes a great balance between teaching you fundamental \(and more advanced\) data structures and showing you how to implement them in your code. Steve’s book was a great help in the writing of this tutorial.
