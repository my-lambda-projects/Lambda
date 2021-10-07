class Solution:
    def toGoatLatin(self, S: str) -> str:
        result = []
        S = S.split()
        for i in range(len(S)):
            suffix = "".join(["a"] * (i + 1))
            if S[i][0].lower() in {"a", "e", "i", "o", "u"}:
                result.append(S[i] + "ma" + suffix)
            else:
                result.append(S[i][1:] + S[i][0] + "ma" + suffix)
        return " ".join(result)
