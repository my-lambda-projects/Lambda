"""
Challenge #8:

Create a function that returns the number of arguments it was called with.

Examples:
- num_args() ➞ 0
- num_args("foo") ➞ 1
- num_args("foo", "bar") ➞ 2
- num_args(True, False) ➞ 2
- num_args({}) ➞ 1
"""


def num_args(*args):
    # Your code here

    return len(args)


print(num_args())
print(num_args("foo"))
print(num_args("foo", "bar"))
print(num_args(True, False))
print(num_args({}))
