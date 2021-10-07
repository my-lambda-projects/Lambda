import collections


class Solution:
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        n = len(s)
        if n == 1:
            return 0
        d = collections.Counter(s)
        for i in range(n):
            if d[s[i]] == 1:
                return i
        return -1
