class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []
        for n in nums:
            if nums[abs(n) - 1] < 0:
                result.append(abs(n))
            else:
                nums[abs(n) - 1] *= -1
        return result
