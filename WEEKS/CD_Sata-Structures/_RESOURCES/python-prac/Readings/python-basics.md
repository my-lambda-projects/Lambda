# **Notes**

## **Basics**

- **PEP8** : Python Enhancement Proposals, style-guide for Python.

- `print` is the equivalent of `console.log`.

- `#` is used to make comments in your code.

  def foo(): """ The foo function does many amazing things that you should not question. Just accept that it exists and use it with caution. """ secretThing()

- Python has a built in help function that let’s you see a description of the source code without having to navigate to it.

---

## **Numbers**

- Python has three types of numbers:

  - **Integer**

    - Positive and Negative Counting Numbers.
    - No Decimal Point
    - Created by a literal non-decimal pt number or with the `int()` constructor.

      print(3) \# =&gt; 3 print(int(19)) \# =&gt; 19 print(int()) \# =&gt; 0

    > Boolean is a subtype of integer in Python.

  - **Floating Point Number**

    - Decimal Numbers.

      print(2.24) \# =&gt; 2.24 print(2.) \# =&gt; 2.0 print(float()) \# =&gt; 0.0 print(27e-5) \# =&gt; 0.00027

  - **Complex Numbers**

    - Consist of a real part and imaginary part.
    - The `i` is switched to a `j` in programming.

      print(7j) \# =&gt; 7j print(5.1+7.7j)) \# =&gt; 5.1+7.7j print(complex(3, 5)) \# =&gt; 3+5j print(complex(17)) \# =&gt; 17+0j print(complex()) \# =&gt; 0j

- **Type Casting** : The process of converting one number to another.

  # Using Float

  print(17) \# =&gt; 17 print(float(17)) \# =&gt; 17.0

  # Using Int

  print(17.0) \# =&gt; 17.0 print(int(17.0)) \# =&gt; 17

  # Using Str

  print(str(17.0) + ’ and ’ + str(17)) \# =&gt; 17.0 and 17

- The arithmetic operators are the same between JS and Python, with two additions:

  - “\*\*” : Double asterisk for exponent.
  - “//” : Integer Division.

- There are no spaces between math operations in Python.

- Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.

- There are no `++` and `--` in Python, the only shorthand operators are:
- ![pic](https://i.gyazo.com/745b12d4b84304462e53a69d8492c58d.png)

---

## **Strings**

- Python uses both single and double quotes.

- You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`

- Multiline strings use triple quotes.

  print(’‘’My instructions are very long so to make them more readable in the code I am putting them on more than one line. I can even include “quotes” of any kind because they won’t get confused with the end of the string!’’’)

- Use the `len()` function to get the length of a string.

      print(len("Spaghetti"))    # => 9

- Python uses `zero-based indexing`
- Python allows negative indexing (thank god!)

      print("Spaghetti"[-1])    # => i
      print("Spaghetti"[-4])    # => e

- Python let’s you use ranges

      print("Spaghetti"[1:4])  # => pag
      print("Spaghetti"[4:-1])    # => hett
      print("Spaghetti"[4:4])  # => (empty string)

  - The end range is exclusive just like `slice` in JS.

  # Shortcut to get from the beginning of a string to a certain index.

  print(“Spaghetti”\[:4\]) \# =&gt; Spag print(“Spaghetti”\[:-1\]) \# =&gt; Spaghett

  # Shortcut to get from a certain index to the end of a string.

  print(“Spaghetti”\[1:\]) \# =&gt; paghetti print(“Spaghetti”\[-4:\]) \# =&gt; etti

- The `index` string function is the equiv. of `indexOf()` in JS

  print(“Spaghetti”.index(“h”)) \# =&gt; 4 print(“Spaghetti”.index(“t”)) \# =&gt; 6

- The `count` function finds out how many times a substring appears in a string.

  print(“Spaghetti”.count(“h”)) \# =&gt; 1 print(“Spaghetti”.count(“t”)) \# =&gt; 2 print(“Spaghetti”.count(“s”)) \# =&gt; 0 print(’‘’We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.’’‘.count(’the’)) \# =&gt; 4

- You can use `+` to concatenate strings, just like in JS.

- You can also use “\*” to repeat strings or multiply strings.

- Use the `format()` function to use placeholders in a string to input values later on.

  first_name = “Billy” last_name = “Bob” print(‘Your name is {0} {1}’.format(first_name, last_name)) \# =&gt; Your name is Billy Bob

- Shorthand way to use format function is: `print(f'Your name is {first_name} {last_name}')`

- Some useful string methods.

  - Note that in JS `join` is used on an Array, in Python it is used on String. ![pic](https://i.gyazo.com/ed5094aa444e325b59ec3a11393b60f2.png)

- There are also many handy testing methods. ![pic](https://i.gyazo.com/af6244c64c06827fb19ac9cd86a75d17.png)

---

## **Variables and Expressions**

- **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.

  - Duck Typing is the fundamental approach of Python.

- Assignment of a value automatically declares.

  a = 7 b = ‘Marbles’ print(a) \# =&gt; 7 print(b) \# =&gt; Marbles

- You can chain variable assignments to give multiple var names the same value.

  - Use with caution as this is highly unreadable

  count = max = min = 0 print(count) \# =&gt; 0 print(max) \# =&gt; 0 print(min) \# =&gt; 0

- The value and type of a variable can be re-assigned at any time.

  a = 17 print(a) \# =&gt; 17 a = ‘seventeen’ print(a) \# =&gt; seventeen

- `NaN` does not exist in Python, but you can ‘create’ it like so: `print(float("nan"))`

- Python replaces `null` with `none`.
  - `none` is an object and can be directly assigned to a variable.
  - Using none is a convenient way to check to see why an action may not be operating correctly in your program.

---

## **Boolean Data Type**

- One of the biggest benefits of Python is that it reads more like English than JS does. ![pic](https://i.gyazo.com/3d9fb881df9245a42024aae4ee38a1c5.png)

  # Logical AND

  print(True and True) \# =&gt; True print(True and False) \# =&gt; False print(False and False) \# =&gt; False

  # Logical OR

  print(True or True) \# =&gt; True print(True or False) \# =&gt; True print(False or False) \# =&gt; False

  # Logical NOT

  print(not True) \# =&gt; False print(not False and True) \# =&gt; True print(not True or False) \# =&gt; False

- By default, Python considers an object to be true UNLESS it is one of the following:

  - Constant `None` or `False`
  - Zero of any numeric type.
  - Empty Sequence or Collection.

- `True` and `False` must be capitalized

---

## **Comparison Operators**

- Python uses all the same equality operators as JS.

- In Python, equality operators are processed from left to right.

- Logical operators are processed in this order:

  1.  **NOT**
  2.  **AND**
  3.  **OR**

- Just like in JS, you can use `parentheses` to change the inherent order of operations.

- **Short Circuit** : Stopping a program when a `true` or `false` has been reached. ![pic](https://i.gyazo.com/ccbe5511757813a61e3833d13c43fd8b.png)

---

## **Identity vs Equality**

    print (2 == '2')    # => False
    print (2 is '2')    # => False

    print ("2" == '2')    # => True
    print ("2" is '2')    # => True

    # There is a distinction between the number types.
    print (2 == 2.0)    # => True
    print (2 is 2.0)    # => False

- In the Python community it is better to use `is` and `is not` over `==` or `!=`

---

## **If Statements**

    if name == 'Monica':
        print('Hi, Monica.')

    if name == 'Monica':
        print('Hi, Monica.')
    else:
        print('Hello, stranger.')

    if name == 'Monica':
        print('Hi, Monica.')
    elif age < 12:
        print('You are not Monica, kiddo.')
    elif age > 2000:
       print('Unlike you, Monica is not an undead, immortal vampire.')
    elif age > 100:
       print('You are not Monica, grannie.')

- Remember the order of `elif` statements matter.

---

## **While Statements**

    spam = 0
    while spam < 5:
      print('Hello, world.')
      spam = spam + 1

- `Break` statement also exists in Python.

  spam = 0 while True: print(‘Hello, world.’) spam = spam + 1 if spam &gt;= 5: break

- As are `continue` statements

  spam = 0 while True: print(‘Hello, world.’) spam = spam + 1 if spam &lt; 5: continue break

---

## **Try/Except Statements**

- Python equivalent to `try/catch`

  a = 321 try: print(len(a)) except: print(‘Silently handle error here’)

      # Optionally include a correction to the issue
      a = str(a)
      print(len(a)

  a = ‘321’ try: print(len(a)) except: print(‘Silently handle error here’)

      # Optionally include a correction to the issue
      a = str(a)
      print(len(a))

- You can name an error to give the output more specificity.

  a = 100 b = 0 try: c = a / b except ZeroDivisionError: c = None print(c)

- You can also use the `pass` commmand to by pass a certain error.

  a = 100 b = 0 try: print(a / b) except ZeroDivisionError: pass

- The `pass` method won’t allow you to bypass every single error so you can chain an exception series like so:

  a = 100

  # b = “5”

  try: print(a / b) except ZeroDivisionError: pass except (TypeError, NameError): print(“ERROR!”)

- You can use an `else` statement to end a chain of `except` statements.

  # tuple of file names

  files = (‘one.txt’, ‘two.txt’, ‘three.txt’)

  # simple loop

  for filename in files: try: \# open the file in read mode f = open(filename, ‘r’) except OSError: \# handle the case where file does not exist or permission is denied print(‘cannot open file’, filename) else: \# do stuff with the file object (f) print(filename, ‘opened successfully’) print(‘found’, len(f.readlines()), ‘lines’) f.close()

- `finally` is used at the end to clean up all actions under any circumstance.

  def divide(x, y): try: result = x / y except ZeroDivisionError: print(“Cannot divide by zero”) else: print(“Result is”, result) finally: print(“Finally…”)

- Using duck typing to check to see if some value is able to use a certain method.

  # Try a number - nothing will print out

  a = 321 if hasattr(a, ‘**len**’): print(len(a))

  # Try a string - the length will print out (4 in this case)

  b = “5555” if hasattr(b, ‘**len**’): print(len(b))

---

## **Pass**

- Pass Keyword is required to write the JS equivalent of :

  if (true) { }

  while (true) {}

  if True: pass

  while True: pass

---

## **Functions**

- **Function** definition includes:

  - The `def` keyword
  - The name of the function
  - A list of parameters enclosed in parentheses.
  - A colon at the end of the line.
  - One tab indentation for the code to run.

- You can use default parameters just like in JS

  def greeting(name, saying=“Hello”): print(saying, name)

  greeting(“Monica”)

  # Hello Monica

  greeting(“Barry”, “Hey”)

  # Hey Barry

- Keep in mind, default parameters must always come after regular parameters.

  # THIS IS BAD CODE AND WILL NOT RUN

  def increment(delta=1, value): return delta + value

- You can specify arguments by name without destructuring in Python.

  def greeting(name, saying=“Hello”): print(saying, name)

  # name has no default value, so just provide the value

  # saying has a default value, so use a keyword argument

  greeting(“Monica”, saying=“Hi”)

- The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

---

Notes Formatted Strings Remember that in Python join() is called on a string with an array/list passed in as the argument. shopping_list = \[‘bread’,‘milk’,‘eggs’\] print(‘,’.join(shopping_list)) Python has a very powerful formatting engine. format() is also applied directly to strings.

# Comma Thousands Separator

print(‘{:,}’.format(1234567890)) ‘1,234,567,890’

# Date and Time

d = datetime.datetime(2020, 7, 4, 12, 15, 58) print(‘{:%Y-%m-%d %H:%M:%S}’.format(d)) ‘2020-07-04 12:15:58’

# Percentage

points = 190 total = 220 print(‘Correct answers: {:.2%}’.format(points/total)) Correct answers: 86.36%

# Data Tables

width=8 print(’ decimal hex binary’) print(‘-’\*27) for num in range(1,16): for base in ‘dXb’: print(‘{0:{width}{base}}’.format(num, base=base, width=width), end=’ ‘) print() Getting Input from the Command Line Python runs synchronously, all programs and processes will stop when listening for a user input. The input function shows a prompt to a user and waits for them to type ’ENTER’. Scripts vs Programs Programming Script : A set of code that runs in a linear fashion. The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.

Python can be used to display html, css, and JS. We will be using Python as an API (Application Programming Interface)

Structured Data Sequence : The most basic data structure in Python where the index determines the order.

List Tuple Range Collections : Unordered data structures, hashable values.

Dictionaries Sets Iterable : Generic name for a sequence or collection; any object that can be iterated through. Can be mutable or immutable. Built In Data Types Lists are the python equivalent of arrays. empty_list = \[\] departments = \[‘HR’,‘Development’,‘Sales’,‘Finance’,‘IT’,‘Customer Support’\]

# You can instantiate

specials = list()

# Test if a value is in a list.

print(1 in \[1, 2, 3\]) \#&gt; True print(4 in \[1, 2, 3\]) \#&gt; False Tuples : Very similar to lists, but they are immutable

# Instantiated with parentheses

time_blocks = (‘AM’,‘PM’)

# Sometimes instantiated without

colors = ‘red’,‘blue’,‘green’ numbers = 1, 2, 3

# Tuple() built in can be used to convert other data into a tuple

tuple(‘abc’) \# returns (‘a’, ‘b’, ‘c’) tuple(\[1,2,3\]) \# returns (1, 2, 3) Think of tuples as constant variables.

Ranges : A list of numbers which can’t be changed; often used with for loops. Declared using one to three parameters. Start : opt. default 0, first \# in sequence. Stop : required next number past the last number in the sequence. Step : opt. default 1, difference between each number in the sequence. range(5) \# \[0, 1, 2, 3, 4\] range(1,5) \# \[1, 2, 3, 4\] range(0, 25, 5) \# \[0, 5, 10, 15, 20\] range(0) \# \[ \] for let (i = 0; i &lt; 5; i++) for let (i = 1; i &lt; 5; i++) for let (i = 0; i &lt; 25; i+=5) for let(i = 0; i = 0; i++) Keep in mind that stop is not included in the range.

Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary. Mutable. a = {‘one’:1, ‘two’:2, ‘three’:3} b = dict(one=1, two=2, three=3) c = dict(\[(‘two’, 2), (‘one’, 1), (‘three’, 3)\]) a, b, and c are all equal

Declared with curly braces of the built in dict()

Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.

Use the in operator to see if a key exists in a dictionary.

Sets : Unordered collection of distinct objects; objects that need to be hashable.

Always be unique, duplicate items are auto dropped from the set. Common Uses: Removing Duplicates Membership Testing Mathematical Operators: Intersection, Union, Difference, Symmetric Difference. Standard Set is mutable, Python has a immutable version called frozenset. Sets created by putting comma seperated values inside braces:

school_bag = {‘book’,‘paper’,‘pencil’,‘pencil’,‘book’,‘book’,‘book’,‘eraser’} print(school_bag)

# Also can use set constructor to automatically put it into a set.

letters = set(‘abracadabra’) print(letters) Built-In Functions Functions using iterables

filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.

map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.

sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.

Output is always a list key: opt function which coverts and item to a value to be compared. reverse: optional boolean. enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples

quarters = \[‘First’, ‘Second’, ‘Third’, ‘Fourth’\] print(enumerate(quarters)) print(enumerate(quarters, start=1))

# (0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)

# (1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)

zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable. Functions that analyze iterables

len(iterable) : returns the count of the number of items.

max(\*args, key=None) : returns the largest of two or more arguments.

max(iterable, key=None) : returns the largest item in the iterable.

key optional function which converts an item to a value to be compared. min works the same way as max

sum(iterable) : used with a list of numbers to generate the total.

There is a faster way to concatenate an array of strings into one string, so do not use sum for that. any(iterable) : returns True if any items in the iterable are true.

all(iterable) : returns True is all items in the iterable are true.

Working with dictionaries

dir(dictionary) : returns the list of keys in the dictionary. Working with sets

Union : The pipe | operator or union(\*sets) function can be used to produce a new set which is a combination of all elements in the provided set. a = {1, 2, 3} b = {2, 4, 6} print(a | b) \# =&gt; {1, 2, 3, 4, 6} Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets. a = {1, 2, 3} b = {2, 4, 6} print(a & b) \# =&gt; {2} Difference : The - operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.

Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.

a = {1, 2, 3} b = {2, 4, 6} print(a - b) \# =&gt; {1, 3} print(b - a) \# =&gt; {4, 6} print(a ^ b) \# =&gt; {1, 3, 4, 6} For Statements In python, there is only one for loop.

Always Includes: The for keyword A variable name The in keyword An iterable of some kid A colon On the next line, an indented block of code called the for clause. You can use break and continue statements inside for loops as well.

You can use the range function as the iterable for the for loop.

print(‘My name is’) for i in range(5): print(‘Carlita Cinco (’ + str(i) + ‘)’)

total = 0 for num in range(101): total += num print(total) Looping over a list in Python for c in \[‘a’, ‘b’, ‘c’\]: print(c)

lst = \[0, 1, 2, 3\] for i in lst: print(i) Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list. supplies = \[‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’\] for i in range(len(supplies)): print(‘Index’ + str(i) + ’ in supplies is: ’ + supplies\[i\]) You can loop and destructure at the same time. l = \[\[1, 2\], \[3, 4\], \[5, 6\]\] for a, b in l: print(a, ‘,’, b)

# Prints 1, 2

# Prints 3, 4

# Prints 5, 6

You can use values() and keys() to loop over dictionaries. spam = {‘color’: ‘red’, ‘age’: 42} for v in spam.values(): print(v)

# Prints red

# Prints 42

for k in spam.keys(): print(k)

# Prints color

# Prints age

For loops can also iterate over both keys and values.

# Getting tuples

for i in spam.items(): print(i)

# Prints (‘color’, ‘red’)

# Prints (‘age’, 42)

# Destructuring to values

for k, v in spam.items(): print(‘Key:’ + k + ’ Value: ’ + str(v))

# Prints Key: age Value: 42

# Prints Key: color Value: red

Looping over string for c in “abcdefg”: print(c) More On Functions Variable-length positional arguments : (_args) def add(a, b,_ args): total = a + b; for n in args: total += n return total

add(1, 2) \# Returns 3

add(2, 3, 4, 5) \# Returns 14 keyword arguments : (\*kwargs) def print_names_and_countries(greeting, \*\*kwargs): for k, v in kwargs.items(): print(greeting, k, “from”, v)

print_names_and_countries(“Hi”, Monica=“Sweden”, Charles=“British Virgin Islands”, Carlo=“Portugal”)

# Prints

# Hi Monica from Sweden

# Hi Charles from British Virgin Islands

# Hi Carlo from Portugal

When you order arguments within a function or function call, the args need to occur in a particular order: formal positional args. _args keyword args with default values \*\*kwargs def example(arg_1, arg_2,_ args, \*\*kwargs): pass

def example2(arg_1, arg_2, \*args, kw_1=“shark”, kw_2=“blowfish”, \*\*kwargs): pass Importing in Python Modules are similar to packages in Node.js Come in different types: Built-In, Third-Party, Custom. All loaded using import statements. Terms

module : Python code in a separate file. package : Path to a directory that contains modules. **init.py** : Default file for a package. submodule : Another file in a module’s folder. function : Function in a module.

A module can be any file but it is usually created by placing a special file **init**.py into a folder. pic

Try to avoid importing with wildcards in Python.

Use multiple lines for clarity when importing.

from urllib.request import ( HTTPDefaultErrorHandler as ErrorHandler, HTTPRedirectHandler as RedirectHandler, Request, pathname2url, url2pathname, urlopen, ) Watching Out for Python 2 Python 3 removed &lt;&gt; and only uses !=

format() was introduced with P3 All strings in P3 are unicode and encoded. md5 was removed. ConfigParser was renamed to configparser sets were killed in favor of set() class.

print was a statement in P2, but is a function in P3.

# Topics revisited (in python syntax)

    def say_hi(name):
        """<---- Multi-Line Comments and Docstrings
        This is where you put your content for help() to inform the user
        about what your function does and how to use it
        """
        print(f"Hello {name}!")


    print(say_hi("Michael"))  # Should get the print inside the function, then None

    # Boolean Values
    # Work the same as in JS, except they are title case: True and False
    a = True
    b = False

    # Logical Operators
    # ! = not, || = or, && = and
    print(True and True)
    print(True and not True)
    print(True or True)

    # Truthiness - Everything is True except...
    # False - None, False, '', [], (), set(), range(0)

    # Number Values
    # Integers are numbers without a floating decimal point
    print(type(3))  # type returns the type of whatever argument you pass in
    # Floating Point values are numbers with a floating decimal point
    print(type(3.5))

    # Type Casting
    # You can convert between ints and floats (along with other types...)
    print(float(3))  # If you convert a float to an int, it will truncate the decimal
    print(int(4.5))
    print(type(str(3)))
    # Python does not automatically convert types like JS
    # print(17.0 + ' heyooo ' + 17)  # TypeError

    # Arithmetic Operators
    # ** - exponent (comparable to Math.pow(num, pow))
    # // - integer division
    # There is no ++ or -- in Python

    # String Values
    # We can use single quotes, double quotes, or f'' for string formats
    # We can use triple single quotes for multiline strings
    print(
        """This here's a story
    All about how
    My life got twist
    Turned upside down
    """
    )

    # Three double quotes can also be used, but we typically reserve these for
    # multi-line comments and function docstrings (refer to lines 6-9)(Nice :D)
    # We use len() to get the length of something
    print(len("Michael"))  # 7 characters
    print(len(["hey", "ho", "hey", "hey", "ho"]))  # 5 list items
    print(len({1, 2, 3, 4, 5, 6, 7, 9}))  # 8 set items

    # We can index into strings, list, etc..self.
    name = "Michael"
    for i in range(len(name)):
        print(name[i])  # M, i, c, h, a, e, l

    # We can index starting from the end as well, with negatives
    occupation = "Full Stack Software Engineer"
    print(occupation[-3])  # e

    # We can also get ranges in the index with the [start:stop:step] syntax
    print(occupation[0:4:1])  # step and stop are optional, stop is exclusive
    print(occupation[::4])  # beginning to end, every 4th letter
    print(occupation[4:14:2])  # Let's get weird with it!
    # NOTE: Indexing out of range will give you an IndexError

    # We can also get the index og things with the .index() method, similar to indexOf()
    print(occupation.index("Stack"))
    print(["Mike", "Barry", "Cole", "James", "Mark"].index("Cole"))

    # We can count how many times a substring/item appears in something as well
    print(occupation.count("S"))
    print(
        """Now this here's a story all about how
    My life got twist turned upside down
    I forget the rest but the the the potato
    smells like the potato""".count(
            "the"
        )
    )

    # We concatenate the same as Javascript, but we can also multiply strings
    print("dog " + "show")
    print("ha" * 10)

    # We can use format for a multitude of things, from spaces to decimal places
    first_name = "Michael"
    last_name = "Shuff"
    print("Your name is {0} {1}".format(first_name, last_name))

    # Useful String Methods
    print("Hello".upper())  # HELLO
    print("Hello".lower())  # hello
    print("HELLO".islower())  # False
    print("HELLO".isupper())  # True
    print("Hello".startswith("he"))  # False
    print("Hello".endswith("lo"))  # True
    print("Hello There".split())  # [Hello, There]
    print("hello1".isalpha())  # False,  must consist only of letters
    print("hello1".isalnum())  # True, must consist of only letters and numbers
    print("3215235123".isdecimal())  # True, must be all numbers
    # True, must consist of only spaces/tabs/newlines
    print("       \n     ".isspace())
    # False, index 0 must be upper case and the rest lower
    print("MichaeL".istitle())
    print("Michael Lee".istitle())  # True!

    # Duck Typing - If it walks like a duck, and talks like a duck, it must be a duck
    # Assignment - All like JS, but there are no special keywords like let or const
    a = 3
    b = a
    c = "heyoo"
    b = ["reassignment", "is", "fine", "G!"]

    # Comparison Operators - Python uses the same equality operators as JS, but no ===
    # < - Less than
    # > - Greater than
    # <= - Less than or Equal
    # >= - Greater than or Equal
    # == - Equal to
    # != - Not equal to
    # is - Refers to exact same memory location
    # not - !
    # Precedence - Negative Signs(not) are applied first(part of each number)
    #            - Multiplication and Division(and) happen next
    #            - Addition and Subtraction(or) are the last step
    #  NOTE: Be careful when using not along with ==
    print(not a == b)  # True
    # print(a == not b) # Syntax Error
    print(a == (not b))  # This fixes it. Answer: False
    # Python does short-circuit evaluation

    # Assignment Operators - Mostly the same as JS except Python has **= and //= (int division)

    # Flow Control Statements - if, while, for
    # Note: Python smushes 'else if' into 'elif'!
    if 10 < 1:
        print("We don't get here")
    elif 10 < 5:
        print("Nor here...")
    else:
        print("Hey there!")

    # Looping over a string
    for c in "abcdefgh":
        print(c)

    # Looping over a range
    for i in range(5):
        print(i + 1)

    # Looping over a list
    lst = [1, 2, 3, 4]
    for i in lst:
        print(i)

    # Looping over a dictionary
    spam = {"color": "red", "age": 42, "items": [(1, "hey"), (2, "hooo!")]}
    for v in spam.values():
        print(v)

    # Loop over a list of tuples and destructuring the values
    # Assuming spam.items returns a list of tuples each containing two items (k, v)
    for k, v in spam.items():
        print(f"{k}: {v}")

    # While loops as long as the condition is True
    #  - Exit loop early with break
    #  - Exit iteration early with continue
    spam = 0
    while True:
        print("Heyy girrllll")
        spam += 1
        if spam < 5:
            continue
        break


    # Functions - use def keyword to define a function in Python
    def printCopyright():
        print("Copyright 2020, ya boi, Mike Shuff")


    # Lambdas are one liners! (Should be at least, you can use parenthesis to disobey)
    avg = lambda num1, num2: print(num1 + num2)

    avg(1, 2)
    # Calling it with keyword arguments, order does not matter
    avg(num2=20, num1=1252)
    printCopyright()

    # We can give parameters default arguments like JS
    def greeting(name, saying="Hello"):
        print(saying, name)


    greeting("Mike")  # Hello Mike
    greeting("Michael", saying="Hello there...")

    # A common gotcha is using a mutable object for a default parameter
    # All invocations of the function reference the same mutable object
    def append_item(item_name, item_list=[]):  # Will it obey and give us a new list?
        item_list.append(item_name)
        return item_list


    # Uses same item list unless otherwise stated which is counterintuitive
    print(append_item("notebook"))
    print(append_item("notebook"))
    print(append_item("notebook", []))

    # Errors - Unlike JS, if we pass the incorrect amount of arguments to a function,
    #          it will throw an error
    # avg(1)  # TypeError
    # avg(1, 2, 2) # TypeError

    # ----------------------------------- DAY 2 ----------------------------------------
    # Functions - * to get rest of position arguments as tuple
    #           - ** to get rest of keyword arguments as a dictionary
    # Variable Length positional arguments
    def add(a, b, *args):
        # args is a tuple of the rest of the arguments
        total = a + b
        for n in args:
            total += n
        return total


    print(add(1, 2))  # args is None, returns 3
    print(add(1, 2, 3, 4, 5, 6))  # args is (3, 4, 5, 6), returns 21

    # Variable Length Keyword Arguments
    def print_names_and_countries(greeting, **kwargs):
        # kwargs is a dictionary of the rest of the keyword arguments
        for k, v in kwargs.items():
            print(greeting, k, "from", v)


    print_names_and_countries(
        "Hey there", Monica="Sweden", Mike="The United States", Mark="China"
    )

    # We can combine all of these together
    def example2(arg1, arg2, *args, kw_1="cheese", kw_2="horse", **kwargs):
        pass


    # Lists are mutable arrays
    empty_list = []
    roomates = ["Beau", "Delynn"]
    # List built-in function makes a list too
    specials = list()
    # We can use 'in' to test if something is in the list, like 'includes' in JS
    print(1 in [1, 2, 4])  # True
    print(2 in [1, 3, 5])  # False

    # Dictionaries - Similar to JS POJO's or Map, containing key value pairs
    a = {"one": 1, "two": 2, "three": 3}
    b = dict(one=1, two=2, three=3)
    # Can use 'in' on dictionaries too (for keys)
    print("one" in a)  # True
    print(3 in b)  # False

    # Sets - Just like JS, unordered collection of distinct objects
    bedroom = {"bed", "tv", "computer", "clothes", "playstation 4"}
    # bedroom = set("bed", "tv", "computer", "clothes", "playstation 5")
    school_bag = set(
        ["book", "paper", "pencil", "pencil", "book", "book", "book", "eraser"]
    )
    print(school_bag)
    print(bedroom)
    # We can use 'in' on sets as wel
    print(1 in {1, 2, 3})  # True
    print(4 in {1, 3, 5})  # False

    # Tuples are immutable lists of items
    time_blocks = ("AM", "PM")
    colors = "red", "green", "blue"  # Parenthesis not needed but encouraged
    # The tuple built-in function can be used to convert things to tuples
    print(tuple("abc"))
    print(tuple([1, 2, 3]))
    # 'in' may be used on tuples as well
    print(1 in (1, 2, 3))  # True
    print(5 in (1, 4, 3))  # False

    # Ranges are immutable lists of numbers, often used with for loops
    #   - start - default: 0, first number in sequence
    #   - stop - required, next number past last number in sequence
    #   - step - default: 1, difference between each number in sequence
    range1 = range(5)  # [0,1,2,3,4]
    range2 = range(1, 5)  # [1,2,3,4]
    range3 = range(0, 25, 5)  # [0,5,10,15,20]
    range4 = range(0)  # []
    for i in range1:
        print(i)

    # Built-in functions:
    # Filter
    isOdd = lambda num: num % 2 == 1

    filtered = filter(isOdd, [1, 2, 3, 4])
    print(list(filtered))
    for num in filtered:
        print(f"first way: {num}")
    print("--" * 20)
    [print(f"list comprehension: {i}") for i in [1, 2, 3, 4, 5, 6, 7, 8] if i % 2 == 1]

    # Map
    def toUpper(str):
        return str.upper()


    upperCased = map(toUpper, ["a", "b", "c", "d"])
    print(list(upperCased))

    # Sorted
    sorted_items = sorted(["john", "tom", "sonny", "Mike"])
    print(list(sorted_items))  # Notice uppercase comes before lowercase
    # Using a key function to control the sorting and make it case insensitive
    sorted_items = sorted(["john", "tom", "sonny", "Mike"], key=str.lower)
    print(sorted_items)
    # You can also reverse the sort
    sorted_items = sorted(["john", "tom", "sonny", "Mike"], key=str.lower, reverse=True)
    print(sorted_items)

    # Enumerate creates a tuple with an index for what you're enumerating
    quarters = ["First", "Second", "Third", "Fourth"]
    print(list(enumerate(quarters)))
    print(list(enumerate(quarters, start=1)))

    # Zip takes list and combines them as key value pairs, or really however you need
    keys = ("Name", "Email")
    values = ("Buster", "cheetoh@johhnydepp.com")
    zipped = zip(keys, values)
    print(list(zipped))
    # You can zip more than 2
    x_coords = [0, 1, 2, 3, 4]
    y_coords = [4, 6, 10, 9, 10]
    z_coords = [20, 10, 5, 9, 1]
    coords = zip(x_coords, y_coords, z_coords)
    print(list(coords))

    # Len reports the length of strings along with list and any other object data type
    print_len = lambda item: print(len(item))  # doing this to save myself some typing

    print_len("Mike")
    print_len([1, 5, 2, 10, 3, 10])
    print_len({1, 5, 10, 9, 10})  # 4 because there is a duplicate here (10)
    print_len((1, 4, 10, 9, 20))

    # Max will return the max number in a given scenario
    print(max(1, 2, 35, 1012, 1))

    # Min
    print(min(1, 5, 2, 10))
    print(min([1, 4, 7, 10]))

    # Sum
    print(sum([1, 2, 4]))

    # Any
    print(any([True, False, False]))
    print(any([False, False, False]))

    # All
    print(all([True, True, False]))
    print(all([True, True, True]))

    # Dir returns all the attributes of an object including it's methods and dunder methods
    user = {"Name": "Bob", "Email": "bob@bob.com"}
    print(dir(user))

    # Importing packages and modules
    #  - Module - A Python code in a file or directory
    #  - Package - A module which is a directory containing an __init__.py file
    #  - Submodule - A module which is contained within a package
    #  - Name - An exported function, class, or variable in a module
    # Unlike JS, modules export ALL names contained within them without any special export key

    # Assuming we have the following package with four submodules
    #  math
    #  |  __init__.py
    #  | addition.py
    #  | subtraction.py
    #  | multiplication.py
    #  | division.py

    # If we peek into the addition.py file we see there's an add function
    # addition.py
    # We can import 'add' from other places because it's a 'name' and is automatically exported
    def add(num1, num2):
        return num1 + num2


    # Notice the . syntax because this package can import it's own submodules.
    # Our __init__.py has the following files
    # This imports the 'add' function
    # And now it's also re-exported in here as well
    # from .addition import add
    # These import and re-export the rest of the functions from the submodule
    # from .subtraction import subtract
    # from .division import divide
    # from .multiplication import multiply
    # So if we have a script.py and want to import add, we could do it many ways

    # This will load and execute the 'math/__init__.py' file and give
    # us an object with the exported names in 'math/__init__.py'
    import math

    # print(math.add(1,2))

    # This imports JUST the add from 'math/__init__.py'
    # from math import add

    # print(add(1, 2))

    # This skips importing from 'math/__init__.py' (although it still runs)
    # and imports directly from the addition.py file
    # from math.addition import add

    # This imports all the functions individually from 'math/__init__.py'
    # from math import add, subtract, multiply, divide

    # print(add(1, 2))
    # print(subtract(2, 1))

    # This imports 'add' renames it to 'add_some_numbers'
    # from math import add as add_some_numbers

    # --------------------------------------- DAY 3 ---------------------------------------
    # Classes, Methods, and Properties
    class AngryBird:
        # Slots optimize property access and memory usage and prevent you
        # from arbitrarily assigning new properties the instance
        __slots__ = ["_x", "_y"]

        # Constructor
        def __init__(self, x=0, y=0):
            # Doc String
            """
            Construct a new AngryBird by setting it's position to (0, 0)
            """
            ## Instance Variables
            self._x = x
            self._y = y

        # Instance Method
        def move_up_by(self, delta):
            self._y += delta

        # Getter
        @property
        def x(self):
            return self._x

        # Setter
        @x.setter
        def x(self, value):
            if value < 0:
                value = 0
            self._x = value

        @property
        def y(self):
            return self._y

        @y.setter
        def y(self, value):
            self._y = value

        # Dunder Repr... called by 'print'
        def __repr__(self):
            return f"<AngryBird ({self._x}, {self._y})>"


    # JS to Python Classes cheat table
    #        JS                    Python
    #   constructor()         def __init__(self):
    #      super()            super().__init__()
    #   this.property           self.property
    #    this.method            self.method()
    # method(arg1, arg2){}    def method(self, arg1, ...)
    # get someProperty(){}    @property
    # set someProperty(){}    @someProperty.setter

    # List Comprehensions are a way to transform a list from one format to another
    #  - Pythonic Alternative to using map or filter
    #  - Syntax of a list comprehension
    #     - new_list = [value loop condition]
    # Using a for loop
    squares = []
    for i in range(10):
        squares.append(i ** 2)
    print(squares)

    # value = i ** 2
    # loop = for i in range(10)
    squares = [i ** 2 for i in range(10)]
    print(list(squares))

    sentence = "the rocket came back from mars"
    vowels = [character for character in sentence if character in "aeiou"]
    print(vowels)

    # You can also use them on dictionaries. We can use the items() method
    # for the dictionary to loop through it getting the keys and values out at once
    person = {"name": "Corina", "age": 32, "height": 1.4}

    # This loops through and capitalizes the first letter of all keys
    newPerson = {key.title(): value for key, value in person.items()}
    print(list(newPerson.items()))
