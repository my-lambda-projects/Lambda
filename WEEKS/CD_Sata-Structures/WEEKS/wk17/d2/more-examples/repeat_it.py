"""
Challenge #7:

Given a string of lowercase and uppercase alpha characters, write a function
that returns a string where each character repeats in an increasing pattern,
starting at 1. Each character repetition starts with a capital letter and the
rest of the repeated characters are lowercase. Each repetition segment is
separated by a `-` character.

Examples:
- repeat_it("abcd") -> "A-Bb-Ccc-Dddd"
- repeat_it("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
- repeat_it("cwAt") -> "C-Ww-Aaa-Tttt"
"""


def repeat_it(input_str):
    # Your code here
    new_list = list(input_str)
    empty = []
    for index, letter in enumerate(new_list):
        letter = "-" + letter.upper() + (index * letter).lower()
        empty.append(letter)
        new_str = "".join(empty)
        transformed = list(new_str)
        good_string = transformed[1:]
    return "".join(good_string)


print(repeat_it("cwAt"))
print(repeat_it("RqaEzty"))
print(repeat_it("abcd"))
