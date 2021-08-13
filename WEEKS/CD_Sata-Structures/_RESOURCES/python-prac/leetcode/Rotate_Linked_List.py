# Given a linked list, rotate the list to the right by k places, where k is non-negative.
#
# Example 1:
#
# Input: 1->2->3->4->5->NULL, k = 2
# Output: 4->5->1->2->3->NULL
# Explanation:
# rotate 1 steps to the right: 5->1->2->3->4->NULL
# rotate 2 steps to the right: 4->5->1->2->3->NULL
# Example 2:
#
# Input: 0->1->2->NULL, k = 4
# Output: 2->0->1->NULL
# Explanation:
# rotate 1 steps to the right: 2->0->1->NULL
# rotate 2 steps to the right: 1->2->0->NULL
# rotate 3 steps to the right: 0->1->2->NULL
# rotate 4 steps to the right: 2->0->1->NULL


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def rotateRight(self, head, k):
        if not head:
            return head
        if not head.next:
            return head

        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next

        k = k % length
        slow = fast = head

        for _ in range(k):
            fast = fast.next

        while fast.next:
            slow = slow.next
            fast = fast.next

        fast.next = head
        head = slow.next
        slow.next = None

        return head
