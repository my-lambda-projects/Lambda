class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        result, i = 0, 0
        j = 0
        while j < len(nums):
            if nums[j] <= nums[j - 1]:
                i = j
            j += 1
            result = max(result, j - i)

        return result
