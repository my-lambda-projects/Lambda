class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        start, end = 0, 0
        while end < len(nums):
            if nums[end] != 0:
                nums[start] = nums[end]
                start += 1
            end += 1
        if start < len(nums):
            nums[start:] = [0] * (len(nums) - start)
