def matrixElementsSum(matrix):
    runningsum = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0 and i + 1 < len(matrix):
                matrix[i + 1][j] = 0
            runningsum += matrix[i][j]
    return runningsum
