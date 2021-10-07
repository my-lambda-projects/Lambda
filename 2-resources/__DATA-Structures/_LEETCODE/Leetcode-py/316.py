class Solution:
    def removeDuplicateLetters(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s or len(s) < 2:
            return s
        count = [0] * 26
        for c in s:
            count[ord(c) - ord("a")] += 1
        start = 0
        for i in range(len(s)):
            if ord(s[i]) < ord(s[start]):
                start = i
            count[ord(s[i]) - ord("a")] -= 1
            if count[ord(s[i]) - ord("a")] == 0:
                break
        return s[start] + self.removeDuplicateLetters(
            s[start + 1 :].replace(s[start], "")
        )
