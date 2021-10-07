# if result ^ 1 ^ p = z, if z in prefix
# which means we have two numbers p ^ z = result + 1


class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        result = 0
        for i in range(31, -1, -1):
            result <<= 1
            prefixes = {num >> i for num in nums}
            result += any(result ^ 1 ^ p in prefixes for p in prefixes)
        return result
