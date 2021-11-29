import re


def minimumOnStack(operations):
    l = []
    out = []
    for i in operations:
        if "push" in i:
            l.append(int(i[i.index(" ") + 1 :]))
        elif "pop" in i:
            l.pop()
        else:
            out.append(min(l))
    return out


operations = [
    "push 10",
    "min",
    "push 5",
    "min",
    "push 8",
    "min",
    "pop",
    "min",
    "pop",
    "min",
]
print(minimumOnStack(operations))
