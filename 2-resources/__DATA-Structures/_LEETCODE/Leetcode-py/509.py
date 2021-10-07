class Solution:
    def fib(self, N: int) -> int:
        if N < 2:
            return N
        s1, s2 = 0, 1
        for _ in range(1, N):
            s = s1 + s2
            s1, s2 = s2, s
        return s2
