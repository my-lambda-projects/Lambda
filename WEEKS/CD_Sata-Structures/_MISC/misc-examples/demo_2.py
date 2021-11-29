"""
Given a reference to the head node of a singly-linked list, write a function
that reverses the linked list in place. The function should return the new head
of the reversed list.
In order to do this in O(1) space (in-place), you cannot make a new list, you
need to use the existing nodes.
In order to do this in O(n) time, you should only have to traverse the list
once.
*Note: If you get stuck, try drawing a picture of a small linked list and
running your function by hand. Does it actually work? Also, don't forget to
consider edge cases (like a list with only 1 or 0 elements).*
"""


class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None


def reverse(head_of_list):
    # Your code here
    pass
