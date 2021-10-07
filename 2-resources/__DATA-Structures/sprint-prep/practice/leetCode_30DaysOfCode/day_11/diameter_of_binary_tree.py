diameter = 0


def diameterOfBinaryTree(root):
    find_height(root, diameter)
    return diameter


def find_height(root, diameter):
    if root == None:
        return 0
    if root.left == None and root.right == None:
        return 1
    l_height = find_height(root.left, diameter)
    r_height = find_height(root.right, diameter)
    total = l_height + r_height
    if total > diameter:
        diameter = total
    return 1 + max(l_height, r_height)
