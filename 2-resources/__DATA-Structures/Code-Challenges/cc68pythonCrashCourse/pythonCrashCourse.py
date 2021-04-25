# cc68 pythonCrashCourse
# https://repl.it/student/submissions/1847090

'''
Let's walk through the basic language constructs of Python.
This will be a bit of a whirlwind through a bunch of basic Python features.
Don't stress about not remembering all of these details at the end of this,
you definitely won't remember it all, so just accept that fact right now :)

Remember, we're delving into other programming languages in an attempt to
broaden your breadth, and to continually practice decoupling the way you think
about problems from how you implement problems.

Follow along the instructions and try out the exercises whenever you're prompted.
Little exercises strewn throughout the assignment are prefaced with EXERCISE, so look out for those.

Here's a link to a pretty thorough Python manual that much of this material was drawn from:
http://python.net/~goodger/projects/pycon/2007/idiomatic/handout.html
'''

# Comments in Python use the '#' symbol

''' Multi-line comments are denoted via three single or three double quotes
And are ended with the matching set of three single or double quotes '''

''' Let's start off by defining some variables
In Python, there's no `let`, `const`, or `var` keyword to declare variables
Python is also not statically typed, so you don't declare the variable type when assigning a variable
Variables assigned outside the scope of any functions have global scope '''

a = 1
b = 2

# Also note that expressions don't end with semicolons
# EXERCISE: Define a global variable PI and have it store as many digits of pi as you can muster
PI = 3.14159



# FUNCTIONS

# Functions in Python are defined via the `def` keyword
# Also, there are no braces in Python; whitespace actually matters!

''' After closing the parentheses where function parameters go,
instead of an opening curly brace, a colon is used: '''

def example_function(new_input_to_append, a_list=None):
  # Same thing with if statements; end them with a colon
  if a_list == None:
    a_list = []
  a_list.append(new_input_to_append)
  return a_list

# A function body is closed by a new line

''' Functions are invoked the same way as in JavaScript and C, with parens
Here, we're invoking our example function with the variable `c` you
defined earlier and nothing as the second argument, meaning the function
will utilize the default parameter that was given in the function definition '''

print("Our example function returns: ", example_function(PI))



# LOOPS

''' For loops in Python do not follow the C-style loops you are used to writing in
both JavaScript and C. Python opts for a much cleaner syntax with regards to loops. '''

# We iterate a specified number of times using the `range` function
for x in range(5):
  print(x, end="")
print()

# The body of the loop is denoted by indentation, so you need to delineate your whitespace correctly

# Given a list (arrays are called lists in Python), we iterate through it like so
fibonacci = [1, 1, 2, 3, 5, 8, 13]
for number in fibonacci:
  print(number, end="")
print()

# You can loop over an element along with its index using the `enumerate` function like so:
for index, number in enumerate(fibonacci):
  print(index, number)

# While loops work exactly the way you're used to working with them in JS and C
# Note however that ++ and -- are not valid ways of incrementing and decrementing in Python
count = 0
while count < 5:
  print(count)
  count += 1

''' EXERCISE: Loop through and print out all the even numbers from the numbers list given
below. Ensure that the numbers are printed in the same order in which they appear in the
numbers list. Don't print any numbers that come after 237 in the sequence. '''
numbers = [
  951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
  615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941,
  386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
  399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
  815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717,
  958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470,
  743, 527
]

# Your code here:
for n in numbers:
  if n < 237:
    if n % 2 == 0:
      print(n)




# STRINGS

# Given a list of strings, we want to join them all together into one large string
colors = ['red', 'blue', 'green', 'yellow']

# DON'T do this:
result = ''
for s in colors:
  result += s

# This is extremely inefficient because strings in Python are immutable, unlike in JS and C
# We can't just mutate them willy-nilly
# Instead, join them using the built-in string `.join` method like so:
result = ''.join(colors)
print("Result of calling .join on colors list: ", result)

# If you want spaces between your substrings, you can do this:
result = ' '.join(colors)
print("Result of calling .join on colors list with spaces: ", result)

# Or if you want your substrings separated via commans:
result = ', '.join(colors)
print("Result of calling .join on colors list with commas: ", result)

# EXERCISE: Write a function to reverse an input string; feel free to look this up
def reverse_string(s):
  # Your code here
  return s[::-1]

print("reverse_string function returns: ", reverse_string('hello world'))



# STRING FORMATTING
''' Python's `%` operator works like C's `sprintf` function. If you don't know what that does,
let's illustrate with an example: '''
name = 'David'
messages = 3
text = ('Hello %s, you have %i messages' %(name, messages))
print(text)

''' The `%s` means "insert a string here", and the `%i` means "convert an integer into a string and
insert here". '''



# DICTIONARIES
''' JavaScript objects are called dictionaries in Python, but they're both just implementations
of hash tables. You work with them exactly as how you work with JS objects. The one exception is
that using dot notation to access a dict value is not a thing in Python. Bracket notation must
be used. '''

''' Here's a neat little example of building a dict from two lists, one a list of keys,
the other a list of values, using the `zip` function to conglomerate these two lists '''
first_names = ['John', 'Eric', 'Terry', 'Michael']
last_names = ['Cleese', 'Idle', 'Gilliam', 'Pallor']

full_names = dict(zip(first_names, last_names))
print("full_names dict: ", full_names)

# full_names.John doesn't work; use full_names['John'] instead
print(full_names['John']) #<~~ 'Cleese'

# Dicts come with the `.keys` and `.values` methods you're used to on JS objects
print("full_names dict keys: ", full_names.keys())
print("full_names dict values: ", full_names.values())



# LISTS
''' Python lists, akin to JS arrays, pretty much also work as you're used to.
Not much to say here, except the way you find the length of a list is by using
the `len()` function instead of accessing a property on the list'''

print("The length of this list is: ", len([4,6,8,4,1,4,6,7,5,4,3,2,2,8,10]))



# COMPREHENSIONS
''' Comprehensions are one of the coolest features of Python. Most of the time you'll
use them with lists, so let's illustrate that first. '''

# We have the following code:
squares = []
for x in range(10):
  squares.append(x**2)
print(squares)

''' Looks fine. Does what you'd expect it to. In Python, though, this can be very
concisely one-lined via a list comprehension: '''
squares = [x**2 for x in range(10)]
print("Squares list comprehension returns: ", squares)

''' A list comprehension consists of brackets containing an expression followed by a
`for` clause, then zero or more `for` or `if` clauses. The result will be a new list
resulting from evaluating the expression in the context of the `for` and `if` clauses
which follow it. Another example: '''
stuff = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
print("Stuff list comprehension returns: ", stuff)

''' The above list comprehension combines the elements of two lists into a new list if
elements at matching indexes do not match '''

# Comprehensions aren't only limited to lists; they work with dicts as well!
# The following comprehension builds a dict where value is indexed by its square root:
squares_dict = {x: x**2 for x in range(10)}
print("squares_dict list comprehension returns: ", squares_dict)

''' EXERCISE: Write a dict comprehension to populate a dict with all the letters of
the alphabet as values with their keys being their index in the alphabet: '''
from string import ascii_lowercase
# Your code here

alphabet_dict = {num: alpha for num, alpha in enumerate(ascii_lowercase)}
print("alphabet_dict list comprehension returns: ", alphabet_dict)



# LAMBDA FUNCTIONS
'''Anonymous functions in Python are called lambdas. They are denoted by the `lambda` keyword.
Here's a simple example: '''
f = lambda x, y : x + y
print("Lambda function `f` returns: ", f(1, 1))

''' Lambdas are most effective when passed to functions such as `map`, `filter`, and `reduce`.
Just like how these three functions accept callbacks that specify how you want each function
to behave, in Python, lambdas do the same thing as callbacks in this case.
Here's an example using the `filter` function which filters out the non-even fibonacci numbers: '''
fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
result = list(filter(lambda x: x % 2 == 0, fib))
print("Result of filtering out non-even fib numbers: ", result)

''' EXERCISE: Use `reduce` to find the maximum value in the given `ints` list.
But first, we need to import `reduce` from the `functools` module: '''
from functools import reduce
ints = [47, 11, 42, 102, 13]
result = reduce(lambda x, y: x if x > y else y, ints)
print("Result of reducing a list to find the max: ", result)
