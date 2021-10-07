# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        s1, s2 = [], []
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next
        carry = 0
        dummy = ListNode(0)
        while s1 or s2 or carry:
            carry += (s1.pop() if s1 else 0) + (s2.pop() if s2 else 0)
            carry, val = divmod(carry, 10)
            tail = ListNode(val)
            tail.next = dummy.next
            dummy.next = tail
        return dummy.next


# ## Recursion
# class Solution:
#     def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
#         def getLength(l):
#             count = 0
#             while l:
#                 l = l.next
#                 count += 1
#             return count
#
#         def addNode(ll1, ll2, diff):
#             if not ll1 and not ll2: return None, 0
#             if diff > 0:
#                 newNode, newCarry = addNode(ll1.next, ll2, diff - 1)
#                 newVal = ll1.val + newCarry
#             else:
#                 newNode, newCarry = addNode(ll1.next, ll2.next, diff)
#                 newVal = ll1.val + ll2.val + newCarry
#             carry, v = divmod(newVal, 10)
#             curr = ListNode(v)
#             curr.next = newNode
#             return curr, carry
#
#         len1, len2 = getLength(l1), getLength(l2)
#         if len1 < len2:
#             l1, l2 = l2, l1
#             len1, len2 = len2, len1
#         if len1 == 0 or len2 == 0: return l1
#         curr, carry = addNode(l1, l2, len1 - len2)
#         if carry:
#             head = ListNode(carry)
#             head.next = curr
#         else:
#             head = curr
#         return head
