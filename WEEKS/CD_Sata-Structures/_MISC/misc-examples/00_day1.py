"""
Getting the time complexity of an iterative solution
- Compute the Big-O for each line in isolation. (worst case)
- If something is in a loop, multiply it's Big-O by the loop for the total.
- If two things happen sequentially, add the Big-Os.
- Drop leading multiplicative constants from each Big-O.
- From all the Big-Os that are added, drop all but the biggest, dominating one.
"""

it = [2, 3, 5, 6, 7]
# O(1)

# O(1)
def constant_time(items):
    result = items[0] * items[4]  # O(1)
    print(result)  # O(1)
    # O(4 * 1) Constant time operation O(1)


constant_time(it)

# O(n)


def linear_time(items):
    # O(1) * O(n)
    for item in items:  # O(1) * O(n)
        print(item)  # O(1)

    # O(1) * O(n)
    for item in items:  # O(n) * O(n)
        print(item)  # O(1)

    # 2 * (O(1) * O(n))
    # O(1) * O(n)
    # O(n) <--


linear_time(it)

# O(n^2)
def quadratic_time(items):
    for item in items:  # O(n) * O(n) = O(n^2)
        for item2 in items:  # O(n) * O(1)
            print(item, " ", item2)  # O(1)


quadratic_time(it)

# challenge. What is the complexity of this algorithm?


def complex_algo(items):  # O(n)

    for _ in range(5):  # O(5) -> O(1)
        print("Python is awesome")

    # O(2n) -> O(n)
    for item in items:  # O(n)
        print(item)

    for item in items:  # O(n)
        print(item)

    # O(3) -> O(1)
    print("Big O")
    print("Big O")
    print("Big O")


complex_algo([4, 5, 6, 8])
