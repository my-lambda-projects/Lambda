# Time : O(nlogn)
class Solution:
    def fallingSquares(self, positions: List[List[int]]) -> List[int]:
        location, height = [0], [0]
        prev, result = 0, []
        for i, j in positions:
            l = bisect.bisect_right(location, i)
            r = bisect.bisect_left(location, i + j)
            high = max(height[l - 1 : r] or [0]) + j
            location[l:r] = [i, i + j]
            height[l:r] = [high, height[r - 1]]
            prev = max(high, prev)
            result.append(prev)
        return result
