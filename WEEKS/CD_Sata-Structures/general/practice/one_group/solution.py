"""
Given a grid of 1's and 0's, determine the number of adjacent 1's (adjacent means next to it from up, down, left,
right but not diagonally).
"""

from collections import defaultdict


def onesGroups(grid, quires):
    # global tot
    ans = defaultdict(int)

    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                # tot = 0
                tot = dfs(grid, i, j, 0)
                ans[tot] += 1
    for i in range(len(quires)):
        if quires[i] in ans:
            quires[i] = ans[quires[i]]
        else:
            quires[i] = 0
    return quires


def dfs(grid, i, j, tot):
    # using global tot, to not be considered in the recursive stack
    # global tot
    if (
        (i < 0)
        or (j < 0)
        or (j >= len(grid[0]))
        or (i >= len(grid))
        or (grid[i][j] == 0)
    ):
        return tot
    if grid[i][j] == 1:
        tot += 1
    grid[i][j] = 0
    tot = dfs(grid, i + 1, j, tot)  # down
    tot = dfs(grid, i - 1, j, tot)  # up
    tot = dfs(grid, i, j + 1, tot)  # right
    tot = dfs(grid, i, j - 1, tot)  # left
    return tot


grid = [[1, 1, 1, 0, 0], [1, 1, 1, 0, 1], [0, 0, 0, 1, 0]]
quires = [1, 2, 6]
print(onesGroups(grid, quires))
