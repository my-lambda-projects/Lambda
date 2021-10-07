class Solution:
    """
    @param nums: A list of integers
    @return: A list of integers includes the index of the first number and the index of the last number
    """

    def subarraySum(self, nums):
        d = {0: -1}
        prefix_sum = 0
        for i, v in enumerate(nums):
            prefix_sum += v
            if prefix_sum in d:
                return [d[prefix_sum] + 1, i]
            d[prefix_sum] = i
        return [-1, -1]
