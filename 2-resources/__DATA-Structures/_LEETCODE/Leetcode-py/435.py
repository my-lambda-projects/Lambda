# [ [1,4], [2,3], [3,4] ], the interval with early start might be very long and incompatible with many intervals.
# But if we choose the interval that ends early, we'll have more space left to accommodate more intervals.


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        result = 0
        end = float("-inf")
        for interval in sorted(intervals, key=lambda x: x[1]):
            if interval[0] < end:
                result += 1
                continue
            end = interval[1]
        return result
