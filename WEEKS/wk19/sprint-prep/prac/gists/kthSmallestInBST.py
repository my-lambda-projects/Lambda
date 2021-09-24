#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def kthSmallestInBST(t, k):
    def inorder(r):
        return inorder(r.left) + [r.value] + inorder(r.right) if r else []

    return inorder(t)[k - 1]
