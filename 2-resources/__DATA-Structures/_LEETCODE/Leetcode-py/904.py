class Solution:
    def totalFruit(self, tree: List[int]) -> int:
        count = 0
        start, d, result = 0, {}, 0
        for i, t in enumerate(tree):
            d[t] = d.get(t, 0) + 1
            if d[t] == 1:
                count += 1
            while count > 2:
                x = tree[start]
                d[x] -= 1
                if d[x] == 0:
                    count -= 1
                start += 1
            result = max(result, i - start + 1)
        return result
