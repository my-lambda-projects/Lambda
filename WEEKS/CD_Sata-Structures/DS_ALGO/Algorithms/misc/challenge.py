# Work out the time complexity of these solutions

"""
Formally:
1. Compute the Big-O for each line in isolation
2. if something is in a loop, multiply it's Big-O by the loop for the total.
3. If two things happen sequentially, add the Big-Os.
4. Drop leading multiplicative constants from each of the Big-Os.
5. From all of the Big-Os that are added, drop all but the biggest, dominating one.
"""
import math

# 1
def baz(n):
    s = 0

    for i in range(n):  #  O(n)
        for j in range(int(math.sqrt(n))):  # O(sqrt(n)) n * sqrt n
            s += i * j  # O(1)

    return s  # O(1)


# O(n sqrt(n))

# 2
def frotz(n):
    s = 0  # O(1)

    for i in range(n):  # O(n)
        for j in range(2 * n):  # O(2n) => O(n) => O(n^2)
            s += i * j  # O(1)

    return s  # O(1)


# O(2 n^2) => O(n^2)

# 3
def bar(x):
    sum = 0  # O(1)
    for i in range(0, 1463):  # O(1436) =>  O(1)
        i += sum  # O(1)
        for _ in range(0, x):  # O(x)
            for _ in range(x, x + 15):  # O(15) => O(1)
                sum += 1  # O(1) * O(x) * O(1) => O(1 * X * 1) => O(x)


# O(n) linear
