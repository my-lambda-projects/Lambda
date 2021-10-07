class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        if grid[-1][-1] == -1:
            return 0
        N = len(grid)
        memo = {}

        def search(x1, y1, x2, y2):
            if (x1, y1, x2, y2) in memo:
                return memo[(x1, y1, x2, y2)]
            if x1 == N or y1 == N or x2 == N or y2 == N:
                return -1
            if x1 == N - 1 and y1 == N - 1 and x2 == N - 1 and y2 == N - 1:
                return grid[N - 1][N - 1]
            if grid[x1][y1] == -1 or grid[x2][y2] == -1:
                return -1

            s1 = search(x1 + 1, y1, x2 + 1, y2)
            s2 = search(x1 + 1, y1, x2, y2 + 1)
            s3 = search(x1, y1 + 1, x2 + 1, y2)
            s4 = search(x1, y1 + 1, x2, y2 + 1)

            temp = max(s1, s2, s3, s4)
            if temp == -1:
                result = -1
            else:
                if x1 == x2 and y1 == y2:
                    result = temp + grid[x1][y1]
                else:
                    result = temp + grid[x1][y1] + grid[x2][y2]
            memo[(x1, y1, x2, y2)] = result
            return result

        return max(search(0, 0, 0, 0), 0)
