import collections


class Solution:
    def minMalwareSpread(self, graph: List[List[int]], initial: List[int]) -> int:
        def find(node):
            while node != roots[node]:
                roots[node] = roots[roots[node]]
                node = roots[roots[node]]
            return node

        def union(x, y):
            roots[find(x)] = find(y)

        n = len(graph)
        roots = list(range(n))
        for i in range(n):
            for j in range(i + 1, n):
                if graph[i][j] == 1:
                    union(i, j)
        unions = collections.Counter(find(x) for x in range(n))
        malwares = collections.Counter(find(x) for x in initial)
        return min(
            initial, key=lambda x: [(malwares[find(x)] == 1) * -unions[find(x)], x]
        )
