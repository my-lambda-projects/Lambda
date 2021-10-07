# Given two binary strings, return their sum (also a binary string).
#
# The input strings are both non-empty and contains only characters 1 or 0.
#
# Example 1:
#
# Input: a = "11", b = "1"
# Output: "100"


# Example 2:
#
# Input: a = "1010", b = "1011"
# Output: "10101"


class Solution:
    def addBinary(self, a, b):
        x, y = int(a, 2), int(b, 2)

        while y:
            answer = x ^ y
            carry = (x & y) << 1
            x, y = answer, carry

        return bin(x)


if __name__ == "__main__":
    a = "1010"
    b = "1011"
    print(Solution().addBinary(a, b))
