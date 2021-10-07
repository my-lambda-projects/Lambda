class Solution:
    def distinctSubseqII(self, S: str) -> int:
        s = [0] * 26
        for c in S:
            s[ord(c) - ord("a")] = sum(s) + 1
        return sum(s) % (10 ** 9 + 7)
