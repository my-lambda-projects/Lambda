class Solution:
    def minCostClimbingStairs(self, cost):
        """
        :type cost: List[int]
        :rtype: int
        """
        if not cost or len(cost) <= 2:
            return 0
        result = [0] * (len(cost) + 1)
        for i in range(2, len(cost) + 1):
            result[i] = min(result[i - 1] + cost[i - 1], result[i - 2] + cost[i - 2])
        return result[-1]
