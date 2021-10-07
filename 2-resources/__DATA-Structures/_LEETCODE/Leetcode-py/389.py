class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        d = Counter(s)
        for c in t:
            if c not in d or d[c] == 0:
                return c
            d[c] -= 1
        return -1
