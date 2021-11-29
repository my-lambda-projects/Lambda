# Python 3 implementation to
# reverse bits of a number


# function to reverse
# bits of a number
def csReverseIntegerBits(n):

    rev = 0

    # traversing bits of 'n' from the right
    while n > 0:

        # bitwise left shift 'rev' by 1
        rev = rev << 1

        # if current bit is '1'
        if n & 1 == 1:
            rev = rev ^ 1

        # bitwise right shift 'n' by 1
        n = n >> 1

    # required number
    return rev


# Driver code
n = 267
print(csReverseIntegerBits(n))
