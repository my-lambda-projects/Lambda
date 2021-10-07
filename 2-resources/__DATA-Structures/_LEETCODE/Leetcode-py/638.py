class Solution:
    def shoppingOffers(
        self, price: List[int], special: List[List[int]], needs: List[int]
    ) -> int:
        N = len(needs)

        def dfs(idx, buy):
            result = sum(x * y for x, y in zip(price, buy))
            if any(item < 0 for item in buy):
                return float("inf")
            for i in range(idx, len(special)):
                if special[i][-1] >= result:
                    continue
                result = min(
                    result,
                    dfs(i, [x - y for x, y in zip(buy, special[i][:N])])
                    + special[i][-1],
                )
            return result

        return dfs(0, needs)
