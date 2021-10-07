class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        d = {}
        for i, c in enumerate(t):
            d[c] = d.get(c, []) + [i]
        prev_idx = 0
        for c in s:
            if c not in d:
                return False
            idx = bisect.bisect_left(d[c], prev_idx)
            if idx == len(d[c]):
                return False
            prev_idx = d[c][idx] + 1
        return True
