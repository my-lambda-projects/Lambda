# Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
#
# Example 1:
#
# Input: 1->2->3->3->4->4->5
# Output: 1->2->5
# Example 2:
#
# Input: 1->1->1->2->3
# Output: 2->3


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:

        if not head:
            return head
        if not head.next:
            return head

        node = ListNode(-1)
        node.next = head
        prev = node
        curr = node.next

        while curr and curr.next:
            if curr.val == curr.next.val:
                preval = curr.val
                while curr and curr.val == preval:
                    curr = curr.next
                prev.next = curr
            else:
                prev = prev.next
                curr = curr.next

        return node.next
