class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if not timeSeries:
            return 0
        result = 0
        prev = timeSeries[0]
        for t in timeSeries[1:]:
            result += min(duration, t - prev)
            prev = t
        return result + duration
