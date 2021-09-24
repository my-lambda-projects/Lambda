class Tree(object):
    def __init__(self, x):
        self.value = x
        self.left = None
        self.right = None


def balancedBinaryTree(root):
    def get_height(root):
        if root is None:
            return 0
        return max(get_height(root.left), get_height(root.right)) + 1

    if root is None:
        return True
    left_height = get_height(root.left)
    right_height = get_height(root.right)

    if (
        (abs(left_height - right_height) <= 1)
        and balancedBinaryTree(root.left) is True
        and balancedBinaryTree(root.right) is True
    ):
        return True
    return False
