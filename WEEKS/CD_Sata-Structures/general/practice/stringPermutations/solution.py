from itertools import permutations


def stringPermutations(s):
    return sorted(list({"".join(itm) for itm in permutations(s)}))


print(stringPermutations("CDA"))
