class Solution:
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        # citations.sort()
        # n = len(citations)
        # for i in range(n):
        #     if citations[i] >= n - i:
        #         return n - i
        # return 0

        n = len(citations)
        counts = [0] * (n + 1)
        for i in range(n):
            if citations[i] > n:
                counts[n] += 1
            else:
                counts[citations[i]] += 1
        total = 0
        for i in range(n, -1, -1):
            total += counts[i]
            if total >= i:
                return i
        return 0
