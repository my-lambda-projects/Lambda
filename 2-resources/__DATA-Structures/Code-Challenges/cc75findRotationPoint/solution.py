# https://repl.it/student/assignments/515914/model_solution?fromSubmissionId=1903866
# https://piazza.com/class/j63w1pdyopf7kj?cid=89
# https://youtu.be/HCa69879ZGo


def find_rotation_point(words):
    first_word = words[0]
    floor_index = 0
    ceiling_index = len(words) - 1

    while floor_index < ceiling_index:
        # guess a point halfway between floor and ceiling
        guess_index = floor_index + ((ceiling_index - floor_index) // 2)
        # if the guess comes after the first word or is the first word
        if words[guess_index] >= first_word:
            # go right
            floor_index = guess_index
        else:
            # go left
            ceiling_index = guess_index
        # check if our floor and ceiling indices have converged
        if floor_index + 1 == ceiling_index:
            return ceiling_index
