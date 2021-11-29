# A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
#
# Write a function to determine if a number is strobogrammatic. The number is represented as a string.
#
# Example 1:
#
# Input:  "69"
# Output: true
# Example 2:
#
# Input:  "88"
# Output: true
# Example 3:
#
# Input:  "962"
# Output: false


class Solution:
    def isStrobogrammatic(self, num):
        dict = {"6": "9", "9": "6", "8": "8", "0": "0", "1": "1"}

        pointer = len(num) - 1
        nums = []
        while pointer >= 0:
            if num[pointer] not in dict:
                return False

            nums.append(dict[num[pointer]])
            pointer -= 1

        rotate = "".join(nums)

        if rotate != num:
            return False

        return True
