# https://repl.it/student/assignments/493753/model_solution?fromSubmissionId=1855286
# https://piazza.com/class/j63w1pdyopf7kj?cid=81
# https://youtu.be/VC52108omBI

# 1. Donuts
# Given an int count of a number of donuts, return a string
# of the form 'Number of donuts: <count>', where <count> is the number
# passed in. However, if the count is 10 or more, then use the word 'many'
# instead of the actual count.
# So donuts(5) returns 'Number of donuts: 5'
# and donuts(23) returns 'Number of donuts: many'
def donuts(count):
  # Your code here
  return 'Number of donuts: ' + str(count if count < 10 else 'many')


# 2. both_ends
# Given a string s, return a string made of the first 2
# and the last 2 chars of the original string,
# so 'spring' yields 'spng'. However, if the string length
# is less than 2, return instead the empty string.
def both_ends(s):
  # Your code here
  if len(s) < 2:
    return ''
  return s[0:2] + s[-2:]


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
  # Your code here
  first = s[0]
  rest_of_string = s[1:]
  updated_string = rest_of_string.replace(first, '*')
  return first + updated_string


# 4. mix_up
# Given strings a and b, return a single string with a and b separated
# by a space '<a> <b>', except swap the first 2 chars of each string.
# e.g.
#   'mix', pod' -> 'pox mid'
#   'dog', 'dinner' -> 'dig donner'
# Assume a and b are length 2 or more.
def mix_up(a, b):
  # Your code here
  a_swapped = b[:2] + a[2:]
  b_swapped = a[:2] + b[2:]
  return a_swapped + ' ' + b_swapped
