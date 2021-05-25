# Zero Matrix

# Write an algorithm such that, if an element in an M x N matrix is 0, its entire row and column are set to 0.

# 4 x 4 matrix 

# the following function is adapted from 1.7 solution:
def print_matrix(matrix):
    length = len(matrix)
    length_0 = len(matrix[0])
    for i in range(length):
        for j in range(length_0):
            current_matrix_square = matrix[i][j]
            print(current_matrix_square, end = ' ')
        print()

# if 1,1 is 0 then 1,2/1,3/1,4 is 0
    # 1,1/2,1/3,1/4,1 are also 0
def zero_matrix(matrix):
    x_zeros = []
    y_zeros = []
    # get x and y coordinates of zeros
    for x in range(0, len(matrix)):
        for y in range(0, len(matrix)):
                if matrix[x][y] == 0:
                    y_zeros.append(y)
                    x_zeros.append(x)
    # loop through y
        # if x matches change to zero
    for x in range(0, len(x_zeros)):
        current_zero = x_zeros[x]
        for y in range(0, len(matrix)):
            matrix[current_zero][y] = 0
    # loop through x
        # if y matches change to zero
    for y in range(0, len(y_zeros)):
        current_zero = y_zeros[y]
        for z in range(0, len(matrix)):
            matrix[z][current_zero] = 0
    # print matrix
    print_matrix(matrix)


if __name__ == "__main__":
    zero_matrix([[1,2,0],[4,5,6],[7,8,9]])