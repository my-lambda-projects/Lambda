class Solution:
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        result = 0
        for i in range(len(s)):
            result += self.getCount(s, i, i)
            result += self.getCount(s, i, i + 1)
        return result

    def getCount(self, s, left, right):
        count = 0
        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
        return count
