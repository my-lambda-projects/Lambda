"""
problem:

Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them separately.

Ex:
Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
"""


def countElements(arr):
    # use a set to store all unique elements in the array
    in_arr = set(arr)
    ans = 0
    # loop through all elements in the array because duplicated are counted separately
    for n in arr:
        # if the number + 1 in the set (checking an element in a set takes O(1) time)
        if n + 1 in in_arr:
            ans += 1
    return ans


print(countElements([1, 1, 2]))
