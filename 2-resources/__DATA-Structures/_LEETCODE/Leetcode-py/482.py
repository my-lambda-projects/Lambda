from collections import deque


class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        ss = "".join(S.split("-")).upper()
        ret = deque()
        i = len(ss)
        while i > 0:
            if i - K <= 0:
                break
            ret.appendleft(ss[i - K : i])
            i -= K
        ret.appendleft(ss[:i])
        return "-".join(ret)
