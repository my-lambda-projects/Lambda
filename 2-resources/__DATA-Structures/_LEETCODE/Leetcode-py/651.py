class Solution:
    def maxA(self, N):
        """
        :type N: int
        :rtype: int
        """
        if N < 7:
            return N
        result = [0, 1, 2, 3, 4, 5, 6]
        for i in range(7, N + 1):
            current = result[i - 1] + 1
            for j in range(3, i):
                current = max(current, result[i - j] * (j - 1))
            result.append(current)
        return result[N]
