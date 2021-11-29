# i need help checking this function.
# args = 4 argument: 3 files and one list of letters.
# i need to check that filed are existing and that there are
# only 4 arguments. if a file is missing i need to print valueError
# this is what i got so far
"""
def check_input_args(args):
    counter = 0
    for i in args:
        counter += 1
    while True:
        try:
            if counter != 4:
                break
        except ValueError:
            print('arguments amount is wrong')
    for arg in sys.argv[2:1]:
        while True:
            try:
                print(os.path.isfile(arg))
                break
            except ValueError:
                print(' file is missing')"""


import os
import sys


def check_input_args(*args):
    if len(args) > 4:
        print("Passed args are more than 4.")
        return

    # check each file
    for file in sys.argv[0:3]:
        if not os.path.isfile(file):
            raise ValueError
            return
