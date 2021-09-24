def neighbours(matrix, i, j, rows, columns):
    mines = 0
    # Top left
    if i >= 1 and j >= 1:
        if matrix[i - 1][j - 1]:
            mines += 1
    # Top center
    if i >= 1:
        if matrix[i - 1][j]:
            mines += 1
    # Top right
    if i >= 1 and j < columns - 1:
        if matrix[i - 1][j + 1]:
            mines += 1
    # Middle right
    if j < columns - 1:
        if matrix[i][j + 1]:
            mines += 1
    # Bottom right
    if i < rows - 1 and j < columns - 1:
        if matrix[i + 1][j + 1]:
            mines += 1
    # Bottom center
    if i < rows - 1:
        if matrix[i + 1][j]:
            mines += 1
    # Bottom left
    if i < rows - 1 and j >= 1:
        if matrix[i + 1][j - 1]:
            mines += 1
    # Middle left
    if j >= 1:
        if matrix[i][j - 1]:
            mines += 1
    return mines


def minesweeper(matrix):
    rows, columns = len(matrix), len(matrix[0])
    game_setup = []
    for i in range(rows):
        game_setup_row = []
        for j in range(columns):
            game_setup_row.append(neighbours(matrix, i, j, rows, columns))
        game_setup.append(game_setup_row)
    return game_setup
