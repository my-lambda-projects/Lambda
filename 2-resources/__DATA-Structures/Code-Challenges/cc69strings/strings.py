# cc69 strings
# https://repl.it/student/submissions/1855286
# https://developers.google.com/edu/python/
# http://pythoncentral.io/cutting-and-slicing-strings-in-python/

"""
For this challenge, you'll be writing some basic string functions.
Simply follow along with each exercise's prompt.

You may find the following article helpful with regards to
how to perform string slicing in Python:
http://pythoncentral.io/cutting-and-slicing-strings-in-python/
"""

# 1. Donuts
# Given an int count of a number of donuts, return a string
# of the form 'Number of donuts: <count>', where <count> is the number
# passed in. However, if the count is 10 or more, then use the word 'many'
# instead of the actual count.
# So donuts(5) returns 'Number of donuts: 5'
# and donuts(23) returns 'Number of donuts: many'
def donuts(count):
    # Your code here
    if count < 10:
        reply = str(count)
    else:
        reply = "many"
    # print("Number of donuts: ", count if count < 10 else 'many')
    return "Number of donuts: " + reply


print(donuts(5))
print(donuts(23))
print(donuts(4))


# 2. both_ends
# Given a string s, return a string made of the first 2
# and the last 2 chars of the original string,
# so 'spring' yields 'spng'. However, if the string length
# is less than 2, return instead the empty string.
def both_ends(s):
    # Your code here
    if len(s) < 2:
        return ""
    return s[0:2] + s[-2:]


print(both_ends("Scooby Snacks"))
print(both_ends("Jesh doesn't share his candy"))

# 3. fix_start
# Given a string s, return a string
# where all occurences of its first char have
# been changed to '*', except do not change
# the first char itself.
# e.g. 'babble' yields 'ba**le'
# Assume that the string is length 1 or more.
# Hint: s.replace(stra, strb) returns a version of string s
# where all instances of stra have been replaced by strb.
def fix_start(s):
    letter = s[0]
    s = s.replace(letter, "*")
    starring = letter + s[1:]

    return starring


print(fix_start("well, why weren't we welcome?"))
print(fix_start("Scooby Snacks Sound Simply Scrumptuous!"))

# 4. mix_up
# Given strings a and b, return a single string with a and b separated
# by a space '<a> <b>', except swap the first 2 chars of each string.
# e.g.
#   'mix', pod' -> 'pox mid'
#   'dog', 'dinner' -> 'dig donner'
# Assume a and b are length 2 or more.
def mix_up(a, b):
    new_a = b[:2] + a[2:]
    new_b = a[:2] + b[2:]

    return new_a + " " + new_b


print(mix_up("What", "the???"))
print(mix_up("Patrick", "Kennedy"))
