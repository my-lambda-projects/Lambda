class Solution:
    def floodFill(
        self, image: List[List[int]], sr: int, sc: int, newColor: int
    ) -> List[List[int]]:
        def dfs(i, j, val):
            if (
                i < 0
                or i >= len(image)
                or j < 0
                or j >= len(image[0])
                or image[i][j] != val
                or val == newColor
            ):
                return
            image[i][j] = newColor
            for x, y in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:
                dfs(x, y, val)

        dfs(sr, sc, image[sr][sc])
        return image
