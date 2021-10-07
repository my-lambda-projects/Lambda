from functools import cmp_to_key


class Solution:
    def minNumber(self, nums):
        nums = [str(i) for i in nums]
        arr = sorted(nums, key=cmp_to_key(lambda x, y: int(x + y) - int(y + x)))
        return "".join(arr)


if __name__ == "__main__":
    s = Solution()
    result = s.minNumber([3, 30, 34, 5, 9])
    print(result)
