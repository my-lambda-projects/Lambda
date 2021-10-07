class Solution:
    def tilingRectangle(self, n: int, m: int) -> int:
        self.result = n * m

        def dfs(heights, moves):
            if moves > self.result:
                return
            if all(h == n for h in heights):
                self.result = min(self.result, moves)
                return
            min_height = min(heights)
            idx = heights.index(min_height)
            right_boundary = idx + 1
            while right_boundary < m and heights[right_boundary] == min_height:
                right_boundary += 1
            for l in range(min(right_boundary - idx, n - min_height), 0, -1):
                dfs(
                    heights[:idx] + [min_height + l] * l + heights[idx + l :], moves + 1
                )

        dfs([0] * m, 0)
        return self.result
