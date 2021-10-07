from collections import deque


class Solution:
    def shortestDistance(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        k = sum(1 for i in range(m) for j in range(n) if grid[i][j] == 1)
        distance = [[0] * n for _ in range(m)]
        buildings = [[0] * n for _ in range(m)]

        def bfs(x, y):
            count, visited = 1, {(x, y)}
            queue = deque([(x, y, 0)])
            while queue:
                x, y, d = queue.popleft()
                for direction in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    new_x, new_y = x + direction[0], y + direction[1]
                    if (
                        0 <= new_x < m
                        and 0 <= new_y < n
                        and (new_x, new_y) not in visited
                    ):
                        visited.add((new_x, new_y))
                        if not grid[new_x][new_y]:
                            buildings[new_x][new_y] += 1
                            distance[new_x][new_y] += d + 1
                            queue.append((new_x, new_y, d + 1))
                        elif grid[new_x][new_y] == 1:
                            count += 1
            return count == k

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    if not bfs(i, j):
                        return -1
        return min(
            [
                distance[i][j]
                for i in range(m)
                for j in range(n)
                if not grid[i][j] and buildings[i][j] == k
            ]
            or [-1]
        )
