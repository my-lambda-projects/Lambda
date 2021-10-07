# -*- coding: utf-8 -*-
"""


"""


def choice():
    input_int = int(input("1. Rock\n2. Paper\n3. Scissors\nEnter your choice: "))
    return input_int


while True:
    print("\nTeam 1", end="")
    team1 = choice()
    print("Team 2", end="")
    team2 = choice()

    if team1 == 1:
        if team2 == 1:
            print("Same choice!!! Play again.\n")
        elif team2 == 2:
            print("Player 2 won!!\n")
        else:
            print("Player 1 won!!\n")

    elif team1 == 2:
        if team2 == 1:
            print("Player 1 won!!\n")
        elif team2 == 2:
            print("Same choice!!! Play again.\n")
        else:
            print("Player 2 won!!\n")

    elif team1 == 3:
        if team2 == 1:
            print("Player 2 won!!\n")
        elif team2 == 2:
            print("Player 1 won!!\n")
        else:
            print("Same choice!!! Play again.\n")

    else:
        print("Wrong choice entered!!\n")

    input_str = input("Do you want to play again (Y/N): ")
    if input_str == "N" or input_str == "n":
        break
