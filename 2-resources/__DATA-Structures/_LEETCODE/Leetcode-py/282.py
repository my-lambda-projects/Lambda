class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        result = []

        def backtrack(idx, path, value, prev):
            if idx == len(num) and value == target:
                result.append(path)
                return

            for i in range(idx + 1, len(num) + 1):
                s = num[idx:i]
                n = int(s)
                if s != "0" and s[0] == "0":
                    continue
                if prev is None:
                    backtrack(i, s, n, n)
                else:
                    backtrack(i, path + "+" + s, value + n, n)
                    backtrack(i, path + "-" + s, value - n, -n)
                    backtrack(i, path + "*" + s, value - prev + prev * n, prev * n)

        backtrack(0, "", 0, None)
        return result
