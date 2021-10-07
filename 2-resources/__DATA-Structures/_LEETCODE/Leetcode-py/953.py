class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        d = {c: i for i, c in enumerate(order)}
        new_words = [[d[c] for c in word] for word in words]
        return all(x <= y for x, y in zip(new_words, new_words[1:]))
