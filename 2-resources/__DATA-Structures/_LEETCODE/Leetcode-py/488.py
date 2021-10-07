from functools import lru_cache


class Solution:
    def findMinStep(self, board: str, hand: str) -> int:
        INF = float("inf")

        def clean(ss):
            i = 0
            for j, ball in enumerate(ss):
                if ball == ss[i]:
                    continue
                if j - i >= 3:
                    return clean(ss[:i] + ss[j:])
                else:
                    i = j
            return ss

        @lru_cache(None)
        def dfs(remain, h):
            remain = clean(remain)
            if remain == "#":
                return 0
            remain_set = set(remain)
            h = "".join(x for x in h if x in remain_set)
            if not h:
                return INF
            result = INF
            for i in range(len(remain)):
                for j, c in enumerate(h):
                    new_h = h[:j] + h[j + 1 :]
                    new_remain = remain[:i] + c + remain[i:]
                    result = min(result, 1 + dfs(new_remain, new_h))
            return result

        result = dfs(board + "#", hand)
        return result if result < INF else -1
