# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def removeKFromList(l, k):
    if l == None:
        return l
    while l != None and l.value == k:
        l = l.next

    n = l

    while n != None and n.next != None:
        if n.next.value == k:
            n.next = n.next.next
        else:
            n = n.next

    return l
