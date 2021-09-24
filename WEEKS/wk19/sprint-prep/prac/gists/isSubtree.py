#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def isSubtree(t1, t2):
    def isEqual(left, right):
        if left == None and right == None:
            return True
        if right == None and left != None:
            return False
        if left == None and right != None:
            return False

        return (
            left.value == right.value
            and isEqual(left.right, right.right)
            and isEqual(left.left, right.left)
        )

    # Base Case
    if t2 is None:
        return True

    if t1 is None:
        return False

    # Check the tree with root as current node
    if isEqual(t1, t2):
        return True

    # IF the tree with root as current node doesn't match
    # then try left and right subtreee one by one
    return isSubtree(t1.left, t2) or isSubtree(t1.right, t2)
