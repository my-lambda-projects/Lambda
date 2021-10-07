from collections import deque


class Solution:
    def alienOrder(self, words: List[str]) -> str:
        children = {}
        counter = {}
        for word in words:
            for c in word:
                counter[c] = 0
                children[c] = set()
        for w1, w2 in zip(words, words[1:]):
            if len(w1) > len(w2) and w1[: len(w2)] == w2:
                return ""
            for i in range(min(len(w1), len(w2))):
                if w1[i] != w2[i]:
                    if w2[i] not in children[w1[i]]:
                        counter[w2[i]] += 1
                        children[w1[i]].add(w2[i])
                    break
        q = deque()
        for k, v in counter.items():
            if v == 0:
                q.append(k)
        result = ""
        while q:
            curr = q.popleft()
            result += curr
            if children[curr]:
                for child in children[curr]:
                    counter[child] -= 1
                    if counter[child] == 0:
                        q.append(child)
        return result if len(result) == len(counter) else ""

        #     # DFS
        #     def alienOrder(self, words: List[str]) -> str:
        #         visited, graph = {}, {}
        #         for word in words:
        #             for c in word:
        #                 graph[c] = set()
        #                 visited[c] = 0
        #         for i in range(1, len(words)):
        #             prev, curr = words[i-1], words[i]
        #             l = min(len(prev), len(curr))
        #             for j in range(l):
        #                 if prev[j] != curr[j]:
        #                     graph[prev[j]].add(curr[j])
        #                     break
        #         result = []
        #         for k in graph.keys():
        #             if not self.dfs(k, visited, graph, result):
        #                 return ''
        #         return ''.join(result)

        #     def dfs(self, c, visited, graph, result):
        #         if visited[c] == 1: return True
        #         if visited[c] == -1: return False
        #         visited[c] = -1
        #         for child in graph[c]:
        #             if not self.dfs(child, visited, graph, result):
        #                 return False
        #         visited[c] = 1
        #         result.insert(0, c)
        #         return True
