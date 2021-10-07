from collections import defaultdict


def showFruits(d):
    fruits = sorted(d, key=lambda x: x[0])
    out = []
    for fruit in fruits:
        l = min(d[fruit])
        h = max(d[fruit])
        m = sum(d[fruit]) // len(d[fruit])
        out.append(f"{fruit} {l} {h} {m}")
    return out


loops = int(input())
for i in range(1, loops + 1):
    d = defaultdict(list)
    input()
    no_of_products = int(input())
    for _ in range(no_of_products):
        food = input().split(" ")
        d[food[0]].append(int(food[1]))
    print("Case #{}:".format(i))
    for item in showFruits(d):
        print(item)
    print()
