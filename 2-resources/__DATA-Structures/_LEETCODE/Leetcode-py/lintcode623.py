import string


class TrieNode:
    def __init__(self):
        self.isWord = False
        self.word = None
        self.children = {}


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.isWord = True
        node.word = word


class Solution:
    """
    @param words: a set of stirngs
    @param target: a target string
    @param k: An integer
    @return: output all the strings that meet the requirements
    """

    def kDistance(self, words, target, k):
        trie = Trie()
        for word in words:
            trie.insert(word)
        n = len(target)
        f = range(n + 1)
        result = []
        self.dfs(trie.root, f, result, n, k, target)
        return result

    def dfs(self, node, f, result, n, k, target):
        if node.isWord and f[n] <= k:
            result.append(node.word)

        for c in string.ascii_lowercase:
            if c not in node.children:
                continue

            newf = [0] * (n + 1)
            for i in range(n + 1):
                newf[i] = f[i] + 1

            for i in range(1, n + 1):
                newf[i] = min(f[i - 1] + 1, newf[i])

            for i in range(1, n + 1):
                if c == target[i - 1]:
                    newf[i] = min(f[i - 1], newf[i])
                newf[i] = min(newf[i - 1] + 1, newf[i])
            self.dfs(node.children[c], newf, result, n, k, target)
