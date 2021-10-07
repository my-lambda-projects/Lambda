# Try using a regex as alternative solution
# in progress, search for 59.09210
import pprint

l = [
    "0.5550.51080.446159.09210.53940.77390.85033.9272",
    "0.0150.01380.01211.59890.01460.02090.0230.1063",
]

# Split item


def split_list(seq):
    stack = []
    for item in seq:
        stack.append(item.split("."))

    # remove 0 for each col
    for row in stack:
        row.remove("0")

    ret = []

    # Append dot for each item
    for row in stack:
        for num in row:
            num = "0." + num
            num = num.rstrip("0")
            ret.append(num)

    return ret


pprint.pprint(split_list(l))
