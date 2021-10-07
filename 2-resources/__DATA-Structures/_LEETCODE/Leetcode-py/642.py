import heapq
from collections import defaultdict


class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.count = defaultdict(lambda: 0)


class AutocompleteSystem:
    def __init__(self, sentences: List[str], times: List[int]):
        self.root = TrieNode()
        self.curr = self.root
        self.sentence = ""
        for i in range(len(sentences)):
            self.add(sentences[i], times[i])

    def add(self, s, t):
        curr = self.root
        for c in s:
            curr = curr.children[c]
            curr.count[s] += t

    def input(self, c: str) -> List[str]:
        if c == "#":
            self.add(self.sentence, 1)
            self.sentence = ""
            self.curr = self.root
            return []
        self.sentence += c
        self.curr = self.curr.children[c]
        q, result = [], []
        for k, v in self.curr.count.items():
            heapq.heappush(q, (-v, k))
        for _ in range(3):
            if q:
                _, s = heapq.heappop(q)
                result.append(s)
        return result

        # Your AutocompleteSystem object will be instantiated and called as such:
        # obj = AutocompleteSystem(sentences, times)
        # param_1 = obj.input(c)
