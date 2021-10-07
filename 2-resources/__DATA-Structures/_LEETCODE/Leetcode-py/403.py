class Solution:
    def canCross(self, stones: List[int]) -> bool:
        last = stones[-1]
        visited, stones = set(), set(stones)

        stack = [(0, 0)]
        while stack:
            curr, jump = stack.pop()
            for j in [jump - 1, jump, jump + 1]:
                new = curr + j
                if j > 0 and new in stones and (new, j) not in visited:
                    if new == last:
                        return True
                    stack.append((new, j))
            visited.add((curr, jump))
        return False
