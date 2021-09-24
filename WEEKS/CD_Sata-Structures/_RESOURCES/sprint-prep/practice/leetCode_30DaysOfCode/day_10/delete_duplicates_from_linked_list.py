"""
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.
"""


def deleteDuplicates(self, head):
    current = head
    while current:
        # case_1 if the head is duplicate
        if current.next and current.val == current.next.val:
            head = current.next.next
            while head and current.val == head.val:
                head = head.next
            current = head
        # case_2 if nodes are duplicate after the head
        elif (
            current.next
            and current.next.next
            and current.next.val == current.next.next.val
        ):
            n = current.next.next.next
            while n and current.next.val == n.val:
                n = n.next
            current.next = n
        else:
            current = current.next
    return head
