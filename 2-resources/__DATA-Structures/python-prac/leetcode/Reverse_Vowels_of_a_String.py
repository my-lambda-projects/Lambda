# Write a function that takes a string as input and reverse only the vowels of a string.
#
# Example 1:
#
# Input: "hello"
# Output: "holle"
# Example 2:
#
# Input: "leetcode"
# Output: "leotcede"
# Note:
# The vowels does not include the letter "y".


class Solution:
    def reverseVowels(self, s):
        if len(s) == 0 or len(s) == 1:
            return s
        strs = []

        for char in s:
            strs.append(char)

        pointer1 = 0
        pointer2 = len(strs) - 1
        dict = {
            "a": 1,
            "e": 2,
            "i": 3,
            "o": 4,
            "u": 5,
            "A": 6,
            "E": 7,
            "I": 8,
            "O": 9,
            "U": 10,
        }

        while pointer1 < pointer2:

            while pointer1 <= pointer2 and strs[pointer1] not in dict:
                pointer1 += 1

            while pointer1 <= pointer2 and strs[pointer2] not in dict:
                pointer2 -= 1

            if (
                pointer1 <= pointer2
                and strs[pointer1] in dict
                and strs[pointer2] in dict
            ):
                strs[pointer1], strs[pointer2] = strs[pointer2], strs[pointer1]
                pointer1 += 1
                pointer2 -= 1

        return "".join(strs)
