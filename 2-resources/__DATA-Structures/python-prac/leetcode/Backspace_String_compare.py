# Given two strings S and T, return if they are equal when both are typed
# into empty text editors. '#' means a backspace character.
#
# Example 1:
#
# Input: S = "ab#c", T = "ad#c"
# Output: true
# Explanation: Both S and T become "ac".
# Example 2:
#
# Input: S = "ab##", T = "c#d#"
# Output: true
# Explanation: Both S and T become "".
# Example 3:
#
# Input: S = "a##c", T = "#a#c"
# Output: true
# Explanation: Both S and T become "c".
# Example 4:
#
# Input: S = "a#c", T = "b"
# Output: false
# Explanation: S becomes "c" while T becomes "b".
# Note:
#
# 1 <= S.length <= 200
# 1 <= T.length <= 200
# S and T only contain lowercase letters and '#' characters.
# Follow up:
#
# Can you solve it in O(N) time and O(1) space?


class Solution:
    def backspaceCompare(self, S, T):
        p1 = len(S) - 1
        p2 = len(S) - 1
        skip1 = 0
        skip2 = 0

        while p1 >= 0 or p2 >= 0:

            while p1 >= 0:
                if S[p1] == "#":
                    skip1 += 1
                    p1 -= 1
                elif skip1 > 0:
                    p1 -= 1
                    skip1 -= 1
                else:
                    break
            while p2 >= 0:
                if T[p2] == "#":
                    skip2 += 1
                    p2 -= 1
                elif skip2 > 0:
                    skip2 -= 1
                    p2 -= 1
                else:
                    break
            if (p1 >= 0) != (p2 >= 0):
                return False
            if S[p1] != T[p2]:
                return False
            p1 -= 1
            p2 -= 1
        return True


if __name__ == "__main__":
    S = "a##c"
    T = "#a#c"
    # Time Complexity is O(n) and space is O(1)
    print(Solution().backspaceCompare(S, T))
