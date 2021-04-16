# Min Moves to Obtain String Without 3 Identical Consecutive Letters

# You are given a string S consisting of N letters ‘a’ and/or ‘b’. 
# In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
# Write a function solution that, given such a string S, returns the minimum number 
    # of moves required to obtain a string containing no instances of three identical 
    # consecutive letters.

# time complexity:  O(n) because of the one while loop
# space complexity:  O(1) since this all takes up only one unit of space

def calculate_current_moves(start_sub, end_sub):
    sub_length = end_sub - start_sub
    # get current number of moves to add to total
    current_moves = sub_length // 3
    # add current number of moves to total
    return current_moves

def calculate_min_moves(string):
    # initialize start and end of first possible subsequence
    start_sub = 0
    end_sub = 1
    # initialize counter for number of moves
    moves = 0
    # initialize string length
    length = len(string)

    # loop until index of subsequence end gets to end of string
    while end_sub < length:
        # if index of subsequence end is at least one after start
        if string[end_sub] != string[start_sub]:
            # add current number of moves to total
            moves += calculate_current_moves(start_sub, end_sub)
            # move to end of current subsequence
            start_sub = end_sub
        # new end of subsequence = 1 after current start
        end_sub += 1

    # in cases where sub-sequence ends the string
        # add current number of moves to total
    moves += calculate_current_moves(start_sub, end_sub)

    return moves