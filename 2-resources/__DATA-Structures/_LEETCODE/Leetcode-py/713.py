# Time: O(N), Space: O(1)
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if not nums:
            return 0
        start, product = 0, 1
        result = 0
        for end in range(len(nums)):
            product *= nums[end]
            while start <= end and product >= k:
                product //= nums[start]
                start += 1
            result += end - start + 1
        return result
