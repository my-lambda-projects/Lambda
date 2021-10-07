class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        UF = {}

        def find(x):
            if x != UF[x]:
                UF[x] = find(UF[x])
            return UF[x]

        def union(x, y):
            UF.setdefault(x, x)
            UF.setdefault(y, y)
            UF[find(x)] = find(y)

        for x, y in stones:
            union(x, ~y)

        return len(stones) - len({find(x) for x in UF})
