def digitDegree(n):
    number, degree = str(n), 0

    while len(number) != 1:
        number = str(sum([int(digit) for digit in number]))
        degree += 1
    return degree
