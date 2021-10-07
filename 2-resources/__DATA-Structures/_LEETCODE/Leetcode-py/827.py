class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        colorMap = {0: 0}
        colorCode = 2

        def paint(x, y, color):
            if (
                x < 0
                or x >= m
                or y < 0
                or y >= n
                or not grid[x][y]
                or grid[x][y] == color
            ):
                return 0
            grid[x][y] = color
            return (
                1
                + paint(x - 1, y, color)
                + paint(x + 1, y, color)
                + paint(x, y - 1, color)
                + paint(x, y + 1, color)
            )

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    area = paint(i, j, colorCode)
                    colorMap[colorCode] = area
                    colorCode += 1

        result = colorMap.get(2, 0)
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    colorSet = set()
                    for d in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                        x, y = i + d[0], j + d[1]
                        if 0 <= x < m and 0 <= y < n:
                            colorSet.add(grid[x][y])
                    newArea = 1
                    for color in colorSet:
                        newArea += colorMap[color]
                    result = max(result, newArea)
        return result
