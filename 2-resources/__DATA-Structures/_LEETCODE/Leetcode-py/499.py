import heapq


class Solution:
    def findShortestWay(
        self, maze: List[List[int]], ball: List[int], hole: List[int]
    ) -> str:
        m, n = len(maze), len(maze[0])
        ball, hole = tuple(ball), tuple(hole)

        def getNeighbors(loc):
            for dx, dy, direction in [
                (-1, 0, "u"),
                (1, 0, "d"),
                (0, 1, "r"),
                (0, -1, "l"),
            ]:
                x, y, d = loc[0], loc[1], 0
                while 0 <= x + dx < m and 0 <= y + dy < n and not maze[x + dx][y + dy]:
                    x += dx
                    y += dy
                    d += 1
                    if (x, y) == hole:
                        break
                yield d, direction, (x, y)

        q, visited = [(0, "", ball)], set()
        while q:
            d, path, loc = heapq.heappop(q)
            if loc in visited:
                continue
            if loc == hole:
                return path
            visited.add(loc)
            for dist, direction, pos in getNeighbors(loc):
                heapq.heappush(q, (d + dist, path + direction, pos))
        return "impossible"
