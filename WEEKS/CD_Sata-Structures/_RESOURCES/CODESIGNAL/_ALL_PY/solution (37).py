import re


def isSentenceCorrect(sentence):
    pattern = "^[A-Z][^?!.]*[?.!]$"
    return re.match(pattern, sentence) is not None


print(isSentenceCorrect("This is an example of *correct* sentence!"))
