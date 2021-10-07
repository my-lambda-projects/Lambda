class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        if not grid or not grid[0]:
            return 0
        area = 0
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    area = max(area, self.dfs(grid, i, j, set()))
        return area

    def dfs(self, grid, i, j, visited):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == 0:
            return 0
        grid[i][j] = 0
        s = 1
        for x, y in [(i + 1, j), (i - 1, j), (i, j - 1), (i, j + 1)]:
            s += self.dfs(grid, x, y, visited)
        return s
