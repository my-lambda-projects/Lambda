# Time: O(n log n)
# Space: O(n)


class Solution:
    def findContestMatch(self, n: int) -> str:
        matches = [str(i) for i in range(1, n + 1)]
        while n > 1:
            for i in range(0, n // 2):
                matches[i] = "(" + matches[i] + "," + matches[n - i - 1] + ")"
            n = n // 2
        return matches[0]
