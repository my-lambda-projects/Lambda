class Solution:
    def palindromePairs(self, words):
        """
        :type words: List[str]
        :rtype: List[List[int]]
        """
        lookup = {w: i for i, w in enumerate(words)}
        result = []
        for i, w in enumerate(words):
            for j in range(len(w) + 1):
                pre, pos = w[:j], w[j:]
                if (
                    j != 0
                    and pre == pre[::-1]
                    and pos[::-1] != w
                    and pos[::-1] in lookup
                ):
                    result.append([lookup[pos[::-1]], i])
                if pos == pos[::-1] and pre[::-1] != w and pre[::-1] in lookup:
                    result.append([i, lookup[pre[::-1]]])
        return result
