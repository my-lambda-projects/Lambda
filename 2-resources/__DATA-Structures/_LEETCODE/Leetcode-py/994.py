class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rotten = []
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    rotten.append((i, j))
        step = -1
        while rotten:
            new_rotten = []
            for x, y in rotten:
                for dx, dy in [(-1, 0), (1, 0), (0, 1), (0, -1)]:
                    new_x, new_y = x + dx, y + dy
                    if 0 <= new_x < m and 0 <= new_y < n and grid[new_x][new_y] == 1:
                        grid[new_x][new_y] = 2
                        new_rotten.append((new_x, new_y))
            rotten = new_rotten
            step += 1
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    return -1
        return 0 if step == -1 else step
