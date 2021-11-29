def matrix_elements_sum(matrix):
    hunted = []
    total = 0
    ran = len(matrix[0])
    for row in matrix:
        for no in range(ran):
            if no in hunted:
                continue
            elif row[no] == 0:
                hunted.append(no)
            else:
                total += row[no]
    return total


print(matrix_elements_sum([[0, 1, 5, 1], [0, 2, 0, 3], [0, 0, 1, 1]]))
