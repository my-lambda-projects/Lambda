# Given a string s, find the longest palindromic substring in s.
# You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:
#
# Input: "cbbd"
# Output: "bb"


class Solution:
    def longestPalindrome(self, s):
        currentLongest = [0, 1]

        def checkPalindrome(string, leftidx, rightidx):

            while leftidx >= 0 and rightidx < len(string):

                if string[leftidx] != string[rightidx]:
                    break

                leftidx -= 1
                rightidx += 1

            return [leftidx + 1, rightidx]

        for i in range(len(s)):
            odd = checkPalindrome(s, i - 1, i + 1)
            even = checkPalindrome(s, i - 1, i)
            longest = max(odd, even, key=lambda x: x[1] - x[0])
            currentLongest = max(currentLongest, longest, key=lambda x: x[1] - x[0])

        return s[currentLongest[0] : currentLongest[1]]
