class Solution:
    def threeSumSmaller(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        ret = 0

        for i in range(len(nums)):
            l, r = i + 1, len(nums) - 1
            while l < r:
                ss = nums[i] + nums[l] + nums[r]
                if ss < target:
                    ret += r - l
                    l += 1
                else:
                    r -= 1
        return ret
