class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        result = 0
        m1, m2 = arrays[0][0], arrays[0][-1]
        for row in arrays[1:]:
            result = max(result, row[-1] - m1, m2 - row[0])
            m1 = min(m1, row[0])
            m2 = max(m2, row[-1])
        return result
