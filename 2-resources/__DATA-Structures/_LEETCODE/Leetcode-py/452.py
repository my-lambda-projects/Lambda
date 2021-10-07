class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        points = sorted(points, key=lambda x: x[1])
        result = 1
        end = points[0][1]
        for point in points[1:]:
            if point[0] <= end:
                continue
            end = point[1]
            result += 1
        return result
