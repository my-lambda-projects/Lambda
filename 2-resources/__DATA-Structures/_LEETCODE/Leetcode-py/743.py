from collections import defaultdict, deque


class Solution:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        time = [0] + [float("inf")] * N
        nodes = defaultdict(list)
        for item in times:
            nodes[item[0]].append((item[1], item[2]))

        queue = deque([(K, 0)])
        while queue:
            node, t = queue.popleft()
            if t < time[node]:
                time[node] = t
                for (v, w) in nodes[node]:
                    queue.append((v, w + t))

        return max(time) if max(time) != float("inf") else -1
