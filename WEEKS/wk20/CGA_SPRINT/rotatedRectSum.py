# Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the main diagonal and two diagonals parallel to the secondary diagonal. The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.
#
# dimensions
#
# Given integers a and b representing the dimensions of the rotated rectangle, and matrix (a matrix of integers), your task is to find the greatest sum of integers contained within an a x b rotated rectangle.
#
# Note: The order of the dimensions is not important - consider all a x b and b x a rectangles.
#
# Example
#
# For
#
# matrix = [[1, 2, 3, 4, 0],
#           [5, 6, 7, 8, 1],
#           [3, 2, 4, 1, 4],
#           [4, 3, 5, 1, 6]]
# a = 2, and b = 3, the output should be rotatedRectSum(matrix, a, b) = 36.
#
# example 1
#
# For
#
# matrix = [[-2, 3, 5, -1],
#           [4, 3, -10, 10]]
# a = 1, and b = 1, the output should be rotatedRectSum(matrix, a, b) = 10.
#
# example 2
#
# The rotated rectangle with dimensions 1x1 is just one element, so the answer is the maximal element in matrix.
#
# For
#
# matrix = [[-2, 3],
#           [4, 3]]
# a = 1, and b = 2, the output should be rotatedRectSum(matrix, a, b) = 7.
#
# example 3
#
# Input/Output
#
# [execution time limit] 4 seconds (py3)
#
# [input] array.array.integer matrix
#
# A matrix of integers.
#
# Guaranteed constraints:
# 1 ≤ matrix.length, matrix[i].length ≤ 50,
# -103 ≤ matrix[i][j] ≤ 103.
#
# [input] integer a
#
# The first rotated rectangle dimension.
#
# Guaranteed constraints:
# 1 ≤ a ≤ 25.
#
# [input] integer b
#
# The second rotated rectangle dimension.
# It's guaranteed that at least one rotated rectangle will fit in the given matrix.
#
# Guaranteed constraints:
# a ≤ b ≤ 25.
#
# [output] integer
#
# The maximal sum of elements of a rotated rectangle with dimensions a and b.
def rotatedRectSum(matrix, a, b):
