class Solution:
    def isValidPalindrome(self, s: str, k: int) -> bool:
        prev, n = [0], len(s)
        for i in range(n):
            prev.append(prev[i] + 1)

        s2 = s[::-1]
        for i in range(n):
            curr = [i + 1]
            for j in range(n):
                if s[i] == s2[j]:
                    curr.append(prev[j])
                else:
                    curr.append(1 + min(prev[j + 1], curr[j]))
            prev = curr
        return prev[n] <= 2 * k
