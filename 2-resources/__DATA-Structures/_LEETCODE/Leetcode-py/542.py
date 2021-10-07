class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        m, n = len(matrix), len(matrix[0])
        result = [[-1] * n for _ in range(m)]
        q = []
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    result[i][j] = 0
                    q.append((i, j))
        while q:
            new_q = []
            for i, j in q:
                for d in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                    x, y = i + d[0], j + d[1]
                    if 0 <= x < m and 0 <= y < n and result[x][y] == -1:
                        result[x][y] = result[i][j] + 1
                        new_q.append((x, y))
            q = new_q
        return result
