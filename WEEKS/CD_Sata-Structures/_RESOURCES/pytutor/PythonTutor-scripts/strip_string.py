import re
import string


punctuations = string.punctuation + " "


def is_palindrome(text):
    def text_strip(text):
        table = str.maketrans({punc: None for punc in punctuations})
        text = text.translate(table)
        return text

    return text_strip(text)


print(is_palindrome("striin!+., ng"))


def is_palindrome(text):
    def text_strip(text):
        regex = re.compile("[%s]" % re.escape(punctuations))
        text = regex.sub("", text)
        return text

    return text_strip(text)


print(is_palindrome("striin!+., ng"))
