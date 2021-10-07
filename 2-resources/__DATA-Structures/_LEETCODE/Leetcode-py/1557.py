class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        values = [0] * n
        for edge in edges:
            values[edge[1]] += 1
        return [x for x in range(n) if values[x] == 0]
