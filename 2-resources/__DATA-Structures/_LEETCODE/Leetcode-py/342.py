class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        return num & (num - 1) == 0 and (num - 1) % 3 == 0
