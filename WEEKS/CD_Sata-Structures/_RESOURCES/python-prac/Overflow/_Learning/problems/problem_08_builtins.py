# BUILTINS
#
# Write a function named "filter_small_lists" that accepts an iterable
# containing lists and returns a list of the lists that have more than two
# elements in them.
#
# Use the "filter" method to do this.
#
# Test data is at the bottom.

# WRITE YOUR CODE HERE


# TEST DATA
print(filter_small_lists([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]))
# Prints [[1, 2, 3], [1, 2, 3, 4]]

print(filter_small_lists([]))  # > []
