class Solution:
    def findPaths(self, m: int, n: int, N: int, i: int, j: int) -> int:
        M = [[0] * n for _ in range(m)]

        for _ in range(N):
            T = [[0] * n for _ in range(m)]
            for x in range(m):
                for y in range(n):
                    up = M[x - 1][y] if x > 0 else 1
                    down = M[x + 1][y] if x + 1 < m else 1
                    right = M[x][y + 1] if y + 1 < n else 1
                    left = M[x][y - 1] if y > 0 else 1
                    T[x][y] = up + down + right + left
            M = T
        return M[i][j] % (10 ** 9 + 7)
