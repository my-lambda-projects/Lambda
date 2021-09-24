"""
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 10
100 301
2 5
150 250
2
0 720
720 1440

Case #1: CJC
Case #2: IMPOSSIBLE
Case #3: JCCJJ
Case #4: CC
"""


def partneringReturn(ts):
    ts = sorted(ts, key=lambda x: [x[0], x[1]])
    j = [ts[0]]
    c = [ts[1]]
    p = "JC"
    for i in range(2, len(ts)):
        if j[-1][1] <= ts[i][0] and j[-1][0] < ts[i][0]:
            j.append(ts[i])
            p += "J"
        elif c[-1][1] <= ts[i][0] and j[-1][0] < ts[i][0]:
            c.append(ts[i])
            p += "C"
        else:
            return "IMPOSSIBLE"
    return p


t = int(input())  # read a line with a single integer
for i in range(1, t + 1):
    tasks = []
    rows = int(input())
    for _ in range(1, rows + 1):
        tasks.append([int(s) for s in input().split(" ")])
    print("Case #{}: {}".format(i, partneringReturn(tasks)))
