class Solution:
    def pancakeSort(self, A: List[int]) -> List[int]:
        result = []
        for n in range(len(A), 1, -1):
            idx = A.index(n)
            result.extend([idx + 1, n])
            A = A[idx::-1] + A[idx + 1 :]
            A = A[n - 1 :: -1] + A[n:]
        return result
