class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        result = 0
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    for x, y in [(i + 1, j), (i - 1, j), (i, j - 1), (i, j + 1)]:
                        if x < 0 or x >= m or y < 0 or y >= n or grid[x][y] == 0:
                            result += 1
        return result
