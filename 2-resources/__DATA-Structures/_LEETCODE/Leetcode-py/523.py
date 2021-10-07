class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        d = {0: -1}
        total, m = 0, 0
        for i in range(len(nums)):
            total += nums[i]
            if k != 0:
                m = total % k
            else:
                m = total
            if m in d:
                if i - d[m] > 1:
                    return True
            else:
                d[m] = i
        return False
