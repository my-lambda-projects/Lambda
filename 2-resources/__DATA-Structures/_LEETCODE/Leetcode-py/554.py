class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        row = {}
        for r in wall:
            i = 0
            for brick in r[:-1]:
                i += brick
                row[i] = row.get(i, 0) + 1
        return len(wall) - max(row.values(), default=0)
