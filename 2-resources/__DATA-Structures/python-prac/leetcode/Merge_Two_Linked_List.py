# Merge two sorted linked lists and return it as a new list.
# The new list should be made by splicing together the nodes
# of the first two lists.
#
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


class Solution:
    def merge(self, l1, l2):
        newnode = ListNode(-1)
        node = newnode

        while l1 is not None and l2 is not None:
            if l1.val <= l2.val:
                node.next = l1
                l1 = l1.next
            else:
                node.next = l2
                l2 = l2.next
            node = node.next
        node.next = l1 if l1 is not None else l2
        return newnode.next


if __name__ == "__main__":
    arr1 = [1, 3, 5, 7]
    arr2 = [2, 4, 6]
    node1 = ListNode(arr1[0])
    node2 = ListNode(arr2[0])
    n1 = node1
    n2 = node2
    for i in arr1[1:]:
        n1.next = ListNode(i)
        n1 = n1.next

    for i in arr2[1:]:
        n2.next = ListNode(i)
        n2 = n2.next
    node1 = None
    output = Solution().merge(node1, node2)

    while output:
        print(output.val)
        output = output.next
