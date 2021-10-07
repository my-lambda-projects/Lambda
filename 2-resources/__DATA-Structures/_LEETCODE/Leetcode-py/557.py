class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        result = []
        for word in s.split():
            result.append(word[::-1])
        return " ".join(result)
