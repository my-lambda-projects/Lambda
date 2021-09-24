"""Chess Knight
"""


def chessKnight(cell):
    valid_count = 0

    # All possible moves for knight
    dirs = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]

    # For each move of knight, check if it's valid
    for x, y in dirs:
        if (97 <= ord(cell[0]) + x <= 104) and (1 <= int(cell[1]) + y <= 8):
            valid_count += 1
    return valid_count
