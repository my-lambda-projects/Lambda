class Solution:
    def pacificAtlantic(self, matrix: List[List[int]]) -> List[List[int]]:
        if not matrix or not matrix[0]:
            return []
        m, n = len(matrix), len(matrix[0])

        toPacific = set()
        toAtlantic = set()
        directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

        def search(x, y, oceanSet):
            if (x, y) in oceanSet:
                return
            oceanSet.add((x, y))
            for direction in directions:
                new_x, new_y = x + direction[0], y + direction[1]
                if (
                    0 <= new_x < m
                    and 0 <= new_y < n
                    and matrix[new_x][new_y] >= matrix[x][y]
                ):
                    search(new_x, new_y, oceanSet)

        for i in range(m):
            search(i, 0, toPacific)
            search(i, n - 1, toAtlantic)

        for j in range(n):
            search(0, j, toPacific)
            search(m - 1, j, toAtlantic)

        return [list(pair) for pair in toPacific & toAtlantic]
