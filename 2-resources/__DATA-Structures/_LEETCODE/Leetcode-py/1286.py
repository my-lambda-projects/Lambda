class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.characters = characters
        self.combinationLength = combinationLength
        self.combinations = self.getCombinations()

    def next(self) -> str:
        return self.combinations.pop()

    def hasNext(self) -> bool:
        return self.combinations

    def getCombinations(self):
        result = []
        n = len(self.characters)
        total = 1 << n
        for i in range(total):
            c = bin(i)[2:].zfill(n)
            if sum([1 for i in c if i == "1"]) == self.combinationLength:
                combination = []
                for j in range(n):
                    if c[j] == "1":
                        combination.append(self.characters[j])
                result.append("".join(combination))
        return result


# Your CombinationIterator object will be instantiated and called as such:
# obj = CombinationIterator(characters, combinationLength)
# param_1 = obj.next()
# param_2 = obj.hasNext()
