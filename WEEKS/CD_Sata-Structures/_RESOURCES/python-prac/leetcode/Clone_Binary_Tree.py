# If you are given two binary trees and a node find the corrosponding node in another tree
#   1
#  / \
# 2   3
#    / \
#   4*  5


class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

    def __str__(self):
        return str(self.val)


class Solution:
    def findNode(self, a, b, node):
        if a == node:
            return b
        if a.left and b.left:
            found = self.findNode(a.left, b.left, node)
            if found:
                return found
        if a.right and b.right:
            found = self.findNode(a.right, b.right, node)
            if found:
                return found
        return None

    def findNodeIterative(self, a, b, node):

        stack = [(a, b)]
        while len(stack):
            (a, b) = stack.pop()

            if a == node:
                return b
            if a.left and b.left:
                stack.append((a.left, b.left))
            if a.right and b.right:
                stack.append((a.right, b.right))
        return None


if __name__ == "__main__":
    a = Node(1)
    a.left = Node(2)
    a.right = Node(3)
    a.right.left = Node(4)
    a.right.right = Node(5)

    b = Node(1)
    b.left = Node(2)
    b.right = Node(3)
    b.right.left = Node(4)
    b.right.right = Node(5)

    print(Solution().findNodeIterative(a, b, a.right.left))
