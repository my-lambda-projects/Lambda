# Given a sorted linked list, delete all duplicates such that each
# element appear only once.
#
# Input: 1->1->2
# Output: 1->2
#
# Input: 1->1->2->3->3
# Output: 1->2->3


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def removeDuplicates(self, head):
        if not head:
            return None
        if head.next is None:
            return head
        prev, curr = head, head.next

        while curr:
            if prev.val == curr.val:
                prev.next = curr.next
                curr = prev.next
            else:
                prev = prev.next
                curr = curr.next
        return head


if __name__ == "__main__":
    arr = [1, 1, 2, 2, 3, 3, 4]
    node = ListNode(arr[0])
    n = node
    for i in arr[1:]:
        n.next = ListNode(i)
        n = n.next
    newnode = Solution().removeDuplicates(node)
    while newnode:
        print(newnode.val)
        newnode = newnode.next
