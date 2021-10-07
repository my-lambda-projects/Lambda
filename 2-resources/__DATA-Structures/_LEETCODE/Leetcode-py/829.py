"""
time: O(square_root(N))
"""


class Solution:
    ### (x + (m-1) + x)*m/2 = N
    ### xm + (m^2 - m)2 = N
    ### xm = N + m/2 - m^2/2
    def consecutiveNumbersSum(self, N: "int") -> "int":
        m = 1
        ret = 0
        while True:
            xm = N + m / 2 - (m * m) / 2
            if xm <= 0:
                break
            if xm % m == 0:
                ret += 1
            m += 1
        return ret
