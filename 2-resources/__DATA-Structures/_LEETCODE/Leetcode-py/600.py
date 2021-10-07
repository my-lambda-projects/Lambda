class Solution:
    def findIntegers(self, num: int) -> int:
        A = bin(num)[2:][::-1]
        print(A)
        N = len(A)
        dp = [[1, 1] for _ in range(N)]
        result = 0
        result = 1 if A[0] == "0" else 2
        for i in range(1, N):
            dp[i][0] = dp[i - 1][1] + dp[i - 1][0]
            dp[i][1] = dp[i - 1][0]
            if A[i - 1 : i + 1] == "01":
                result += dp[i][0]
            elif A[i - 1 : i + 1] == "11":
                result = dp[i][0] + dp[i][1]
        return result
