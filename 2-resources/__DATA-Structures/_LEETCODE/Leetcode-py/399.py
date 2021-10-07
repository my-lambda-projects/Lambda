from collections import defaultdict, deque
from typing import List


class Solution:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        graph = defaultdict(dict)
        for link, value in zip(equations, values):
            graph[link[0]][link[1]] = value
            graph[link[1]][link[0]] = 1 / value

        def answerQuery(s, e):
            if s not in graph or e not in graph:
                return -1.0
            if e == s:
                return 1.0
            q = deque([(s, 1.0)])
            visited = {s}
            while q:
                curr, val = q.popleft()
                for child in graph[curr]:
                    if child in visited:
                        continue
                    accumulated_val = val * graph[curr][child]
                    if child == e:
                        return accumulated_val
                    graph[s][child] = accumulated_val
                    graph[child][s] = 1 / accumulated_val
                    q.append((child, accumulated_val))
            return -1.0

        return [answerQuery(x, y) for (x, y) in queries]
