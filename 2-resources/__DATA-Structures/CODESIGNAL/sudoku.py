def sudoku(grid):
	"""
	Return boolean indicating if Sudoku is valid.
	"""
    seen = set()
    # Iterate through grid
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            current_value = grid[i][j]
            if current_value != '.':
                if (str(current_value) + ' found in row ' + str(i)) in seen or (str(current_value) + ' found in column ' + str(j)) in seen or (str(current_value) + ' found in subgrid ' + str(i//3) + '-' + str(j//3)) in seen:
                    return False
                seen.add(str(current_value) + ' found in row ' + str(i))
                seen.add(str(current_value) + ' found in column ' + str(j))
                seen.add(str(current_value) + ' found in subgrid ' + str(i//3) + '-' + str(j//3))
    return True
