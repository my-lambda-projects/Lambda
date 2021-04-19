import sys

"""
Node class to keep track of the data internal to individual nodes
A tree class to keep track of things like the balance factor 
    and the rebalancing logic
"""
# AVL TREE
    # trees stay as flat as possible
    # initials of authors, specialized BSTs
    # valid AVL always valid BST, not vice versa
    # add value same as BST
    # difference is, on way up your recursive calls, you check if
        # node is balanced after adding new node
    # tree out of balance if subtree's height differences > 1
    # benefit is, we can guarantee no worst cases (O(n))
        # worst case = O(log(n))

# rebalance:  if one side of tree gets too heavy, then we need to
    # perform a rotation to get the tree back in balance
# "too heavy":  max height of 1 child = 2+ than max height of other
    # child
# double rotation:  when opposite child is heavy during rotation

# time complexity:   Avg   | Worst
    # Access:       O(log(n))   |   O(log(n))
    # Search:       O(log(n))   |   O(log(n))
    # Insertion:    O(log(n))   |   O(log(n))
    # Deletion:     O(log(n))   |   O(log(n))

# space complexity:  O(n)


class Node(object):
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1


class AVLTree(object):

    # function to insert a node
    def insert_node(self, root, key):

        # find the correct location and insert the node
        if not root:
            return Node(key)
        elif key < root.key:
            root.left = self.insert_node(root.left, key)
        else:
            root.right = self.insert_node(root.right, key)

        root.height = 1 + max(self.get_height(root.left),
                              self.get_height(root.right))

        # update the balance factor and balance the tree
        balanceFactor = self.get_balance(root)
        if balanceFactor > 1:
            if key < root.left.key:
                return self.right_rotate(root)
            else:
                root.left = self.left_rotate(root.left)
                return self.right_rotate(root)

        if balanceFactor < -1:
            if key > root.right.key:
                return self.left_rotate(root)
            else:
                root.right = self.right_rotate(root.right)
                return self.left_rotate(root)

        return root

    # function to delete a node
    def delete(self, root, key):

        # find the node to be deleted and remove it
        if not root:
            return root
        elif key < root.key:
            root.left = self.delete(root.left, key)
        elif key > root.key:
            root.right = self.delete(root.right, key)
        else:
            if root.left is None:
                temp = root.right
                root = None
                return temp
            elif root.right is None:
                temp = root.left
                root = None
                return temp
            temp = self.get_min_value_node(root.right)
            root.key = temp.key
            root.right = self.delete(root.right,
                                     temp.key)
        if root is None:
            return root

        # update the balance factor of nodes
        root.height = 1 + max(self.get_height(root.left),
                              self.get_height(root.right))

        balanceFactor = self.get_balance(root)

        # balance the tree
        if balanceFactor > 1:
            if self.get_balance(root.left) >= 0:
                return self.right_rotate(root)
            else:
                root.left = self.left_rotate(root.left)
                return self.right_rotate(root)
        if balanceFactor < -1:
            if self.get_balance(root.right) <= 0:
                return self.left_rotate(root)
            else:
                root.right = self.right_rotate(root.right)
                return self.left_rotate(root)
        return root

    # function to perform left rotation
    def left_rotate(self, z):
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self.get_height(z.left),
                           self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left),
                           self.get_height(y.right))
        return y

    # function to perform right rotation
    def right_rotate(self, z):
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3
        z.height = 1 + max(self.get_height(z.left),
                           self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left),
                           self.get_height(y.right))
        return y

    # get the height of the node
    def get_height(self, root):
        if not root:
            return 0
        return root.height

    # get balance factore of the node
    def get_balance(self, root):
        if not root:
            return 0
        return self.get_height(root.left) - self.get_height(root.right)

    def get_min_value_node(self, root):
        if root is None or root.left is None:
            return root
        return self.get_min_value_node(root.left)

    def pre_order(self, root):
        if not root:
            return
        print("{0} ".format(root.key), end="")
        self.pre_order(root.left)
        self.pre_order(root.right)

    # print the tree
    def print_helper(self, currPtr, indent, last):
        if currPtr != None:
            sys.stdout.write(indent)
            if last:
                sys.stdout.write("R----")
                indent += "     "
            else:
                sys.stdout.write("L----")
                indent += "|    "
            print(currPtr.key)
            self.print_helper(currPtr.left, indent, False)
            self.print_helper(currPtr.right, indent, True)


my_tree = AVLTree()
root = None
nums = [33, 13, 52, 9, 21, 61, 8, 11]
for num in nums:
    root = my_tree.insert_node(root, num)
my_tree.print_helper(root, "", True)
key = 13
root = my_tree.delete(root, key)
print("After Deletion: ")
my_tree.print_helper(root, "", True)
