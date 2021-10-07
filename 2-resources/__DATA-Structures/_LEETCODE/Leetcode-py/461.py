"""
time: O(1)
space: O(1)
"""


class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        diff = x ^ y
        result = 0
        for _ in range(32):
            result += diff & 1
            diff = diff >> 1
        return result
