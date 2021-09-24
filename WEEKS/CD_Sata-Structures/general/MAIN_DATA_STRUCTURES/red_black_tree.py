# Faster insertion and deletion than AVL, slower search
class Color:
    RED = 1
    BLACK = 2


class Node:
    def __init__(self, data, parent=None, color=Color.RED):
        self.data = data
        self.color = color
        self.parent = parent
        self.left = None
        self.right = None


class RedBlackTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if not self.root:
            self.root = Node(data)
            self.violate(self.root)
        else:
            self.insert_node(data, self.root)

    def insert_node(self, data, node):

        if data < node.data:
            if node.left:
                self.insert_node(data, node.left)
            else:
                node.left = Node(data, node)
                self.violate(node.left)
        else:
            if node.right:
                self.insert_node(data, node.right)
            else:
                node.right = Node(data, node)
                self.violate(node.right)

    def violate(self, node):

        parent_node = None
        grand_parent_node = None

        while node != self.root and node.parent.color == Color.RED:

            parent_node = node.parent
            grand_parent_node = parent_node.parent

            if grand_parent_node is None:
                return

            if parent_node == grand_parent_node.left:

                uncle = grand_parent_node.right

                if uncle and uncle.color == Color.RED:
                    # case 1 and case 4
                    print("Re-coloring node %s to RED" % grand_parent_node.data)
                    grand_parent_node.color = Color.RED
                    print("Re-coloring node %s to BLACK" % parent_node.data)
                    parent_node.color = Color.BLACK
                    uncle.color = Color.BLACK
                    node = grand_parent_node
                else:
                    # case 2: uncle node is black and node is a right child
                    if node == parent_node.right:
                        self.rotate_left(parent_node)
                        node = parent_node
                        parent_node = node.parent

                    # case 3
                    parent_node.color = Color.BLACK
                    grand_parent_node.color = Color.RED
                    print("Re-color %s to BLACK" % parent_node.data)
                    print("Re-color %s to RED" % grand_parent_node.data)
                    self.rotate_right(grand_parent_node)
            else:

                uncle = grand_parent_node.left

                if uncle and uncle.color == Color.RED:
                    # case 1 and case 4
                    print("Re-coloring node %s to RED" % grand_parent_node.data)
                    grand_parent_node.color = Color.RED
                    print("Re-coloring node %s to BLACK" % parent_node.data)
                    parent_node.color = Color.BLACK
                    uncle.color = Color.BLACK
                    node = grand_parent_node
                else:
                    # case 2: uncle node is black and node is a right child
                    if node == parent_node.left:
                        self.rotate_right(parent_node)
                        node = parent_node
                        parent_node = node.parent

                    # case 3
                    parent_node.color = Color.BLACK
                    grand_parent_node.color = Color.RED
                    print("Re-color %s to BLACK" % parent_node.data)
                    print("Re-color %s to RED" % grand_parent_node.data)
                    self.rotate_left(grand_parent_node)

        if self.root.color == Color.RED:
            print("Recoloring the root to black...")
            self.root.color = Color.BLACK

    def traverse(self):
        if self.root is not None:
            self.traverse_in_order(self.root)

    def traverse_in_order(self, node):
        if node.left:
            self.traverse_in_order(node.left)

        l = ""
        r = ""
        p = ""

        if node.left is not None:
            l = node.left.data
        else:
            l = "NULL"

        if node.right is not None:
            r = node.right.data
        else:
            r = "NULL"

        if node.parent is not None:
            p = node.parent.data
        else:
            p = "NULL"

        print(
            "%s left: %s right: %s parent: %s color: %s"
            % (node.data, l, r, p, node.color)
        )

        if node.right:
            self.traverse_in_order(node.right)

    def rotate_right(self, node):
        print("Rotating to the right on node ", node.data)

        temp_left_node = node.left
        t = temp_left_node.right

        temp_left_node.right = node
        node.left = t

        if t is not None:
            t.parent = node

        temp_parent = node.parent
        node.parent = temp_left_node
        temp_left_node.parent = temp_parent

        if temp_left_node.parent is not None and temp_left_node.parent.left == node:
            temp_left_node.parent.left = temp_left_node

        if temp_left_node.parent is not None and temp_left_node.parent.right == node:
            temp_left_node.parent.right = temp_left_node

        if node == self.root:
            self.root = temp_left_node

    def rotate_left(self, node):
        print("Rotating to the left on node ", node.data)

        temp_right_node = node.right
        t = temp_right_node.left

        temp_right_node.left = node
        node.right = t

        if t is not None:
            t.parent = node

        temp_parent = node.parent
        node.parent = temp_right_node
        temp_right_node.parent = temp_parent

        if temp_right_node.parent is not None and temp_right_node.parent.left == node:
            temp_right_node.parent.left = temp_right_node

        if temp_right_node.parent is not None and temp_right_node.parent.right == node:
            temp_right_node.parent.right = temp_right_node

        if node == self.root:
            self.root = temp_right_node


rbt = RedBlackTree()
rbt.insert(32)
rbt.insert(10)
rbt.insert(55)
rbt.insert(1)
rbt.insert(19)
rbt.insert(79)
rbt.insert(16)
rbt.insert(23)
rbt.insert(12)

rbt.traverse()
