class Solution:
    def canConvert(self, str1: str, str2: str) -> bool:
        if str1 == str2:
            return True
        d = {}
        for i in range(len(str1)):
            c1, c2 = str1[i], str2[i]
            if c1 in d and d[c1] != c2:
                return False
            d[c1] = c2
        return len(set(str2)) < 26
