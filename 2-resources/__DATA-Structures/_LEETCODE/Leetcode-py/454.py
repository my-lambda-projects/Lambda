from collections import defaultdict


class Solution:
    def fourSumCount(self, A, B, C, D):
        """
        :type A: List[int]
        :type B: List[int]
        :type C: List[int]
        :type D: List[int]
        :rtype: int
        """
        ret = 0
        record = defaultdict(lambda: 0)
        for i in range(len(A)):
            for j in range(len(B)):
                record[A[i] + B[j]] += 1
        for i in range(len(C)):
            for j in range(len(D)):
                ss = -(C[i] + D[j])
                if ss in record:
                    ret += record[ss]
        return ret
