import heapq


class Solution:
    def shortestDistance(
        self, maze: List[List[int]], start: List[int], destination: List[int]
    ) -> int:
        m, n = len(maze), len(maze[0])
        start, destination = tuple(start), tuple(destination)
        q, visited = [(0, start)], set(start)

        def getNeighbor(x, y):
            for direction in [(-1, 0), (1, 0), (0, 1), (0, -1)]:
                i, j, d = x, y, 0
                while (
                    0 <= i + direction[0] < m
                    and 0 <= j + direction[1] < n
                    and maze[i + direction[0]][j + direction[1]] == 0
                ):
                    i += direction[0]
                    j += direction[1]
                    d += 1
                yield (i, j), d

        while q:
            d, curr = heapq.heappop(q)
            if curr == destination:
                return d
            if curr in visited:
                continue
            visited.add(curr)
            for neighbor, distance in getNeighbor(*curr):
                heapq.heappush(q, (d + distance, neighbor))
        return -1
