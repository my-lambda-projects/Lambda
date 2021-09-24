# lets make a guessing game
# set a value
# take in some input from a player
# check it against a value
# if they are the same print player wins
# if they are different print guess again
# and loop


# what is a REPL?
# how can we make this game replayable?
import random

value = random.randint(1, 100)
guess = None
while value != guess:
    guess = input("Guess a number between 1 and 100! ")
    guess = int(guess)

    if value == guess:
        print("Great guess. You Win!")
    else:
        print("Not correct. Guess again!")
