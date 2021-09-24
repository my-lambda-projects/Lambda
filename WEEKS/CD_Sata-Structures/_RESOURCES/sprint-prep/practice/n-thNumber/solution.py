import re


def nthNumber(s, n):
    pattern = rf"([0-9]+){n}"
    return re.match(pattern, s).group(1)


s = "8one 003number 201numbers li-000233le number4443"
n = 4
print(nthNumber(s, n))
