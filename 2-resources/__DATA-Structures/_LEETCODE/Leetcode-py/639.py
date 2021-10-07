class Solution:
    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
        f0 = 0
        e0, e1, e2 = 1, 0, 0
        mod = 10 ** 9 + 7
        for c in s:
            if c == "*":
                f0 = (e0 * 9 + e1 * 9 + e2 * 6) % mod
                e1 = e0
                e2 = e0
            else:
                f0 = ((c > "0") * e0 + e1 + e2 * (c < "7")) % mod
                e1 = e0 if c == "1" else 0
                e2 = e0 if c == "2" else 0
            e0 = f0
        return f0
