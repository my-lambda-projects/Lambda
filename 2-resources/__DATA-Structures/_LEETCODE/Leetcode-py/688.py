class Solution:
    def knightProbability(self, N: int, K: int, r: int, c: int) -> float:
        directions = [
            (-1, 2),
            (1, 2),
            (-1, -2),
            (1, -2),
            (2, 1),
            (-2, 1),
            (2, -1),
            (-2, -1),
        ]
        M, out_prob = {(r, c): 1}, 0
        for _ in range(K):
            T = collections.defaultdict(int)
            for (i, j), p in M.items():
                for d in directions:
                    x, y = i + d[0], j + d[1]
                    if 0 <= x < N and 0 <= y < N:
                        T[(x, y)] += p * 0.125
                    else:
                        out_prob += p * 0.125
            M = T
        return 1 - out_prob
