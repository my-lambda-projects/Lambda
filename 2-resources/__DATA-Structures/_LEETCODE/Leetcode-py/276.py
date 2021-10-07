class Solution:
    def numWays(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
        if n == 1:
            return k
        if n == 2:
            return k * k
        same, diff = k, k * (k - 1)
        for i in range(3, n + 1):
            same, diff = diff, (same + diff) * (k - 1)
        return same + diff
