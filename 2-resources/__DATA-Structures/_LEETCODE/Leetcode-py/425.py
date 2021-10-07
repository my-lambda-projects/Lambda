from collections import defaultdict


class Solution:
    def wordSquares(self, words: List[str]) -> List[List[str]]:
        n = len(words[0])
        prefix = defaultdict(list)
        for word in words:
            for i in range(n):
                prefix[word[: i + 1]].append(word)

        result = []

        def dfs(i, path):
            if i == n:
                result.append(path)
                return
            for word in prefix["".join(w[i] for w in path)]:
                dfs(i + 1, path + [word])

        for word in words:
            dfs(1, [word])
        return result
