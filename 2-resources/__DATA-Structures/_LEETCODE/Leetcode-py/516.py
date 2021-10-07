class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        N = len(s)
        dp = [[0] * N for _ in range(N)]
        for i in range(N):
            for j in range(N):
                if i == j:
                    dp[i][j] = 1

        for d in range(1, N):
            for i in range(N - d):
                j = i + d
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        return dp[0][N - 1]
