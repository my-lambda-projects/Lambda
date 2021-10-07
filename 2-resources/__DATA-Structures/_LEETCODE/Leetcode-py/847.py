from collections import deque


class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        N = len(graph)
        visited = set()
        end = (1 << N) - 1
        queue = deque([(node, 1 << node, 0) for node in range(N)])
        while queue:
            node, state, path = queue.popleft()
            if state == end:
                return path
            for child in graph[node]:
                if (state | 1 << child, child) not in visited:
                    visited.add((state | 1 << child, child))
                    queue.append((child, state | 1 << child, path + 1))
        return -1


# Example
# if we have node of 0, 1, 2, 3
# with bitmask, when all nodes are visited, the final state should be 1111
# the binary form 1111 will equal to (1 << N)-1
# where 0001 represents node 0 is visisted and 0010 represents node 1 is visited
