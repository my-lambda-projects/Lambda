import itertools as it

possibilities = ["ab", "cd"]
for i in it.product(*possibilities):
    if i:
        print("".join(i))
