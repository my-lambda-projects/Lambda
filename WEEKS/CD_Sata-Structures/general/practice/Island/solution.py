def island(matrix):
    """
    given a two by two matrix, get the number of islands in it, an island is a series of 1's connected in a
    row or a column
    """
    if (not matrix) or len(matrix) == 0:
        return 0
    number_of_islands = 0
    l = [True] * len(matrix[0])
    for i in range(len(matrix)):
        ind = True
        for j in range(len(matrix[0])):
            if matrix[i][j] == 0:
                l[j] = False
                ind = False
        if ind:
            number_of_islands += 1
    return number_of_islands + sum(l)


print(island([[1, 0, 1], [1, 1, 1]]))
