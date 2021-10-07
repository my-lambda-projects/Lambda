class Solution:
    def countCornerRectangles(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        result = 0
        if not grid or not grid[0]:
            return result
        m, n = len(grid), len(grid[0])
        for i in range(m - 1):
            for ii in range(i + 1, m):
                count = 0
                for j in range(n):
                    if grid[i][j] and grid[ii][j]:
                        result += count
                        count += 1
        return result
