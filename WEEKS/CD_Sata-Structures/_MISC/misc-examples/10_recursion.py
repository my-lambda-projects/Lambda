import sys

sys.setrecursionlimit(1000)
n = 40

# use space in a linear format
# while n != 0: # O(n)
#     print(n)
#     n -= 1

# def rec_while(n): # O(n)
#     # base case
#     if n == 0:
#         return
#     # logic that we want to do
#     print(n)
#     rec_while(n - 1)

# rec_while(n)


def fib(n):
    if n < 2:
        return 1
    return fib(n - 1) + fib(n - 2)


print(fib(n))
