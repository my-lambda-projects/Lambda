def deleteDigit(n):
    digits = str(n)
    values = []

    for i in range(len(digits)):
        value = int(digits[:i] + digits[(i + 1) :])
        values.append(int(value))

    return max(values)
