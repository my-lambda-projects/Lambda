class Solution:
    """
    @param: matrix: an integer matrix
    @return: the coordinate of the left-up and right-down number
    """

    def submatrixSum(self, matrix):
        if not matrix or not matrix[0]:
            return None
        m, n = len(matrix), len(matrix[0])
        for top in range(m):
            row = [0] * n
            for bottom in range(top, m):
                prefix_sum = 0
                d = {0: -1}
                for j in range(n):
                    row[j] += matrix[bottom][j]
                    prefix_sum += row[j]
                    if prefix_sum in d:
                        return [[top, d[prefix_sum] + 1], [bottom, j]]
                    d[prefix_sum] = j
        return None
