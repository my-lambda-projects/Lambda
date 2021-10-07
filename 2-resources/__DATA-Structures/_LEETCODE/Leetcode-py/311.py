class Solution:
    def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        rows, n, cols = len(A), len(A[0]), len(B[0])
        C = [[0] * cols for _ in range(rows)]
        for i in range(rows):
            for j in range(n):
                if A[i][j] != 0:
                    for z in range(cols):
                        if B[j][z] != 0:
                            C[i][z] += A[i][j] * B[j][z]
        return C
