class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value <= self.value:
            # the new value must go left
            if self.left is None:
                # create a new node as a left child of the current node
                self.left = BSTNode(value)
            else:
                self.left.insert(value)

        else:
            # the value must go right
            if self.right is None:
                # create a new node as a right child of the current node
                self.right = BSTNode(value)
            else:
                self.right.insert(value)


def print_tree_preorder(root):  # preorder traversal
    print(root.value)

    # if you can go left, recurse left
    if root.left:
        print_tree(root.left)

    if root.right:
        print_tree(root.right)


def print_tree_inorder(root):  # inorder traversal

    # if you can go left, recurse left
    if root.left:
        print_tree(root.left)

    print(root.value)

    if root.right:
        print_tree(root.right)


def print_tree_postorder(root):  # postorder traversal

    # if you can go left, recurse left
    if root.left:
        print_tree(root.left)

    if root.right:
        print_tree(root.right)

    print(root.value)


def breadth_first_traversal(root):
    queue = []
    # result = [] or append
    # add the first item to the queue
    queue.append(root)
    # loop and process items in the queue
    while len(queue) > 0:
        # dequeue an item
        node = queue.pop(0)

        # print the node
        print(node.value)

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)


def depth_first_traversal(root):
    # non recursive

    stack = []  # setup
    stack.append(root)
    while len(stack) > 0:  # loop until items are out
        # dequeue an item
        node = stack.pop()  # pop

        # print the node your own code
        print(node.value)

        if node.right:  # get to the next nodes
            stack.append(node.right)
        if (
            node.left
        ):  # tures into an preorder traversal cause the left side is preoritized in the call stack
            stack.append(node.left)


root = BSTNode(8)
root.insert(5)
root.insert(4)
root.insert(7)
root.insert(12)
root.insert(11)
root.insert(13)

print(depth_first_traversal(root))
