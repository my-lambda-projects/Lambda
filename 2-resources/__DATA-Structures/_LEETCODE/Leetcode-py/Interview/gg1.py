"""
Given a non repetitive string s and a set of characters C
How many non-empty substrings of s do not contain every character in C.
"""
from collections import deque


class Solution:
    def substrings_missing_at_least_one_char(self, s: str, C: set):
        window = {}
        window_size = 0
        start = 0
        count = 0
        for end, c in enumerate(s):
            if c in C:
                if c not in window:
                    window_size += 1
                window[c] = window.get(c, 0) + 1
            while window_size == len(C):
                current_char = s[start]
                if current_char in C:
                    window[current_char] -= 1
                    if not window[current_char]:
                        window_size -= 1
                start += 1
            count += end - start + 1
        return count


s = Solution()
count = s.substrings_missing_at_least_one_char("caab", {"a", "c"})
print(count)
