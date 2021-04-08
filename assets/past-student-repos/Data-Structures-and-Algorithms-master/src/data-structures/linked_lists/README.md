# Linked Lists

<p align="center">
  <img src="../../../assets/linked-list.svg"/>
</p>

- [Singly Linked List](#singly-linked-list)


## Description

A linked list is a dynamic linear data structure where each element is a separate object, commonly called a **node**. Each node contains a value and a reference to the next node in the list or null, which signifies the end of the list. The linked list class keeps track of the first node referred to as the **head**; it may also keep track of the **tail** (the end) and the size of the list.

## Advantages

Insertion and removal of nodes are O(1) time since only the pointers need to be changed. Linked lists do not need contiguos allocated memory up-front. If there is room in memory for the node, then it can be added to the linked list.

## Disadvantages

Linked lists are not as cache-friendly because they do not use contiguous memory. Searching a linked list is O(n) time because there is no access to indexing. A search must start at the head (or tail if doubly-linked) and move through the list one node at a time until either the target value is found or is not in the list. This is called sequential access. Another disadvantage when considering space complexity is linked lists use more memory to hold the pointer to the next node.

## Common Operations
| Op/Method | Description |
|:--------- | ----------- |
| Insertion | |
| Removal   | |
| Search    | |
| Size      | |

<hr>

#### _References_

_[Linked Lists](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)_

[↑](#Linked-Lists)