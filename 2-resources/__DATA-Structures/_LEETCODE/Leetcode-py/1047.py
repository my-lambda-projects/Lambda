class Solution:
    def removeDuplicates(self, S: str) -> str:
        if len(S) < 2:
            return S
        i = 0
        result = [""] * len(S)
        for j in range(len(S)):
            result[i] = S[j]
            if i > 0 and result[i - 1] == result[i]:
                i -= 2
            i += 1
        return "".join(result[:i])
