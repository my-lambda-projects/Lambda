#
# Binary trees are already defined with this interface:
class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None


def csBSTRangeSum(root, lower, upper):
    if not root:
        return 0
    res = 0

    if lower <= root.value <= upper:
        res += root.value
        res += csBSTRangeSum(root.left, lower, upper)
        res += csBSTRangeSum(root.right, lower, upper)
    elif root.value < lower:
        res += csBSTRangeSum(root.right, lower, upper)
    elif root.value > upper:
        res += csBSTRangeSum(root.left, lower, upper)
    return res
