"""
4
0000
101
111000
1


Case #1: 0000
Case #2: (1)0(1)
Case #3: (111)000
Case #4: (1)
"""
import re


def nestingDepth(s):
    l = re.findall(r"(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)", s)
    out = ""
    open_p = 0
    for i in range(len(l)):
        n = int(l[i][0])
        if open_p < n:
            new_p = n - open_p
            out += "(" * new_p + l[i]
            open_p += new_p
        else:
            out += l[i]
        if i + 1 < len(l):
            n = int(l[i + 1][0])
            if n < int(l[i][0]):
                close_p = open_p - n
                out += ")" * close_p
                open_p -= close_p
        else:
            out += ")" * open_p
    return out


t = int(input())  # read a line with a single integer
for i in range(1, t + 1):
    s = input()
    print("Case #{}: {}".format(i, nestingDepth(s)))
