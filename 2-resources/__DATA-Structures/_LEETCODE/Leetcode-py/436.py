class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        if len(intervals) <= 1:
            return [-1]
        L = sorted((interval[0], i) for i, interval in enumerate(intervals))
        result = []

        for interval in intervals:
            idx = bisect.bisect_left(L, (interval[1],))
            result.append(L[idx][1] if idx < len(L) else -1)
        return result
