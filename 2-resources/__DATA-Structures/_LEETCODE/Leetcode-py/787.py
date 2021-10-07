from collections import deque, defaultdict


class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, K: int
    ) -> int:
        if not flights:
            return -1

        costs = [float("inf")] * n

        cities = defaultdict(list)
        for flight in flights:
            cities[flight[0]].append((flight[1], flight[2]))

        queue = deque([(src, 0, 0)])
        while queue:
            curr, stop, cost = queue.popleft()
            if stop > K + 1:
                break
            if cost < costs[curr]:
                costs[curr] = cost
                for n in cities[curr]:
                    queue.append((n[0], stop + 1, cost + n[1]))

        return costs[dst] if costs[dst] != float("inf") else -1
