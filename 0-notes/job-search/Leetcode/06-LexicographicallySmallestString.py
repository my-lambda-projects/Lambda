# Lexicographically Smallest String

# Lexicographically smallest string formed by removing at most 
    # one character.

# Example 1:  Input: "abczd"   |   Output: "abcd"

## time complexity:  O(n)
## space complexity:  O(1)

def lexi_smallest(s):
    length = len(s)
    length_one_short = length - 1

    for x in range(length_one_short):
        i_one_short = x - 1
        x_one_long = x + 1
        if s[x] > s[x_one_long]:
            return s[:x] + s[x_one_long:]
    return s[:-1]

# abcd
print(lexi_smallest("abczd"))