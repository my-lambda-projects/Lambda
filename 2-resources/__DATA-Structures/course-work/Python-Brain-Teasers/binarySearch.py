# Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search for target in nums. If target exists, then return its index, otherwise, return -1.

# Example 1:
# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

# Example 2:
# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1

# Note:

# All elements in nums are unique.
# The length of nums will be <= 100
# The value of each element in nums will be in the range [1, 10000]
# [execution time limit] 4 seconds (py3)

# [input] array.integer nums

# [input] integer target

# [output] integer


def csBinarySearch(nums, target):
    min = 0
    max = len(nums) - 1
    while not max < min:
        guess = (max + min) // 2
        if nums[guess] == target:
            return guess
        elif nums[guess] < target:
            min = guess + 1
        else:
            max = guess - 1
    return -1
