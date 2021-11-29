#!/usr/bin/python

import sys


def rock_paper_scissors(n: int) -> list:
    ro_sham_bo = ["rock", "paper", "scissors"]
    possibilities = []

    def helper(v: int, result: list):
        if v == 0:
            possibilities.append(result)
            return
        for i in ro_sham_bo:
            helper(v - 1, result + [i])

    helper(n, [])
    return possibilities


print(rock_paper_scissors(1))
print(rock_paper_scissors(2))

# if __name__ == "__main__":
#   if len(sys.argv) > 1:
#     num_plays = int(sys.argv[1])
#     print(rock_paper_scissors(num_plays))
#   else:
#     print('Usage: rps.py [num_plays]')
