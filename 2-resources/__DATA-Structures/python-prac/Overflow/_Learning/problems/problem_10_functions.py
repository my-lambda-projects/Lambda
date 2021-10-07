# FUNCTIONS
#
# Create a function named "none_check" that takes one parameters:
# 1. A function
#
# Have "none_check" return a new function that accepts one positional parameter
# with no default value.
#
# The returned function should check to see if the value of its parameter is
# None. If it is, then it should return None. Otherwise, it should return the
# return value of the invocation of the function passed to "none_check" with
# the value passed to it.
#
# For example:
#     add_check = none_check(lambda x: x + 3)
#
# At this point, add_check is a function that takes one argument. If you pass in
# None, then add_check should return none.
#     add_check(None)  # Returns None
#
# If the value passed to add_check is not None, then it will return the value of
# the function passed into none_check (lambda x: x + 3)
#     add_check(9)  # Returns 12
#
# More examples below.

# WRITE YOUR CODE HERE


# Example calls
def hello(name):
    return f"Hello, {name}"


hello_check = none_check(hello)
print(hello_check("Poppy"))  # > "Hello, Poppy"
print(hello_check(None))  # > None

mult_check = none_check(lambda n: n * 100)
print(mult_check(2))  # > 200
print(mult_check(None))  # > None
