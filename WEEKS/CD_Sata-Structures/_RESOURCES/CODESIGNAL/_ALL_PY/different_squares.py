def differentSquares(matrix):
	"""
	Return number of DIFFERENT 2 * 2 squares in rectangular matrix.
    
    Time Complexity: O(N^2)
    Space Complexity: O(N)
	"""
    squares = set()
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[i]) - 1):
            squares.add((matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]))
    return len(squares)