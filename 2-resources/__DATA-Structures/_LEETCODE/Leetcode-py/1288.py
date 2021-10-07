class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], -x[1]))
        result = right = 0
        for interval in intervals:
            result += interval[1] > right
            right = max(right, interval[1])
        return result
