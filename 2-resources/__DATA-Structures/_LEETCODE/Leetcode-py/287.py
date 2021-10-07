# Time: O(nlogn)


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        result = 0
        l, r = 1, len(nums) - 1
        while l <= r:
            mid = l + (r - l) // 2
            count = self.getCount(mid, nums)
            if count > mid:
                result = mid
                r = mid - 1
            else:
                l = mid + 1
        return result

    def getCount(self, val, nums):
        count = 0
        for num in nums:
            if num <= val:
                count += 1
        return count
