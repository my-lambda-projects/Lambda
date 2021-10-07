class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        roots = list(range(n))
        count = n

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
            x, y = edge[0], edge[1]
            if find(x) == find(y):
                return False
            union(find(x), find(y))
            count -= 1
        return count == 1
