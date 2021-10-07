class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # three states
        # s0: not holding any stock but can buy or wait
        # s1: holding stocks, can sell or wait
        # s2: not holding any stock due to selling stock that day, enter lockdown period
        s0, s1, s2 = 0, float("-inf"), 0
        for price in prices:
            s1 = max(s1, s0 - price)
            s0 = max(s0, s2)
            s2 = s1 + price
        return max(s0, s2)
