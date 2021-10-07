d = {}
with open("sales.txt", "r") as f:
    for line in f.readlines():
        if line:
            l = line.split()
            d[l[1]] = d.get(l[1], []) + [" ".join(l[2:])]
print(d)
