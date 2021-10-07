# """
# This is BinaryMatrix's API interface.
# You should not implement it, or speculate about its implementation
# """
# class BinaryMatrix(object):
#    def get(self, row: int, col: int) -> int:
#    def dimensions(self) -> list[]:


class Solution:
    def leftMostColumnWithOne(self, binaryMatrix: "BinaryMatrix") -> int:
        m, n = binaryMatrix.dimensions()
        result = n
        for i in range(m):
            left, right = 0, result
            while left < right:
                mid = left + (right - left) // 2
                if binaryMatrix.get(i, mid) == 1:
                    right = mid
                else:
                    left = mid + 1
            result = left
        return result if result != n else -1
