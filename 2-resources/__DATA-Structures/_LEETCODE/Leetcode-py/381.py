from collections import defaultdict


class RandomizedCollection:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.nums = []
        self.loc = defaultdict(set)

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
        """
        self.nums.append(val)
        self.loc[val].add(len(self.nums) - 1)
        return len(self.loc[val]) == 1

    def remove(self, val: int) -> bool:
        """
        Removes a value from the collection. Returns true if the collection contained the specified element.
        """
        if len(self.loc[val]) >= 1:
            idx, last = self.loc[val].pop(), self.nums[-1]
            self.nums[idx] = last
            self.loc[last].add(idx)
            self.loc[last] -= {len(self.nums) - 1}
            self.nums.pop()
            return True
        return False

    def getRandom(self) -> int:
        """
        Get a random element from the collection.
        """
        return self.nums[random.randint(0, len(self.nums) - 1)]


# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
