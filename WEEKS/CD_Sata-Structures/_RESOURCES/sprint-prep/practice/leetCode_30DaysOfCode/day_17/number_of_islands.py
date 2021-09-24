"""
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water
and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid
are all surrounded by water.
"""


def numIslands(grid):
    if grid is None and len(grid) == 0:
        return 0
    nuOfIslands = 0
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j] == "1":
                nuOfIslands += 1
                dfs(grid, i, j)
    return nuOfIslands


def dfs(grid, i, j):
    if (
        (j >= len(grid[0]))
        or (j < 0)
        or (i < 0)
        or (i >= len(grid))
        or (grid[i][j] != "1")
    ):
        return 0
    grid[i][j] = 0
    dfs(grid, i, j + 1)
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)


grid = [["1", "1", "0"], ["1", "1", "0"], ["0", "0", "1"], ["0", "0", "0"]]
print(numIslands(grid))
