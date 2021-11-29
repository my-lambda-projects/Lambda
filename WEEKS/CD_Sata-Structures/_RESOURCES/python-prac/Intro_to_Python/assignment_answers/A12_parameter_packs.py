""" Assignment 12

Create a function with the `*args` parameter. The function should handle an
unbounded number of inputs without error. """


def star_sum(*args):
    """ Returns the sum of all the arguments """
    return sum(args)
