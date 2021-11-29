import re

text = "Adela, hi!"
# def csOppositeReverse(txt):
#   for i in range(len(txt)):
#     if re.match("^[a-z]+$", txt[i]):
#        txt[i] = txt[i].upper()
#        return txt[::-1]
#     elif re.match("^[A-Z]+$", txt[i]):
#       txt[i] = txt[i].lower()
#       return txt[::-1]


def csOppositeReverse(txt):
    return txt.swapcase()[::-1]


print(csOppositeReverse(text))

# puterea a doua a fiecarui digit intr un numar
def csSquareAllDigits(n):
    return int("".join(str(int(i) ** 2) for i in str(n)))


# take out the vowels of a string
import re


def csRemoveTheVowels(txt):
    # vowels = ["a", "e", "i", "o", "u"]
    # return "".join([l for l in txt if l not in vowels])
    return re.sub(r"[AEIOU]", "", txt, flags=re.IGNORECASE)


print(csRemoveTheVowels(text))
