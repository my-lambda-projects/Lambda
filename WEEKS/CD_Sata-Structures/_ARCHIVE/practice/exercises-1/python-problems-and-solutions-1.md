# Beginners Guide To Python

My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional…

## Beginners Guide To Python <a id="e70a"></a>

### My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional named parameters. <a id="3d5f"></a>

> Bram Cohen

### Article on basic web development setup… it is geared towards web but VSCode is an incredibly versatile editor and this stack really could suit just about anyone working in the field of computer science. <a id="7daf"></a>

![](https://cdn-images-1.medium.com/max/1200/1*per3wJrNyChrgJtUBySo1Q.png)

## Python <a id="5ca3"></a>

- Python is an interpreted, high-level and general-purpose, dynamically typed programming language
- It is also Object oriented, modular oriented and a scripting language.
- In Python, everything is considered as an Object.
- A python file has an extension of .py
- Python follows Indentation to separate code blocks instead of flower brackets\({}\).
- We can run a python file by the following command in cmd\(Windows\) or shell\(mac/linux\).
- `python <filename.py>`

### By default, the python doesn’t require any imports to run a python file. <a id="ec60"></a>

## Create and execute a program <a id="f00a"></a>

1. Open up a terminal/cmd
2. Create the program: nano/cat &gt; [nameProgram.py](http://nameprogram.py/)
3. Write the program and save it
4. python [nameProgram.py](http://nameprogram.py/)

## Basic Datatypes <a id="ae3b"></a>

![Data TypeDescriptionintInteger values [0, 1, -2, 3]floatFloating point values [0.1, 4.532, -5.092]charCharacters [a, b, @, !, `]strStrings [abc, AbC, A@B, sd!, `asa]boolBoolean Values [True, False]charCharacters [a, b, @, !, `]complexComplex numbers [2+3j, 4–1j]](https://cdn-images-1.medium.com/max/800/1*LDLNGnpgmyeWojLU_mKKJw.png)

## Keywords <a id="9615"></a>

![KeywordDescriptionbreakused to exit loop and used to exitcharbasic declaration of a type characterconstprefix declaration meaning variable can not be changedcontinuego to bottom of loop in for, while loopsclassto define a classdefto define a functionelifshortcut for (else if) used in else if ladderelseexecutable statement, part of “if” structurefloatbasic declaration of floating pointforexecutable statement, for loopfromexecutable statement, used to import only specific objects from a packageife](https://cdn-images-1.medium.com/max/800/1*rMzTksSg1jUZm2ECvvzO_g.png)

## Operators <a id="8ef4"></a>

![OperatorDescription( )grouping parenthesis, function call, tuple declaration[ ]array indexing, also declaring lists etc.!relational not, complement, ! a yields true or false~bitwise not, ones complement, ~a-unary minus, — a+unary plus, + a*multiply, a * b/divide, a / b%modulo, a % b+add, a + b-subtract, a — b<<shift left, left operand is shifted left by right operand bits>>shift right, left operand is shifted right by right operand bits<less than, result is true or false, a %lt; b<=less than or](https://cdn-images-1.medium.com/max/800/1*3ud99ZpJ20AhhApKhjvlqQ.png)![OperatorDescription( )grouping parenthesis, function call, tuple declaration[ ]array indexing, also declaring lists etc.!relational not, complement, ! a yields true or false~bitwise not, ones complement, ~a-unary minus, — a+unary plus, + a*multiply, a * b/divide, a / b%modulo, a % b+add, a + b-subtract, a — b<<shift left, left operand is shifted left by right operand bits>>shift right, left operand is shifted right by right operand bits<less than, result is true or false, a %lt; b<=less than or](https://cdn-images-1.medium.com/max/800/1*_Chk6-fWKs-i52q2Zx0ZTw.png)

## Basic Data Structures <a id="e8e2"></a>

## List <a id="61a3"></a>

- List is a collection which is ordered and changeable. Allows duplicate members.
- Lists are created using square brackets:

```text
thislist = ["apple", "banana", "cherry"]
```

- List items are ordered, changeable, and allow duplicate values.
- List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.
- The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
- To determine how many items a list has, use the `len()` function.
- A list can contain different data types:

```text
list1 = ["abc", 34, True, 40, "male"]
```

- It is also possible to use the list\(\) constructor when creating a new list

```text
thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets
```

## Tuple <a id="1f05"></a>

- Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
- A tuple is a collection which is ordered and unchangeable.
- Tuples are written with round brackets.

```text
thistuple = ("apple", "banana", "cherry")
```

- Tuple items are ordered, unchangeable, and allow duplicate values.
- Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.
- When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.
- Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
- Since tuple are indexed, tuples can have items with the same value:
- Tuples allow duplicate values:

```text
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
```

- To determine how many items a tuple has, use the `len()`function:

```text
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
```

- To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.

```text
thistuple = ("apple",)
print(type(thistuple))
```

```text
#NOT a tuple
thistuple = ("apple")
print(type(thistuple))
```

- It is also possible to use the tuple\(\) constructor to make a tuple.

```text
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)
```

## Set <a id="5698"></a>

- Set is a collection which is unordered and unindexed. No duplicate members.
- A set is a collection which is both unordered and unindexed.

```text
thisset = {"apple", "banana", "cherry"}
```

- Set items are unordered, unchangeable, and do not allow duplicate values.
- Unordered means that the items in a set do not have a defined order.
- Set items can appear in a different order every time you use them, and cannot be referred to by index or key.
- Sets are unchangeable, meaning that we cannot change the items after the set has been created.
- Duplicate values will be ignored.
- To determine how many items a set has, use the `len()` method.

```text
thisset = {"apple", "banana", "cherry"}
```

```text
print(len(thisset))
```

- Set items can be of any data type:

```text
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
set4 = {"abc", 34, True, 40, "male"}
```

- It is also possible to use the `set()` constructor to make a set.

```text
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
```

## Dictionary <a id="d0d0"></a>

- Dictionary is a collection which is unordered and changeable. No duplicate members.
- Dictionaries are used to store data values in key:value pairs.
- Dictionaries are written with curly brackets, and have keys and values:

```text
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
```

- Dictionary items are presented in key:value pairs, and can be referred to by using the key name.

```text
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```

- Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
- Dictionaries cannot have two items with the same key.
- Duplicate values will overwrite existing values.
- To determine how many items a dictionary has, use the `len()` function.

```text
print(len(thisdict))
```

- The values in dictionary items can be of any data type

```text
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
```

## Conditional branching <a id="82c9"></a>

```text
if condition:
        pass
    elif condition2:
        pass
    else:
        pass
```

## Loops <a id="b4b3"></a>

Python has two primitive loop commands:

1. while loops
2. for loops

### While loop <a id="cef8"></a>

- With the `while` loop we can execute a set of statements as long as a condition is true.
- Example: Print i as long as i is less than 6

```text
i = 1
while i < 6:
  print(i)
  i += 1
```

- The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.
- With the `break` statement we can stop the loop even if the while condition is true
- With the continue statement we can stop the current iteration, and continue with the next.
- With the else statement we can run a block of code once when the condition no longer is true.

### For loop <a id="2925"></a>

- A for loop is used for iterating over a sequence \(that is either a list, a tuple, a dictionary, a set, or a string\).
- This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.
- With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.

```text
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```

- The for loop does not require an indexing variable to set beforehand.
- To loop through a set of code a specified number of times, we can use the range\(\) function.
- The range\(\) function returns a sequence of numbers, starting from 0 by default, and increments by 1 \(by default\), and ends at a specified number.
- The range\(\) function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range\(2, 30, 3\).
- The else keyword in a for loop specifies a block of code to be executed when the loop is finished. A nested loop is a loop inside a loop.
- The “inner loop” will be executed one time for each iteration of the “outer loop”:

```text
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
```

```text
for x in adj:
  for y in fruits:
    print(x, y)
```

- for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.

```text
for x in [0, 1, 2]:
  pass
```

## Function definition <a id="8235"></a>

```text
def function_name():
    return
```

## Function call <a id="f0ab"></a>

```text
function_name()
```

- We need not to specify the return type of the function.
- Functions by default return `None`
- We can return any datatype.

## Python Syntax <a id="c509"></a>

Python syntax was made for readability, and easy editing. For example, the python language uses a `:` and indented code, while javascript and others generally use `{}` and indented code.

## First Program <a id="6e04"></a>

Lets create a [python 3](https://repl.it/languages/python3) repl, and call it _Hello World_. Now you have a blank file called _main.py_. Now let us write our first line of code:

```text
print('Hello world!')
```

> _Brian Kernighan actually wrote the first “Hello, World!” program as part of the documentation for the BCPL programming language developed by Martin Richards._

Now, press the run button, which obviously runs the code. If you are not using replit, this will not work. You should research how to run a file with your text editor.

## Command Line <a id="532e"></a>

If you look to your left at the console where hello world was just printed, you can see a `>`, `>>>`, or `$` depending on what you are using. After the prompt, try typing a line of code.

```text
Python 3.6.1 (default, Jun 21 2017, 18:48:35)
[GCC 4.9.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
> print('Testing command line')
Testing command line
> print('Are you sure this works?')
Are you sure this works?
>
```

The command line allows you to execute single lines of code at a time. It is often used when trying out a new function or method in the language.

## New: Comments! <a id="e314"></a>

Another cool thing that you can generally do with all languages, are comments. In python, a comment starts with a `#`. The computer ignores all text starting after the `#`.

`# Write some comments!`

If you have a huge comment, do **not** comment all the 350 lines, just put `'''` before it, and `'''` at the end. Technically, this is not a comment but a string, but the computer still ignores it, so we will use it.

## New: Variables! <a id="5055"></a>

Unlike many other languages, there is no `var`, `let`, or `const` to declare a variable in python. You simply go `name = 'value'`.

Remember, there is a difference between integers and strings. _Remember: String =_ _`""`._ To convert between these two, you can put an int in a `str()` function, and a string in a `int()` function. There is also a less used one, called a float. Mainly, these are integers with decimals. Change them using the `float()` command.

[https://repl.it/@bgoonz/second-scr?lite=true&amp;referrer=https%3A%2F%2Fbryanguner.medium.com](https://repl.it/@bgoonz/second-scr?lite=true&referrer=https%3A%2F%2Fbryanguner.medium.com)

```text
x = 5
x = str(x)
b = '5'
b = int(b)
print('x = ', x, '; b = ', str(b), ';') # => x = 5; b = 5;
```

Instead of using the `,` in the print function, you can put a `+` to combine the variables and string.

## Operators <a id="7795"></a>

There are many operators in python:

- `+`
- `-`
- `/`
- `*` These operators are the same in most languages, and allow for addition, subtraction, division, and multiplicaiton. Now, we can look at a few more complicated ones:

![](https://cdn-images-1.medium.com/max/800/0*oVIDxWdgJXoIt7CI.jpg)

_simpleops.py_

```text
x = 4
a = x + 1
a = x - 1
a = x * 2
a = x / 2
```

You should already know everything shown above, as it is similar to other languages. If you continue down, you will see more complicated ones.

_complexop.py_

```text
a += 1
a -= 1
a *= 2
a /= 2
```

The ones above are to edit the current value of the variable.  
Sorry to JS users, as there is no `i++;` or anything.

## Fun Fact: The python language was named after Monty Python. <a id="d4d8"></a>

If you really want to know about the others, view [Py Operators](https://www.tutorialspoint.com/python/python_basic_operators.htm)

## More Things With Strings <a id="f101"></a>

Like the title?  
Anyways, a `'` and a `"` both indicate a string, but **do not combine them!**

_quotes.py_

```text
x = 'hello' # Good
x = "hello" # Good
x = "hello' # ERRORRR!!!
```

_slicing.py_

## String Slicing <a id="df67"></a>

You can look at only certain parts of the string by slicing it, using `[num:num]`.  
The first number stands for how far in you go from the front, and the second stands for how far in you go from the back.

```text
x = 'Hello everybody!'
x[1] # 'e'
x[-1] # '!'
x[5] # ' '
x[1:] # 'ello everybody!'
x[:-1] # 'Hello everybod'
x[2:-3] # 'llo everyb'
```

## Methods and Functions <a id="eb15"></a>

Here is a list of functions/methods we will go over:

- `.strip()`
- `len()`
- `.lower()`
- `.upper()`
- `.replace()`
- `.split()`

## New: Input\(\) <a id="8520"></a>

Input is a function that gathers input entered from the user in the command line. It takes one optional parameter, which is the users prompt.

_inp.py_

```text
print('Type something: ')
x = input()
print('Here is what you said: ', x)
```

If you wanted to make it smaller, and look neater to the user, you could do…

_inp2.py_

```text
print('Here is what you said: ', input('Type something: '))
```

Running:  
_inp.py_

```text
Type something:
Hello World
Here is what you said: Hello World
```

_inp2.py_

```text
Type something: Hello World
Here is what you said: Hello World
```

## New: Importing Modules <a id="7cbe"></a>

Python has created a lot of functions that are located in other .py files. You need to import these **modules** to gain access to the,, You may wonder why python did this. The purpose of separate modules is to make python faster. Instead of storing millions and millions of functions, , it only needs a few basic ones. To import a module, you must write `input <modulename>`. Do not add the .py extension to the file name. In this example , we will be using a python created module named random.

_module.py_

```text
import random
```

Now, I have access to all functions in the random.py file. To access a specific function in the module, you would do `<module>.<function>`. For example:

_module2.py_

```text
import random
print(random.randint(3,5)) # Prints a random number between 3 and 5
```

> _Pro Tip:  
> Do_ _`from random import randint`_ _to not have to do_ _`random.randint()`, just_ _`randint()`  
> To import all functions from a module, you could do_ _`from random import *`_

## New: Loops! <a id="2f27"></a>

Loops allow you to repeat code over and over again. This is useful if you want to print Hi with a delay of one second 100 times.

### `for` Loop <a id="9278"></a>

The for loop goes through a list of variables, making a seperate variable equal one of the list every time.  
Let’s say we wanted to create the example above.

_loop.py_

```text
from time import sleep
for i in range(100):
     print('Hello')
     sleep(.3)
```

This will print Hello with a .3 second delay 100 times. This is just one way to use it, but it is usually used like this:

_loop2.py_

```text
import time
for number in range(100):
     print(number)
     time.sleep(.1)
```

[https://storage.googleapis.com/replit/images/1539649280875_37d22e6d49e8e8fbc453631def345387.pn](https://storage.googleapis.com/replit/images/1539649280875_37d22e6d49e8e8fbc453631def345387.pn)

### `while` Loop <a id="90e7"></a>

The while loop runs the code while something stays true. You would put `while <expression>`. Every time the loop runs, it evaluates if the expression is True. It it is, it runs the code, if not it continues outside of the loop. For example:

_while.py_

```text
while True: # Runs forever
     print('Hello World!')
```

Or you could do:

_while2.py_

```text
import random
position = '<placeholder>'
while position != 1: # will run at least once
    position = random.randint(1, 10)
    print(position)
```

## New: `if` Statement <a id="6ceb"></a>

The if statement allows you to check if something is True. If so, it runs the code, if not, it continues on. It is kind of like a while loop, but it executes **only once**. An if statement is written:

_if.py_

```text
import random
num = random.randint(1, 10)
if num == 3:
     print('num is 3. Hooray!!!')
if num > 5:
     print('Num is greater than 5')
if num == 12:
     print('Num is 12, which means that there is a problem with the python language, see if you can figure it out. Extra credit if you can figure it out!')
```

Now, you may think that it would be better if you could make it print only one message. Not as many that are True. You can do that with an `elif` statement:

_elif.py_

```text
import random
num = random.randint(1, 10)
if num == 3:
    print('Num is three, this is the only msg you will see.')
elif num > 2:
    print('Num is not three, but is greater than 1')
```

Now, you may wonder how to run code if none work. Well, there is a simple statement called `else:`

_else.py_

```text
import random
num = random.randint(1, 10)
if num == 3:
    print('Num is three, this is the only msg you will see.')
elif num > 2:
    print('Num is not three, but is greater than 1')
else:
    print('No category')
```

## New: Functions \(`def`\) <a id="cf00"></a>

So far, you have only seen how to use functions other people have made. Let use the example that you want to print the a random number between 1 and 9, and print different text every time.  
It is quite tiring to type:

Characters: 389

_nofunc.py_

```text
import random
print(random.randint(1, 9))
print('Wow that was interesting.')
print(random.randint(1, 9))
print('Look at the number above ^')
print(random.randint(1, 9))
print('All of these have been interesting numbers.')
print(random.randint(1, 9))
print("these random.randint's are getting annoying to type")
print(random.randint(1, 9))
print('Hi')
print(random.randint(1, 9))
print('j')
```

Now with functions, you can seriously lower the amount of characters:

Characters: 254

_functions.py_

```text
import random
def r(t):
     print(random.randint(1, 9))
     print(t)
r('Wow that was interesting.')
r('Look at the number above ^')
r('All of these have been interesting numbers.')
r("these random.randint's are getting annoying to type")
r('Hi')
r('j')
```

## Project Based Learning: <a id="5233"></a>

The following is a modified version of a tutorial posted By: [InvisibleOne](https://replit.com/@InvisibleOne)

I would cite the original tutorial it’s self but at the time of this writing I can no longer find it on his repl.it profile and so the only reference I have are my own notes from following the tutorial when I first found it.

## 1. Adventure Story <a id="f009"></a>

The first thing you need with an adventure story is a great storyline, something that is exciting and fun. The idea is, that at each pivotal point in the story, you give the player the opportunity to make a choice.  
First things first, let’s import the stuff that we need, like this:

```text
import os   #very useful for clearing the screen
import random
```

Now, we need some variables to hold some of the player data.

```text
name = input(“Name Please:  “) #We’ll use this to get the name from the user
nickname = input(“Nickname: “)
```

Ok, now we have the player’s name and nickname, let’s welcome them to the game

```text
print(“Hello and welcome “ + name)
```

Now for the story. The most important part of all stories is the introduction, so let’s print our introduction

```text
print(“Long ago, there was a magical meal known as Summuh and Spich Atip”) #We can drop a line by making a new print statement, or we can use the escape code \n
print(“It was said that this meal had the power to save lives, restore peace, and stop evil\nBecuase it was so powerful, it was hidden away on a mountain that could not be climbed\nBut it’s power brought unwanted attention, and a great war broke out.\nFinally, the leaders of the good side chose a single hero to go and find the Summah and Spich Atip, that hero was “ + name + “\n so ” + nickname + ‘ headed out to find this great power, and stop the war…’)
```

Now, we’ll give the player their first choice

```text
print(“After hiking through the wastelands for a long time, you come to a massive ravine, there is only a single way across\nA rickety old bridge, taking that could be very dangerous, but… maybe you could jump across?”)
choice1 = input(“[1]  Take the bridge     [2] Try and jump over”)
#Now we check to see what the player chose
If choice1 == ‘1’:
  print(“You slowly walk across the bride, it creakes ominously, then suddenly breaks! You flail through the air before hitting the ground a thousand feet below. Judging by the fact that you hit the ground with the equivalent force of being hit by a cement truck moving at 125 miles an hour, you are dead…”)
  #The player lost, so now we’ll boot them out of the program with the exit command
  exit()
#Then we check to see if they made the other choice, we can do with with else if, written as elif
elif choice1 == ‘2’:
  print(“You make the jump! You see a feather hit the bridge, the weight breakes it and sends it to the bottom of the ravine\nGood thing you didn’t use that bridge.”)
#Now we can continue the story
print(“A few more hours of travel and you come to the unclimbable mountain.”)
choice2 == input(“[1]   Give up    [2]    Try and climb the mountain”)
if choice2 == ‘1’:
  print(“You gave up and lost…”)
  #now we exit them again
  exit()
elif choice2 == ‘1’:
  print(“you continue up the mountain. Climbing is hard, but finally you reach the top.\nTo your surprise there is a man standing at the top of the mountain, he is very old.”)
  print(“Old Man: Hey “ + nickname)
  print(“You: How do you know my name!?!”)
  print(“Old Man: Because you have a name tag on…”)
  print(“You: Oh, well, were is the Summuh and Spich Atip?”)
  print(“Old Man: Summuh and Spich Atip? You must mean the Pita Chips and Hummus”)
  print(“You: Pita…chips…humus, what power do those have?”)
  print(“Old Man: Pretty simple kid, their organic…”)
  #Now let’s clear the screen
  os.system(‘clear’)
  print(“YOU WON!!!”)
```

There you have it, a pretty simple choose your own ending story. You can make it as complex or uncomplex as you like.

## 2. TEXT ENCODER <a id="3c66"></a>

Ever make secret messages as a kid? I used to. Anyways, here’s the way you can make a program to encode messages! It’s pretty simple. First things first, let’s get the message the user wants to encode, we’ll use input\(\) for that:

```text
message = input(“Message you would like encoded: “)
```

Now we need to split that string into a list of characters, this part is a bit more complicated.

```text
#We’ll make a function, so we can use it later
def split(x):
  return (char for char in x)
#now we’ll call this function with our text
L_message = message.lower() #This way we can lower any of their input
encode = split(l_message)
```

Now we need to convert the characters into code, well do this with a for loop:

```text
out = []
for x in encode:
  if x == ‘a’:
    out.append(‘1’)
  elif x == ‘b’:
    out.append(‘2’)
#And we’ll continue on though this with each letter of the alphabet
```

Once we’ve encoded the text, we’ll print it back for the user

```text
x = ‘ ‘.join(out)
#this will turn out into a string that we can print
print(x)
```

And if you want to decode something, it is this same process but in reverse!

## 3. Guess my Number <a id="a9ed"></a>

Number guessing games are fun and pretty simple, all you need are a few loops. To start, we need to import random.

```text
import random
```

That is pretty simple. Now we’ll make a list with the numbers were want available for the game

```text
num_list = [1,2,3,4,5,6,7,8,9,10]
```

Next, we get a random number from the list

```text
num = random.choice(num_list)
```

Now, we need to ask the user for input, we’ll to this with a while loop

```text
while True:
  # We could use guess = input(“What do you think my number is?   “), but that would produce a string, and numbers are integers, so we’ll convert the input into an integer
  guess = int(input(“What do you think my number is?   “))
  #Next, we’ll check if that number is equal to the number we picked
  if guess == num:
    break   #this will remove us from the loop, so we can display the win message
  else:
    print(“Nope, that isn’t it”)
#outside our loop, we’ll have the win message that is displayed if the player gets the correct number.
print(“You won!”)
```

Have fun with this!

## 4. Notes <a id="017d"></a>

Here is a more advanced project, but still pretty easy. This will be using a txt file to save some notes. The first thing we need to do is to create a txt file in your repl, name it ‘notes.txt’  
Now, to open a file in python we use open\(‘filename’, type\) The type can be ‘r’ for read, or ‘w’ for write. There is another option, but we won’t be using that here. Now, the first thing we are going to do is get what the user would like to save:

```text
message = input(“What would you like to save?”)
```

Now we’ll open our file and save that text

```text
o = open(‘notes.txt’, ‘w’)
o.write(message)
#this next part is very important, you need to always remember to close your file or what you wrote to it won’t be saved
o.close()
```

There we go, now the information is in the file. Next, we’ll retrieve it

```text
read = open(‘notes.txt’, ‘r’)
out = read.read()
# now we need to close the file
read.close()
# and now print what we read
print(out)
```

There we go, that’s how you can open files and close files with python

## 5. Random Dare Generator <a id="d0f9"></a>

Who doesn’t love a good dare? Here is a program that can generate random dares. The first thing we’ll need to do is as always, import random. Then we’ll make some lists of dares

```text
import random
list1 = [‘jump on’, ‘sit on’, ‘rick roll on’, ‘stop on’, ‘swing on’]
list2 = [‘your cat’, ‘your neighbor’, ‘a dog’, ‘a tree’, ‘a house’]
list3 = [‘your mom’, ‘your best friend’, ‘your dad’, ‘your teacher’]
#now we’ll generate a dare
while True:
  if input() == ‘’: #this will trigger if they hit enter
    print(“I dare you to “ + random.choice(list1) + ‘ ‘ + random.choice(list2) + ‘ in front of ‘  + random.choice(list3)
```

{% embed url="https://replit.com/@bgoonz/PythonPracticeGists-1" %}
