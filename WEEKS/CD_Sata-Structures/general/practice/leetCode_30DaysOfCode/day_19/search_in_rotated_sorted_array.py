"""
Suppose an numsay sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the numsay return its index, otherwise return -1.

You may assume no duplicate exists in the numsay.

Your algorithm's runtime complexity must be in the order of O(log n).
"""

# def main(nums, target):
#     if not nums:
#         return -1
#     l, r = two_sorted(nums)
#     ind = binary_search(nums, 0, l, target)
#     if ind == -1:
#         ind = binary_search(nums, r + 1, len(nums) - 1, target)
#         if ind == -1:
#             return -1
#     return ind
#
# def two_sorted(nums):
#     l = 0
#     r = len(nums) - 1
#     while l < r:
#         mid = (l + r) // 2
#         if nums[mid] > nums[l]:
#             l = mid
#         else:
#             r = mid
#     return (l, r)
#
#
# def binary_search(nums, l, r, target):
#     while l <= r:
#         mid = (l + r) // 2
#         if nums[mid] == target:
#             return mid
#         elif nums[mid] > target:
#             r = mid - 1
#         else:
#             l = mid + 1
#     return -1


def main(nums, target):
    # left pointer
    l = 0
    # right pointer
    r = len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        # if the first half of the array is sorted
        if nums[l] <= nums[mid]:
            # check if the target point is in that half
            if nums[l] <= target < nums[mid]:
                # move the right pointer
                r = mid - 1
            # else move the left pointer
            else:
                l = mid + 1
        else:
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1


print(main([1, 3], 3))
