# Given an integer, write a function that reverses the bits (in binary) and returns the integer result.

# Examples:

# csReverseIntegerBits(417) -> 267
# 417 in binary is 110100001. Reversing the binary is 100001011, which is 267 in decimal.
# csReverseIntegerBits(267) -> 417
# csReverseIntegerBits(0) -> 0
# Notes:

# The input integer will not be negative.
# [execution time limit] 4 seconds (py3)

# [input] integer n

# [output] integer


def csReverseIntegerBits(n):
    reversed_num = 0
    while n > 0:
        reversed_num = reversed_num << 1
        if n & 1 == 1:
            reversed_num = reversed_num ^ 1
        n = n >> 1
    return reversed_num
