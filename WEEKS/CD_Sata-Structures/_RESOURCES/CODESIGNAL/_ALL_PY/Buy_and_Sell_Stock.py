def maxProfit(prices):
    i = 0
    max_profit = 0
    while i < len(prices) - 1:
        while i < len(prices) - 1 and prices[i] >= prices[i + 1]:
            i += 1
        min_pri = prices[i]
        while i < len(prices) - 1 and prices[i] <= prices[i + 1]:
            i += 1
        max_pri = prices[i]
        max_profit += max_pri - min_pri
    return max_profit


print(maxProfit([1, 2, 3, 4, 5, 6]))
