# You are given a map in form of a two-dimensional integer grid where 1
# represents land and 0 represents water.
#
# Grid cells are connected horizontally/vertically (not diagonally).
# The grid is completely surrounded by water, and there is exactly one
# island (i.e., one or more connected land cells).
#
# The island doesn't have "lakes" (water inside that isn't connected to
# the water around the island). One cell is a square with side length 1.
# The grid is rectangular, width and height don't exceed 100. Determine the
# perimeter of the island.

# Input:
# [[0,1,0,0],
#  [1,1,1,0],
#  [0,1,0,0],
#  [1,1,0,0]]
#
# Output: 16


class Solution:
    def islandPerimeter(self, grid):
        if len(grid) == 0:
            return 0

        def findPerimeter(row, col):
            side = 4
            if row - 1 >= 0 and grid[row - 1][col] == 1:
                side -= 1
            if row + 1 < len(grid) and grid[row + 1][col] == 1:
                side -= 1
            if col - 1 >= 0 and grid[row][col - 1] == 1:
                side -= 1
            if col + 1 < len(grid[0]) and grid[row][col + 1] == 1:
                side -= 1

            return side

        perimeter = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1:
                    perimeter += findPerimeter(r, c)

        return perimeter
