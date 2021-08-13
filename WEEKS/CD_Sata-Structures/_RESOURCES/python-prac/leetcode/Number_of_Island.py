# Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
# An island is surrounded by water and is formed by connecting adjacent lands
# horizontally or vertically. You may assume all four edges of the grid are all
# surrounded by water.
#
# Example 1:
#
# Input:
# 11110
# 11010
# 11000
# 00000
#
# Output: 1
# Example 2:
#
# Input:
# 11000
# 11000
# 00100
# 00011
#
# Output: 3


class Solution:
    def __init__(self, grid):
        self.grid = grid

    def is_island(self):
        def sink_island(grid, r, c):
            if grid[r][c] == "1":
                grid[r][c] = 0
            else:
                return
            if r - 1 >= 0:
                sink_island(grid, r - 1, c)
            if r + 1 < len(grid):
                sink_island(grid, r + 1, c)
            if c - 1 >= 0:
                sink_island(grid, r, c - 1)
            if c + 1 < len(grid[0]):
                sink_island(grid, r, c + 1)

        counter = 0
        for i in range(len(self.grid)):
            for j in range(len(self.grid[0])):
                if self.grid[i][j] == "1":
                    counter += 1
                    sink_island(self.grid, i, j)
        return counter


if __name__ == "__main__":
    grid1 = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]
    grid2 = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]
    print(Solution(grid1).is_island())
    print(Solution(grid2).is_island())
