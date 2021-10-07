class UnionFind:
    def __init__(self, n):
        self.roots = list(range(n))
        self.size = [1] * n

    def find(self, node):
        root = node
        while self.roots[root] != root:
            root = self.roots[root]
        while node != root:
            self.roots[node], node = root, self.roots[node]
        return root

    def union(self, node1, node2):
        x, y = self.find(node1), self.find(node2)
        if x != y:
            if self.size[x] >= self.size[y]:
                self.roots[y] = x
                self.size[x] += self.size[y]
            else:
                self.roots[x] = y
                self.size[y] += self.size[x]


class Solution:
    def largestComponentSize(self, A: List[int]) -> int:
        uf = UnionFind(len(A))
        factors = {}

        for idx, n in enumerate(A):
            for factor in range(2, int(math.sqrt(n)) + 1):
                if n % factor == 0:
                    for num in {factor, n // factor}:
                        if num in factors:
                            uf.union(idx, factors[num])
                        else:
                            factors[num] = idx
            if n in factors:
                uf.union(idx, factors[n])
            else:
                factors[n] = idx
        return max(uf.size)
