# def extractMatrixColumn(matrix, column):
#     return list(list(zip(*matrix))[column])


def extractMatrixColumn(matrix, col):
    return [matrix[i][col] for i in range(len(matrix))]


matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]]

print(extractMatrixColumn(matrix, 2))
