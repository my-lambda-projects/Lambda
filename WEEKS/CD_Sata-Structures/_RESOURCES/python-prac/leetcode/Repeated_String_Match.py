class Solution:
    def repeatedStringMatch(self, A: str, B: str) -> int:
        la = len(A)
        lb = len(B)

        steps = 2 + lb // la

        for i in range(steps + 1):
            if B in A * i:
                return i
        return -1
