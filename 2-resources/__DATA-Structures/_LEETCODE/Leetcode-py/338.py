class Solution:
    def countBits(self, num):
        """
        :type num: int
        :rtype: List[int]
        """
        ret = [0] * (num + 1)
        for i in range(1, num + 1):
            ret[i] = ret[i >> 1] + i % 2
        return ret
