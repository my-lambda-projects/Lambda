""" Assignment 7

Write a short script that will get a name from the user.
Find the length of the name.
If the length is lower than 5 print "Under".
If the length is more than 5 print "Over".
If the length is exactly 5 print "Five".

Try to use 'if', 'else' and 'elif' exactly once each.
Also, try not to evaluate the length of the name more than once. """


# Answer
name = input("What is your name? ")
size = len(name)

if size < 5:
    print("Under")
elif size == 5:
    print("Five")
else:
    print("Over")
