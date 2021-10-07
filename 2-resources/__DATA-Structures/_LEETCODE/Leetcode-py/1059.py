class Solution:
    def leadsToDestination(
        self, n: int, edges: List[List[int]], source: int, destination: int
    ) -> bool:
        neighbors, visited = defaultdict(set), set()
        for edge in edges:
            start, end = edge[0], edge[1]
            neighbors[start].add(end)

        def dfs(node):
            if node == destination and len(neighbors[node]) == 0:
                return True
            elif len(neighbors[node]) == 0:
                return False
            else:
                visited.add(node)
                for n in neighbors[node]:
                    if n == node or n in visited or not dfs(n):
                        return False
                visited.discard(node)
                return True

        return dfs(source)
