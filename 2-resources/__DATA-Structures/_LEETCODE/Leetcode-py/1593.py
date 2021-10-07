class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        result = []

        def dfs(path, word):
            if not word:
                result.append(path)
                return
            for i in range(1, len(word) + 1):
                prefix, suffix = word[:i], word[i:]
                if prefix not in path:
                    dfs(path | {prefix}, suffix)

        dfs(set(), s)
        l = 1
        for item in result:
            l = max(len(item), l)
        return l
