class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        sell, buy = 0, float("-inf")
        for price in prices:
            sell = max(sell, buy + price - fee)
            buy = max(buy, sell - price)
        return sell
