class Solution:
    def numsSameConsecDiff(self, N: int, K: int) -> List[int]:
        curr = [i for i in range(10)]
        for i in range(N - 1):
            curr = {
                x * 10 + y
                for x in curr
                for y in [x % 10 - K, x % 10 + K]
                if x and 0 <= y < 10
            }
        return list(curr)
