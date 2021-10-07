class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        if n == 1:
            return [0]

        link = {i: set() for i in range(n)}
        for edge in edges:
            x, y = edge[0], edge[1]
            link[x].add(y)
            link[y].add(x)
        leaves = [k for k, v in link.items() if len(v) == 1]
        while n > 2:
            n -= len(leaves)
            new_leaves = []
            for leaf in leaves:
                k = link[leaf].pop()
                del link[leaf]
                link[k].remove(leaf)
                if len(link[k]) == 1:
                    new_leaves.append(k)
            leaves = new_leaves
        return leaves
