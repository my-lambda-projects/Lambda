# Singly-linked lists are already defined with this interface:
class ListNode(object):
  def __init__(self, x):
    self.value = x
    self.next = None


def condense_linked_list(node):
   root = ListNode(0)
   
   root.next = head
         p1 = head
            if p1 is None:
            return root.next
        p = p1.next
        if p is None:
            return root.next

        while p:
            if p.val == p1.val:
                p1.next = p.next
            else:
                p1 = p1.next

            p = p.next

        return root.next

    



