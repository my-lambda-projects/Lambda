""" Assignment 13

1. Turn the provided iterable into an iterator.
2. How does one automatically unpack all values from an iterator?
    Does this work everywhere?

Stretch Goals:
1. Write a function to take any iterable and return an iterator.
2. Which way to create an iterator is better or more pythonic and why?
3. Test your solutions to make sure they produce the same output.
4. Read the documentation for itertools. """


iterable = range(100)


# Answer
my_iter = iter(iterable)
# Use the star operator like so...
print(*my_iter)
# No, star iterator doesn't work everywhere. It works good in almost all
# situations where you want to pass a parameter pack,
# but not in a standard block of code.


# Stretch Goals
def make_iter(sequence):
    return iter(sequence)


print(list(iter(iterable)) == list(make_iter(iterable)))

""" While both of these answers work to solve the problem at hand, the first way 
seems better because the `iter()` function is already defined for us and we add
no new functionality: we're just wrapping a builtin function and giving it a 
new name. This is quite silly and not pythonic at all. """
