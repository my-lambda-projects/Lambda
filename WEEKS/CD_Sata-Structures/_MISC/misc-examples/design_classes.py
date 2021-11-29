# lets design a 2d vector class set

# Think about what data the class will hold
# x , y

# Think about what methods it needs
# init
# str

# Think about what methods could be optional
# add method to add 2 vec2s together
# sub method
# mutiply
# divide

# Draw out diagrams of the class model

# visualize how it will be formed

# write out a basic structure
class Vec2:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def add(self, other):
        self.x += other.x
        self.y += other.y

    def sub(self, other):
        self.x -= other.x
        self.y -= other.y

    def mul(self, other):
        self.x *= other.x
        self.y *= other.y

    def div(self, other):
        self.x /= other.x
        self.y /= other.y

    def fdiv(self, other):
        self.x //= other.x
        self.y //= other.y


# reflect on the design & think of improvements

v = Vec2(23, 45)
v2 = Vec2(10, 10)
print(v)
v.add(v2)
print(v)

# Linked Lists to trees


class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

    def __add_left__(self, value):
        self.left = Node(value)

    def __add_right__(self, value):
        self.right = Node(value)


# BST

# node
# left
# right
# value

# init

# insert
# left case
# check if our value is less than root value
# move to the left and check if it is None
# insert node here
# otherwise
# do an insert on the root's left node
# right case
# otherwise
# move to the right and check if it is None
# insert node here
# otherwise
# do an insert on the root's right node

# contains
# check the value root node against the value
# if the root node value and value are the same
# return True

# left case
# check if our value is less than the root val
# check if there is no child to the left
# return False
# otherwise
# call contains on the left child

# right case
# otherwise
# check if there is no child to the right
# return False
# otherwise
# call contains on the right child
