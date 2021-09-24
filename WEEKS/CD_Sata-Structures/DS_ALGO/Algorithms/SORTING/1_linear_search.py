# Linear Search

"""
Key Points
- Linear search is the simplest type of search we can do
- Sometimes it's the only method available. If the data is unordered, this is the only way to do it
- It also beats a binary search under some special circumstances
- Key words: unsorted, random
"""

import random
import time  # We'll use this later

my_range = 100
my_size = 100

my_random = random.sample(range(my_range), my_size)
print(my_random)

searching_for = 7

# O(n)
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return True

    return False


# def linear_search(arr, target):
#     for i in range(len(arr)):
#         if arr[i] == target:
#             return i

#     return -1

# Binary Search

"""
Key Points
- Binary search requires sorted data
- Each pass, we cut the remaining possibilities by half, hence the term binary
- Key words: sorted, ordered
"""


def find_value_binary(arr, value):
    first = 0

    last = len(arr) - 1

    found = False

    while first <= last and not found:
        # find the middle of the data
        middle = (first + last) // 2

        if arr[middle] == value:
            found = True

        else:
            # left case
            if value < arr[middle]:
                last = middle - 1
            else:
                # right case
                # search the upper half
                first = middle + 1

    return found


# Comparing Linear vs. Binary

"""
Key Points
- Binary search is only faster if the data is already sorted.
- It's slower for the first search if the data needs to be sorted first
- Subsequent searches will be much faster
"""

# print("Linear")
# start = time.time()
# print(linear_search(my_random, searching_for))
# end = time.time()
# print(f"Runtime: {end - start}")

# print("Binary")
# start = time.time()
# my_random.sort()
# print(find_value_binary(my_random, searching_for))
# end = time.time()
# print(f"Runtime: {end - start}")


# lets see what heppens with multiple runs

print("Linear")
start = time.time()
print(linear_search(my_random, searching_for))
end = time.time()
print(f"Runtime: {end - start}")

print("Linear Again")
start = time.time()
print(linear_search(my_random, searching_for))
end = time.time()
print(f"Runtime: {end - start}")

print("Binary")
start = time.time()
my_random.sort()
print(find_value_binary(my_random, searching_for))
end = time.time()
print(f"Runtime: {end - start}")

print("Binary _after_ sort")
start = time.time()
print(find_value_binary(my_random, searching_for))
end = time.time()
print(f"Runtime: {end - start}")
