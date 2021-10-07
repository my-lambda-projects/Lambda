class Solution:
    def findLonelyPixel(self, picture: List[List[str]]) -> int:
        m, n = len(picture), len(picture[0])

        blacks = []
        for i in range(m):
            for j in range(n):
                if picture[i][j] == "B":
                    blacks.append((i, j))

        def dfs(x, y):
            for i in range(n):
                if i != y and picture[x][i] == "B":
                    return False
            for i in range(m):
                if i != x and picture[i][y] == "B":
                    return False
            return True

        result = len(blacks)
        for black in blacks:
            if not dfs(*black):
                result -= 1
        return result
