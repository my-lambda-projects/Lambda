#
"""Double-ended queue.
"""

# end_pymotw_header
import collections

d = collections.deque("abcdefg")
print("Deque:", d)
print("Length:", len(d))
print("Left end:", d[0])
print("Right end:", d[-1])

d.remove("c")
print("remove(c):", d)
