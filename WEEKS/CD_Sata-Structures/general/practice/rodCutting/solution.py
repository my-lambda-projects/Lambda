def rodCutting(n, v):
    a = v
    for _ in a:
        a = list(map(max, a, (a[0] + y for y in v)))
        x = a.pop(0)
    return x


n = 4
v = [0, 2, 4, 7, 7]
print(rodCutting(n, v))
