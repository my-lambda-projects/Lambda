# -*- coding: utf-8 -*-
"""


"""

import random

random.seed()

num = random.randint(1, 100)


def guess_num(num, num1):
    if num > num1:
        return "Too low."
    elif num < num1:
        return "Too high."
    else:
        return "yes"


print("\nGame starts.\nType exit to quit.")
count = 0
while True:
    num1 = input("Guess the number: ")
    count += 1
    if num1 == "exit":
        break

    result = guess_num(num, int(num1))
    if result == "yes":
        print(
            "Congrats!!! You have guessed the correct number in "
            + str(count)
            + " attempts."
        )
        break
    else:
        print(result)
        continue
