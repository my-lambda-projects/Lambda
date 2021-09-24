# o(log(n)) solution
def swapDiagonals(matrix):
    j = len(matrix) - 1
    for i in range(len(matrix) // 2):
        matrix[i][i], matrix[i][j - i] = matrix[i][j - i], matrix[i][i]
        matrix[j - i][j - i], matrix[j - i][i] = matrix[j - i][i], matrix[j - i][j - i]
    return matrix


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(swapDiagonals(matrix))
