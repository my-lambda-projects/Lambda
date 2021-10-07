class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        x, y, empty, end = 0, 0, 1, None
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    empty += 1
                if grid[i][j] == 1:
                    x, y = i, j

        self.result = 0

        def dfs(x, y, e):
            if x < 0 or x >= m or y < 0 or y >= n or grid[x][y] < 0:
                return
            if grid[x][y] == 2:
                self.result += e == 0
                return
            grid[x][y] = -2
            for direction in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                x1, y1 = x + direction[0], y + direction[1]
                dfs(x1, y1, e - 1)
            grid[x][y] = 0

        dfs(x, y, empty)
        return self.result
