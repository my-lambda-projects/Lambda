# You are given a string representing an attendance record for a student.
# The record only contains the following three characters:
# 'A' : Absent.
# 'L' : Late.
# 'P' : Present.
# A student could be rewarded if his attendance record doesn't contain
# more than one 'A' (absent) or more than two continuous 'L' (late).
#
# You need to return whether the student could be rewarded according to his attendance record.
#
# Example 1:
#
# Input: "PPALLP"
# Output: True
# Example 2:
#
# Input: "PPALLL"
# Output: False


class Solution:
    def checkRecord(self, s):
        countA = 0

        for i in range(len(s)):
            if s[i] == "A":
                countA += 1
            if (i < len(s) - 2) and s[i] == "L" and s[i + 1] == "L" and s[i + 2] == "L":
                return False

        if countA > 1:
            return False
        return True
