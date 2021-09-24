# BUILTINS
#
# Write a function named "indexify" that accepts an iterable and returns a list
# whose entries are tuples of the form (index, value) based on the values of
# the argument.
#
# Use the "enumerate" method to do this.
#
# This section of your assessment can cover filter, map, sorted, or enumerate.
#
# Test data is at the bottom.

# WRITE YOUR CODE HERE
def indexify(iter):
    return list(enumerate(iter))


# TEST DATA
print(indexify(["a", "b", "c"]))  # > [(0, "a"), (1, "b"), (2, "c")]
print(indexify([]))  # > []


# *********************************STUDY***********************************************
