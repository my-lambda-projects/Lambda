# lets make a guessing game
# set a value
# take in some input from a player
# check it against a value
# if they are the same print player wins
# if they are different print guess again
# and loop

number = 45
playing = True
# REPL
while playing:  # LOOP
    user_guess = int(input(" Guess the number I am thinking of >>> "))  # READ

    # EVAL
    if number == user_guess:
        print("You Win!")  # PRINT
        playing = False
    else:
        print("Not correct, guess again!")
