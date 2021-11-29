def sudoku2(grid):
    # test row
    tab = [[False for col in range(9)] for row in range(9)]

    cols = [[False for col in range(9)] for row in range(9)]
    rows = [[False for col in range(9)] for row in range(9)]
    for r in range(9):
        for c in range(9):
            if grid[r][c] == ".":
                continue
            v = int(grid[r][c]) - 1
            if rows[r][v]:
                return False
            else:
                rows[r][v] = 1

            if cols[c][v]:
                return False
            else:
                cols[c][v] = 1

            a = ((r // 3) * 3) + (c // 3)

            if tab[a][v]:
                return False
            else:
                tab[a][v] = 1

    return True
