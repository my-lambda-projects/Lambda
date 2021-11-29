# Given a node from a Circular Linked List which is sorted in ascending order,
# write a function to insert a value insertVal into the list such that it remains
# a sorted circular list. The given node can be a reference to any single node in
# the list, and may not be necessarily the smallest value in the circular list.
#
# If there are multiple suitable places for insertion, you may choose any place
# to insert the new value. After the insertion, the circular list should remain sorted.
#
# If the list is empty (i.e., given node is null), you should create a new single
# circular list and return the reference to that single node. Otherwise, you should
# return the original given node.
#
# Input: head = [3,4,1], insertVal = 2
# Output: [3,4,1,2]
#
# Input: head = [], insertVal = 1
# Output: [1]
# Explanation: The list is empty (given head is null). We create a new single
# circular list and return the reference to that single node.
#
# Input: head = [1], insertVal = 0
# Output: [1,0]


class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next


class Solution:
    def insert(self, head, insertVal):
        if not head:
            head = Node(insertVal)
            head.next = head
            return head
        prev = head
        curr = head.next
        isinsert = False

        while True:
            if prev.val <= insertVal <= curr.val:
                isinsert = True
            elif prev.val > curr.val:
                if insertVal > prev.val or insertVal < curr.val:
                    isinsert = True
            if isinsert:
                prev.next = Node(insertVal, curr)
                return head
            prev, curr = curr, curr.next
            if prev == head:
                break
        prev.next = Node(insertVal, curr)
        return head


if __name__ == "__main__":
    # [1,3,4]
    node = Node(1)
    node.next = Node(3)
    node.next.next = Node(4)
    node.next.next.next = node
    ans = Solution().insert(node, 2)
    head = ans
    while ans:
        print(ans.val)
        ans = ans.next
        if ans == head:
            break
