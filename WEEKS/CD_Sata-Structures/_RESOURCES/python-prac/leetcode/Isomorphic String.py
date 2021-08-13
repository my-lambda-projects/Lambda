# Given two strings s and t, determine if they are isomorphic.
#
# Two strings are isomorphic if the characters in s can be replaced to get t.
#
# All occurrences of a character must be replaced with another character while
# preserving the order of characters. No two characters may map to the same character
# but a character may map to itself.
#
# Example 1:
#
# Input: s = "egg", t = "add"
# Output: true
# Example 2:
#
# Input: s = "foo", t = "bar"
# Output: false
# Example 3:
#
# Input: s = "paper", t = "title"
# Output: true
# Note:
# You may assume both s and t have the same length


class Solution:
    def __init__(self, s, t):
        self.s = s
        self.t = t

    def is_isomorphic(self):

        dict = {}

        for i in range(len(self.s)):

            char_s = self.s[i]
            char_t = self.t[i]

            if char_s not in dict.keys():
                if char_t in dict.values():
                    return False
                dict[char_s] = char_t
            else:
                if dict[char_s] != char_t:
                    return False
        return True


if __name__ == "__main__":
    s = "egg"
    t = "add"
    print(Solution(s, t).is_isomorphic())
    s = "foo"
    t = "bar"
    print(Solution(s, t).is_isomorphic())
    s = "paper"
    t = "title"
    print(Solution(s, t).is_isomorphic())
