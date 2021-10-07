# Time: O(n)
# Space: O(n)
class Solution:
    def numberOfPatterns(self, m: int, n: int) -> int:
        skip = {
            (1, 3): 2,
            (1, 7): 4,
            (1, 9): 5,
            (2, 8): 5,
            (3, 7): 5,
            (3, 9): 6,
            (4, 6): 5,
            (7, 9): 8,
        }
        result = 0

        def dfs(visited, last):
            nonlocal result
            if m <= len(visited) <= n:
                result += 1
            if len(visited) > n:
                return
            for num in range(1, 10):
                if num not in visited:
                    edge = (min(num, last), max(num, last))
                    if edge not in skip or skip[edge] in visited:
                        dfs(visited | {num}, num)

        dfs({1}, 1)
        dfs({2}, 2)
        result *= 4
        dfs({5}, 5)
        return result
