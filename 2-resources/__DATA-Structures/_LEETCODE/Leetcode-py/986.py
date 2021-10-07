class Solution:
    def intervalIntersection(
        self, A: List[List[int]], B: List[List[int]]
    ) -> List[List[int]]:
        result = []
        i, j = 0, 0
        while i < len(A) and j < len(B):
            A_start, A_end = A[i]
            B_start, B_end = B[j]
            if A_end >= B_start and A_start <= B_end:
                result.append([max(A_start, B_start), min(A_end, B_end)])
            if B_end >= A_end:
                i += 1
            else:
                j += 1
        return result
