class Solution:
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        n = len(citations)
        for i in range(n):
            if citations[i] >= n - i:
                return n - i
        return 0
