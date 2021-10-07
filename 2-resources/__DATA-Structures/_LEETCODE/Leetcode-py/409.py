class Solution:
    def longestPalindrome(self, s: str) -> int:
        check_even = {}
        for c in s:
            if c not in check_even:
                check_even[c] = 0
            else:
                del check_even[c]
        return len(s) - len(check_even) + 1 if check_even else len(s)
