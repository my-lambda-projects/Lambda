"""
One of the most straightforward problems we can solve recursively is to print every number from n down to zero in succession.
We can do that simply by writing a function that prints n, then calls itself for n-1:
"""
import sys

sys.setrecursionlimit(10005)
N = 10000
# def countdown_i(n):
#     while (n > 0): # condition and label
#         print(n) # body
#         n -= 1 # decrement


def countdown(n):  # label
    # condition (base case)
    if n == 0:
        return

    # body
    print(n)

    # decrement
    countdown(n - 1)


# countdown_i(n)
countdown(N)
