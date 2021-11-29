#                         Hot Potato Algorithm
# -------------------------------------------------------------------------
# Our program will input a list of names and a constant, call it “num,”
#  to be used for counting. It will return the name of the last person
#  remaining after repetitive counting by num.
#   - To simulate the circle, we will use a queue. Assume that the child
#     holding the potato will be at the front of the queue
#   - Upon passing the potato, the simulation will simply dequeue and then
#     immediately enqueue that child, putting her at the end of the line.
#   - She will then wait until all the others have been at the front before
#     it will be her turn again.
#   - After num dequeue/enqueue operations, the child at the front will be
#     removed permanently and another cycle will begin.
#   - This process will continue until only one name remains (the size of
#     the queue is 1).
# --------------------------------------------------------------------------


# For now consider deques to be a combination of a stack and a queue, enabling
# O(1) pushing and popping from both ends.
from collections import deque


def hot_potato(names, num):
    queue = deque()
    for name in names:
        queue.appendleft(name)

    while len(queue) > 1:
        for _ in range(num):
            queue.appendleft(queue.pop())

        queue.pop()

    return queue.pop()


print(hot_potato(("Beau", "Mike", "Aaron", "Cephandrius", "Cole", "Warren", "Ryan"), 4))
