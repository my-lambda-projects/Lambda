class Solution:
    def numIslands2(self, m, n, positions):
        """
        :type m: int
        :type n: int
        :type positions: List[List[int]]
        :rtype: List[int]
        """
        matrix = [[0 for i in range(n)] for j in range(m)]
        roots, result, island = {}, [], 0
        row, col = [-1, 0, 1, 0], [0, 1, 0, -1]
        for position in positions:
            x, y = position[0], position[1]
            if matrix[x][y] == 1:
                result.append(island)
                continue
            roots[x * n + y] = x * n + y
            this_root = x * n + y
            island += 1
            for i in range(4):
                nx, ny = x + row[i], y + col[i]
                if 0 <= nx < m and 0 <= ny < n and matrix[nx][ny] == 1:
                    nroot = self.find(nx * n + ny, roots)
                    if nroot != this_root:
                        roots[nroot] = this_root
                        island -= 1
            result.append(island)
            matrix[x][y] = 1
        return result

    def find(self, node, roots):
        root = node
        while root != roots[root]:
            root = roots[root]
        while node != root:
            node, roots[node] = roots[node], root
        return root
