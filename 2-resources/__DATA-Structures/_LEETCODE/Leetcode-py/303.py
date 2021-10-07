class NumArray(object):
    def __init__(self, nums):
        n = len(nums)
        self.sum = [0] * (n + 1)
        for i in range(n):
            self.sum[i + 1] = self.sum[i] + nums[i]

    def sumRange(self, i, j):
        """
        :param i: int
        :param j: int
        :return: int
        """
        return self.sum[j + 1] - self.sum[i]
