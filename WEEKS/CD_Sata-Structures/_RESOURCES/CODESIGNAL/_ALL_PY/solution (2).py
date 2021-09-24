def sudoku2(grid):
    """
    check if sudoku board is true by checking that the same number didn't appear more than one in its row, col,
    surrounding 3*3 sub matrix
    """
    for i in range(9):
        for j in range(9):
            if i % 3 == 0 and j % 3 == 0:
                l = [
                    grid[s_i][s_j]
                    for s_i in range(i, i + 3)
                    for s_j in range(j, j + 3)
                    if grid[s_i][s_j].isdigit()
                ]
                if len(set(l)) != len(l):
                    return False
            if grid[i][j].isdigit():
                if grid[i].count(grid[i][j]) > 1:
                    return False
                if list(zip(*grid))[j].count(grid[i][j]) > 1:
                    return False
    return True


grid = [
    [".", ".", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "8", ".", ".", ".", "3", "."],
    [".", "5", ".", ".", "2", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "4", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "7"],
    [".", "1", ".", ".", ".", ".", ".", ".", "."],
    ["2", "4", ".", ".", ".", ".", "9", ".", "."],
]
print(sudoku2(grid))
