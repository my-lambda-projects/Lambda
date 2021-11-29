# Factorial https://www.mathsisfun.com/numbers/factorial.html

# hacky way. try not to do this
import sys

sys.setrecursionlimit(5001)  # its over 5000!!!!
import time


def rec_factorial(n):  # O(n)
    # base case
    if n <= 1:
        return 1
    else:
        # return n * call function of n - 1
        return n * rec_factorial(n - 1)  # O(n)


def iter_factorial(n):
    # challenge
    pass


# Tests
print("Recursive")
print(rec_factorial(4))  # => 24
print(rec_factorial(7))  # => 5040
print(rec_factorial(1))  # => 1
print(rec_factorial(2010))

print("Iterative")
print(iter_factorial(4))  # => 24
print(iter_factorial(7))  # => 5040
print(iter_factorial(1))  # => 1
