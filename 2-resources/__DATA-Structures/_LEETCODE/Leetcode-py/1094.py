class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        space = 0
        for s, c in sorted(
            x for trip in trips for x in [(trip[1], trip[0]), (trip[2], -trip[0])]
        ):
            space += c
            if space > capacity:
                return False
        return True
