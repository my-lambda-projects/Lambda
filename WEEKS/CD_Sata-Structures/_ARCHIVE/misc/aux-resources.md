# Aux Resources

## Aux Resources

&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD

### Notes I Wish I Had When I Started Learning Python <a id="de54"></a>

#### Plus resources for learning data structures and algorithms in python at the bottom of this article! <a id="55c5"></a>

[![Bryan Guner](https://miro.medium.com/fit/c/32/32/1*4fzEKCI8uJO85RqLCiNWLw.png)](https://bryanguner.medium.com/?source=post_page-----16ce4244be12--------------------------------)[Bryan Guner](https://bryanguner.medium.com/?source=post_page-----16ce4244be12--------------------------------)[Aug 24·22 min read](https://bryanguner.medium.com/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12?source=post_page-----16ce4244be12--------------------------------)![](https://miro.medium.com/max/1125/0*8zBTnh_6r7agz9wz.jpg)

### Basics <a id="9bfe"></a>

- **PEP8** : Python Enhancement Proposals, style-guide for Python.
- `print` is the equivalent of `console.log`.
- `#` is used to make comments in your code.

```text
def foo():
    """
    The foo function does many amazing things that you
    should not question. Just accept that it exists and
    use it with caution.
    """
    secretThing()
```

- Python has a built in help function that let’s you see a description of the source code without having to navigate to it.

### Numbers <a id="532f"></a>

- Python has three types of numbers:
- **Integer**
- Positive and Negative Counting Numbers.
- No Decimal Point
- Created by a literal non-decimal pt number or with the `int()` constructor.

```text
print(3) # => 3 print(int(19)) # => 19 print(int()) # => 0
```

- Boolean is a subtype of integer in Python.
- **Floating Point Number**
- Decimal Numbers.

```text
print(2.24) # => 2.24 print(2.) # => 2.0 print(float()) # => 0.0 print(27e-5) # => 0.00027
```

#### **Complex Numbers** <a id="5e6f"></a>

- Consist of a real part and imaginary part.
- The `i` is switched to a `j` in programming.

```text
print(7j) # => 7j print(5.1+7.7j)) # => 5.1+7.7j print(complex(3, 5)) # => 3+5j print(complex(17)) # => 17+0j print(complex()) # => 0j
```

#### **Type Casting** : The process of converting one number to another. <a id="8602"></a>

```text
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

- The arithmetic operators are the same between JS and Python, with two additions:
- “\*\*” : Double asterisk for exponent.
- “//” : Integer Division.
- There are no spaces between math operations in Python.
- Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.
- There are no `++` and `--` in Python, the only shorthand operators are:

![](https://miro.medium.com/max/34/0*kq_3dH4n7wsmAy7u.png?q=20)![](https://miro.medium.com/max/675/0*kq_3dH4n7wsmAy7u.png)

### Strings <a id="f071"></a>

- Python uses both single and double quotes.
- You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`
- Multiline strings use triple quotes.

```text
print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')
```

- Use the `len()` function to get the length of a string.

```text
print(len("Spaghetti")) # => 9
```

- Python uses `zero-based indexing`
- Python allows negative indexing \(thank god!\)

```text
print("Spaghetti"[-1]) # => i print("Spaghetti"[-4]) # => e
```

- Python let’s you use ranges

```text
print("Spaghetti"[1:4]) # => pag print("Spaghetti"[4:-1]) # => hett print("Spaghetti"[4:4]) # => (empty string)
```

- The end range is exclusive just like `slice` in JS.

```text
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```

- The `index` string function is the equiv. of `indexOf()` in JS

```text
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

- The `count` function finds out how many times a substring appears in a string.

```text
print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4
```

- You can use `+` to concatenate strings, just like in JS.
- You can also use “\*” to repeat strings or multiply strings.
- Use the `format()` function to use placeholders in a string to input values later on.

```text
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

- Shorthand way to use format function is: `print(f'Your name is {first_name} {last_name}')`
- Some useful string methods.
- Note that in JS `join` is used on an Array, in Python it is used on String.

![](https://miro.medium.com/max/34/0*36mwuAIxCl-f3m4H.png?q=20)![](https://miro.medium.com/max/788/0*36mwuAIxCl-f3m4H.png)

- There are also many handy testing methods.

![](https://miro.medium.com/max/34/0*BIsBBI09FpFa1ntJ.png?q=20)![](https://miro.medium.com/max/788/0*BIsBBI09FpFa1ntJ.png)

### Variables and Expressions <a id="3a98"></a>

- **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
- Duck Typing is the fundamental approach of Python.
- Assignment of a value automatically declares.

```text
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

- You can chain variable assignments to give multiple var names the same value.
- Use with caution as this is highly unreadable

```text
count = max = min = 0
print(count)           # => 0
print(max)             # => 0
print(min)             # => 0
```

- The value and type of a variable can be re-assigned at any time.

```text
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

- `NaN` does not exist in Python, but you can 'create' it like so: `print(float("nan"))`
- Python replaces `null` with `none`.
- `none` is an object and can be directly assigned to a variable.
- Using none is a convenient way to check to see why an action may not be operating correctly in your program.

### Boolean Data Type <a id="ce8b"></a>

- One of the biggest benefits of Python is that it reads more like English than JS does.

![](https://miro.medium.com/max/788/0*eNmuDtlv7vr6a3Wc.png)

```text
# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
```

- By default, Python considers an object to be true UNLESS it is one of the following:
- Constant `None` or `False`
- Zero of any numeric type.
- Empty Sequence or Collection.
- `True` and `False` must be capitalized

### Comparison Operators <a id="9dc1"></a>

- Python uses all the same equality operators as JS.
- In Python, equality operators are processed from left to right.
- Logical operators are processed in this order:
- **NOT**
- **AND**
- **OR**
- Just like in JS, you can use `parentheses` to change the inherent order of operations.
- **Short Circuit** : Stopping a program when a `true` or `false` has been reached.

![](https://miro.medium.com/max/34/0*nlYkqe_JubdBB2mv.png?q=20)![](https://miro.medium.com/max/788/0*nlYkqe_JubdBB2mv.png)

### Identity vs Equality <a id="7377"></a>

```text
print (2 == '2')    # => False
print (2 is '2')    # => Falseprint ("2" == '2')    # => True
print ("2" is '2')    # => True# There is a distinction between the number types.
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

- In the Python community it is better to use `is` and `is not` over `==` or `!=`

### If Statements <a id="11e6"></a>

```text
if name == 'Monica':
    print('Hi, Monica.')if name == 'Monica':
    print('Hi, Monica.')
else:
    print('Hello, stranger.')if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 2000:
   print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
   print('You are not Monica, grannie.')
```

- Remember the order of `elif` statements matter.

### While Statements <a id="df32"></a>

```text
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```

- `Break` statement also exists in Python.

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```

- As are `continue` statements

```text
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam < 5:
    continue
  break
```

### Try/Except Statements <a id="df5c"></a>

- Python equivalent to `try/catch`

```text
a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')    # Optionally include a correction to the issue
    a = str(a)
    print(len(a)a = '321'
try:
    print(len(a))
except:
    print('Silently handle error here')    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
```

- You can name an error to give the output more specificity.

```text
a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
print(c)
```

- You can also use the `pass` commmand to by pass a certain error.

```text
a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass
```

- The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

```text
a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")
```

- You can use an `else` statement to end a chain of `except` statements.

```text
# tuple of file names
files = ('one.txt', 'two.txt', 'three.txt')# simple loop
for filename in files:
    try:
        # open the file in read mode
        f = open(filename, 'r')
    except OSError:
        # handle the case where file does not exist or permission is denied
        print('cannot open file', filename)
    else:
        # do stuff with the file object (f)
        print(filename, 'opened successfully')
        print('found', len(f.readlines()), 'lines')
        f.close()
```

- `finally` is used at the end to clean up all actions under any circumstance.

```text
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Cannot divide by zero")
    else:
        print("Result is", result)
    finally:
        print("Finally...")
```

- Using duck typing to check to see if some value is able to use a certain method.

```text
# Try a number - nothing will print out
a = 321
if hasattr(a, '__len__'):
    print(len(a))# Try a string - the length will print out (4 in this case)
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))
```

### Pass <a id="7db4"></a>

- Pass Keyword is required to write the JS equivalent of :

```text
if (true) {
}while (true) {}if True:
  passwhile True:
  pass
```

### Functions <a id="953a"></a>

- **Function** definition includes:
- The `def` keyword
- The name of the function
- A list of parameters enclosed in parentheses.
- A colon at the end of the line.
- One tab indentation for the code to run.

```text
def printCopyright():
    print("Copyright 2020. Me, myself and I. All rights reserved.")
```

- You can use default parameters just like in JS

```text
def greeting(name, saying="Hello"):
    print(saying, name)greeting("Monica")
# Hello Monicagreeting("Barry", "Hey")
# Hey Barry
```

- Keep in mind, default parameters must always come after regular parameters.

```text
# THIS IS BAD CODE AND WILL NOT RUN
def increment(delta=1, value):
    return delta + value
```

- You can specify arguments by name without destructuring in Python.

```text
def greeting(name, saying="Hello"):
    print(saying, name)# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")
```

- The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

### Notes <a id="c7cf"></a>

### Formatted Strings <a id="1d1d"></a>

- Remember that in Python `join()` is called on a string with an array/list passed in as the argument.

```text
shopping_list = ['bread','milk','eggs']
print(','.join(shopping_list))
```

- Python has a very powerful formatting engine.
- `format()` is also applied directly to strings.

```text
# Comma Thousands Separator
 print('{:,}'.format(1234567890))
  '1,234,567,890'# Date and Time
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print('{:%Y-%m-%d %H:%M:%S}'.format(d))
'2020-07-04 12:15:58'# Percentage
points = 190
total = 220
print('Correct answers: {:.2%}'.format(points/total))
Correct answers: 86.36%# Data Tables
width=8
print(' decimal      hex   binary')
print('-'*27)
for num in range(1,16):
    for base in 'dXb':
        print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
    print()
```

### Getting Input from the Command Line <a id="9d88"></a>

- Python runs synchronously, all programs and processes will stop when listening for a user input.
- The `input` function shows a prompt to a user and waits for them to type 'ENTER'.

### Scripts vs Programs <a id="49e9"></a>

- **Programming Script** : A set of code that runs in a linear fashion.
- The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.
- Python can be used to display html, css, and JS.
- We will be using Python as an API \(Application Programming Interface\)

### Structured Data <a id="40e0"></a>

- **Sequence** : The most basic data structure in Python where the index determines the order.
- List
- Tuple
- Range

**Collections** : Unordered data structures, hashable values.

- Dictionaries
- Sets
- **Iterable** : Generic name for a sequence or collection; any object that can be iterated through.
- Can be mutable or immutable.

### Built In Data Types <a id="53bb"></a>

- **Lists** are the python equivalent of arrays.

```text
empty_list = []
departments = ['HR','Development','Sales','Finance','IT','Customer Support']# You can instantiate
specials = list()# Test if a value is in a list.
print(1 in [1, 2, 3]) #> True
print(4 in [1, 2, 3]) #> False
```

- **Tuples** : Very similar to lists, but they are `immutable`

```text
# Instantiated with parentheses
time_blocks = ('AM','PM')# Sometimes instantiated without
colors = 'red','blue','green'
numbers = 1, 2, 3# Tuple() built in can be used to convert other data into a tuple
tuple('abc')        # returns ('a', 'b', 'c')
tuple([1,2,3])      # returns (1, 2, 3)
```

- Think of tuples as constant variables.
- **Ranges** : A list of numbers which can’t be changed; often used with `for` loops.
- Declared using one to three parameters.
- **Start** : opt. default 0, first \# in sequence.
- **Stop** : `required` next number past the last number in the sequence.
- **Step** : opt. default 1, difference between each number in the sequence.

```text
range(5)            # [0, 1, 2, 3, 4]
range(1,5)          # [1, 2, 3, 4]
range(0, 25, 5)     # [0, 5, 10, 15, 20]
range(0)            # [ ]for let (i = 0; i < 5; i++)
for let (i = 1; i < 5; i++)
for let (i = 0; i < 25; i+=5)
for let(i = 0; i = 0; i++)
```

- Keep in mind that `stop` is not included in the range.
- **`Dictionaries`** : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.
- Mutable.

```text
a = {'one':1, 'two':2, 'three':3}
b = dict(one=1, two=2, three=3)
c = dict([('two', 2), ('one', 1), ('three', 3)])
```

> _a, b, and c are all equal_

- Declared with curly braces of the built in `dict()`
- Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal.
- Use the `in` operator to see if a key exists in a dictionary.

#### **Sets** : Unordered collection of distinct objects; objects that **need** to be hashable. <a id="06db"></a>

- Always be unique, duplicate items are auto dropped from the set.
- **Common Uses**:
- Removing Duplicates
- Membership Testing
- Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.
- Standard Set is mutable, Python has a immutable version called `frozenset`.
- Sets created by putting comma seperated values inside braces:

```text
school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'}
print(school_bag)# Also can use set constructor to automatically put it into a set.
letters = set('abracadabra')
print(letters)
```

### Built-In Functions <a id="dbc7"></a>

**Functions using iterables**

- **filter\(function, iterable\)** : creates new iterable of the same type which includes each item for which the function returns true.
- **map\(function, iterable\)** : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.
- **sorted\(iterable, key=None, reverse=False\)** : creates a new sorted list from the items in the iterable.
- Output is always a `list`
- `key`: opt function which coverts and item to a value to be compared.
- `reverse`: optional boolean.
- **enumerate\(iterable, start=0\)** : starts with a sequence and converts it to a series of tuples

```text
quarters = ['First', 'Second', 'Third', 'Fourth']
print(enumerate(quarters))
print(enumerate(quarters, start=1))# (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth')
# (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth')
```

- **zip\(\*iterables\)** : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.

**Functions that analyze iterables**

- **len\(iterable\)** : returns the count of the number of items.
- **max\(\*args, key=None\)** : returns the largest of two or more arguments.
- **max\(iterable, key=None\)** : returns the largest item in the iterable.
- `key` optional function which converts an item to a value to be compared.
- **min** works the same way as `max`
- **sum\(iterable\)** : used with a list of numbers to generate the total.
- There is a faster way to concatenate an array of strings into one string, so do not use sum for that.
- **any\(iterable\)** : returns True if any items in the iterable are true.
- **all\(iterable\)** : returns True is all items in the iterable are true.

**Working with dictionaries**

- **dir\(dictionary\)** : returns the list of keys in the dictionary.

**Working with sets**

- **Union** : The pipe \| operator or `union(*sets)` function can be used to produce a new set which is a combination of all elements in the provided set.

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b)        # => {1, 2, 3, 4, 6}
```

- **Intersection** : The & operator ca be used to produce a new set of only the elements that appear in all sets.

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a & b)        # => {2}
```

- **Difference** : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.
- **Symmetric Difference** : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.

```text
a = {1, 2, 3}
b = {2, 4, 6}
print(a - b)        # => {1, 3}
print(b - a)        # => {4, 6}
print(a ^ b)        # => {1, 3, 4, 6}
```

### For Statements <a id="5721"></a>

- In python, there is only one for loop.
- Always Includes:
- The `for` keyword
- A variable name
- The `in` keyword
- An iterable of some kid
- A colon
- On the next line, an indented block of code called the `for` clause.
- You can use `break` and `continue` statements inside for loops as well.
- You can use the range function as the iterable for the `for` loop.

```text
print('My name is')
for i in range(5):
   print('Carlita Cinco (' + str(i) + ')')total = 0
for num in range(101):
    total += num
print(total)
```

- Looping over a list in Python

```text
for c in ['a', 'b', 'c']:
    print(c)lst = [0, 1, 2, 3]
for i in lst:
    print(i)
```

- Common technique is to use the len\(\) on a pre-defined list with a for loop to iterate over the indices of the list.

```text
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])
```

- You can loop and destructure at the same time.

```text
l = [[1, 2], [3, 4], [5, 6]]
for a, b in l:
    print(a, ', ', b)# Prints 1, 2
# Prints 3, 4
# Prints 5, 6
```

- You can use `values()` and `keys()` to loop over dictionaries.

```text
spam = {'color': 'red', 'age': 42}
for v in spam.values():
    print(v)# Prints red
# Prints 42for k in spam.keys():
    print(k)# Prints color
# Prints age
```

- For loops can also iterate over both keys and values.

```text
# Getting tuples
for i in spam.items():
    print(i)# Prints ('color', 'red')
# Prints ('age', 42)
# Destructuring to values
for k, v in spam.items():
    print('Key: ' + k + ' Value: ' + str(v))# Prints Key: age Value: 42
# Prints Key: color Value: red
```

- Looping over string

```text
for c in "abcdefg":
    print(c)
```

### More On Functions <a id="8b86"></a>

- **Variable-length positional arguments** : \(\*args\)

```text
def add(a, b, *args):
    total = a + b;
    for n in args:
        total += n
    return totaladd(1, 2)  # Returns 3add(2, 3, 4, 5) # Returns 14
```

- **keyword arguments** : \(\*kwargs\)

```text
def print_names_and_countries(greeting, **kwargs):
    for k, v in kwargs.items():
        print(greeting, k, "from", v)print_names_and_countries("Hi",
                          Monica="Sweden",
                          Charles="British Virgin Islands",
                          Carlo="Portugal")
# Prints
# Hi Monica from Sweden
# Hi Charles from British Virgin Islands
# Hi Carlo from Portugal
```

- When you order arguments within a function or function call, the args need to occur in a particular order:
- formal positional args.
- \*args
- keyword args with default values
- \*\*kwargs

```text
def example(arg_1, arg_2, *args, **kwargs):
  passdef example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
  pass
```

### Importing in Python <a id="162d"></a>

- Modules are similar to packages in Node.js
- Come in different types: Built-In, Third-Party, Custom.
- All loaded using `import` statements.

**Terms**

- **module** : Python code in a separate file.
- **package** : Path to a directory that contains modules.
- \***\*init**.py\*\* : Default file for a package.
- **submodule** : Another file in a module’s folder.
- **function** : Function in a module.
- A module can be any file but it is usually created by placing a special file `__init__.py` into a folder.
- Try to avoid importing with wildcards in Python.
- Use multiple lines for clarity when importing.

```text
from urllib.request import (
  HTTPDefaultErrorHandler as ErrorHandler,
  HTTPRedirectHandler as RedirectHandler,
  Request,
  pathname2url,
  url2pathname,
  urlopen,
)
```

### Watching Out for Python 2 <a id="aef9"></a>

- Python 3 removed `<>` and only uses `!=`
- `format()` was introduced with P3
- All strings in P3 are unicode and encoded.
- `md5` was removed.
- `ConfigParser` was renamed to `configparser`
- `sets` were killed in favor of `set()` class.
- `print` was a statement in P2, but is a function in P3.

### Classes In Python <a id="c906"></a>

- Classes are a way of combining information and behavior.
- Classes are blueprints to make objects.

```text
class AngryBird {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}class AngryBird:
    def __init__(self):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0
```

- Both JS and PY use the `class` keyword to declare classes.
- `constructor` == `__init__`
- `this` == `self`

```text
bird = AngryBird()
print(bird.x, bird.y)  #> 0 0class AngryBird:
    def __init__(self):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0    def move_up_by(self, delta):
        self.y += delta
```

- Note how you do not need to define `self` it is already bound to the class.
- It is good practice to write a comment at the beginning of your class, describing the class.

**Dunder Methods**

- Double Underscore Methods, special built in functions that PY uses in certain ways.
- i.e. `__init__()` lets you make sure all relevant attributes are set to their proper values when an object is created from the class.
- The `self` keyword refers to the current object that you are working with.
- Method is a function that is part of a class.

```text
class AngryBird:
    def __init__(self):
        self.x = 0
        self.y = 0    def move_up_by(self, delta):
        self.y += delta
bird = AngryBird()
print(bird)
print(bird.y)
bird.move_up_by(5)
print(bird.y)
```

- _Use one leading underscore only for non-public methods and instance variables_

```text
class AngryBird:
    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y    def move_up_by(self, delta):
        self._y += delta    def get_x(self):
        return self._x    def get_y(self):
        return self._y
```

- _All instance variables should be considered non-public_
- \***\*slots\*\*** : Dunder class variable used to reserve memory for the instance variables that you know will you will use.

```text
class AngryBird:
    __slots__ = ['_x', '_y']    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y    def move_up_by(self, delta):
        self._y += delta    def get_x(self):
        return self._x    def get_y(self):
        return self._y
```

- You can use `__repr__()` to override the behavior of printing out a class in a verbose manner.

```text
class AngryBird:
    __slots__ = ['_x', '_y']    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y    def move_up_by(self, delta):
        self._y += delta    def get_x(self):
        return self._x    def get_y(self):
        return self._y    def __repr__(self):
        return f"<AngryBird ({self._x}, {self._y})>"
```

### Properties for Classes <a id="035e"></a>

- Getters and Setters are used in object-oriented programming to add validation logic around getting and setting a value.

**Getters**

```text
bird = AngryBird()print(bird.get_x(), bird.get_y())
```

- Getting the x and y values of our class can get very cumbersome.
- **Decorators** : Allow us to change the way methods get invoked.
- Always start with the @ symbol.
- Can be applied to methods, classes, and parameters.
- Built in decorator named `property` that you can apply to a method to make it readable.

```text
@property
    def x(self):
        return self._x @property
    def y(self):
        return self._y bird = AngryBird() print(bird.x, bird.y)
```

**Setters**

```text
class AngryBird:
    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y    def move_up_by(self, delta):
        self._y += delta    @property
    def x(self):
        return self._x    @x.setter
    def x(self, value):
        if value < 0:
            value = 0
        self._x = value    @property
    def y(self):
        return self._y    @y.setter
    def y(self, value):
        if value < 0:
            value = 0
        self._y = value
```

### List Comprehensions <a id="7ab5"></a>

- List comprehensions are the equivalent of wrapped up filter namp array methods while also allowing nested loops.
- `new_list = [expression for member in iterable]`
- **expression** : member itself, a call to a methd, or any other valid expression that returns a value.
- **member** : object or value in the list or iterable.
- **iterable** : iterable.

`new_list = [expression for member in iterable (if conditional)]`

- Adding a conditional into a list comprehension.

```text
sentence = 'Mary, Mary, quite contrary, how does your garden grow?'
def is_consonant(letter):
    vowels = "aeiou"
    return letter.isalpha() and letter.lower() not in vowelsconsonants = [i for i in sentence if is_consonant(i)]print(consonants)
# Prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c',
# 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y',
# 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']
```

**When to not use list comprehensions**

- List comprehensions may make your code run more slowly or use more memory.
- You can use nest lists to create matrices.

```text
matrix = [[i for i in range(5)] for _ in range(6)]print(matrix)
# Prints
# [
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4]
# ]
```

### My Blog: <a id="fe0e"></a>

[Web-Dev-HubMemoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…master--bgoonz-blog.netlify.app](https://master--bgoonz-blog.netlify.app/)

### Python Data Structures & Algorithms Resources: <a id="c07d"></a>

- [The Framework for Learning Algorithms and intense problem solving exercises](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md)
- [Algs4: Recommended book for Learning Algorithms and Data Structures](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md)
- [An analysis of Dynamic Programming](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md)
- [Dynamic Programming Q&A — What is Optimal Substructure](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md)
- [The Framework for Backtracking Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md)
- [Binary Search in Detail: I wrote a Poem](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md)
- [The Sliding Window Technique](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md)
- [Difference Between Process and Thread in Linux](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md)
- [Some Good Online Practice Platforms](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md)
- [Dynamic Programming in Details](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/AnalysisOfDynamicProgramming.md)
- [Dynamic Programming Q&A — What is Optimal Substructure](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/OptimalSubstructure.md)
- [Classic DP: Longest Common Subsequence](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestCommonSubsequence.md)
- [Classic DP: Edit Distance](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md)
- [Classic DP: Super Egg](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/ThrowingEggsinHighBuildings.md)
- [Classic DP: Super Egg \(Advanced Solution\)](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/SuperEggDropAdvanced.md)
- [The Strategies of Subsequence Problem](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/StrategiesForSubsequenceProblem.md)
- [Classic DP: Game Problems](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/GameProblemsInDynamicProgramming.md)
- [Greedy: Interval Scheduling](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/IntervalScheduling.md)
- [KMP Algorithm In Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/KMPCharacterMatchingAlgorithmInDynamicProgramming.md)
- [A solution to all Buy Time to Buy and Sell Stock Problems](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/BestTimeToBuyAndSellStock.md)
- [A solution to all House Robber Problems](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/HouseRobber.md)
- [4 Keys Keyboard](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/FourKeysKeyboard.md)
- [Regular Expression](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/RegularExpression.md)
- [Longest Increasing Subsequence](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/LongestIncreasingSubsequence.md)
- [The Framework for Learning Algorithms and intense problem solving exercises](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md)
- [Algs4: Recommended book for Learning Algorithms and Data Structures](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/why_i_recommend_algs4.md)
- [Binary Heap and Priority Queue](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/binary_heap_implements_priority_queues.md)
- [LRU Cache Strategy in Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md)
- [Collections of Binary Search Operations](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/The_Manipulation_Collection_of_Binary_Search_Tree.md)
- [Special Data Structure: Monotonic Stack](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/MonotonicStack.md)
- [Special Data Structure: Monotonic Stack](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Monotonic_queue.md)
- [Design Twitter](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/design_Twitter.md)
- [Reverse Part of Linked List via Recursion](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/reverse_part_of_a_linked_list_via_recursion.md)
- [Queue Implement Stack/Stack implement Queue](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/ImplementQueueUsingStacksImplementStackUsingQueues.md)
- [My Way to Learn Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/ThewaytoAlgorithmlearning.md)
- [The Framework of Backtracking Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailsaboutBacktracking.md)
- [Binary Search in Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/DetailedBinarySearch.md)
- [Backtracking Solve Subset/Permutation/Combination](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Subset_Permutation_Combination.md)
- [Diving into the technical parts of Double Pointers](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/double_pointer.md)
- [Sliding Window Technique](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/SlidingWindowTechnique.md)
- [The Core Concept of TwoSum Problems](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/The_key_to_resolving_TwoSum_problems.md)
- [Common Bit Manipulations](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/CommonBitManipulation.md)
- [Breaking down a Complicated Problem: Implement a Calculator](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/Implementing_the_functions_of_a_calculator.md)
- [Pancake Sorting Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/PancakesSorting.md)
- [Prefix Sum: Intro and Concept](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/prefix_sum.md)
- [String Multiplication](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/string_multiplication.md)
- [FloodFill Algorithm in Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/flood_fill.md)
- [Interval Scheduling: Interval Merging](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalMerging.md)
- [Interval Scheduling: Intersections of Intervals](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/IntervalIntersection.md)
- [Russian Doll Envelopes Problem](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/RussianDollEnvelopes.md)
- [A collection of counter-intuitive Probability Problems](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/several_counter_intuitive_probability_problems.md)
- [Shuffle Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Shuffle_Algorithm.md)
- [Recursion In Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/data_structure/RecursionInDetail.md)
- [How to Implement LRU Cache](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/LRU_algorithm.md)
- [How to Find Prime Number Efficiently](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Print_PrimeNumbers.md)
- [How to Calculate Minimium Edit Distance](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/dynamic_programming/EditDistance.md)
- [How to use Binary Search](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/UsingBinarySearchAlgorithm.md)
- [How to efficiently solve Trapping Rain Water Problem](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Trapping_Rain_Water.md)
- [How to Remove Duplicates From Sorted Array](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/RemoveDuplicatesfromSortedArray.md)
- [How to Find Longest Palindromic Substring](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/TheLongestPalindromicSubstring.md)
- [How to Reverse Linked List in K Group](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/reverse-nodes-in-k-group.md)
- [How to Check the Validation of Parenthesis](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/valid-parentheses.md)
- [How to Find Missing Element](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/missing_elements.md)
- [How to Find Duplicates and Missing Elements](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Find-Duplicate-and-Missing-Element.md)
- [How to Check Palindromic LinkedList](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/check_palindromic_linkedlist.md)
- [How to Pick Elements From an Infinite Arbitrary Sequence](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/ReservoirSampling.md)
- [How to Schedule Seats for Students](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/Seatscheduling.md)
- [Union-Find Algorithm in Detail](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-find-Explanation.md)
- [Union-Find Application](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/think_like_computer/Union-Find-Application.md)
- [Problems that can be solved in one line](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/one-line-code-puzzles.md)
- [Find Subsequence With Binary Search](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/interview/findSebesquenceWithBinarySearch.md)
- [Difference Between Process and Thread in Linux](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxProcess.md)
- [You Must Know About Linux Shell](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/linuxshell.md)
- [You Must Know About Cookie and Session](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/SessionAndCookie.md)
- [Cryptology Algorithm](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/Cryptology.md)
- [Some Good Online Practice Platforms](https://72a70b9d-739e-477a-bd84-85357c883a09.vscode-webview-test.com/vscode-resource/file///c:/MY-WEB-DEV/_JOB-SEARCH/03-Interview-Prep/01-reference-guides/common_knowledge/OnlinePraticePlatform.md)

### Algorithms: <a id="7664"></a>

- [100 days of algorithms](https://github.com/coells/100days)
- [Algorithms](https://github.com/marcosfede/algorithms) — Solved algorithms and data structures problems in many languages.
- [Algorithms by Jeff Erickson](http://jeffe.cs.illinois.edu/teaching/algorithms/) \([Code](https://github.com/jeffgerickson/algorithms)\) \([HN](https://news.ycombinator.com/item?id=26074289)\)
- [Top algos/DS to learn](https://www.reddit.com/r/compsci/comments/5uz9lb/top_algorithmsdata_structuresconcepts_every/ddy8azz/)
- [Some neat algorithms](https://www.nayuki.io/category/programming)
- [Mathematical Proof of Algorithm Correctness and Efficiency \(2019\)](https://stackabuse.com/mathematical-proof-of-algorithm-correctness-and-efficiency/)
- [Algorithm Visualizer](https://github.com/algorithm-visualizer/algorithm-visualizer) — Interactive online platform that visualizes algorithms from code.
- [Algorithms for Optimization book](https://mitpress.mit.edu/books/algorithms-optimization)
- [Collaborative book on algorithms](https://www.algorithm-archive.org/) \([Code](https://github.com/algorithm-archivists/algorithm-archive)\)
- [Algorithms in C by Robert Sedgewick](http://index-of.co.uk/Algorithms/Algorithms%20in%20C.pdf)
- [Algorithm Design Manual](http://mimoza.marmara.edu.tr/~msakalli/cse706_12/SkienaTheAlgorithmDesignManual.pdf)
- [MIT Introduction to Algorithms course \(2011\)](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)
- [How to implement an algorithm from a scientific paper \(2012\)](http://codecapsule.com/2012/01/18/how-to-implement-a-paper/)
- [Quadsort](https://github.com/scandum/quadsort) — Stable non-recursive merge sort named quadsort.
- [System design algorithms](https://github.com/resumejob/system-design-algorithms) — Algorithms you should know before system design.
- [Algorithms Design book](http://www.cs.sjtu.edu.cn/~jiangli/teaching/CS222/files/materials/Algorithm%20Design.pdf)
- [Think Complexity](http://greenteapress.com/complexity/html/index.html)
- [All Algorithms implemented in Rust](https://github.com/TheAlgorithms/Rust)
- [Solutions to Introduction to Algorithms book](https://walkccc.github.io/CLRS/) \([Code](https://github.com/walkccc/CLRS)\)
- [Maze Algorithms \(2011\)](https://www.jamisbuck.org/mazes/) \([HN](https://news.ycombinator.com/item?id=23429368)\)
- [Algorithmic Design Paradigms book](https://page.skerritt.blog/algorithms/) \([Code](https://github.com/brandonskerritt/AlgorithmsBook)\)
- [Words and buttons Online Blog](https://wordsandbuttons.online/) \([Code](https://github.com/akalenuk/wordsandbuttons)\)
- [Algorithms animated](https://www.chrislaux.com/)
- [Cache Oblivious Algorithms \(2020\)](https://jiahai-feng.github.io/posts/cache-oblivious-algorithms/) \([HN](https://news.ycombinator.com/item?id=23662434)\)
- [You could have invented fractional cascading \(2012\)](http://blog.ezyang.com/2012/03/you-could-have-invented-fractional-cascading/)
- [Guide to learning algorithms through LeetCode](https://labuladong.gitbook.io/algo-en/) \([Code](https://github.com/labuladong/fucking-algorithm/tree/english)\) \([HN](https://news.ycombinator.com/item?id=24167297)\)
- [How hard is unshuffling a string?](https://cstheory.stackexchange.com/questions/34/how-hard-is-unshuffling-a-string)
- [Optimization Algorithms on Matrix Manifolds](https://sites.uclouvain.be/absil/amsbook/)
- [Problem Solving with Algorithms and Data Structures](https://runestone.academy/runestone/books/published/pythonds/index.html) \([HN](https://news.ycombinator.com/item?id=24287622)\) \([PDF](https://www.cs.auckland.ac.nz/compsci105s1c/resources/ProblemSolvingwithAlgorithmsandDataStructures.pdf)\)
- [Algorithms implemented in Python](https://github.com/TheAlgorithms/Python)
- [Algorithms implemented in JavaScript](https://github.com/TheAlgorithms/Javascript)
- [Algorithms & Data Structures in Java](https://github.com/williamfiset/Algorithms)
- [Wolfsort](https://github.com/scandum/wolfsort) — Stable adaptive hybrid radix / merge sort.
- [Evolutionary Computation Bestiary](https://github.com/fcampelo/EC-Bestiary) — Bestiary of evolutionary, swarm and other metaphor-based algorithms.
- [Elements of Programming book](http://elementsofprogramming.com/) — Decomposing programs into a system of algorithmic components. \([Review](http://www.pathsensitive.com/2020/09/book-review-elements-of-programmnig.html)\) \([HN](https://news.ycombinator.com/item?id=24635947)\) \([Lobsters](https://lobste.rs/s/bqnhbo/book_review_elements_programmnig)\)
- [Competitive Programming Algorithms](https://cp-algorithms.com/)
- [CPP/C](https://github.com/akshitagit/CPP) — C/C++ algorithms/DS problems.
- [How to design an algorithm \(2018\)](https://www.adamconrad.dev/blog/how-to-design-an-algorithm/)
- [CSE 373 — Introduction to Algorithms, by Steven Skiena \(2020\)](https://www.youtube.com/playlist?list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx)
- [Computer Algorithms II course \(2020\)](http://homepages.math.uic.edu/~lreyzin/f20_mcs501/)
- [Improving Binary Search by Guessing \(2019\)](https://notebook.drmaciver.com/posts/2019-04-30-13:03.html)
- [The case for a learned sorting algorithm \(2020\)](https://blog.acolyer.org/2020/10/19/the-case-for-a-learned-sorting-algorithm/) \([HN](https://news.ycombinator.com/item?id=24823611)\)
- [Elementary Algorithms](https://github.com/liuxinyu95/AlgoXY) — Introduces elementary algorithms and data structures. Includes side-by-side comparisons of purely functional realization and their imperative counterpart.
- [Combinatorics Algorithms for Coding Interviews \(2018\)](https://sahandsaba.com/combinatorial-generation-for-coding-interviews-in-python.html)
- [Algorithms written in different programming languages](https://github.com/ZoranPandovski/al-go-rithms) \([Web](https://zoranpandovski.github.io/al-go-rithms/)\)
- [Solving the Sequence Alignment problem in Python \(2020\)](https://johnlekberg.com/blog/2020-10-25-seq-align.html)
- [The Sound of Sorting](https://github.com/bingmann/sound-of-sorting) — Visualization and “Audibilization” of Sorting Algorithms. \([Web](https://panthema.net/2013/sound-of-sorting/)\)
- [Miniselect: Practical and Generic Selection Algorithms \(2020\)](https://danlark.org/2020/11/11/miniselect-practical-and-generic-selection-algorithms/)
- [The Slowest Quicksort \(2019\)](https://chasewilson.dev/blog/slowest-quicksort/)
- [Functional Algorithm Design \(2020\)](https://blog.sigplan.org/2020/11/17/functional-algorithm-design-part-0/)
- [Algorithms To Live By — Book Notes](https://milofultz.com/2020/12/27/atlb-notes)
- [Numerical Algorithms \(2015\)](http://people.csail.mit.edu/jsolomon/share/book/numerical_book.pdf)
- [Using approximate nearest neighbor search in real world applications \(2020\)](https://blog.vespa.ai/using-approximate-nearest-neighbor-search-in-real-world-applications/)
- [In search of the fastest concurrent Union-Find algorithm \(2019\)](https://arxiv.org/pdf/1911.06347.pdf)
- [Computer Science 521 Advanced Algorithm Design](https://www.cs.princeton.edu/courses/archive/fall13/cos521/)

### Data Structures: <a id="6c92"></a>

- [Data Structures and Algorithms implementation in Go](https://github.com/floyernick/Data-Structures-and-Algorithms)
- [Which algorithms/data structures should I “recognize” and know by name?](https://softwareengineering.stackexchange.com/questions/155639/which-algorithms-data-structures-should-i-recognize-and-know-by-name)
- [Dictionary of Algorithms and Data Structures](https://xlinux.nist.gov/dads/)
- [Phil’s Data Structure Zoo](https://g1thubhub.github.io/data-structure-zoo.html)
- [The Periodic Table of Data Structures](https://stratos.seas.harvard.edu/files/stratos/files/periodictabledatastructures.pdf) \([HN](https://news.ycombinator.com/item?id=18314555)\)
- [Data Structure Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html) \([HN](https://news.ycombinator.com/item?id=19082943)\)
- [Data structures to name-drop when you want to sound smart in an interview](http://blog.amynguyen.net/?p=853)
- [On lists, cache, algorithms, and microarchitecture \(2019\)](https://pdziepak.github.io/2019/05/02/on-lists-cache-algorithms-and-microarchitecture/)
- [Topics in Advanced Data Structures \(2019\)](http://web.stanford.edu/class/cs166/handouts/100%20Suggested%20Final%20Project%20Topics.pdf) \([HN](https://news.ycombinator.com/item?id=19780387)\)
- [CS166 Advanced DS Course \(2019\)](http://web.stanford.edu/class/cs166/)
- [Advanced Data Structures \(2017\)](https://courses.csail.mit.edu/6.851/fall17/) \([HN](https://news.ycombinator.com/item?id=20044876)\)
- [Write a hash table in C](https://github.com/jamesroutley/write-a-hash-table)
- [Python Data Structures and Algorithms](https://github.com/prabhupant/python-ds)
- [HAMTs from Scratch \(2018\)](https://vaibhavsagar.com/blog/2018/07/29/hamts-from-scratch/)
- [JavaScript Data Structures and Algorithms](https://github.com/JoeKarlsson/data-structures)
- [Implementing a Key-Value Store series](http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/)
- [Open Data Structures](https://opendatastructures.org/) — Provide a high-quality open content data structures textbook that is both mathematically rigorous and provides complete implementations. \([Code](https://github.com/patmorin/ods)\)
- [A new analysis of the false positive rate of a Bloom filter \(2009\)](https://www.csee.usf.edu/~kchriste/energy/ipl10.pdf)
- [Ideal Hash Trees](https://lampwww.epfl.ch/papers/idealhashtrees.pdf)
- [RRB-Trees: Efficient Immutable Vectors](http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=0265C1992F573129BCC7D4AF7734DBF7?doi=10.1.1.592.5377&rep=rep1&type=pdf)
- [Some data structures and algorithms written in OCaml](https://github.com/jdan/ocaml-data-structures)
- [Let’s Invent B\(+\)-Trees](https://shachaf.net/w/b-trees) \([HN](https://news.ycombinator.com/item?id=23001831)\)
- [Anna](https://github.com/hydro-project/anna) — Low-latency, cloud-native KVS.
- [Persistent data structures thanks to recursive type aliases \(2019\)](https://www.aleksandra.codes/persistent-data-structures)
- [Log-Structured Merge-Trees \(2020\)](https://yetanotherdevblog.com/lsm/)
- [Bloom Filters for the Perplexed \(2017\)](https://sagi.io/bloom-filters-for-the-perplexed/)
- [Understanding Bloom Filters \(2020\)](https://yetanotherdevblog.com/bloom-filters/)
- [Dense vs. Sparse Indexes \(2020\)](https://yetanotherdevblog.com/dense-vs-sparse-indexes/)
- [Data Structures and Algorithms Problems](https://www.techiedelight.com/list-of-problems/)
- [Data Structures & Algorithms I Actually Used Working at Tech Companies \(2020\)](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/) \([Lobsters](https://lobste.rs/s/n8tyip/data_structures_algorithms_i_actually)\) \([HN](https://news.ycombinator.com/item?id=23841491)\)
- [Let’s implement a Bloom Filter \(2020\)](https://onatm.dev/2020/08/10/let-s-implement-a-bloom-filter/) \([HN](https://news.ycombinator.com/item?id=24102617)\)
- [Data Structures Part 1: Bulk Data \(2019\)](https://ourmachinery.com/post/data-structures-part-1-bulk-data/) \([Lobsters](https://lobste.rs/s/t8mrxn/data_structures_part_1_bulk_data)\)
- [Data Structures Explained](https://www.freecodecamp.org/news/learn-all-about-data-structures-used-in-computer-science/)
- [Introduction to Cache-Oblivious Data Structures \(2018\)](https://rcoh.me/posts/cache-oblivious-datastructures/)
- [The Daily Coding newsletter](https://thedailycoding.com/) — Master JavaScript and Data Structures.
- [Lectures Note for Data Structures and Algorithms \(2019\)](https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf)
- [Mechanically Deriving Binary Tree Iterators with Continuation Defunctionalization \(2020\)](https://abhinavsarkar.net/posts/continuation-defunctionalization/)
- [Segment Tree data structure](https://cp-algorithms.com/data_structures/segment_tree.html)
- [Structure of a binary state tree \(2020\)](https://medium.com/@gballet/structure-of-a-binary-state-tree-part-1-48c587836d2f)
- [Introductory data structures and algorithms](https://github.com/sushinoya/fundamentals)
- [Applying Textbook Data Structures for Real Life Wins \(2020\)](https://heap.io/blog/engineering/applying-textbook-data-structures-for-real-life-wins) \([HN](https://news.ycombinator.com/item?id=24761105)\)
- [Michael Scott — Nonblocking data structures lectures \(2020\)](https://www.youtube.com/watch?v=9XAx279s7gs) — Nonblocking concurrent data structures are an increasingly valuable tool for shared-memory parallel programming.
- [Scal](https://github.com/cksystemsgroup/scal) — High-performance multicore-scalable data structures and benchmarks. \([Web](http://scal.cs.uni-salzburg.at/)\)
- [Hyperbolic embedding implementations](https://github.com/HazyResearch/hyperbolics)
- [Morphisms of Computational Constructs](https://github.com/prathyvsh/morphisms-of-computational-structures) — Visual catalogue + story of morphisms displayed across computational structures.
- [What is key-value store? \(build-your-own-x\) \(2020\)](http://djkooks.github.io/build-your-own-kv-store)
- [Lesser Known but Useful Data Structures](https://stackoverflow.com/questions/500607/what-are-the-lesser-known-but-useful-data-structures)
- [Using Bloom filters to efficiently synchronize hash graphs \(2020\)](https://martin.kleppmann.com/2020/12/02/bloom-filter-hash-graph-sync.html)
- [Bloom Filters by Example](https://llimllib.github.io/bloomfilter-tutorial/) \([Code](https://github.com/llimllib/bloomfilter-tutorial)\)
- [Binary Decision Diagrams](https://crypto.stanford.edu/pbc/notes/zdd/) \([HN](https://news.ycombinator.com/item?id=25342922)\)
- [3 Steps to Designing Better Data Structures \(2020\)](https://mochromatic.com/3-steps-to-designing-better-data-structures-in-elixir/)
- [Sparse Matrices \(2019\)](https://matteding.github.io/2019/04/25/sparse-matrices/) \([HN](https://news.ycombinator.com/item?id=25601288)\)
- [Algorithms & Data Structures in C++](https://github.com/xtaci/algorithms)
- [Fancy Tree Traversals \(2019\)](https://drs.is/post/fancy-tree-traversals/)
- [The Robson Tree Traversal \(2019\)](https://drs.is/post/robson-traversal/)
- [Data structures and program structures](http://cr.yp.to/data.html)
- [cdb](http://cr.yp.to/cdb.html) — Fast, reliable, simple package for creating and reading constant databases.
- [PGM-index](https://pgm.di.unipi.it/) — Learned indexes that match B-tree performance with 83x less space. \([HN](https://news.ycombinator.com/item?id=25899286)\) \([Code](https://github.com/gvinciguerra/PGM-index)\)
- [Structural and pure attributes](https://minimalmodeling.substack.com/p/structural-and-pure-attributes)
- [Cache-Tries: O\(1\) Concurrent Lock-Free Hash Tries \(2018\)](http://aleksandar-prokopec.com/resources/docs/p137-prokopec.pdf)

=======

> > > > > > > e4bf9b77d4b065ed20f39ffb8a1f8425c6ab66cf

{% embed url="https://gist.github.com/bgoonz/4006e76c6a67b9023e0839ea863ab14f" caption="" %}

First things first, the repo with all the exercises of this lecture is right here:

> > > [https://github.com/hugoestradas/Python_Basics](https://github.com/hugoestradas/Python_Basics)

Let's begin!

1\) Find prime factors.

For the very basics, let's start with something unusual: Public Key Encryption. This technique relies on certain really large numbers being computationally hard to factor to keep data secure. In this first exercise I'll factor some numbers that are easy to deal with; the goal is to create a Python function to find all prime factors, I'll do it by taking an integer value as input and the return or output will be a list of prime factors.

In this solution I decided to search for factors by dividing the given sequentially larger values \(starting from 2\) to see which one divide evenly into it, without leaving a remainder behind:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--3fCWFcAG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gguflc6uhxagim57hi3u.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--3fCWFcAG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gguflc6uhxagim57hi3u.png)

As you can see I'm calling the function with the 500 number, so it will begin with 2 as the original divisor, then it'll go on keep dividing until the remainder is no longer an even number, in this case resulting in the result of 2, 2, 5, and finally 5:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--RCk0QtXb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hj2b5jw0i74ef35vb7se.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--RCk0QtXb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hj2b5jw0i74ef35vb7se.PNG)

2\) Identifying Palindromes.

This a very usual programming and software engineering exercise, maybe you already did it on colleague, school or watching another tutorial, it's a very cool puzzle to solve because involves pattern recognition, logic and of course coding.

In case it's your first time dealing with palindromes, a palindrome is a word or text that reads exactly the same, either forwards or backwards.

Again, I'll write a function to detect palindromes, where my input will be the string I'm checking and the result or output is going to be a boolean value \(false/true\):

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--rphnyM23--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/n4ei7nrn43w256y9khhu.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--rphnyM23--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/n4ei7nrn43w256y9khhu.png)

Going line by line, first I'm importing the "re" library, which contains regular expressions to extract letters from an input string, then I'm defining a "palindrome" function that receives a "string" parameter. Then I use the lower operator in the input string to convert all of the letters to lowercase, then I pass the result to the regular expression "findall" function with a pattern that will search for combinations of one or more letters. Tat will produce a list with all of the matched sub-strings that I merged together into a single string using the "join" function.

Then I slice the entire string, with the stride set to negative one, meaning I'll get a copy of the original string in reverse order.

Finally, I'm comparing both strings and return it:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--cy2hp3eC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s3x9sf5iuxcidw18vcxs.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--cy2hp3eC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s3x9sf5iuxcidw18vcxs.PNG)

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--17F9_bAz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x5j64hmaku5ypesczr6r.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--17F9_bAz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/x5j64hmaku5ypesczr6r.PNG)

3\) Sort a string.

Another common task in programming is sorting things.

The goal is to create a Python function that sorts the words within a given string.

The input will be a list of words separated by spaces, and the result or output will be the same string of words sorted alphabetically:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--zVK1VTlN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z9omnkkrd1p8f00cwuk4.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--zVK1VTlN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z9omnkkrd1p8f00cwuk4.png)

My "sorted" function starts with the "split" method, which breaks apart the input string at each of the spaces and gives me a list of the individual word.

Then, to ignore the capitalization \(if there is any\) in the loop I convert each word within the list into lower case, to later on sort the entire list:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--z9FKfN4L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j0kxw95kagrhie8l6w5y.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--z9FKfN4L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j0kxw95kagrhie8l6w5y.PNG)

4\) The waiting game.

For this exercise I'll write a Python function, which is when invoked it'll print a message to wait a random amount of time.

The user press enters, then the timer starts. The user's goal is to wait the specified number of seconds in the message, and then press enter again.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s---TjnJiEv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r5tn2pfns2gzwv864vpu.png)](https://res.cloudinary.com/practicaldev/image/fetch/s---TjnJiEv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r5tn2pfns2gzwv864vpu.png)

For this exercise I used to modules, "time" module to measure the amount of time, and the "random" module to generate a random number of seconds.

The input function prompts the user to press enter to begin and then blocks the execution until the user hits enter again.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--L8hbntYT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqkq6s70sacxwnv4fpgi.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--L8hbntYT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqkq6s70sacxwnv4fpgi.PNG)

5\) Generate a new password.

For this final example, I'll implement a function based on the "Diceware" method, which is a method for creating passphrases and passwords using the numbers of an ordinary dice as hardware random number generator. It involves a list of over 7000 different words.

Instead of rolling a physical dice, I'll write a Python function that simulates this behavior.

The input will be a number of words in a passphrase and the output or result will be a string of random words, separated by spaces.

For this one, I could've used the "random" module, but instead I went for the "secret" module, since the random module is not recommended when dealing with cryptographic procedures:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--6tfjaRvc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cnrvpdjez317i5v5lh2u.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--6tfjaRvc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/cnrvpdjez317i5v5lh2u.png)

My function begins by getting the number of words, then opening the "diceware.wordlist.asc" file with a context manager and then uses "readlines" function to get a list with each of the lines within the file.

The top of the file diceware that I used has two extra lines before the word list actually begins, and at the bottom there are also several extra lines for a PGP signature:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--2qFdTdRG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/km8x5n9agn37w99u41e6.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--2qFdTdRG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/km8x5n9agn37w99u41e6.PNG)

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--kj4w26ts--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pwrz9ae5omrkl3ay52j5.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--kj4w26ts--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/pwrz9ae5omrkl3ay52j5.PNG)

So I indexed out the 7K \(7776\) lines from the middle of the file that I actually care about. Remembering that each of these lines contain both a five-digit number and the corresponding word, I used the split method to break them apart, and then build the list containing just the words.

Then I used the "secrets.choice" function within another list comprehension to build a list with the desired number of random words.

And finally, I used the join method to combine the random words into a single string with spaces between them:

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--hZBb-kUj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5diuv6ikyernk1nnewe5.PNG)](https://res.cloudinary.com/practicaldev/image/fetch/s--hZBb-kUj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5diuv6ikyernk1nnewe5.PNG)

## Extra Project Ideas:

## projects of Python installation and packaging

### PyPA Projects[¶](https://packaging.python.org/key_projects/#pypa-projects)

#### bandersnatch[¶](https://packaging.python.org/key_projects/#bandersnatch)

[Issues](https://github.com/pypa/bandersnatch/issues) \| [GitHub](https://github.com/pypa/bandersnatch) \| [PyPI](https://pypi.org/project/bandersnatch)

`bandersnatch` is a PyPI mirroring client designed to efficiently create a complete mirror of the contents of PyPI. Organizations thus save bandwidth and latency on package downloads \(especially in the context of automated tests\) and to prevent heavily loading PyPI’s Content Delivery Network \(CDN\).

#### build[¶](https://packaging.python.org/key_projects/#build)

[Docs](https://pypa-build.readthedocs.io/) \| [Issues](https://github.com/pypa/build/issues) \| [GitHub](https://github.com/pypa/build) \| [PyPI](https://pypi.org/project/build)

`build` is a [**PEP 517**](https://www.python.org/dev/peps/pep-0517) compatible Python package builder. It provides a CLI to build packages, as well as a Python API.

#### cibuildwheel[¶](https://packaging.python.org/key_projects/#cibuildwheel)

[Docs](https://cibuildwheel.readthedocs.io/) \| [Issues](https://github.com/pypa/cibuildwheel/issues) \| [GitHub](https://github.com/pypa/cibuildwheel) \| [PyPI](https://pypi.org/project/cibuildwheel) \| [Discussions](https://github.com/pypa/cibuildwheel/discussions) \| [Discord \#cibuildwheel](https://discord.com/invite/pypa)

`cibuildwheel` is a Python package that builds [wheels](https://packaging.python.org/glossary/#term-Wheel) for all common platforms and Python versions on most CI systems. Also see [multibuild](https://packaging.python.org/key_projects/#multibuild).

#### distlib[¶](https://packaging.python.org/key_projects/#distlib)

[Docs](http://pythonhosted.org/distlib/) \| [Issues](https://bitbucket.org/pypa/distlib/issues?status=new&status=open) \| [Bitbucket](https://bitbucket.org/pypa/distlib) \| [PyPI](https://pypi.org/project/distlib)

`distlib` is a library which implements low-level functions that relate to packaging and distribution of Python software. `distlib` implements several relevant PEPs \(Python Enhancement Proposal standards\) and is useful for developers of third-party packaging tools to make and upload binary and source [distributions](https://packaging.python.org/glossary/#term-Distribution-Package), achieve interoperability, resolve dependencies, manage package resources, and do other similar functions.

Unlike the stricter [packaging](https://packaging.python.org/key_projects/#packaging) project \(below\), which specifically implements modern Python packaging interoperability standards, `distlib` also attempts to provide reasonable fallback behaviours when asked to handle legacy packages and metadata that predate the modern interoperability standards and fall into the subset of packages that are incompatible with those standards.

#### packaging[¶](https://packaging.python.org/key_projects/#packaging)

[Docs](https://packaging.pypa.io/) \| [Issues](https://github.com/pypa/packaging/issues) \| [GitHub](https://github.com/pypa/packaging) \| [PyPI](https://pypi.org/project/packaging)

Core utilities for Python packaging used by [pip](https://packaging.python.org/key_projects/#pip) and [setuptools](https://packaging.python.org/key_projects/#setuptools).

The core utilities in the packaging library handle version handling, specifiers, markers, requirements, tags, and similar attributes and tasks for Python packages. Most Python users rely on this library without needing to explicitly call it; developers of the other Python packaging, distribution, and installation tools listed here often use its functionality to parse, discover, and otherwise handle dependency attributes.

This project specifically focuses on implementing the modern Python packaging interoperability standards defined at [PyPA specifications](https://packaging.python.org/specifications/#packaging-specifications), and will report errors for sufficiently old legacy packages that are incompatible with those standards. In contrast, the [distlib](https://packaging.python.org/key_projects/#distlib) project is a more permissive library that attempts to provide a plausible reading of ambiguous metadata in cases where [packaging](https://packaging.python.org/key_projects/#packaging) will instead report on error.

#### pip[¶](https://packaging.python.org/key_projects/#pip)

[Docs](https://pip.pypa.io/en/stable/) \| [Issues](https://github.com/pypa/pip/issues) \| [GitHub](https://github.com/pypa/pip) \| [PyPI](https://pypi.org/project/pip/)

The most popular tool for installing Python packages, and the one included with modern versions of Python.

It provides the essential core features for finding, downloading, and installing packages from PyPI and other Python package indexes, and can be incorporated into a wide range of development workflows via its command-line interface \(CLI\).

#### Pipenv[¶](https://packaging.python.org/key_projects/#pipenv)

[Docs](https://pipenv.pypa.io/) \| [Source](https://github.com/pypa/pipenv) \| [Issues](https://github.com/pypa/pipenv/issues) \| [PyPI](https://pypi.org/project/pipenv)

Pipenv is a project that aims to bring the best of all packaging worlds to the Python world. It harnesses [Pipfile](https://packaging.python.org/key_projects/#pipfile), [pip](https://packaging.python.org/key_projects/#pip), and [virtualenv](https://packaging.python.org/key_projects/#virtualenv) into one single toolchain. It features very pretty terminal colors.

Pipenv aims to help users manage environments, dependencies, and imported packages on the command line. It also works well on Windows \(which other tools often underserve\), makes and checkes file hashes, to ensure compliance with hash-locked dependency specifiers, and eases uninstallation of packages and dependencies. It is used by Python users and system administrators, but has been less maintained since late 2018.

#### Pipfile[¶](https://packaging.python.org/key_projects/#pipfile)

[Source](https://github.com/pypa/pipfile)

`Pipfile` and its sister `Pipfile.lock` are a higher-level application-centric alternative to [pip](https://packaging.python.org/key_projects/#pip)’s lower-level `requirements.txt` file.

#### pipx[¶](https://packaging.python.org/key_projects/#pipx)

[Docs](https://pypa.github.io/pipx/) \| [GitHub](https://github.com/pypa/pipx) \| [PyPI](https://pypi.org/project/pipx/)

pipx is a tool to install and run Python command-line applications without causing dependency conflicts with other packages installed on the system.

#### Python Packaging User Guide[¶](https://packaging.python.org/key_projects/#python-packaging-user-guide)

[Docs](https://packaging.python.org/en/latest/) \| [Issues](https://github.com/pypa/python-packaging-user-guide/issues) \| [GitHub](https://github.com/pypa/python-packaging-user-guide)

This guide!

#### readme_renderer[¶](https://packaging.python.org/key_projects/#readme-renderer)

[GitHub and docs](https://github.com/pypa/readme_renderer/) \| [PyPI](https://pypi.org/project/readme_renderer/)

`readme_renderer` is a library that package developers use to render their user documentation \(README\) files into HTML from markup languages such as Markdown or reStructuredText. Developers call it on its own or via [twine](https://packaging.python.org/key_projects/#twine), as part of their release management process, to check that their package descriptions will properly display on PyPI.

#### setuptools[¶](https://packaging.python.org/key_projects/#easy-install)

[Docs](https://setuptools.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/setuptools/issues) \| [GitHub](https://github.com/pypa/setuptools) \| [PyPI](https://pypi.org/project/setuptools)

setuptools \(which includes `easy_install`\) is a collection of enhancements to the Python distutils that allow you to more easily build and distribute Python [distributions](https://packaging.python.org/glossary/#term-Distribution-Package), especially ones that have dependencies on other packages.

[distribute](https://pypi.org/project/distribute) was a fork of setuptools that was merged back into setuptools \(in v0.7\), thereby making setuptools the primary choice for Python packaging.

#### trove-classifiers[¶](https://packaging.python.org/key_projects/#trove-classifiers)

[Issues](https://github.com/pypa/trove-classifiers/issues) \| [GitHub](https://github.com/pypa/trove-classifiers) \| [PyPI](https://pypi.org/project/trove-classifiers/)

trove-classifiers is the canonical source for [classifiers on PyPI](https://pypi.org/classifiers/), which project maintainers use to [systematically describe their projects](https://packaging.python.org/specifications/core-metadata/#classifier-multiple-use) so that users can better find projects that match their needs on the PyPI.

The trove-classifiers package contains a list of valid classifiers and deprecated classifiers \(which are paired with the classifiers that replace them\). Use this package to validate classifiers used in packages intended for uploading to PyPI. As this list of classifiers is published as code, you can install and import it, giving you a more convenient workflow compared to referring to the [list published on PyPI](https://pypi.org/classifiers/). The [issue tracker](https://github.com/pypa/trove-classifiers/issues) for the project hosts discussions on proposed classifiers and requests for new classifiers.

#### twine[¶](https://packaging.python.org/key_projects/#twine)

[Docs](https://twine.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/twine/issues) \| [GitHub](https://github.com/pypa/twine) \| [PyPI](https://pypi.org/project/twine)

Twine is the primary tool developers use to upload packages to the Python Package Index or other Python package indexes. It is a command-line program that passes program files and metadata to a web API. Developers use it because it’s the official PyPI upload tool, it’s fast and secure, it’s maintained, and it reliably works.

#### virtualenv[¶](https://packaging.python.org/key_projects/#virtualenv)

[Docs](https://virtualenv.pypa.io/en/stable/) \| [Issues](https://github.com/pypa/virtualenv/issues) \| [GitHub](https://github.com/pypa/virtualenv) \| [PyPI](https://pypi.org/project/virtualenv/)

virtualenv is a tool which uses the command-line path environment variable to create isolated Python [Virtual Environments](https://packaging.python.org/glossary/#term-Virtual-Environment), much as [venv](https://packaging.python.org/key_projects/#venv) does. virtualenv provides additional functionality, compared to [venv](https://packaging.python.org/key_projects/#venv), by supporting Python 2.7 and by providing convenient features for configuring, maintaining, duplicating, and troubleshooting the virtual environments. For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).

#### Warehouse[¶](https://packaging.python.org/key_projects/#warehouse)

[Docs](https://warehouse.pypa.io/) \| [Issues](https://github.com/pypa/warehouse/issues) \| [GitHub](https://github.com/pypa/warehouse)

The current codebase powering the [Python Package Index \(PyPI\)](https://packaging.python.org/glossary/#term-Python-Package-Index-PyPI). It is hosted at [pypi.org](https://pypi.org/). The default source for [pip](https://packaging.python.org/key_projects/#pip) downloads.

#### wheel[¶](https://packaging.python.org/key_projects/#wheel)

[Docs](https://wheel.readthedocs.io/en/latest/) \| [Issues](https://github.com/pypa/wheel/issues) \| [GitHub](https://github.com/pypa/wheel) \| [PyPI](https://pypi.org/project/wheel)

Primarily, the wheel project offers the `bdist_wheel` [setuptools](https://packaging.python.org/key_projects/#setuptools) extension for creating [wheel distributions](https://packaging.python.org/glossary/#term-Wheel). Additionally, it offers its own command line utility for creating and installing wheels.

See also [auditwheel](https://github.com/pypa/auditwheel), a tool that package developers use to check and fix Python packages they are making in the binary wheel format. It provides functionality to discover dependencies, check metadata for compliance, and repair the wheel and metadata to properly link and include external shared libraries in a package.

### Non-PyPA Projects[¶](https://packaging.python.org/key_projects/#non-pypa-projects)

#### buildout[¶](https://packaging.python.org/key_projects/#buildout)

[Docs](http://www.buildout.org/en/latest/) \| [Issues](https://bugs.launchpad.net/zc.buildout) \| [PyPI](https://pypi.org/project/zc.buildout) \| [GitHub](https://github.com/buildout/buildout/)

Buildout is a Python-based build system for creating, assembling and deploying applications from multiple parts, some of which may be non-Python-based. It lets you create a buildout configuration and reproduce the same software later.

#### conda[¶](https://packaging.python.org/key_projects/#conda)

[Docs](http://conda.pydata.org/docs/)

conda is the package management tool for [Anaconda](https://docs.anaconda.com/anaconda/) Python installations. Anaconda Python is a distribution from [Anaconda, Inc](https://www.anaconda.com/download) specifically aimed at the scientific community, and in particular on Windows where the installation of binary extensions is often difficult.

Conda is a completely separate tool from [pip](https://packaging.python.org/key_projects/#pip), virtualenv and wheel, but provides many of their combined features in terms of package management, virtual environment management and deployment of binary extensions.

Conda does not install packages from PyPI and can install only from the official Anaconda repositories, or anaconda.org \(a place for user-contributed _conda_ packages\), or a local \(e.g. intranet\) package server. However, note that [pip](https://packaging.python.org/key_projects/#pip) can be installed into, and work side-by-side with conda for managing [distributions](https://packaging.python.org/glossary/#term-Distribution-Package) from PyPI. Also, [conda skeleton](https://docs.conda.io/projects/conda-build/en/latest/user-guide/tutorials/build-pkgs-skeleton.html) is a tool to make Python packages installable by conda by first fetching them from PyPI and modifying their metadata.

#### devpi[¶](https://packaging.python.org/key_projects/#devpi)

[Docs](http://doc.devpi.net/latest/) \| [Issues](https://bitbucket.org/hpk42/devpi/issues) \| [PyPI](https://pypi.org/project/devpi)

devpi features a powerful PyPI-compatible server and PyPI proxy cache with a complementary command line tool to drive packaging, testing and release activities with Python. devpi also provides a browsable and searchable web interface.

#### flit[¶](https://packaging.python.org/key_projects/#flit)

[Docs](https://flit.readthedocs.io/en/latest/) \| [Issues](https://github.com/takluyver/flit/issues) \| [PyPI](https://pypi.org/project/flit)

Flit provides a simple way to upload pure Python packages and modules to PyPI. It focuses on [making the easy things easy](https://flit.readthedocs.io/en/latest/rationale.html) for packaging. Flit can generate a configuration file to quickly set up a simple project, build source distributions and wheels, and upload them to PyPI.

Flit uses `pyproject.toml` to configure a project. Flit does not rely on tools such as [setuptools](https://packaging.python.org/key_projects/#setuptools) to build distributions, or [twine](https://packaging.python.org/key_projects/#twine) to upload them to PyPI. Flit requires Python 3, but you can use it to distribute modules for Python 2, so long as they can be imported on Python 3.

#### enscons[¶](https://packaging.python.org/key_projects/#enscons)

[Source](https://bitbucket.org/dholth/enscons/src) \| [Issues](https://bitbucket.org/dholth/enscons/issues) \| [PyPI](https://pypi.org/project/enscons)

Enscons is a Python packaging tool based on [SCons](http://scons.org/). It builds [pip](https://packaging.python.org/key_projects/#pip)-compatible source distributions and wheels without using distutils or setuptools, including distributions with C extensions. Enscons has a different architecture and philosophy than [distutils](https://packaging.python.org/key_projects/#distutils). Rather than adding build features to a Python packaging system, enscons adds Python packaging to a general purpose build system. Enscons helps you to build sdists that can be automatically built by [pip](https://packaging.python.org/key_projects/#pip), and wheels that are independent of enscons.

#### Hashdist[¶](https://packaging.python.org/key_projects/#hashdist)

[Docs](https://hashdist.readthedocs.io/en/latest/) \| [GitHub](https://github.com/hashdist/hashdist/)

Hashdist is a library for building non-root software distributions. Hashdist is trying to be “the Debian of choice for cases where Debian technology doesn’t work”. The best way for Pythonistas to think about Hashdist may be a more powerful hybrid of [virtualenv](https://packaging.python.org/key_projects/#virtualenv) and [buildout](https://packaging.python.org/key_projects/#buildout). It is aimed at solving the problem of installing scientific software, and making package distribution stateless, cached, and branchable. It is used by some researchers but has been lacking in maintenance since 2016.

#### hatch[¶](https://packaging.python.org/key_projects/#hatch)

[GitHub and Docs](https://github.com/ofek/hatch) \| [PyPI](https://pypi.org/project/hatch)

Hatch is a unified command-line tool meant to conveniently manage dependencies and environment isolation for Python developers. Python package developers use Hatch to configure, version, specify dependencies for, and publish packages to PyPI. Under the hood, it uses [twine](https://packaging.python.org/key_projects/#twine) to upload packages to PyPI, and [pip](https://packaging.python.org/key_projects/#pip) to download and install packages.

#### multibuild[¶](https://packaging.python.org/key_projects/#multibuild)

[GitHub](https://github.com/matthew-brett/multibuild)

Multibuild is a set of CI scripts for building and testing Python [wheels](https://packaging.python.org/glossary/#term-Wheel) for Linux, macOS, and \(less flexibly\) Windows. Also see [cibuildwheel](https://packaging.python.org/key_projects/#cibuildwheel).

#### pex[¶](https://packaging.python.org/key_projects/#pex)

[Docs](https://pex.readthedocs.io/en/latest/) \| [GitHub](https://github.com/pantsbuild/pex/) \| [PyPI](https://pypi.org/project/pex)

pex is both a library and tool for generating `.pex` \(Python EXecutable\) files, standalone Python environments in the spirit of [virtualenv](https://packaging.python.org/key_projects/#virtualenv). `.pex` files are just carefully constructed zip files with a `#!/usr/bin/env python` and special `__main__.py`, and are designed to make deployment of Python applications as simple as `cp`.

#### pip-tools[¶](https://packaging.python.org/key_projects/#pip-tools)

[GitHub and Docs](https://github.com/jazzband/pip-tools/) \| [PyPI](https://pypi.org/project/pip-tools/)

pip-tools is a suite of tools meant for Python system administrators and release managers who particularly want to keep their builds deterministic yet stay up to date with new versions of their dependencies. Users can specify particular release of their dependencies via hash, conveniently make a properly formatted list of requirements from information in other parts of their program, update all dependencies \(a feature [pip](https://packaging.python.org/key_projects/#pip) currently does not provide\), and create layers of constraints for the program to obey.

#### piwheels[¶](https://packaging.python.org/key_projects/#piwheels)

[Website](https://www.piwheels.org/) \| [Docs](https://piwheels.readthedocs.io/) \| [GitHub](https://github.com/piwheels/piwheels/)

piwheels is a website, and software underpinning it, that fetches source code distribution packages from PyPI and compiles them into binary wheels that are optimized for installation onto Raspberry Pi computers. Raspberry Pi OS pre-configures pip to use piwheels.org as an additional index to PyPI.

#### poetry[¶](https://packaging.python.org/key_projects/#poetry)

[Docs](https://python-poetry.org/) \| [GitHub](https://github.com/python-poetry/poetry) \| [PyPI](https://pypi.org/project/poetry/)

poetry is a command-line tool to handle dependency installation and isolation as well as building and packaging of Python packages. It uses `pyproject.toml` and, instead of depending on the resolver functionality within [pip](https://packaging.python.org/key_projects/#pip), provides its own dependency resolver. It attempts to speed users’ experience of installation and dependency resolution by locally caching metadata about dependencies.

#### pypiserver[¶](https://packaging.python.org/key_projects/#pypiserver)

[Docs](https://github.com/pypiserver/pypiserver/blob/master/README.rst) \| [GitHub](https://github.com/pypiserver/pypiserver) \| [PyPI](https://pypi.org/project/pypiserver/)

pypiserver is a minimalist application that serves as a private Python package index within organizations, implementing a simple API and browser interface. You can upload private packages using standard upload tools, and users can download and install them with [pip](https://packaging.python.org/key_projects/#pip), without publishing them publicly. Organizations who use pypiserver usually download packages both from pypiserver and from PyPI.

#### scikit-build[¶](https://packaging.python.org/key_projects/#scikit-build)

[Docs](https://scikit-build.readthedocs.io/en/latest/) \| [GitHub](https://github.com/scikit-build/scikit-build/) \| [PyPI](https://pypi.org/project/scikit-build)

Scikit-build is an improved build system generator for CPython C/C++/Fortran/Cython extensions that integrates with [setuptools](https://packaging.python.org/key_projects/#setuptools), [wheel](https://packaging.python.org/key_projects/#wheel) and [pip](https://packaging.python.org/key_projects/#pip). It internally uses [cmake](https://pypi.org/project/cmake) \(available on PyPI\) to provide better support for additional compilers, build systems, cross compilation, and locating dependencies and their associated build requirements. To speed up and parallelize the build of large projects, the user can install [ninja](https://pypi.org/project/ninja) \(also available on PyPI\).

#### shiv[¶](https://packaging.python.org/key_projects/#shiv)

[Docs](https://shiv.readthedocs.io/en/latest/) \| [GitHub](https://github.com/linkedin/shiv) \| [PyPI](https://pypi.org/project/shiv/)

shiv is a command line utility for building fully self contained Python zipapps as outlined in [**PEP 441**](https://www.python.org/dev/peps/pep-0441), but with all their dependencies included. Its primary goal is making distributing Python applications and command line tools fast & easy.

#### Spack[¶](https://packaging.python.org/key_projects/#spack)

[Docs](https://spack.readthedocs.io/) \| [GitHub](https://github.com/llnl/spack/) \| [Paper](http://www.computer.org/csdl/proceedings/sc/2015/3723/00/2807623.pdf) \| [Slides](https://tgamblin.github.io/files/Gamblin-Spack-SC15-Talk.pdf)

A flexible package manager designed to support multiple versions, configurations, platforms, and compilers. Spack is like Homebrew, but packages are written in Python and parameterized to allow easy swapping of compilers, library versions, build options, etc. Arbitrarily many versions of packages can coexist on the same system. Spack was designed for rapidly building high performance scientific applications on clusters and supercomputers.

Spack is not in PyPI \(yet\), but it requires no installation and can be used immediately after cloning from GitHub.

#### zest.releaser[¶](https://packaging.python.org/key_projects/#zest-releaser)

[Docs](https://zestreleaser.readthedocs.io/en/latest/) \| [GitHub](https://github.com/zestsoftware/zest.releaser/) \| [PyPI](https://pypi.org/project/zest.releaser/)

`zest.releaser` is a Python package release tool providing an abstraction layer on top of [twine](https://packaging.python.org/key_projects/#twine). Python developers use `zest.releaser` to automate incrementing package version numbers, updating changelogs, tagging releases in source control, and uploading new packages to PyPI.

### Standard Library Projects[¶](https://packaging.python.org/key_projects/#standard-library-projects)

#### ensurepip[¶](https://packaging.python.org/key_projects/#ensurepip)

[Docs](https://docs.python.org/3/library/ensurepip.html) \| [Issues](http://bugs.python.org/)

A package in the Python Standard Library that provides support for bootstrapping [pip](https://packaging.python.org/key_projects/#pip) into an existing Python installation or virtual environment. In most cases, end users won’t use this module, but rather it will be used during the build of the Python distribution.

#### distutils[¶](https://packaging.python.org/key_projects/#distutils)

[Docs](https://docs.python.org/3/library/distutils.html) \| [Issues](http://bugs.python.org/)

The original Python packaging system, added to the standard library in Python 2.0.

Due to the challenges of maintaining a packaging system where feature updates are tightly coupled to language runtime updates, direct usage of [distutils](https://packaging.python.org/key_projects/#distutils) is now actively discouraged, with [setuptools](https://packaging.python.org/key_projects/#setuptools) being the preferred replacement. [setuptools](https://packaging.python.org/key_projects/#setuptools) not only provides features that plain [distutils](https://packaging.python.org/key_projects/#distutils) doesn’t offer \(such as dependency declarations and entry point declarations\), it also provides a consistent build interface and feature set across all supported Python versions.

#### venv[¶](https://packaging.python.org/key_projects/#venv)

[Docs](https://docs.python.org/3/library/venv.html) \| [Issues](http://bugs.python.org/)

A package in the Python Standard Library \(starting with Python 3.3\) for creating [Virtual Environments](https://packaging.python.org/glossary/#term-Virtual-Environment). For more information, see the section on [Creating Virtual Environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments).
