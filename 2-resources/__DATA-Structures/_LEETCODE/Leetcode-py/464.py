"""
Without memorization, the time complexity is O(N!)
With memorization, the time complexity is O(2^N)
"""


class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        if (maxChoosableInteger + 1) * (maxChoosableInteger / 2) < desiredTotal:
            return False
        cache = {}

        def dfs(choices, target):
            if tuple(choices) in cache:
                return cache[tuple(choices)]
            if choices[-1] >= target:
                return True
            for i in range(len(choices)):
                if not dfs(choices[:i] + choices[i + 1 :], target - choices[i]):
                    cache[tuple(choices)] = True
                    return True
            cache[tuple(choices)] = False
            return False

        return dfs(list(range(1, maxChoosableInteger + 1)), desiredTotal)
