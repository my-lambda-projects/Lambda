"""
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
"""


def removeDuplicates(nums):
    i = 0
    # counter the number of duplicate numbers
    counter = 1
    for j in range(1, len(nums)):
        # if the two numbers are different
        if nums[i] != nums[j]:
            # swap
            i = swapHelper(i + 1, j, nums)
            # set the counter to one again since we have a new num
            counter = 1
        # if the number of duplicates from the same number is less than 2
        elif counter < 2:
            i = swapHelper(i + 1, j, nums)
            counter += 1
    return nums[0 : i + 1]


def swapHelper(i, j, nums):
    nums[i], nums[j] = nums[j], nums[i]
    return i


print(removeDuplicates([1, 1, 1, 2, 2, 2, 4, 4, 4]))
