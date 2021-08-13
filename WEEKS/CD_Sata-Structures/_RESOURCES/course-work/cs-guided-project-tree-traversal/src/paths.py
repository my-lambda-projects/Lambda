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


def get_paths_root(root, array):  # in pre order
    paths_array = []

    def print_paths(root, path):  # helper function to get to every node
        new_path = path + [root.value]
        print(new_path)
        # if you can go left, recurse left
        if not root.left and not root.right:
            paths_array.append(new_path)

        if root.left:
            get_paths_root(root.left, new_path.copy())

        if root.right:
            get_paths_root(root.right, new_path.copy())

    print_paths(root, [])
    return paths_array


def depth_first_traversal(root):
    # non recursive

    paths_array = []
    stack = []  # setup
    stack.append((root, []))  # pass a tuple
    while len(stack) > 0:  # loop until items are out
        # dequeue an item
        node, path = stack.pop()  # pop

        # generate and print the path
        new_path = path + [node.value]
        print(new_path)

        if not root.left and not root.right:
            paths_array.append(new_path)

        if node.right:  # get to the next nodes
            stack.append((node.right, new_path.copy()))
        if (
            node.left
        ):  # tures into an preorder traversal cause the left side is preoritized in the call stack
            stack.append((node.left, new_path.copy()))

    return paths_array


def beadth_first_traversal(root):
    # non recursive and using a queue

    paths_array = []
    queue = []  # setup
    queue.append((root, []))  # pass a tuple
    while len(queue) > 0:  # loop until items are out
        # dequeue an item
        node, path = queue.pop(0)  # pop

        # generate and print the path
        new_path = path + [node.value]
        print(new_path)

        if not root.left and not root.right:
            paths_array.append(new_path)

        if node.right:  # get to the next nodes
            queue.append((node.right, new_path.copy()))
        if (
            node.left
        ):  # tures into an preorder traversal cause the left side is preoritized in the call stack
            queue.append((node.left, new_path.copy()))

    return paths_array


root = BSTNode(8)
root.insert(5)
root.insert(4)
root.insert(7)
root.insert(12)
root.insert(11)
root.insert(13)

depth_first_traversal(root)
