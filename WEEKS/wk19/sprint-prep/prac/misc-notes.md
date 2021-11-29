```py

#
# Binary trees are already defined with this interface:
class Tree(object):
  def __init__(self, x):
    self.value = x
    self.left = None
    self.right = None
def csBSTRangeSum(root, lower, upper):
    sum =0
    stack = [root]
    while stack:
        node=stack.pop()
        if node:
            if lower <= node.value <=upper:
                sum += node.value
                if lower<node.value:
                    stack.append(node.left)
                    if node.value <upper:
                        stack.append(node.right)
                        return sum


```
