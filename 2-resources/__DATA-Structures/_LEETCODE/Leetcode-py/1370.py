from collections import Counter


class Solution:
    def sortString(self, s: str) -> str:
        result, counter = "", Counter(s)
        letters = string.ascii_lowercase
        while len(result) < len(s):
            for ss in [letters, letters[::-1]]:
                for c in ss:
                    if counter[c] > 0:
                        counter[c] -= 1
                        result += c
        return result
