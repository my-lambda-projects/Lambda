class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        colors = [0 for _ in range(len(graph))]
        for i in range(len(graph)):
            if colors[i] == 0 and not self.dfs(i, colors, 1, graph):
                return False
        return True

    def dfs(self, node, colors, color, graph):
        if colors[node] != 0:
            return colors[node] == color
        colors[node] = color
        for child in graph[node]:
            if not self.dfs(child, colors, -color, graph):
                return False
        return True
