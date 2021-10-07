class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        count = n
        roots = list(range(n))

        def find(node):
            root = node
            while roots[root] != root:
                root = roots[root]
            while node != root:
                roots[node], node = root, roots[node]
            return root

        def union(x, y):
            roots[x] = y

        for edge in edges:
            x, y = find(edge[0]), find(edge[1])
            if x != y:
                union(x, y)
                count -= 1
        return count
