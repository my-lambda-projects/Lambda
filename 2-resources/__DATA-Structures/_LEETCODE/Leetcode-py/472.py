class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        cache, words = {}, set(words)

        def dfs(word):
            if word in cache:
                return cache[word]
            for i in range(1, len(word)):
                prefix, suffix = word[:i], word[i:]
                if (prefix in words and suffix in words) or (
                    prefix in words and dfs(suffix)
                ):
                    cache[word] = True
                    return True
            cache[word] = False
            return False

        return [word for word in words if dfs(word)]
