# Rotate Matrix

# Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, 
    # write a method to rotate the image by 90 degrees.  Can you do this in place?
# https://github.com/avidLearnerInProgress/CTCI-solutions/blob/master/Chapter%201%20-%20Arrays%20and%20Strings/Rotate%20Matrix/rotate_matrix.py

def print_mat(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            print(matrix[i][j], end = ' ')
        print()

def rotate_matrix(matrix):
    n = len(matrix)
    level, first, last = 0, 0, 0
    for level in range(n//2): # n/2 --> for 4x4 matrix, it will have 2 layers
        first = level
        last = n - first - 1
        for element in range(first, last):
            offset = element - first
            topleft = matrix[first][element]
            topright = matrix[element][last]
            bottomright = matrix[last][last - offset]
            bottomleft = matrix[last - offset][first]
            matrix[first][element] = bottomleft
            matrix[element][last] = topleft
            matrix[last][last - offset] = topright
            matrix[last - offset][first] = bottomright
            # shifting the col value to its pos, since its a clockwise rotation so, seven will be at 1
    print_mat(matrix)


if __name__ == "__main__":
    rotate_matrix([[1,2,3],[4,5,6],[7,8,9]])