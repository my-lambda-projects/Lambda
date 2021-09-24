"""
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
"""


def findMaxLength(nums):
    d = {}
    subarr, count = 0, 0
    for i, v in enumerate(nums):
        count += 2 * v - 1
        if count == 0:
            subarr = i + 1
        if count in d:
            subarr = max(subarr, i - d[count])
        else:
            d[count] = i
    return subarr


print(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]))
