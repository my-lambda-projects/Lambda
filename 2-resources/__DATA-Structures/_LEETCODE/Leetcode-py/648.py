class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        trie = {}
        for word in dictionary:
            t = trie
            for c in word:
                t = t.setdefault(c, {})
            t["#"] = "#"

        def check(w):
            t = trie
            for i in range(len(w)):
                c = w[i]
                if c not in t:
                    break
                t = t[c]
                if "#" in t:
                    return w[: i + 1]
            return w

        return " ".join(list(map(check, sentence.split())))
