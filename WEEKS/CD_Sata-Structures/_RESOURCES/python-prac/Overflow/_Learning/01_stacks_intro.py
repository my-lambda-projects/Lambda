# Stacks, queues, deques, and lists are data collections with items ordered
# according to how they are added or removed. Once an item is added, it stays
# in the same position relative to its neighbors. Because of this characteristic,
# we call these collections linear data structures.

# Linear structures can be thought of as having two ends, referred to variously as
#    “left” and “right”, “top” and “bottom”, or “front” and “rear”.

# A Stack is an ordered collection of items where the addition of new items and the
#    and the removal of existing items always takes place at the same end
#   - "top" - Where things are appended to and where things can be removed from
#   - "base" - The bottom of a stack, opposite the top
#   - Items that are closer to the base have been in the stack the longest
#   - The insertion order is the reverse of the removal order
#   - As you navigate the web, your urls are placed onto a stack for 'history'

# Abstract Data Type(ADT) - a logical description of how we view the data and the
#    allowed operations without regard to how they’ll be implemented. This level of
#    abstraction encapsulates the data and hides implementation details from the user's
#    view, a technique called information hiding.

# Data Structure -  is an implementation of an abstract data type and requires a physical
#    view of the data using some collection of primitive data types and other programming
#    constructs.

# The Stack ADT is an ordered collection of items where items are added to and removed from
#    the top. The interface for a stack is :
#      - Stack() creates a new, empty stack
#      - push(item) adds the given item to the top of the stack and returns nothing
#      - pop() removes and returns the top item from the stack
#      - peek() returns the top item from the stack but doesn’t remove it(the stack isn’t modified)
#      - is_empty() returns a boolean representing whether the stack is empty
#      - size() returns the number of items on the stack as an integer
