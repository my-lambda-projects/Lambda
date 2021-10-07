# Given a linked list, determine if it has a cycle in it.
#
# To represent a cycle in the given linked list, we use an integer pos which
# represents the position (0-indexed) in the linked list where tail connects to.
# If pos is -1, then there is no cycle in the linked list.
#
# Input: head = [3,2,0,-4], pos = 1
# Output: true
# Explanation: There is a cycle in the linked list, where tail connects to the second node.
#
# Input: head = [1], pos = -1
# Output: false
# Explanation: There is no cycle in the linked list.


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def isCycle(self, head):
        pointer1 = head
        pointer2 = head.next

        while pointer1 != pointer2:
            if pointer2 is None or pointer2.next is None:
                return False
            pointer1 = pointer1.next
            pointer2 = pointer2.next.next
        return True


if __name__ == "__main__":
    arr = [3, 2, 0, -4]
    node = ListNode(arr[0])
    n = node
    for i in arr[1:]:
        n.next = ListNode(i)
        n = n.next
    ans = Solution().isCycle(node)
    print(ans)
