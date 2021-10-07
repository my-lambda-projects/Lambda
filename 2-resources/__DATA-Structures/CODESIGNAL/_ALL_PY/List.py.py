"""
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

"""


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        get_len = 0
        current = head
        while current:
            get_len += 1
            current = current.next
        mid = get_len // 2
        current = head
        while mid > 0:
            current = current.next
            mid -= 1
        return current
