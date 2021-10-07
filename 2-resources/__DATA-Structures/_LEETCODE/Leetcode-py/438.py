from collections import Counter


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        n = len(p)
        p = Counter(p)
        count = len(p)
        start, end = 0, 0
        result = []
        while end < len(s):
            c = s[end]
            if c in p:
                p[c] -= 1
                if p[c] == 0:
                    count -= 1
            end += 1

            while count == 0:
                if end - start == n:
                    result.append(start)
                if s[start] in p:
                    p[s[start]] += 1
                    if p[s[start]] > 0:
                        count += 1
                start += 1
        return result
