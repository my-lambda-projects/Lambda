class NumMatrix(object):
    def __init__(self, matrix):
        """
        :type matrix: List[List[int]]
        """
        if not matrix:
            return
        rows = len(matrix)
        cols = len(matrix[0]) if rows > 0 else 0
        self.sums = [[0 for j in range(cols + 1)] for i in range(rows + 1)]
        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                self.sums[i][j] = (
                    matrix[i - 1][j - 1]
                    + self.sums[i - 1][j]
                    + self.sums[i][j - 1]
                    - self.sums[i - 1][j - 1]
                )

    def sumRegion(self, row1, col1, row2, col2):
        """
        :type row1: int
        :type col1: int
        :type row2: int
        :type col2: int
        :rtype: int
        """
        return (
            self.sums[row2 + 1][col2 + 1]
            - self.sums[row1][col2 + 1]
            - self.sums[row2 + 1][col1]
            + self.sums[row1][col1]
        )
