# Given two strings a and b, determine if they are isomorphic.

# Two strings are isomorphic if the characters in a can be replaced to get b.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

# Example 1:

# Input:
# a = "odd"
# b = "egg"

# Output:
# true
# Example 2:

# Input:
# a = "foo"
# b = "bar"

# Output:
# false
# Example 3:

# Input:
# a = "abca"
# b = "zbxz"

# Output:
# true
# Example 4:

# Input:
# a = "abc"
# b = ""

# Output:
# false
# [execution time limit] 4 seconds (py3)

# [input] string a

# [input] string b

# [output] boolean


def csIsomorphicStrings(a, b):
    max_chars = 256
    m = len(a)
    n = len(b)
    if m != n:
        return False
    marked = [False] * max_chars
    map = [-1] * max_chars
    for i in range(n):
        if map[ord(a[i])] == -1:
            if marked[ord(b[i])] == True:
                return False
            marked[ord(b[i])] = True
            map[ord(a[i])] = b[i]

        elif map[ord(a[i])] != b[i]:
            return False

    return True
