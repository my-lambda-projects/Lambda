import itertools as it


def letter_combinations(digits):
    m = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    possibilities = [m[x] for x in digits if x not in ["0", "1"]]
    # using cartesian product
    return ["".join(x) for x in it.product(*possibilities) if x]


print(letter_combinations("42"))
