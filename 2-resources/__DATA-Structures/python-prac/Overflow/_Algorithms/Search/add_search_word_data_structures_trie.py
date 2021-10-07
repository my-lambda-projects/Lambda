class TrieNode:
    def __init__(self):
        self.childNodes = {}
        self.isEnd = False


class WordDictionary(object):
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def addWord(self, word):
        """
        Adds a word into the data structure.
        :type word: str
        :rtype: None
        """
        currNode = self.root

        for ch in word:
            node = currNode.childNodes.get(ch, TrieNode())
            currNode.childNodes[ch] = node
            currNode = node

        currNode.isEnd = True

    def search(self, word):
        """
        Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
        :type word: str
        :rtype: bool
        """
        currNode = self.root

        def helper(idx, currNode):
            if idx >= len(word):
                return currNode.isEnd

            # If period we have to search through every dictionary in current dictionary

            ch = word[idx]

            if ch == ".":
                for k, v in currNode.childNodes.items():
                    if helper(idx + 1, v):
                        return True
                return False

            elif ch in currNode.childNodes:
                if helper(idx + 1, currNode.childNodes.get(ch)):
                    return True
            else:
                return False

        return helper(0, currNode)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
