# -*- coding: utf-8 -*-
"""


"""

# toeplitz matrix check function
def checkToeplitz(matrix, m, n):
    for i in range(m - 1):
        for j in range(n - 1):
            if matrix[i][j] != matrix[i + 1][j + 1]:
                return False

    return True


# matrix display function
def display_mat(matrix, m, n):
    for i in range(m):
        print(matrix[i])


# driver code
if "__name__" == "__main__":
    # input of row and column number
    m = int(input("Enter the number of rows: "))
    n = int(input("Enter the number of columns: "))

    # initializing the 2-d array
    matrix = [[0 for j in range(n)] for i in range(m)]

    # taking input in the 2-d array
    for i in range(m):
        for j in range(n):
            print(str(i + 1) + " row, " + str(j + 1) + " column: ", end="")
            matrix[i][j] = int(input())

    # printing th matrix
    print("The entered matrix is:")
    display_mat(matrix, m, n)

    # calling the cehcking function
    if checkToeplitz(matrix, m, n):
        print("The matrix is a toeplitx matrix.")
    else:
        print("The matrix is not a toeplitx matrix.")
