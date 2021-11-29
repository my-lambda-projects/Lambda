def check_mat(m):
    d_sum = 0
    r_rows = 0
    r_col = 0
    c_rep = {}
    for i in range(len(m)):
        rep = {}
        for j in range(len(m)):
            ele = m[i][j]
            if i == j:
                d_sum += ele
            rep[ele] = 1
            if j not in c_rep:
                c_rep[j] = {ele}
            else:
                c_rep[j].add(ele)
        if len(rep) != len(m):
            r_rows += 1
    for i, v in c_rep.items():
        if len(v) != len(m):
            r_col += 1
    return d_sum, r_rows, r_col


# input() reads a string with a line of input, stripping the ' ' (newline) at the end.
# This is all you need for most Code Jam problems.
t = int(input())  # read a line with a single integer
for i in range(1, t + 1):
    m = []
    rows = int(input())
    for i in range(1, rows + 1):
        m.append([int(s) for s in input().split(" ")])
