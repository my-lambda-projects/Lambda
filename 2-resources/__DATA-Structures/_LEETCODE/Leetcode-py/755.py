from typing import List


class Solution:
    def pourWater(self, heights: List[int], V: int, K: int) -> List[int]:
        for _ in range(V):
            index = K
            # move left
            for i in range(K - 1, -1, -1):
                if heights[i + 1] > heights[i]:
                    index = i
                elif heights[i + 1] < heights[i]:
                    break
            if index == K:
                for i in range(K + 1, len(heights)):
                    if heights[i - 1] > heights[i]:
                        index = i
                    elif heights[i - 1] < heights[i]:
                        break
            heights[index] += 1
        return heights
