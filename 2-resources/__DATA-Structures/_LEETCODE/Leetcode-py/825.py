class Solution:
    def numFriendRequests(self, ages: List[int]) -> int:
        result = 0
        ages.sort()
        for age in ages:
            idx1 = bisect.bisect(ages, age)
            idx2 = bisect.bisect(ages, age * 0.5 + 7)
            result += max(0, idx1 - idx2 - 1)
        return result
