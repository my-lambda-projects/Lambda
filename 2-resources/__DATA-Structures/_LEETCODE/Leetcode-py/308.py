class NumMatrix:
    def __init__(self, matrix: List[List[int]]):
        if not matrix or not matrix[0]:
            return
        self.m, self.n = len(matrix), len(matrix[0])
        self.matrix = [[0] * self.n for _ in range(self.m)]
        self.tree = [[0] * (self.n + 1) for _ in range(self.m + 1)]
        i = 1
        while i <= self.m:
            j = 1
            while j <= self.n:
                self.update(i - 1, j - 1, matrix[i - 1][j - 1])
                j += 1
            i += 1

    def update(self, row: int, col: int, val: int) -> None:
        diff, self.matrix[row][col], i = val - self.matrix[row][col], val, row + 1
        while i <= self.m:
            j = col + 1
            while j <= self.n:
                self.tree[i][j] += diff
                j += j & -j
            i += i & -i

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return (
            self.getSum(row2, col2)
            - self.getSum(row2, col1 - 1)
            - self.getSum(row1 - 1, col2)
            + self.getSum(row1 - 1, col1 - 1)
        )

    def getSum(self, row, col):
        result, i = 0, row + 1
        while i > 0:
            j = col + 1
            while j > 0:
                result += self.tree[i][j]
                j -= j & -j
            i -= i & -i
        return result
