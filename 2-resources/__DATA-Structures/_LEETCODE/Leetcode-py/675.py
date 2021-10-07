import heapq
from collections import deque


class Solution:
    def cutOffTree(self, forest: List[List[int]]) -> int:
        if not forest or not forest[0]:
            return 0
        m, n = len(forest), len(forest[0])

        q = []
        for i in range(m):
            for j in range(n):
                if forest[i][j] > 1:
                    heapq.heappush(q, (forest[i][j], i, j))

        result = 0
        x, y = 0, 0
        while q:
            _, x1, y1 = heapq.heappop(q)
            distance = self.getDistance(x, y, x1, y1, forest)
            if distance == -1:
                return -1
            forest[x1][y1] = 1
            result += distance
            x, y = x1, y1
        return result

    def getDistance(self, x1, y1, x2, y2, forest):
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = {(x1, y1)}

        queue = deque([(x1, y1, 0)])
        while queue:
            x, y, distance = queue.popleft()
            if x == x2 and y == y2:
                return distance
            for direction in directions:
                new_x, new_y = x + direction[0], y + direction[1]
                if (
                    0 <= new_x < len(forest)
                    and 0 <= new_y < len(forest[0])
                    and forest[new_x][new_y] > 0
                    and (new_x, new_y) not in visited
                ):
                    queue.append((new_x, new_y, distance + 1))
                    visited.add((new_x, new_y))
        return -1
