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
