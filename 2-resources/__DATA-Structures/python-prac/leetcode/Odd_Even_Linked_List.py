# Given a singly linked list, group all odd nodes together followed by the even nodes.
# Please note here we are talking about the node number and not the value in the nodes.
# You should try to do it in place. The program should run in O(1) space complexity and
# O(nodes) time complexity.
# Example 1:
# Input: 1->2->3->4->5->NULL
# Output: 1->3->5->2->4->NULL
# Example 2:
# Input: 2->1->3->5->6->4->7->NULL
# Output: 2->3->6->7->1->5->4->NULL


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def oddeven(self, head):

        if not head:
            return []

        odds = ListNode(0)
        evens = ListNode(0)
        oddshead = odds
        evenshead = evens
        isodd = True

        while head:
            if isodd:
                odds.next = head
                odds = odds.next
            else:
                evens.next = head
                evens = evens.next
            isodd = not isodd
            head = head.next
        evens.next = None
        odds.next = evenshead.next
        return oddshead.next


if __name__ == "__main__":
    node = ListNode(1)
    node.next = ListNode(2)
    node.next.next = ListNode(3)
    node.next.next.next = ListNode(4)
    node.next.next.next.next = ListNode(5)
    newnode = Solution().oddeven(node)

    while newnode:
        print(newnode.val)
        newnode = newnode.next
