# FUNCTIONS
#
# Create a function named "bind_argument" that takes two parameters:
# 1. Any kind of value
# 2. A function
#
# Have "bind_argument" return a new function that invokes the function passed
# in as the second parameter to "bind_argument" with the value passed in as the
# first parameter to "bind_argument".
#
# Examples below.

# WRITE YOUR CODE HERE
def bind_argument(value, func):
    def bound():
        return func(value)

    return bound


# Example calls


def hello(name):
    return f"Hello, {name}"


bound = bind_argument("Poppy", hello)
print(bound())  # > "Hello, Poppy"

bound = bind_argument(2, lambda n: n * 100)
print(bound())  # > 200


# ******************************STUDY*****************************************
