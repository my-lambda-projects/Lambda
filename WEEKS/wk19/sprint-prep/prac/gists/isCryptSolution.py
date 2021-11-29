def decrypt(word, dictionary):
    lst = []
    for c in word:
        lst.append(dictionary[c])
    return "".join(lst)


def isCryptSolution(crypt, solution):
    dict = {}
    for r in solution:
        dict[r[0]] = r[1]
    values = [0] * 3
    for i in range(3):
        val = decrypt(crypt[i], dict)
        if val.startswith("0") and len(val) > 1:
            return False
        values[i] = int(val)

    return (values[0] + values[1]) == values[2]
