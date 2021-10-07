import heapq


class Solution:
    def trapRainWater(self, heights: "List[List[int]]") -> "int":
        if not heights or len(heights[0]) == 0:
            return 0
        result, q = 0, []
        m, n = len(heights), len(heights[0])
        visited = [[0 for j in range(n)] for i in range(m)]
        for i in [0, m - 1]:
            for j in range(n):
                if not visited[i][j]:
                    heapq.heappush(q, (heights[i][j], i, j))
                    visited[i][j] = 1
        for j in [0, n - 1]:
            for i in range(m):
                if not visited[i][j]:
                    heapq.heappush(q, (heights[i][j], i, j))
                    visited[i][j] = 1
        dx, dy = [0, 0, -1, 1], [1, -1, 0, 0]
        while q:
            curr, x, y = heapq.heappop(q)
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < m and 0 <= ny < n and not visited[nx][ny]:
                    visited[nx][ny] = 1
                    result += max(0, curr - heights[nx][ny])
                    heapq.heappush(q, (max(curr, heights[nx][ny]), nx, ny))
        return result
