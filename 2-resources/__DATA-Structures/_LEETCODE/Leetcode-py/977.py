class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        result = [None] * len(A)
        left, right = 0, len(A) - 1
        i = len(A) - 1
        while left <= right:
            if abs(A[left]) > abs(A[right]):
                result[i] = A[left] * A[left]
                left += 1
            else:
                result[i] = A[right] * A[right]
                right -= 1
            i -= 1
        return result


class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return sorted(map(lambda x: x * x, A))
