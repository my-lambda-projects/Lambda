from collections import deque, defaultdict


class Solution:
    def numBusesToDestination(self, routes: List[List[int]], S: int, T: int) -> int:
        # get the stop-route relations
        stop_route = defaultdict(set)
        for i, route in enumerate(routes):
            for j in route:
                stop_route[j].add(i)

        queue = deque([(S, 0)])
        visited = {S}
        while queue:
            curr_stop, bus = queue.popleft()
            if curr_stop == T:
                return bus
            for r in stop_route[curr_stop]:
                for s in routes[r]:
                    if s not in visited:
                        queue.append((s, bus + 1))
                        visited.add(s)
                routes[r] = []

        return -1
