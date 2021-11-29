You are given a non-empty array of integers.

One element appears exactly once, with every other element appearing at least twice, perhaps more.

# Write a function that can find and return the element that appears exactly once.

# Example 1:

# Input: [1,1,2,1]
# Output: 2
# Example 2:

# Input: [1,2,1,2,1,2,80]
# Output: 80
# Note: You should be able to develop a solution that has O(n) time complexity.

# [execution time limit] 4 seconds (py3)

# [input] array.integer nums

# [output] integer

from collections import Counter
def csFindTheSingleNumber(nums):
    frequency = Counter(nums)
    for i in frequency:
        if frequency[i] == 1:
            return i
