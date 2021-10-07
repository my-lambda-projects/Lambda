class Solution:
    def hasPath(
        self, maze: List[List[int]], start: List[int], destination: List[int]
    ) -> bool:
        visited = set()

        def dfs(x, y):
            if x == destination[0] and y == destination[1]:
                return True
            for (dx, dy) in [(0, 1), (0, -1), (-1, 0), (1, 0)]:
                new_x, new_y = x + dx, y + dy
                while (
                    0 <= new_x < len(maze)
                    and 0 <= new_y < len(maze[0])
                    and maze[new_x][new_y] == 0
                ):
                    new_x += dx
                    new_y += dy

                new_x -= dx
                new_y -= dy

                if (new_x, new_y) not in visited:
                    visited.add((new_x, new_y))
                    if dfs(new_x, new_y):
                        return True

        return dfs(*start)
