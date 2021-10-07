class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        result = 0
        start = end = 0
        while end < len(nums):
            if nums[end] == 0:
                result = max(result, end - start)
                start = end
                while start < len(nums) and nums[start] != 1:
                    start += 1
            end += 1
        return max(result, end - start)
