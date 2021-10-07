class Solution:
    def numSquares(self, n: int) -> int:
        if n <= 0:
            return 0
        dp = [0]

        while len(dp) < n + 1:
            i, m = 1, len(dp)
            square_count = float("inf")
            while i * i <= m:
                square_count = min(square_count, dp[m - i * i] + 1)
                i += 1
            dp.append(square_count)

        return dp[n]
