class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        missing = nums[-1] - nums[0] - len(nums) + 1
        if missing < k:
            return nums[-1] + k - missing
        left, right = 0, len(nums) - 1
        while left + 1 < right:
            mid = left + (right - left) // 2
            missing = nums[mid] - nums[left] - (mid - left)
            if missing < k:
                left = mid
                k -= missing
            else:
                right = mid
        return nums[left] + k
