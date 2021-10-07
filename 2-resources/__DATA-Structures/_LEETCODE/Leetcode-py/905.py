class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        start, end = 0, len(A) - 1
        while start < end:
            if A[start] % 2 == 0:
                start += 1
            else:
                if A[end] % 2 == 1:
                    end -= 1
                else:
                    A[start], A[end] = A[end], A[start]
                    start += 1
                    end -= 1
        return A
