def sudoku2(grid):
    seen = set()
    # Iterate through grid
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            current_value = grid[i][j]
            if current_value != ".":
                if (
                    (current_value + " found in row " + str(i)) in seen
                    or (current_value + " found in column " + str(j)) in seen
                    or (
                        current_value
                        + " found in subgrid "
                        + str(i // 3)
                        + "-"
                        + str(j // 3)
                    )
                    in seen
                ):
                    return False
                seen.add(current_value + " found in row " + str(i))
                seen.add(current_value + " found in column " + str(j))
                seen.add(
                    current_value
                    + " found in subgrid "
                    + str(i // 3)
                    + "-"
                    + str(j // 3)
                )
    return True
