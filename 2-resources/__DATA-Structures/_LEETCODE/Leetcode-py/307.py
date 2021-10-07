class NumArray:
    def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.nums, self.tree = nums, [0] * (self.n + 1)
        for i in range(self.n):
            j = i + 1
            while j <= self.n:
                self.tree[j] += nums[i]
                j += j & -j

    def update(self, i: int, val: int) -> None:
        diff, self.nums[i] = val - self.nums[i], val
        j = i + 1
        while j <= self.n:
            self.tree[j] += diff
            j += j & -j

    def sumRange(self, i: int, j: int) -> int:
        result = 0
        j += 1
        while j > 0:
            result += self.tree[j]
            j -= j & -j
        while i > 0:
            result -= self.tree[i]
            i -= i & -i
        return result


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(i,val)
# param_2 = obj.sumRange(i,j)
