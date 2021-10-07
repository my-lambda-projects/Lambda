class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def add(self, word):
        node = self.root
        for c in word:
            node = node.children.setdefault(c, TrieNode())
        node.is_word = True


from collections import deque


class StreamChecker:
    def __init__(self, words: List[str]):
        self.trie = Trie()
        self.q = deque()
        for word in words:
            self.trie.add(word[::-1])

    def query(self, letter: str) -> bool:
        node = self.trie.root
        self.q.appendleft(letter)
        for c in self.q:
            if c not in node.children:
                return False
            node = node.children[c]
            if node.is_word:
                return True
        return False


# Your StreamChecker object will be instantiated and called as such:
# obj = StreamChecker(words)
# param_1 = obj.query(letter)
