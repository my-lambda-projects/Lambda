import re


def swapAdjacentWords(s):
    return re.sub(r"(\w+) (\w+)", r"\2 \1", s)


s = "How are you guys?"
print(swapAdjacentWords(s))
