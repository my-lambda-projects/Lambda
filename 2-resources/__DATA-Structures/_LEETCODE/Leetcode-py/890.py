class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        result = []
        for word in words:
            if len(set(zip(word, pattern))) == len(set(word)) == len(
                set(pattern)
            ) and len(word) == len(pattern):
                result.append(word)
        return result
