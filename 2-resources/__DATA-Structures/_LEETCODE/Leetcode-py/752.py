class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        deadends = set(deadends)
        q1, q2 = set(), set()
        visited = set()

        q1.add("0000")
        q2.add(target)
        step = 0

        while q1 and q2:
            temp = set()
            for i in q1:
                if i in deadends:
                    continue
                if i in q2:
                    return step
                visited.add(i)

                for j in range(0, 4):
                    up = self.plusOne(i, j)
                    if up not in visited:
                        temp.add(up)
                    down = self.minusOne(i, j)
                    if down not in visited:
                        temp.add(down)
            q1 = q2
            q2 = temp

            step += 1
        return -1

    def plusOne(self, curr, val):
        curr = [c for c in curr]
        if curr[val] == "9":
            curr[val] = "0"
        else:
            curr[val] = chr(ord(curr[val]) + 1)
        return "".join(curr)

    def minusOne(self, curr, val):
        curr = [c for c in curr]
        if curr[val] == "0":
            curr[val] = "9"
        else:
            curr[val] = chr(ord(curr[val]) - 1)
        return "".join(curr)
