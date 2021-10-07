class Solution:
    def minTotalDistance(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        l1, l2 = [], []
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    l1.append(i)
                    l2.append(j)

        def getMin(l):
            result = 0
            left, right = 0, len(l) - 1
            l.sort()
            while left < right:
                result += l[right] - l[left]
                right -= 1
                left += 1
            return result

        return getMin(l1) + getMin(l2)
