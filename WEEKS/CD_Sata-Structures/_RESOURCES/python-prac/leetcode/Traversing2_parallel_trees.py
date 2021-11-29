# Given two trees, determine whether they are copies of one another.
# Are two trees copies of each other?
# Is there a node in one tree that is considered the same as a node in another tree?
#    1
#   /\
#  2  3
# /\
# 4 5


class Node:
    def __init__(self, data=None, children=[]):

        self.data = data
        self.children = children

    def isclone(self, n2):

        if self.data != n2.data:
            return False
        if len(self.children) != len(n2.children):
            return False
        for i in range(0, len(self.children)):
            if not self.children[i].isclone(n2.children[i]):
                return False
        return True

    def isclone_iterative(self, n2):
        stack = [(self, n2)]

        (c1, c2) = stack.pop()
        if c1.data != c2.data:
            return False
        if len(c1.children) != len(c2.children):
            return False
        for i in range(0, len(c1.children)):
            stack.append((c1.children[i], c2.children[i]))
        return True


if __name__ == "__main__":
    #     1
    #    /\
    #   2  3
    #  /\
    # 4  5

    n = Node(1)
    n.children = [Node(2), Node(3)]
    n.children[0].children = [Node(4), Node(5)]

    n2 = Node(1)
    n2.children = [Node(2), Node(3)]
    n2.children[0].children = [Node(4), Node(5)]

    print(n.isclone(n2))
