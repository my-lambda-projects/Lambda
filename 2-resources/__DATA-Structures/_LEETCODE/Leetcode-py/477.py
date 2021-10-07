class Solution:
    def totalHammingDistance(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        bits = [[0, 0] for _ in range(32)]
        for x in nums:
            for i in range(32):
                bits[i][x % 2] += 1
                x = x // 2
        return sum(x * y for x, y in bits)
