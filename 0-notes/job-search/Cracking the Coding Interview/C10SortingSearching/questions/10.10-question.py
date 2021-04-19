# Rank from Stream

# Imagine you are reading in a stream of integers.
# Periodically, you wish to be able to look up the rank off a number x, 
    # the number of values less than or equal to x.
# Implement the data structures and algorithms to support these operations.
# That is, implement the method track(int x), which is called when each 
    # number is generated.
# The method getRankOfNumber(int x), which returns the number of values less
    # than or equal to x (not including this instance of x itself).

'''
EXAMPLE:  
Stream (in order of appearance):  5, 1, 4, 4, 5, 9, 7, 13, 3
getRankOfNumber(1) = 0 // values:  
getRankOfNumber(3) = 1 // values:  s[1] = 1
getRankOfNumber(4) = 3 // values:  s[1] = 1, s[2] = 4, s[8] = 3
'''

# time complexity:  O()
# space complexity:  O()
