# Time: O(|E|)
class Solution:
    def criticalConnections(
        self, n: int, connections: List[List[int]]
    ) -> List[List[int]]:
        connections = set(tuple(sorted(edge)) for edge in connections)
        graph = defaultdict(list)
        for connection in connections:
            s, e = connection[0], connection[1]
            graph[s].append(e)
            graph[e].append(s)
        rank = [-1] * n

        redundant_edge = set()

        def getRank(u, depth):
            if rank[u] >= 0:
                return rank[u]
            rank[u] = depth
            min_backtrack_depth = n
            for v in graph[u]:
                # exclude the node that comes from
                # this is because the graph is undirected
                if rank[v] == depth - 1:
                    continue
                next_depth = getRank(v, depth + 1)
                if next_depth <= depth:
                    redundant_edge.add((min(u, v), max(u, v)))
                # the reason of backtracking the min here is:
                # a node can have be in a circle and also have a child node
                min_backtrack_depth = min(min_backtrack_depth, next_depth)
            return min_backtrack_depth

        getRank(0, 1)
        return [list(x) for x in connections - redundant_edge]
