class Solution:
    def largestOverlap(self, A: List[List[int]], B: List[List[int]]) -> int:
        A = [(x, y) for x in range(len(A)) for y in range(len(A[0])) if A[x][y]]
        B = [(x, y) for x in range(len(B)) for y in range(len(B[0])) if B[x][y]]
        count = collections.Counter(
            (ax - bx, ay - by) for (ax, ay) in A for (bx, by) in B
        )
        return max(count.values() or [0])
