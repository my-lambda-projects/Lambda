class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def remove(self, head, val):
        sentinel = ListNode(0)
        sentinel.next = head
        prev, curr = sentinel, head

        while curr:
            if curr.val == val:
                prev.next = curr.next
            else:
                prev = curr
            curr = curr.next
        return sentinel.next


if __name__ == "__main__":
    arr = [1, 2, 6, 3, 5, 6]
    node = ListNode(arr[0])
    newnode = node
    for i in arr[1:]:
        newnode.next = ListNode(i)
        newnode = newnode.next
    newnode = Solution().remove(node, 6)
    while node:
        print(node.val)
        node = node.next
