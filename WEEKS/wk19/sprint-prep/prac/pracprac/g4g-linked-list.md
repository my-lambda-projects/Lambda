# Python Program to Reverse a linked list - GeeksforGeeks

> A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.

Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing links between nodes.  
Examples:

Input : Head of following linked list  
 1->2->3->4->NULL Output : Linked list should be changed to, 4->3->2->1->NULL

Input : Head of following linked list  
 1->2->3->4->5->NULL Output : Linked list should be changed to, 5->4->3->2->1->NULL

Input : NULL Output : NULL

Input : 1->NULL Output : 1->NULL

**Iterative Method**

- Python

## Python

`class` `Node:`

`def` ` __init__(``self``, data): `

` self``.data ` `=` `data`

` self``.``next ` `=` `None`

`class` `LinkedList:`

`def` ` __init__(``self``): `

` self``.head ` `=` `None`

`def` ` reverse(``self``): `

`prev` `=` `None`

`current` `=` ` self``.head `

` while``(current ` `is` `not` ` None``): `

`next` `=` ` current.``next `

` current.``next ` `=` `prev`

`prev` `=` `current`

`current` `=` `next`

` self``.head ` `=` `prev`

`def` ` push(``self``, new_data): `

`new_node` `=` `Node(new_data)`

` new_node.``next ` `=` ` self``.head `

` self``.head ` `=` `new_node`

`def` ` printList(``self``): `

`temp` `=` ` self``.head `

` while``(temp): `

`print` `temp.data,`

`temp` `=` ` temp.``next `

`llist` `=` `LinkedList()`

` llist.push(``20``) `

` llist.push(``4``) `

` llist.push(``15``) `

` llist.push(``85``) `

`print` `"Given Linked List"`

`llist.printList()`

`llist.reverse()`

`print` `"\nReversed Linked List"`

`llist.printList()`

**Output:**

Given Linked List 85 15 4 20 Reversed Linked List 20 4 15 85

**A Simpler and Tail Recursive Method**

- Python

## Python

`class` `Node:`

`def` ` __init__(``self``, data): `

` self``.data ` `=` `data`

` self``.``next ` `=` `None`

`class` `LinkedList:`

`def` ` __init__(``self``): `

` self``.head ` `=` `None`

`def` ` reverseUtil(``self``, curr, prev): `

`if` ` curr.``next ` `is` ` None``: `

` self``.head ` `=` `curr`

` curr.``next ` `=` `prev`

`return`

`next` `=` ` curr.``next `

` curr.``next ` `=` `prev`

` self``.reverseUtil(``next``, curr) `

`def` ` reverse(``self``): `

`if` ` self``.head ` `is` ` None``: `

`return`

` self``.reverseUtil(``self``.head, ` ` None``) `

`def` ` push(``self``, new_data): `

`new_node` `=` `Node(new_data)`

` new_node.``next ` `=` ` self``.head `

` self``.head ` `=` `new_node`

`def` ` printList(``self``): `

`temp` `=` ` self``.head `

` while``(temp): `

`print` `temp.data,`

`temp` `=` ` temp.``next `

`llist` `=` `LinkedList()`

` llist.push(``8``) `

` llist.push(``7``) `

` llist.push(``6``) `

` llist.push(``5``) `

` llist.push(``4``) `

` llist.push(``3``) `

` llist.push(``2``) `

` llist.push(``1``) `

`print` `"Given linked list"`

`llist.printList()`

`llist.reverse()`

`print` `"\nReverse linked list"`

`llist.printList()`

Please refer complete article on [Reverse a linked list](https://www.geeksforgeeks.org/reverse-a-linked-list/) for more details!

[Source](https://www.geeksforgeeks.org/python-program-for-reverse-a-linked-list/)
