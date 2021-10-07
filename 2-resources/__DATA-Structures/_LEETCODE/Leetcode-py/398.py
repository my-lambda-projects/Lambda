class Solution:
    def __init__(self, nums: List[int]):
        self.d = {}
        for i, v in enumerate(nums):
            self.d[v] = self.d.get(v, []) + [i]

    def pick(self, target: int) -> int:
        n = len(self.d[target])
        return self.d[target][random.randint(0, n - 1)]


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)
