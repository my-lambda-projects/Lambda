class Solution:
    def canTransform(self, start: str, end: str) -> bool:
        if len(start) != len(end):
            return False
        s = [(c, i) for i, c in enumerate(start) if c == "L" or c == "R"]
        e = [(c, j) for j, c in enumerate(end) if c == "L" or c == "R"]

        if len(s) != len(e):
            return False

        for (sc, i), (ec, j) in zip(s, e):
            if sc != ec:
                return False
            if sc == "L":
                if i < j:
                    return False
            if sc == "R":
                if i > j:
                    return False
        return True
