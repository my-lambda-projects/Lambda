class Solution:
    def maximumSwap(self, num: int) -> int:
        num = [int(i) for i in str(num)]
        for i in range(len(num) - 1):
            m = max(num[i + 1 :])
            if num[i] < m:
                target = len(num) - 1
                for j in range(len(num) - 1, 0, -1):
                    if num[j] == m:
                        target = j
                        break
                num[i], num[target] = num[target], num[i]
                break
        return int("".join(str(i) for i in num))
