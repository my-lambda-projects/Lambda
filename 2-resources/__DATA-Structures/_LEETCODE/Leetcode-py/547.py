class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        N = len(M)
        roots = list(range(N))
        result = N

        def find(node):
            root = node
            while roots[root] != root:
                root = roots[root]
            while node != root:
                roots[node], node = root, roots[node]
            return root

        for i in range(N):
            for j in range(N):
                if i == j:
                    continue
                elif M[i][j] == 1:
                    x, y = find(i), find(j)
                    if x == y:
                        continue
                    else:
                        roots[y] = x
                        result -= 1
        return result
