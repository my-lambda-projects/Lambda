class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        if len(A) <= 2 or A[0] > A[1]:
            return False
        decrease = False
        for i in range(2, len(A)):
            if A[i - 1] > A[i]:
                decrease = True
            elif A[i - 1] == A[i] or decrease:
                return False
        return decrease
