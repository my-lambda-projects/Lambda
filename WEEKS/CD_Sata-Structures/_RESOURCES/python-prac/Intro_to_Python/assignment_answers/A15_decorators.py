""" Assignment 15

1. Complete the log_this decorator such that it will print the output of the
following `square` function when it is called.

Stretch
1. Make sure the help feature of `square()` still works properly.
2. Write the decorator in such a way to allow for an arbitrary number of
positional and keyword arguments for the original function.
3. Read the documentation for the functools library. """
from functools import wraps  # Required for stretch goal


# Answer
def log_this(func):
    """ Decorator for logging the result of a function call. """

    @wraps(func)  # stretch goal
    def logger(*args, **kwargs):
        result = func(*args, **kwargs)
        print(result)
        return result

    return logger


@log_this
def square(x):
    """ Returns the square of x """
    return x ** 2


answer = square(10)
print(answer)
help(square)
