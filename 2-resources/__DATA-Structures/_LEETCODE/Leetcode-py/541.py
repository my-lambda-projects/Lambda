class Solution(object):
    def reverseStr(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        if len(s) <= k:
            return s[::-1]
        elif len(s) <= 2 * k:
            return s[k - 1 :: -1] + s[k:]
        else:
            result = s[k - 1 :: -1]
            start = k
            for i in range(1, len(s) / (2 * k) + 1):
                result += (
                    s[start : i * 2 * k] + s[i * 2 * k - 1 + k : i * 2 * k - 1 : -1]
                )
                start = i * 2 * k + k
            result += s[start:]
            return result
