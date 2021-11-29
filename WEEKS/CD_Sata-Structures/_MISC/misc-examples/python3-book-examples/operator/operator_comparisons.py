#
"""
"""

# end_pymotw_header
from operator import *

a = 1
b = 5.0

print("a =", a)
print("b =", b)
for func in (lt, le, eq, ne, ge, gt):
    print("{}(a, b): {}".format(func.__name__, func(a, b)))
