# You are given a sorted array in ascending order that is rotated at some unknown pivot (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]) and a target value.

# Write a function that returns the target value's index. If the target value is not present in the array, return -1.

# You may assume no duplicate exists in the array.

# Your algorithm's runtime complexity must be in the order of O(log n).

# Example 1:

# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4

# Example 2:

# Input: nums = [4,5,6,7,0,1,2], target = 3
# Output: -1

# [execution time limit] 4 seconds (py3)

# [input] array.integer nums

# [input] integer target

# [output] integer


def binarySearch(arr, key):
    min = 0
    max = len(arr) - 1
    while not max < min:
        guess = (max + min) // 2

        if key == arr[guess]:
            return arr[guess]
        elif key > arr[guess]:
            min = guess + 1
        else:
            max = guess - 1
    return -1


def findValueSortedShiftedArray(nums, target):
    pivot = 3
    if nums[pivot] == target:
        return pivot
    if nums[pivot] >= target:
        value = binarySearch(nums[pivot + 1 :], target)
        print(value)
        if value == target:
            return nums.index(value)
