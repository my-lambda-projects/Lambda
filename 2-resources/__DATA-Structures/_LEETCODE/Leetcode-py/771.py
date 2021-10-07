class Solution:
    # def numJewelsInStones(self, J, S):
    #     """
    #     :type J: str
    #     :type S: str
    #     :rtype: int
    #     """
    #     S = collections.Counter(S)
    #     J = collections.Counter(J)
    #     result = 0
    #     for key, val in S.items():
    #         if key in J:
    #             result += val
    #     return result

    def numJewelsInStones(self, J, S):
        return sum(map(J.count, S))
