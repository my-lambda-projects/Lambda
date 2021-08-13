def csReverseString(chars):
    rev = chars[::-1]
    print(rev)
    return rev


# def csReverseString2(chars):
#     new_string = ''
#     index = len(chars)
#     while index:
#         index -= 1                    # index = index - 1
#         new_string += chars[index]  # new_string = new_string + character
#     return new_string
#
#
# print(csReverseString2("helloworld"))


def csReverseString2(chars):
    new_string = ""
    index = len(chars)
    while index:
        index -= 1  # index = index - 1
        new_string += chars[index]  # new_string = new_string + character
    return new_string


print(csReverseString2("helloworld"))

# Input:
# chars:
# ["r",
#  "o",
#  "b",
#  "o",
#  "t"]
# Output:
# undefined
# Expected Output:
# ["t",
#  "o",
#  "b",
#  "o",
#  "r"]
# Console Output:
# Empty
# Error Output:
# Empty
# ---------------------------------------------------------------------------

# Input:
# chars:
# ["8",
#  "9",
#  "f",
#  "9",
#  "V"]
# Output:
# ["V",
#  "9",
#  "f",
#  "9",
#  "8"]
# Expected Output:
# ["V",
#  "9",
#  "f",
#  "9",
#  "8"]
# Console Output:
# [u'V', u'9', u'f', u'9', u'8']
# Error Output:
