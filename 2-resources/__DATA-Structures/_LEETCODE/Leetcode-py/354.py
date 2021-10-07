class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        N = len(envelopes)
        envelopes.sort(key=lambda x: (x[0], -x[1]))
        tail = [0] * N
        result = 0

        for e in envelopes:
            i, j = 0, result
            while i != j:
                m = i + (j - i) // 2
                if e[1] > tail[m]:
                    i = m + 1
                else:
                    j = m
            tail[i] = e[1]
            result = max(result, i + 1)
        return result
