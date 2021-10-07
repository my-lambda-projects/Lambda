class Solution:
    def imageSmoother(self, M):
        """
        :type M: List[List[int]]
        :rtype: List[List[int]]
        """
        m = len(M)
        n = len(M[0]) if m else 0
        ret = [[0] * n for j in range(m)]
        for i in range(m):
            for j in range(n):
                surrounding_cells = [
                    M[x][y]
                    for x in (i - 1, i, i + 1)
                    for y in (j - 1, j, j + 1)
                    if 0 <= x < m and 0 <= y < n
                ]
                ret[i][j] = sum(surrounding_cells) // len(surrounding_cells)
        return ret
