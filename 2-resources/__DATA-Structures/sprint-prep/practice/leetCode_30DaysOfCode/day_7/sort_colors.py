"""
Given an array that contains numbers (0, 1, 2) that represents colors (red, blue, black), sort the array
such that all red colors comes first, then blue, then black.
"""


def maxHeapify(arr, len_arr, i):
    f_child = 2 * i + 1
    s_child = 2 * i + 2
    # get the smallest value between the first and second child
    # if first child exists
    if f_child < len_arr:
        largest = f_child
        # if second child exists and less than the first child
        if s_child < len_arr and arr[f_child] < arr[s_child]:
            largest = s_child
        # if the value of the parent is greater than the value of its smallest child
        if arr[i] < arr[largest]:
            # swap the parent with its smallest child
            arr[i], arr[largest] = arr[largest], arr[i]
            # heapify the new sub-tree
            maxHeapify(arr, len_arr, largest)


def sortColors(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    # create a max-heap
    # create a max-heap
    for i in range(len(nums) // 2 - 1, -1, -1):
        maxHeapify(nums, len(nums), i)

    for i in range(len(nums) - 1, -1, -1):
        nums[i], nums[0] = nums[0], nums[i]
        maxHeapify(nums, i, 0)
    return nums


print(sortColors([2, 0, 2, 1, 1, 0]))
