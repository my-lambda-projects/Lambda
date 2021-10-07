class Solution:
    def findNumberOfLIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        length, count = [1] * len(nums), [1] * len(nums)
        result, maxval = 1, 1
        for i in range(1, len(nums)):
            count[i] = 1
            for j in range(i):
                if nums[i] > nums[j]:
                    if length[j] + 1 == length[i]:
                        count[i] += count[j]
                    elif length[j] + 1 > length[i]:
                        length[i] = length[j] + 1
                        count[i] = count[j]
            if length[i] > maxval:
                maxval = length[i]
                result = count[i]
            elif length[i] == maxval:
                result += count[i]
        return result
