
# Calculating Big O

**Big O**:  big picture, broad strokes, not details

- way we analyze how efficient algorithms are without getting too mired in details
- can model how much time any function will take given `n` inputs
- interested in order of magnitude of number of the exact figure
- O absorbs all fluff and n = biggest term
  - Big O of `3x^2 +x + 1` = `O(n^2)`

## Time Complexity

no loops or exit & return = O(1)

0 nested loops = `O(n)`
1 nested loops = `O(n^2)`
2 nested loops = `O(n^3)`
3 nested loops = `O(n^4)`

**recursive**:  as you add more terms, increase in time as you add input diminishes
**recursion**:  when you define something in terms of itself, a function that calls itself

- used because of ability to maintain state at diffferent levels of recursion
- inherently carries large footprint
- every time function called, you add call to stack

**iterative**:  use loops instead of recursion (preferred)
                - favor readability over performance

`O(n log(n))` & `O(log(n))`:  dividing/halving

- if code employes recursion/divide-and-conquer strategy
- what power do i need to power my base to get n

### Time Definitions

- **constant**:  does not scale with input, will take same amount of time
  - for any input size n, constant time performs same number of operations every time
- **logarithmic**:  increases number of operations it performs as logarithmic function of input size n
  - function log n grows very slowly, so as n gets longer, number of operations the algorithm needs to perform doesn't increase very much
  - halving
- **linear**:  increases number of operations it performs as linear function of input size n
  - number of additional operations needed to perform grows in direct proportion to increase in input size n
- **log-linear**:  increases number of operations it performs as log-linear function of input size n
  - looking over every element and doing work on each one
- **quadratic**:  increases number of operations it performs as quadratic function of input size n
- **exponential**:  increases number of operations it performs as exponential function of input size n
  - number of nested loops increases as function of n
- **polynomial**:  as size of input increases, runtime/space used will grow at a faster rate
- **factorial**:  as size of input increases, runtime/space used will grow astronomically even with relatively small inputs
- **rate of growth**:  how fast a function grows with input size

| Big O | Classification | Rate |
|:-----:|:--------------:|:----:|
| O(c) | constant | Better |
| O(log(n)) | logarithmic |  |
| O(n) | linear |  |
| O(n log(n)) | log-linear |  |
| O(n^c) | quadratic |  |
| O(c^n) | exponential | Worst |

## Space Complexity

- How does the space usage scale/change as input gets very large?
- What auxiliary space does your algorithm use or is it in place (constant)?
- Runtime stack space counts as part of space complexity unless told otherwise.

## Sorting Algorithms

|           |  Time Best  | Time Average | Time Worst |Worst Space|
|:---------:|:-----------:|:------------:|:----------:|:---------:|
|   Quick   | O(n log(n)) | O(n log(n)) |   O(n^2)   |  O(log(n)) |
|   Merge   | O(n log(n)) | O(n log(n)) |   O(n^2)   |     O(n)   |
|    Heap   |     O(n)    | O(n log(n)) |   O(n^2)   |     O(1)   |
|   Bubble  |     O(n)    |    O(n^2)   |   O(n^2)   |     O(1)   |
| Insertion |     O(n)    |    O(n^2)   |   O(n^2)   |     O(1)   |
| Selection |    O(n^2)   |    O(n^2)   |   O(n^2)   |     O(1)   |
|    Tree   | O(n log(n)) | O(n log(n)) |   O(n^2)   |     O(n)   |
|   Bucket  |    O(n+k)   |    O(n+k)   |   O(n^2)   |     O(n)   |
|   Radix   |    O(nk)    |    O(nk)    |   O(nk)    |   O(n+k)   |
|  Counting |    O(n+k)   |    O(n+k)   |   O(n+k)   |     O(k)   |

# Data Structures

|   Data Structure   | Average Access | Worst Access | Average Search | Worst Search | Average Insertion | Worst Insertion | Average Deletion | Worst Deletion | Worst Space |
|:------------------:|:--------------:|--------------|:--------------:|--------------|:-----------------:|-----------------|:----------------:|----------------|-------------|
|        Array       |      O(1)      | O(1)         |      O(n)      | O(n)         |        O(n)       | O(n)            |       O(n)       | O(n)           | O(n)        |
|        Stack       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|        Queue       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Singly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Doubly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|      Skip List     |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n log(n)) |
|     Hash Table     |       N/A      | N/A          |      O(1)      | O(n)         |        O(1)       | O(n)            |       O(1)       | O(n)           | O(n)        |
| Binary Search Tree |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n)        |
|      AVL Tree      |    O(log(n))   | O(log(n))    |    O(log(n))   | O(log(n))    |     O(log(n))     | O(log(n))       |     O(log(n))    | O(log(n))      | O(n)        |
