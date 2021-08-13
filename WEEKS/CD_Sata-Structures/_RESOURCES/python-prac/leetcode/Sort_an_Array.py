# Given an array of integers nums, sort the array in ascending order.
#
# Example 1:
#
# Input: nums = [5,2,3,1]
# Output: [1,2,3,5]
# Example 2:
#
# Input: nums = [5,1,1,2,0,0]
# Output: [0,0,1,1,2,5]


def sortArray(nums):
    def helper(nums, start, end):

        if start >= end:
            return

        pivot = start
        left = start + 1
        right = end

        while left <= right:

            if nums[left] > nums[pivot] and nums[right] < nums[pivot]:
                nums[left], nums[right] = nums[right], nums[left]

            if nums[left] < nums[pivot]:
                left += 1

            if nums[right] > nums[pivot]:
                right -= 1

        nums[pivot], nums[right] = nums[right], nums[pivot]

        leftSubArrayisSmaller = right - 1 - start < end - (right + 1)

        if leftSubArrayisSmaller:
            helper(nums, start, right - 1)
            helper(nums, right + 1, end)
        else:
            helper(nums, right + 1, end)
            helper(nums, start, right - 1)

    helper(nums, 0, len(nums) - 1)
    return nums
