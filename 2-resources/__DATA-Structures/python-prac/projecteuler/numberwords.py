_FIRST20 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
]

_TENS = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
]

_UNITS = [
    (12, "trillion"),
    (9, "billion"),
    (6, "million"),
    (3, "thousand"),
    (2, "hundred"),
]

MAX_NUMBER = 10 ** _UNITS[0][0] - 1


JOIN_WORD = "and"


def num2words(number):
    if number < 0:
        return "minus " + _num2unit_words(-number)
    else:
        return _num2unit_words(number)


def _num2unit_words(number, units=_UNITS):
    spelled = []

    for p, name in units:
        units_number, number = divmod(number, 10 ** p)

        if not units_number:
            continue

        spelled += [_num2unit_words(units_number, units=units[1:]), name]

    if number:
        if spelled and JOIN_WORD:
            spelled += [JOIN_WORD]
        spelled += [_smallnum2words(number)]
    elif not spelled:
        spelled = [_FIRST20[0]]

    return " ".join(spelled)


def _smallnum2words(number):
    assert number < 100, number
    number = int(number)

    if number < 20:
        return _FIRST20[number]
    elif not number % 10:
        return _TENS[number // 10]
    else:
        return _TENS[number // 10] + "-" + _FIRST20[number % 10]
