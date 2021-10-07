class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        ss = str.split()
        return len(set(zip(pattern, ss))) == len(set(pattern)) == len(set(ss)) and len(
            ss
        ) == len(pattern)


class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        def convert(s):
            m = {}
            return [m.setdefault(c, len(m)) for c in s]

        return convert(pattern) == convert(str.split())
