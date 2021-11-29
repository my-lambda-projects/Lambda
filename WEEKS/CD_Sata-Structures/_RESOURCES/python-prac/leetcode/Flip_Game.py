# You are playing the following Flip Game with your friend: Given a string that
# contains only these two characters: + and -, you and your friend take turns to
# flip two consecutive "++" into "--". The game ends when a person can no longer
# make a move and therefore the other person will be the winner.
#
# Write a function to compute all possible states of the string after one valid move.
#
# Input: s = "++++"
# Output:
# [
#   "--++",
#   "+--+",
#   "++--"
# ]


class Solution:
    def generatePossibleNextMoves(self, s):
        res = []
        strs = []
        for c in s:
            strs.append(c)

        for i in range(len(strs) - 1):
            if strs[i] == "+" and strs[i + 1] == "+":
                res.append(s[:i] + "--" + s[i + 2 :])

        return res
