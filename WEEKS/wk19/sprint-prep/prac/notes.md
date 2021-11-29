1.  _Note: Your solution should have O(l.length) time complexity and O(1) space complexity, since this is what you will be asked to accomplish in an interview._

Given a singly linked list, reverse and return it.

Example

For `l = [1, 2, 3, 4, 5]`, the output should be\
`reverseLinkedList(l) = [5, 4, 3, 2, 1]`.

Input/Output

- [execution time limit] 4 seconds (py3)

- [input] linkedlist.integer l

  A singly linked list of integers.

  _Guaranteed constraints:_\
  `0 ≤ l.length ≤ 10^5^`,\
  `-10^9^ ≤ l.value ≤ 10^9^`.

- [output] linkedlist.integer

  Reversed `l`.

---

# Code:

```py
# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def reverseLinkedList(l):
```

# Code:

```py
# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def reverseLinkedList(l):
  prev = None
  current = l
  while current:
    next = current.next
    current.next = prev
    prev = current
    current = next
  return prev

```

---

---

---

2.  Provide a summary of your solution to this challenge. Describe the process that you went through during your attempts to solve it. What specific obstacles or difficulties did you encounter in the process of solving it?

> The idea is to use three-pointers: next . current , previous and move them down the list. Here. current is the main pointer running down the list, next leads it, and previous trails it. For each step, reverse the current pointer and then advance all three to get the next node.

Iterate through the linked list. In loop, do following.

- Before changing next of current,
- store next node next = curr->next
- Now change next of current
- This is where actual reversing happens curr->next = prev
- Move prev and curr one step forward prev = curr curr = next

---

---

---

3.  Explain the time and space complexity of your solution. Is that the most efficient approach? If not, how could you improve the time and/or space complexity of your solution?

---

---

---

4.  You are given the `root` node of a binary search tree (BST).

You need to write a function that returns the sum of values of all the nodes with a value between `lower` and `upper` (_inclusive_).

The BST is guaranteed to have unique values.

Example 1:

```
Input:
root = [10, 5, 15, 3, 7, null, 18]
lower = 7
upper = 15

         10
         /\
        5  15
       / \\
      3   7    18

Output:
32

```

Example 2:

```
Input:
root = [10,5,15,3,7,13,18,1,null,6]
lower = 6
upper = 10

           10
          /\
       5       15
     / \     /\
    3   7  13   18
   /   /
  1   6

Output:
23

```

- [execution time limit] 4 seconds (py3)

- [input] tree.integer root

- [input] integer lower

- [input] integer upper

- [output] integer

# Code:

```py

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def csBSTRangeSum(root, lower, upper):







```

---

---

---

5. Provide a summary of your solution to this challenge. Describe the process that you went through during your attempts to solve it. What specific obstacles or difficulties did you encounter in the process of solving it?

---

---

---

6.  Explain the time and space complexity of your solution. Is that the most efficient approach? If not, how could you improve the time and/or space complexity of your solution?

---

---

---

7.  Given a binary tree, write a function that inverts the tree.

Example:

Input: 6 / \
 4 8 / \ / \
2 5 7 9

Output: 6 / \
 8 4 / \ / \
9 7 5 2 [execution time limit] 4 seconds (py3)

[input] tree.integer root

[output] tree.integer

# Code:

```py

#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def csBinaryTreeInvert(root):







```

---

---

---

8.  Provide a summary of your solution to this challenge. Describe the process that you went through during your attempts to solve it. What specific obstacles or difficulties did you encounter in the process of solving it?

---

---

---

9.  Explain the time and space complexity of your solution. Is that the most efficient approach? If not, how could you improve the time and/or space complexity of your solution?

---

---

---
