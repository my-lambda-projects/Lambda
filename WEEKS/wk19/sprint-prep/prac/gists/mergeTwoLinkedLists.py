# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def mergeTwoLinkedLists(l1, l2):

    if l1 == None and l2 == None:
        return None

    merged = ListNode(None)
    ret = merged
    # prev = merged.value
    while l1 != None or l2 != None:
        if l1 != None:
            if l2 == None and l1.next == None:
                merged.value = l1.value
                break
        if l2 != None:
            if l1 == None and l2.next == None:
                merged.value = l2.value
                break

        m1 = l2.value if l1 == None else l1.value
        m2 = l1.value if l2 == None else l2.value
        val = min(m2 if m1 == None else m1, m1 if m2 == None else m2)

        merged.next = ListNode(None)
        merged.value = val
        merged = merged.next

        if l1 != None and val >= l1.value:
            l1 = l1.next
        elif l2 != None and val >= l2.value:
            l2 = l2.next

    return ret
