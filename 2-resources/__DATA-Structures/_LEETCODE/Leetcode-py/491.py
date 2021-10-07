class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        def dfs(idx, path, result):
            if len(path) > 1:
                result.append(path)
            if idx >= len(nums):
                return
            visited = set()
            for i in range(idx, len(nums)):
                if nums[i] in visited:
                    continue
                if not path or path[-1] <= nums[i]:
                    visited.add(nums[i])
                    dfs(i + 1, path + [nums[i]], result)

        result = []
        dfs(0, [], result)
        return result
