# Big O: How to Calculate Time and Space Complexity - In Out Code

> Guide to calculating Big O time and space complexity. Includes Big O of operations for data structures, and a step-by-step guide for your own algorithms.

## What is Big O?

Big O notation is used to quantify how quickly runtime or memory utilization will grow when an algorithm runs, in a worst-case scenario, relative to the size of the input data (**_n_**). It is also sometimes referred to as an asymptotic upper bound.

We can use Big O notation to describe two things:

1.  **Time complexity**  
    How quickly the duration of the algorithm grows, relative to the input
2.  **Space complexity**  
    How much space the algorithm requires as it grows

This guide will walk you through how to use **Big O** notation, with clear, commented code samples.

- [Why use Big O?](#Why)
- [How to calculate Big O](#Calculate)
- [Common Big O functions](#Functions)
- [Time complexity](#Time)
- [Space complexity](#Space)
- [Best, average and worst case](#Case)
- [Big O for data structures](#DataStructures)
- [Big O for Python operations](#Python)
- [Other useful resources](#Resources)

---

## Why Use Big O?

For any given problem, there could be a range of solutions. But if you measure the execution time using seconds, you’re exposed to fluctuations caused by physical factors. This includes the amount of memory on the machine used to run the solution, CPU speed, and other programs running concurrently on the system.

> Big O is used to compare the efficiency of a solution, excluding physical factors.

Each algorithm carries its own space and time complexities. In many situations, the best solution will be a balance of the two.

For example, if we need a fast solution, and we’re not too worried about space requirements, an acceptable tradeoff could be an algorithm with lower time complexity and higher space complexity. e.g. Merge Sort.

So, how do you calculate the Big O for a given algorithm?

---

## How to Calculate Big O

To calculate Big O, you first need to consider how many operations are being performed.

**A simple 5-step guide:**

1.  Split your algorithm into operations
2.  Calculate the Big O of each operation
3.  Add the Big O from each operation
4.  Strip out the constants
5.  Find the highest order term

The examples below will walk you through each step in detail, but it’s worth mentioning why we strip out the constants.

Our definition of Big O included the phrase ‘relative to the size of the input data (**_n_**)’. This means that as **_n_** gets arbitrarily large, fixed-size operations, such as adding 100 or dividing by 2, have a decreasingly significant effect on the time it takes to execute an algorithm.

There’s similar reasoning behind why we look for the most significant term. Big O measures worst case, which means we should always use the slowest time complexity for any operation within an algorithm. As **_n_** gets arbitrarily large, less significant terms won’t have the same impact on run time as the most significant term.

**Example 1: Adding two numbers**

total = nums\[0\] + nums\[1\] \# O(1) - Constant

return total \# O(1) - Constant

def add_nums(nums): total = nums\[0\] + nums\[1\] # O(1) - Constant return total # O(1) - Constant add_nums(\[1, 2, 3\])

def add_nums(nums): total = nums\[0\] + nums\[1\] # O(1) - Constant return total # O(1) - Constant

add_nums(\[1, 2, 3\])

In example 1, we’re adding two numbers from a given list, by performing a lookup on index.

For `total = nums[0] + nums[1]`, we’re performing three operations, each of which has O(1) constant time complexity:

- **Operation 1:**  
  nums\[0\] – This is a lookup. O(1)
- **Operation 2:**  
  nums\[1\] – This is a lookup. O(1)
- **Operation 3:**  
  total = nums\[0\] + nums\[1\] – This is an assignment. O(1)

We then `return total`, which is another O(1) operation. The highest order term in this example is therefore O(1).

**Example 2: Simple loops**

print(lst\[0\]) \# Operation 1: O(1) - Constant

midpoint = len(lst)/2 # Operation 2: O(n/2)

for val in lst\[:midpoint\]: # Operation 3: O( 1/2 \* n )

for x in range(10): \# Operation 4: O(10)

def comp(lst): print(lst\[0\]) # Operation 1: O(1) - Constant midpoint = len(lst)/2 # Operation 2: O(n/2) for val in lst\[:midpoint\]: # Operation 3: O( 1/2 \* n ) print val for x in range(10): # Operation 4: O(10) print('Hello World')

def comp(lst): print(lst\[0\]) # Operation 1: O(1) - Constant midpoint = len(lst)/2 # Operation 2: O(n/2) for val in lst\[:midpoint\]: # Operation 3: O( 1/2 \* n ) print val for x in range(10): # Operation 4: O(10) print('Hello World')

Adding these notations up for each of the three operations, we get:

    O(1 + n/2 + 1/2n + 10)

As constants are removed, this gets rid of the 1, /2, 1/2, and 10. So we get:

    O(n)

Constants are removed because they have significantly lower importance as we approach infinity.

The final Big O of an algorithm that contains multiple operations, is the operation that has the highest complexity.

---

## Common Big O Functions

The examples above have provided a quick introduction to how we calculate the Big O for a given algorithm. But what do O(1), O(n) and the other complexities really mean?

Some of the most common functions are:

| Name        | Big-O       |
| ----------- | ----------- |
| Constant    | O(1)        |
| Logarithmic | O(log(n))   |
| Linear      | O(n)        |
| Log Linear  | O(n log(n)) |
| Quadratic   | O(n^2)      |
| Cubic       | O(n^3)      |
| Exponential | O(2^n)      |

---

## Time Complexity

### Constant Time: O(1)

Properties of an algorithm with **constant** time complexity:

- Algorithm execution time is not dependent on the size of the input data
- Time complexity is always the same, regardless of input

**Some of the operations with O(1) time complexity:**

- get item (lookup by index/key)
- set item (assignment)
- an arithmetic operation (e.g. 1 + 1, 2 – 1, etc.)
- a comparison test (e.g. x == 1)

Any method that performs a fixed number of basic operations each time it’s called requires constant time.

**Example 1: Get index value**

def get_first(data): return data\[0\] data = \[1, 2, 9, 8, 3\] print(get_first(data))

def get_first(data): return data\[0\] data = \[1, 2, 9, 8, 3\] print(get_first(data))

When retrieving the value of an element at a specific index, the time complexity is O(1). In the example above, whether our list holds 5 elements or 500, the complexity of retrieving the value at index 0 remains O(1).

The reason for this is because the operations required to access an element in memory remains constant, regardless of how many elements are in the array.

Given the starting memory address of an array, you can simply multiply the size of the data type in bytes by the index of the item you’re searching for.

**Example:** Start address of array is 10. Searching for 5th element in array of integers. Integer data type is 4 bytes. So the address of the item we’re searching for is: `(10 + (5 * 4))`

---

### Logarithmic Time: O(log n)

Properties of an algorithm with **logarithmic** time complexity:

- Reduces the size of the input data in each step
- No need to look at all values
- The next action will only be performed on one of several possible elements

**Example operations:** Binary Search, operations on binary search trees

Algorithms with a ‘divide and conquer’ approach are considered to have a logarithmic time complexity, such as binary search.

**Example 1: Print every third value in a range**

for index in range(0, len(data), 3):

for index in range(0, len(data), 3): print(data\[index\])

for index in range(0, len(data), 3): print(data\[index\])

**Example 2: Find a value using binary search**

def binarySearch(sortedList, target):

right = len(sortedList) - 1

if (sortedList(mid) == target):

elif(sortedList(mid) < target):

\# If target is not in the list, return -1

binarySearch(\[1,3,9,22\],22)

def binarySearch(sortedList, target): left = 0 right = len(sortedList) - 1 while (left <= right): mid = (left + right)/2 if (sortedList(mid) == target): return mid elif(sortedList(mid) < target): left = mid + 1 else: right = mid - 1 # If target is not in the list, return -1 return -1 binarySearch(\[1,3,9,22\],22) # return 3

def binarySearch(sortedList, target): left = 0 right = len(sortedList) - 1 while (left <= right): mid = (left + right)/2 if (sortedList(mid) == target): return mid elif(sortedList(mid) < target): left = mid + 1 else: right = mid - 1

# If target is not in the list, return -1

return -1

binarySearch(\[1,3,9,22\],22)

# return 3

---

### Linear Time: O(n)

Properties of an algorithm with **linear** time complexity:

- Number of operations taking place scales linearly with the size of **n**
- e.g. Performing the print operation 100 times, once per item, in a list containing 100 items

**Example operations:** copy, insert into an array, delete from an array, iteration

**Algorithms:** Linear Search

An algorithm with linear time complexity is considered the optimal solution when all values must be examined.

**Example 1: Print every value in a range**

data = \[1, 7, 3, 19, 2, 100\]

for index in range(len(data)):

data = \[1, 7, 3, 19, 2, 100\] for index in range(len(data)): print(data\[index\])

data = \[1, 7, 3, 19, 2, 100\]

for index in range(len(data)): print(data\[index\])

In the above example, the print operation itself is O(1), but the number of iterations we perform in the `for` loop is directly proportional to the size of the input data. Because we always take the higher order term, the Big O time complexity is O(n).

**Example 2: Print every value in n twice, as two separate operations**

def print_twice(lst): \# O(n) - O(2n) but we drop the constant

def print_twice(lst): # O(n) - O(2n) but we drop the constant for val in lst: # O(n) print val for val in lst: # O(n) print val

def print_twice(lst): # O(n) - O(2n) but we drop the constant for val in lst: # O(n) print val for val in lst: # O(n) print val

In example 2, we combine the two time complexities to get `O(n) + O(n) = O(2n)`. We now drop the constant (2) to get O(n).

**Example 3: Find item in a sorted list**

def linearSearch(sortedList, target):

for i in range(len(sortedList)):

if (sortedList\[i\] == target):

\# If target is not in the list, return -1

linearSearch(\[1,3,9,22\],22)

def linearSearch(sortedList, target): for i in range(len(sortedList)): if (sortedList\[i\] == target): return i # If target is not in the list, return -1 return -1 linearSearch(\[1,3,9,22\],22) # return 3

def linearSearch(sortedList, target): for i in range(len(sortedList)): if (sortedList\[i\] == target): return i

# If target is not in the list, return -1

return -1

linearSearch(\[1,3,9,22\],22)

# return 3

In Example 3, we're performing a linear search on a sorted array. A faster approach, because the array is sorted, would be to use binary search, which has a logarithmic time complexity of O(log n).

---

### Quasilinear Time: O(n log n)

Properties of an algorithm with **log linear** (also known as **quasilinear**) time complexity:

- Each operation in the input data has a logarithm time complexity
- e.g. for each value in the data1 (O(n)) use the binary search (O(log n)) to search the same value in data2

**Example operations:** Sort a list

Algorithms with O(n log n) time complexity:

- Mergesort
- Heapsort
- Cubesort

**Example 1:**

result.append(binary_search(data2, value))

for value in data1: result.append(binary_search(data2, value))

for value in data1: result.append(binary_search(data2, value))

---

### Quadratic Time: O(n²)

Properties of an algorithm with **quadratic** time complexity:

- Perform a linear time operation for each value in the input data
- For a list of n items, we perform n operations for each item. e.g. 10 items has 10^2 operations.

**Example operations:** Nested loops.

**Algorithms:**

- Bubble Sort
- Quicksort
- Insertion Sort
- Selection Sort
- Tree Sort
- Bucket Sort

**Example 1: Nested loop**

for x in data: for y in data: print(x, y)

for x in data: for y in data: print(x, y)

---

### Exponential Time: O(2^n)

Properties of an algorithm with **exponential** time complexity:

- Growth doubles with each addition to the input data set
- e.g. 'Towers of Hanoi' problem

**Algorithms:** Recursive Fibonacci

**Example 1: Recursive calculation of Fibonacci numbers**

return fibonacci(number - 2) + fibonacci(number - 1)

def fibonacci(num): if (num <= 1): return num return fibonacci(number - 2) + fibonacci(number - 1)

def fibonacci(num): if (num <= 1): return num return fibonacci(number - 2) + fibonacci(number - 1)

---

### Factorial Time: O(n!)

Properties of an algorithm with **factorial** time complexity:

- Grows in a factorial based way based on the size of the input data
- Grows fast even for a small size input

**Algorithms:** Heap's algorithm - Used to generate all possible permutations of n objects

**Example 1: Heap's algorithm**

def heap_permutation(data, n):

heap_permutation(data, n - 1)

data\[i\], data\[n-1\] = data\[n-1\], data\[i\]

data\[0\], data\[n-1\] = data\[n-1\], data\[0\]

heap_permutation(data, len(data))

def heap_permutation(data, n): if n == 1: print(data) return for i in range(n): heap_permutation(data, n - 1) if n % 2 == 0: data\[i\], data\[n-1\] = data\[n-1\], data\[i\] else: data\[0\], data\[n-1\] = data\[n-1\], data\[0\] data = \[1, 2, 3\] heap_permutation(data, len(data))

def heap_permutation(data, n): if n == 1: print(data) return for i in range(n): heap_permutation(data, n - 1) if n % 2 == 0: data\[i\], data\[n-1\] = data\[n-1\], data\[i\] else: data\[0\], data\[n-1\] = data\[n-1\], data\[0\] data = \[1, 2, 3\] heap_permutation(data, len(data))

---

## Space Complexity

In some situations, we want to optimize for space instead of time, or to find a balance between the two. For this, we need to calculate the space complexity.

Space complexity is measured using the same notation as time complexity, but we consider the total memory allocation required, relative to the size of the input.

**Example 1: O(n) space complexity**

\# \['new', 'new', 'new', 'new', 'new'\]

def create_list(n): new_list = \[\] for num in range(n): new_list.append('new') return new_list create_list(5) # \['new', 'new', 'new', 'new', 'new'\]

def create_list(n): new_list = \[\] for num in range(n): new_list.append('new') return new_list create_list(5)

# \['new', 'new', 'new', 'new', 'new'\]

The above code has a space complexity of O(n), as the amount of space required increases with size of n (linear).

**Example 2: O(1) space complexity**

for x in range(len(n)): # Time Complexity - O(n)

print('Hello World!') # Space Complexity - O(1)

def hello_world(n): for x in range(len(n)): # Time Complexity - O(n) print('Hello World!') # Space Complexity - O(1)

def hello_world(n):

        for x in range(len(n)): # Time Complexity - O(n)
            print('Hello World!') # Space Complexity - O(1)

In example 2, the number of times we iterate through the loop is directly proportional to the size of the input. Therefore, we have a linear time complexity of O(n).

The `print` operation requires constant space, whether we call it once or 100 times. This means we have a constant space complexity of O(1).

---

## Best Case, Average Case and Worst Case

When calculating Big O, we're only interested in the worst case. But it can also be important to consider the average case, and know about best case.

For example, when searching an unsorted array for a value, the best case would be that the value was the first item in the array. This would result in O(1). Conversely, if the value searched for was the last item in the array, or wasn't in the array, worst case would be O(n).

lst = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

def matcher(lst, match): for item in lst: if item == match: return True return False lst = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

def matcher(lst, match): for item in lst: if item == match: return True return False

lst = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

**Best case:** Find the item at first position.

    matcher(lst, 1) # O(1) - Constant

**Worst case:** Find item at last position.

    matcher(lst,10) # O(n) - Linear

---

## Big O for Data Structures

---

### Linked Lists

Compared to arrays, linked lists require more time, but less space.

Linked lists save on memory because you only create the items you need, there's no need to create a fixed-size array ahead of time for a static array, or cope with the copying process that comes with a dynamic array.

The downside is it takes longer to retrieve items. That's because when nodes are created, they might not be close to each other in memory. This means we can't perform the same O(1) calculation to determine a value given its index, like we can with an array.

With linked lists, when retrieving item **'n'**, we need to walk the list from the head to the **nth** item. Therefore, linked list retrieval has a Big O time complexity of O(n), which is linear.

The same logic applies for appending a new item to a linked list. You need to walk from the head to the last item, then set the 'next' pointer of the last item to be the new node. This is why appends are also considered O(n) time.

In contrast, adding an item to the front of a linked list is an O(1) constant time operation. We simply need to set the new node to be the head of the linked list, the point it to the previous head node. The number of operations performed isn't affected by the list size.

The only way you could make appends an O(1) operation would be to maintain a reference to the tail node of the linked list. This way you could:

1.  Create your new node
2.  Set the 'next' attribute of the tail node to be the new node
3.  Set the 'tail' reference to point to your new node

---

### Hash Tables

Time complexity of hash table operations depends heavily on the quality of the hash function. Even assuming the hash function computes the hash of a key in constant time O(1), if all values hash to the same slot, and you use a linked list to handle collisions, the result will be O(n) search.

Inserting into a hash table will only be O(1) if you use a linked list to handle collisions, and maintain a pointer to the tail for O(1) appends.

---

### Doubly Linked Lists

The main advantage doubly linked lists (DLLs) have over singly linked lists (SLLs), in terms of time complexity, is that you can use them to find the previous node in constant time.

With an SLL, if we're given a node and told to find the previous node, we have to walk from the head until we find the given node. In the worst case, this would be O(n).

Each node in a DLL contains a pointer to the previous node, so we can simply use this pointer to retrieve the previous node value in O(1) time.

---

## Big O for Python Operations

### List Operations

Some list methods perform the same number of basic operations, irrespective of list size, so use constant time complexity of O(1). For other list methods, the number of operations they perform is proportional to the number of items in the list, so use linear time complexity of O(n).

**Simple example:**

- **O(1):** The `pop()` method always removes an item at the end of the list. It doesn't matter how large the list is, only one operation needs to be performed.
- **O(n):** The `remove()` method has to fill the gap by moving over all of the items to the right of the one that was removed. In the worst case, the first item will be removed, which means all items in the list need to be moved.

**More complex example:** O(n): The `append()` method adds an item to the end of the list. If the memory allocated to the list was already large enough to hold the existing items and the new item, then the time complexity would be constant O(1).

However, if the list was full before the `append()`, you need to allocate a new array with a size large enough to hold all existing items, plus the item you're adding. Python would then copy all the items over from the old array to the new array, making the worst case time complexity proportional to the list size. Therefore the `insert()` list operation has linear time complexity of O(n).

| Operation         | Example            | Big-O      |
| ----------------- | ------------------ | ---------- |
| Index             | list\[0\]          | O(1)       |
| Store             | list\[0\] = 0      | O(1)       |
| Append            | list.append(4)     | O(1)       |
| Pop               | list.pop()         | O(1)       |
| Clear             | list.clear()       | O(1)       |
| Length            | len(list)          | O(1)       |
| Pop Index         | list.pop(0)        | O(n)       |
| Remove            | list.remove('x')   | O(n)       |
| Insert            | list.insert(0,'a') | O(n)       |
| Del operator      | del list           | O(n)       |
| Iteration         | for v in list:     | O(n)       |
| Containment       | 'x' in list1       | O(n)       |
| Equality          | list1 == list2     | O(n)       |
| Copy              | list.copy()        | O(n)       |
| Reverse           | list.reverse()     | O(n)       |
| get slice \[x:y\] | list\[a:b\]        | O(k)       |
| del slice         | del list\[a:b\]    | O(n)       |
| set slice         |                    | O(n+k)     |
| concatenate       |                    | O(k)       |
| Sort              | list.sort()        | O(n log n) |
| Multiply          | 5 \* list          | O(k n)     |

---

### Dictionary Operations

| Operation   | Example             | Big-O |
| ----------- | ------------------- | ----- |
| Index       | dict\[0\]           | O(1)  |
| Store       | dict\[0\] = 'value' | O(1)  |
| Length      | len(dict)           | O(1)  |
| Delete      | del dict\[0\]       | O(1)  |
| Get         | dict.get(0)         | O(1)  |
| Pop         | dict.pop()          | O(1)  |
| Pop item    | dict.popitem()      | O(1)  |
| Clear       | dict.clear()        | O(1)  |
| View        | dict.keys()         | O(1)  |
| Iteration   | for k in dict:      | O(n)  |
| Containment | x in dict:          | O(n)  |
| Copy        | dict.copy()         | O(n)  |

---

### Set Operations

Sets have more operations that are O(1) compared to lists or dictionaries. Not having to keep the data in order reduces the complexity.

| Operation      | Example        | Big-O              |
| -------------- | -------------- | ------------------ | ------------------ |
| Length         | len(set)       | O(1)               |
| Add            | set.add(4)     | O(1)               |
| Containment    | x in set       | O(1)               |
| Remove         | set.remove(4)  | O(1)               |
| Discard        | set.discard(4) | O(1)               |
| Pop            | set.pop()      | O(1)               |
| Clear          | set.clear()    | O(1)               |
| Union          | set1           | set2               | O(len(s) + len(t)) |
| Intersection   | set1 & set2    | O(len(s) + len(t)) |
| Difference     | set1 - set2    | O(len(s) + len(t)) |
| Symmetric Diff | set1 ^ set2    | O(len(s) + len(t)) |
| Iteration      | for v in set:  | O(n)               |
| Copy           | set.copy()     | O(n)               |

---

## Other Useful Resources

- [Plain English Explanation](http://stackoverflow.com/questions/487258/plain-english-explanation-of-big-o/487278#487278)
- [What does log n mean?](http://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)
- [Stanford Lecture](http://web.stanford.edu/class/archive/cs/cs106b/cs106b.1172/lectures/11-BigO/11-BigO.pdf)
- [MIT Lecture](http://web.mit.edu/16.070/www/lecture/big_o.pdf)
- [Cheat Sheet](http://bigocheatsheet.com/)

[Source](https://www.inoutcode.com/concepts/big-o/)
