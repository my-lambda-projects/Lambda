class Solution:
    def numOfMinutes(
        self, n: int, headID: int, manager: List[int], informTime: List[int]
    ) -> int:
        children = {i: [] for i in range(n)}
        for child, parent in enumerate(manager):
            if parent >= 0:
                children[parent].append(child)

        def dfs(i):
            return max([dfs(child) for child in children[i]], default=0) + informTime[i]

        return dfs(headID)
