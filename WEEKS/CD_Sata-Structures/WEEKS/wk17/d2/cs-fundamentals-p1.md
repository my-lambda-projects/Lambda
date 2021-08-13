# Computer Science Fundamentals Part I - HackMD

> # Computer Science Fundamentals Part I ## \*\*Install Python 3 on their local machine, run the intera

## [](#Install-Python-3-on-their-local-machine-run-the-interactive-prompt-in-the-terminal-and-run-Python-files-through-the-interpreter 'Install-Python-3-on-their-local-machine-run-the-interactive-prompt-in-the-terminal-and-run-Python-files-through-the-interpreter')**Install Python 3 on their local machine, run the interactive prompt in the terminal, and run Python files through the interpreter**

To get started writing Python, you need to be able to use the Python interpreter. There are essentially two primary approaches:

1.  Install Python on your local machine.
2.  Use a website that allows you to access the Python interpreter online.

Below, we will walk through how to install Python for your specific OS and refer to some preferred websites that give you access to the interpreter online.

### [](#For-window-users-→ 'For-window-users-→')For window users →

_**First check to see if your computer has python installed (mine was already baked in my computer)**_

- If it is baked into your computer make sure you know your **PATH**
- If you don’t have it baked in then Download the latest Python 3 installer from [_**python.org**_](http://python.org/)
  - Make sure you pay attention to 32bit vs 64 bit and select the correct one for your machine
  - Run the install and make sure you check the box that says “Add Python 3.x to PATH” to ensure that you place the interpreter in your execution path

### [](#Open-PowerShell 'Open-PowerShell')Open PowerShell

- To get into the Python from PowerShell:
  - type python.exe
  - you will see the >>> → then you know you have Python running
  - to print a message
    - print(“your message here”)
  - to exit the shell
    - exit()

### [](#For-Linux-users-→ 'For-Linux-users-→')For **Linux users →**

Most likely, your Linux distribution already has Python installed. However, it is likely to be Python 2 and not Python 3.

You can determine what version you have by opening a terminal and typing `python --version`. If the version shown is `Python 2.x.x`, then you want to install the latest version of Python 3.

The procedure for installing the latest version of Python depends on which distribution of Linux you are running.

Use [\*\*\*this article (Links to an external site.)](https://realpython.com/installing-python/#reader-comments)\*\*\* to find instructions specific to your Linux distribution.

### [](#For-macOS--Mac-OS-X-users-→ 'For-macOS--Mac-OS-X-users-→')For **macOS / Mac OS X users →**

Current versions of macOS include a version of Python 2, but you want to be using Python 3.

The best way to install Python 3 on macOS is to use the Homebrew package manager.

### [](#Install-Homebrew-→ 'Install-Homebrew-→')**Install Homebrew →**

1.  Go to [_**http://brew.sh/ (Links to an external site.)**_](http://brew.sh/) and select the Homebrew bootstrap code under “Install Homebrew” and copy the complete command to your clipboard.
2.  Open a terminal window, paste the Homebrew bootstrap code, and hit “Enter.”
3.  It may take some time to install Homebrew, so you need to wait for that process to complete before moving on.

After Homebrew has finished its installation process, you then need to install Python.

### [](#Install-Python-→ 'Install-Python-→')**Install Python →**

1.  Open a terminal and run the following command `brew install python3`. This command will download and install the latest version of Python.
2.  Ensure that everything was installed correctly by opening a terminal window and running the command `pip3`.
3.  If you see help text from Python’s “pip” package manager, you have a working Python installation.

### [](#Online-Interpreters 'Online-Interpreters')**Online Interpreters**

Here are a few websites that give you online access to the Python interpreter:

- [Repl.it (Links to an external site.)](https://repl.it/)
- [Trinket (Links to an external site.)](https://trinket.io/)
- [Python Fiddle (Links to an external site.)](http://pythonfiddle.com/)
- [Python.org Online Console (Links to an external site.)](https://www.python.org/shell)
- [Python Anywhere](https://www.pythonanywhere.com/)

### [](#If-you-were-wanting-to-execute-Python-files 'If-you-were-wanting-to-execute-Python-files')If you were wanting to execute Python files:

- How to pull the file from Python
  - python…\\[file.py](http://file.py/) —> path to file
  - **Example:**
    - python ‘.\\users\\computer\\OneDrive\\Desktop\\Python notes and files\[[main.py](http://main.py/)\]([http://main.py/](http://main.py/))’ _**→ remember NOT to hit space after the ’**_
    - hit enter
  - **Example:**
    - If it is in your C drive
      - python [main.py](http://main.py/) _**→ remember NOT to hit space after you enter your file**_
      - hit enter

## [](#Use-a-Print-Statement 'Use-a-Print-Statement')Use a Print Statement

Learning to use the \*\*\*[print function\*\*\*](https://www.programiz.com/python-programming/methods/built-in/print) in Python is the perfect way to start writing Python code. When learning to write in any new programming language, one of the first things you want to do is get some output from your program. The \*[**print function**\*](https://www.programiz.com/python-programming/methods/built-in/print) is how you output the value of an object to the screen. You will learn how to use the _**[print function](https://www.programiz.com/python-programming/methods/built-in/print)**_ in Python.

You can execute the _**[print function](https://www.programiz.com/python-programming/methods/built-in/print)**_ to print different types of object in Python.

There are numerous types of objects that you can print using the _**[print function](https://www.programiz.com/python-programming/methods/built-in/print)**_

- Using _**print()**_ with **no arguments:**

  - Notice the empty line after calling the _**print function**_
  - the default _**[“end”](https://www.studytonight.com/post/the-sep-and-end-parameters-in-python-print-statement)**_ value when calling _**print()**_ is the newline character _**\\n**_

  > > > print()

  > > >

- Using _**print()**_ a **variable**:

  - Notice how the calling _**print(slogan)**_
  - The _**slogan**_ variable prints the value assigned to _**slogan**_

  > > > slogan = "i love lamp" print(slogan) i love lamp

- Using _**print()**_ with an **expression:**

  - Notice how the argument for the _**print()**_ function can be an expression
  - Once the expression is resolved to a string object, the **print()** function can output it to the screen
  - Remember that **“+”** is [_**concatenating**_](https://www.w3schools.com/python/gloss_python_string_concatenation.asp) the string

  > > > superlative = "wonderful" school = "Lambda School" print(school + " is " + superlative) Lambda School is wonderful

- Using _**print()**_ with other **object types**:

  - Any object passed as an argument into _**print()**_ will get converted into a string before it outputs onto the screen

  print(2020) 2020

  > > > print(123.456) 123.456 print(False) False print(["Lambda", "School", 2, 0, 2, 0]) ['Lambda', 'School', 2, 0, 2, 0] print(("Lambda", "School")) ('Lambda', 'School') print({"school": "Lambda School", "year": 2020}) {'school': 'Lambda School', 'year': 2020}

### [](#Passing-in-multiple-arguments-into-print 'Passing-in-multiple-arguments-into-print')Passing in multiple arguments into print()

- Using _**print()**_ with multiple arguments gives you a flexible and easy way to output items to the screen
- We can pass multiple objects, all of the same or different types, into _**print()**_

  - Notice how each object we passed in was converted to a string
  - then output to the screen
  - Also that _**print()**_ uses _**" "**_ as the _**default separator value**_
  - True and False are case sensitive where they need to be capitalized

  > > > print("Lambda School", 2020, True) Lambda School 2020 True

- We can change the separator value by assigning a value to the keyword argument _**sep**_

  > > > print("Lambda School", 2020, True, sep="!!!") Lambda School!!!2020!!!True print("Lambda School", 2020, True, sep="\t") Lambda School 2020 True print("Lambda School", 2020, True, sep="\n") Lambda School 2020 True print("Lambda School", 2020, True, sep="") Lambda School2020True

### [](#Specifying-the-“end”-value-with-print 'Specifying-the-“end”-value-with-print')Specifying the [“end”](https://www.studytonight.com/post/the-sep-and-end-parameters-in-python-print-statement) value with print()

- We can also specify the [_**“end”**_](https://www.studytonight.com/post/the-sep-and-end-parameters-in-python-print-statement) value by assigning a value to the “end” keyword when calling the _**print()**_ function
  - Being able to print a value to the screen but allow the user to stay on the same line is useful and necessary in some cases
- We can change the default _**“end”**_ value (which is _**/n**_) when calling the print() function
- Customizing the _**“end”**_ value when calling the _**print()**_ function can be useful and necessary in some cases

  > > > print("Are you a Lambda School student?", end=" (Y or N)") Are you a Lambda School student? (Y or N)>>>

The table below is a list of escape or non-printable characters that can be represented with backslash notion

An escape character gets interpreted; in a single quoted as well as double quoted strings

[Escape Characters](https://www.notion.so/e82a79636a8047c9a85c47f6ebbd305f)

Assume string variable “a” holds “Hello” and variable “b” holds Python, then —>

[String Special Operators](https://www.notion.so/9baf2defb4ab4b68b5a7f22b9d13a611)

[Symbols Which can be used along with %](https://www.notion.so/cc64d14fef9a4e49bd172ac10d9cad28)

[Other Supported Symbols and Functionality](https://www.notion.so/645d3d64e3654ae3934ba9fe6a382811)

## [](#Use-white-space-to-denote-blocks 'Use-white-space-to-denote-blocks')Use white space to denote blocks

Python is unique because indentation instead of some other character marks blocks of code. A block of code is a collection of statements that are grouped. The syntax for denoting blocks varies from language to language.

For example:

In C, blocks are delimited by curly braces ({ and }). Understanding how Python uses whitespace and indentation to denote logical lines and code blocks is essential.

- Whitespace is any character that represents something that appears empty _**(usually \\t or " ").**_
- The characters that Python considers whitespace can be seen by printing out the value of _**string.whitespace**_ from the _**string**_ library

  - Notice the characters are _**" " (space), \\t (tab), \\n (newline), \\r (return), \\x0b (unicode line tabulation), and \\x0c (unicode form feed).**_

  > > > import string string.whitespace ' \t\n\r\x0b\x0c'

## [](#Logical-Lines-of-Code 'Logical-Lines-of-Code')**Logical Lines of Code**

- Whitespace is used to denote the end of a logical line of code
- In Python, a logical line of code’s end _(a statement or definition)_ is marked by a _**\\n**_

  - Notice how REPL evaluates the expression _**first + second**_ when we return on line 3
    - _**first = “Lambda”**_
    - _**second = “School”**_
    - _**first + second**_
    - **‘LambdaSchool’ —> this is the return from line 3**
  - We can write one logical line of code over multiple lines by ending each line with a \*_\*_ character
  - The \*_\*_ character lets the Python interpreter that even though there is a newline, you don’t want it to treat it as the end of the logical line
    - \***first \***
    - \***\+ \***
    - _**second**_
    - **‘LambdaSchool’ —> this is the return from lines 5, 6, 7**

  > > > first = "Lambda" second = "School" first + second 'LambdaSchool' first \
  > > > ... + \
  > > > ... second 'LambdaSchool'

## [](#Code-Blocks 'Code-Blocks')**Code Blocks**

- White space (indentation) can denote code blocks
- Python gives meaning to the amount of whitespace (indentation level) that comes before a logical line of code

  - This code raises an **“INDENTATION ERROR”** because the Python interpreter expects to find addition whitespace inside the _**“if”**_ block

  > > > if True: ... if True: File "<stdin>", line 2

      if True:
      ^

  IndentationError: expected an indented block

  > > >

- With a few adjustments the Python interpreter can successfully run this code because of the consistent whitespace (level of indentation is used

  - Tabs and spaces both work however the standard in Python is 4 spaces to denote a block

  > > > if True: ... if True: ... print("it worked!") ... it worked!

- Consistent whitespace usage (indentation) is crucial to making sure that Python can interpret your code correctly
- In Python, whitespace has meaning
  - It denotes the end of logical lines and also code blocks
- Whitespace is any character represented by something that appears empty
- Although the most common characters are " ", \\t, and \\n
- Python interpreter knows where the end of a logical line of code is because of the \\n
- The amount of whitespace (level of indentation) is used in Python to denote blocks of code

## [](#Use-basic-types-integers-floats-strings-and-interact-with-those-types 'Use-basic-types-integers-floats-strings-and-interact-with-those-types')Use basic types (integers, floats, strings) and interact with those types

**Python is NOT a _[“statically typed”](https://pythonconquerstheuniverse.wordpress.com/2009/10/03/static-vs-dynamic-typing-of-programming-languages/#:~:text=Python%20is%20a%20dynamically%2Dtyped,an%20explicit%20conversion%20is)_ language, and every variable in Python is an object. You don’t have to declare a variable’s type.**

**[Statically Typed Language](https://pythonconquerstheuniverse.wordpress.com/2009/10/03/static-vs-dynamic-typing-of-programming-languages/#:~:text=Python%20is%20a%20dynamically%2Dtyped,an%20explicit%20conversion%20is)**

- to a type (at compile time, by means of a data declaration)
- to an object.

_**The binding to an object is optional**_ — if a name is not bound to an object, the name is said to be _null._

Once a variable name has been bound to a type (that is, declared) it can be bound (via an assignment statement) only to objects of that type; it cannot ever be bound to an object of a different type. An attempt to bind the name to an object of the wrong type will raise a type exception.

**[Dynamically Typed Language](https://pythonconquerstheuniverse.wordpress.com/2009/10/03/static-vs-dynamic-typing-of-programming-languages/#:~:text=Python%20is%20a%20dynamically%2Dtyped,an%20explicit%20conversion%20is)**

Names are bound to objects at execution time by means of assignment statements, and it is possible to bind a name to objects of different types during the execution of the program.

## [](#Numbers 'Numbers')**[Numbers](https://www.w3schools.com/python/python_numbers.asp)**

- There are three numeric types in Python

  - **[int](https://www.w3schools.com/python/python_numbers.asp) - int()**

    - Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length

      my_int = 5 print(my_int)

      """ The return would be:

      5 """

    - In Python you can also typecast:

      my_int = int(5.0) print(my_int)

      """ The return would be:

      5 """

  - **[float -](https://www.w3schools.com/python/python_numbers.asp) float()**

    - Float, or “floating point number” is a number, positive or negative, containing one or more decimals

      my_float = 2.75 print(my_float)

      """ The return would be 2.75 """

    - Just like integers you can typecast floats as well

      my_float = float(4) print(my_float)

      """ The return would be:

      4.0 """

    - Float can also be scientific numbers with an “e” to indicate the power of 10

      x = 35e3 y = 12E4 z = -87.7e100

      print(x) print(y) print(z)

      """ The return would be:

      35000.0 120000.0 -8.77e+101 """

  - [\*\*complex -](https://www.w3schools.com/python/python_numbers.asp) complex()\*\*

    - Complex numbers are written with a “j” as the imaginary part

      x = 3+5j y = 5j z = -5j

      print(x) print(y) print(z)

      """ The return would be:

      (3+5j) 5j (-0-5j) """

- **Type Conversion**

  - You can convert from one type to another with the _**int(), float(). and complex() methods**_:

    x = float(1)

    y = int(2.8)

    z = complex(x)

    print(x) print(y) print(z)

    """ The return would be:

    1.0 2 (1+0j) """

- Python **doesn’t** have a _**random()**_ function; however, _**Python has a build in module called random that can be used to make random numbers**_

  - Import the random module, and display a random number between 1 and 9:

  import random

  print(random.randrange(1, 10))

  """ The return would be a random number between 1 and 10 """

## [](#Strings 'Strings')[Strings](https://www.w3schools.com/python/python_strings.asp)

Using strings in Python —>

- You can either use single or double quotes
- However, it is recommended to use double quotes because when getting into stuff like apostrophes you wont get stuck ending a string by accident

## [](#Perform-Basic-List-Operations 'Perform-Basic-List-Operations')[Perform Basic List Operations](https://realpython.com/list-comprehension-python/)

- Lists can store any type of variable and as many variables as you want
- You can iterate over lists effortlessly
- To declare a list, it is like declaring any other variable in Python

  - setting a list variable you will use brackets \[ \]
  - then place any value inside those brackets
  - **See example below:**

    print(my_list[0])

- Adding values to the END of a list you will use this function called [_**APPEND**_](https://www.geeksforgeeks.org/append-extend-python/)

  - Append - adds its argument as a single element to the end of a list
  - The length of the list increases by one
  - **See example below**
  - If you print _**my_list**_ it will pull all the values from the list

    my_list.append(4) my_list.append(5) my_list.append(6) print(my_list)

## [](#Use-basic-operators-to-perform-mathematical-calculations-and-interact-with-strings-and-lists 'Use-basic-operators-to-perform-mathematical-calculations-and-interact-with-strings-and-lists')Use basic operators to perform mathematical calculations and interact with strings and lists

There are a few basic operators that you should be familiar with as you start writing Python code.

- Basic operators
  - Numbers
  - Strings
  - Lists
- the computer will handle all the math; all you need to do is provide mathematical operations
- **See below for example**

  number = 2 + 2.54 \* 3.98 / 2 print(number)

  """ answer is:

  7.0546 """

- Another thing that is specific to Python is the [_**Module Operation**_](http://geeksforgeeks.org/what-is-a-modulo-operator-in-python/)

  - [\*\*_Module Operation_](http://geeksforgeeks.org/what-is-a-modulo-operator-in-python/) [(%)](https://www.geeksforgeeks.org/what-is-a-modulo-operator-in-python/)\*\* returns the remainder of integer division
  - **See below for example**

    number = 15 % 6 --> this means 15 divided by 6 then take that remainder print(number)

    """ answer is:

    3 """

- Squaring you use \*\*

  - _**[Square root function \*\*](https://realpython.com/python-square-root-function/)**_
  - **See below for example**

    number = 3\*\*2 --> this is 3 to the power of 2 print(number)

    """ answer is:

    9 """

- Combining strings

  - [_**Concatenation**_](https://www.geeksforgeeks.org/python-string-concatenation/)
  - **See below for example**

    string_one = "Hello " string_two = "World" new_string = string_one + string_two print(new_string)

    """ answer is:

    Hello World """

- [_**Combining lists**_](https://www.geeksforgeeks.org/python-ways-to-concatenate-two-lists/)

  - There are many ways to combine lists but one of them is using concatenation
  - **See below for example**

    list_one = [1, 2, 3, 4] list_two = [5, 6, 7, 8] new_list = list_one + list_two print(new_list)

    """ answer is:

    [1, 2, 3, 4, 5, 6, 7, 8] """

- Another way is
- **See below for example**
- Click the link to see more ways [_**Combining lists**_](https://www.geeksforgeeks.org/python-ways-to-concatenate-two-lists/)

  list_one = [1, 2, 3, 4] list_two = [5, 6, 7, 8] new_list = list_one \* 3 print(new_list)

  """ answer is:

  [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4] """

## [](#Create-formatted-strings 'Create-formatted-strings')**Create formatted strings**

To format a string in Python, you use the % operator to format a set of stored variables in a tuple. You also include argument specifiers in your string with special symbols like %s and %d.

- [_**Creating Formatted Strings**_](https://realpython.com/python-string-formatting/)

  - We have talked about using the percentage sign as remainder function
  - However, we can also use the percentage sign in using variables for strings
    - [_**%s**_](https://www.learnpython.org/en/String_Formatting) --> the _**s**_ is for string or any object with a string representation
    - [**%d**](https://www.learnpython.org/en/String_Formatting) --> _**d**_ is for integers
    - [_**%f**_](https://www.learnpython.org/en/String_Formatting) --> _**f**_ is for floating point numbers
  - If you have a variable set to Austin
    - _**name = “Austin”**_
  - we want to print Austin we can just print
    - _**print(“Hello Austin”)**_
  - However, we can insert a name variable inside a string using interpolation _–> (this is similar to what we used in JS)_
    - _**formatted_string = “Hello %s” % name**_
  - then we want to print
    - _**print(formatted_string)**_
  - **See below for example**

  name = "Austin" print("Hello Austin")

  """ answer is: Hello Austin """

  formatted_string = "Hello %s" % name print(formatted_string)

  """ answer is:

  Hello Austin """

- [_**Adding Multiple variables**_](https://realpython.com/python-string-formatting/)

  - [_**%d --> d is for integers**_](https://realpython.com/python-string-formatting/)
  - **See below for example**

    name = "Austin" year = 2020 formatted_string = "Hello %s. The year is %d" % (name, year) print(formatted_string)

    """ answer is:

    Hello Austin. The year is 2020 """

- You can also add multiple variables into one string

  - if you want only two digits after the float it looks like this
  - %.2f
  - **See below for example**

    product_name = "Banana" prouduct_price = 1.23 product_id = 123456 formatted_string = "Product name: %s. Product ID: %d. Price: %.2f" % (product_name, product_id, product_price) print(formatted_string)

    """ answer is: Product name:

    Banana. Product ID: 123456. Price: 1.23 """

## [](#Perform-basic-string-operations 'Perform-basic-string-operations')Perform basic string operations

You can think of a string as anything between quotes. Strings store a sequence of characters or bits of text.

There are lots of ways you can interact with strings in Python.

- Performing basic string operations

  - string manipulation comes up all the time in technical interviews so having the basics will help us through it
  - using the following variable:

    my_string = "Hello, World!"

- [_**Print Length**_](https://www.geeksforgeeks.org/python-string-length-len/)

  - to get the length of a string use the _**len()**_ function
  - **See below for example**

    my_string = "Hello, World!" print(len(my_string))

    """ answer is:

    13 This is because it counts everything between the "" including the space. """

- [_**Print Index**_](https://www.geeksforgeeks.org/python-list-index/)

  - to get the index you use _**.index()**_
  - **See below for example**

    my_string = "Hello, World!" print(my_string.index("e"))

    """ --> this will give us the first index where "e" appears "e" appears at index 1

    Answer is:

    1 """

- We can also give it the substring like “rld”

  - **See below for example**

    my_string = "Hello, World!" print(my_string.index("rld"))

    """ --> this will give us the first index where "rld" appears. "rld" appears at index 9

    answer is:

    9 """

- [_**count occurrences**_](https://www.geeksforgeeks.org/python-list-function-count/)

  - to get the count we use _**.count()**_
  - we can also count the occurrences of the time the substring occurs
  - **See below for example**

    my_string = "Hello, World!" print(my_string.count("l"))

    """ answer is:

    3 This is because there are a total of 3 l's in our string """

- we can also give it substrings like “He”

  - **See below for example**

    my_string = "Hello, World!" print(my_string.count("He"))

    """ answer is:

    1 This is because there is only 1 set of He and that is in Hello """

- [_**slice the string**_](https://www.programiz.com/python-programming/methods/built-in/slice)

  - to slice we use \[ # : # \]
  - slicing a string is if we only wanted a certain section of the string
  - we can parse that one section
  - so if we want to get the letters ell _(remember that lists are 0 base)_ we will start with the index 1

    - we want to include 1, 2, 3 so we want to make sure we stop before index 4  
      this will slice it
    - **See below for example**

      my_string = "Hello, World!" print(my_string.[1:4])

      """ answer is:

      ell """

  - We can also skip - such as wanting every other letter in a certain section

    - so if we want to start index 7 and end at index 12 and then skip every other world and add another colon
    - we will get every other two letters and it will print out
    - **See below for example**

      my_string = "Hello, World!" print(my_string.[7:12:2])

      """ answer is:

      Wrd so index 7 starts on W and index 12 ends with ! every other letter in World is WRD """

  - With slicing you can also reverse the string → you can do this with any sort of list

    - to do that you would start with colon, colon and negative 1
    - : : - 1 :
    - **See below for example**

      my_string = "Hello, World!" print(my_string.[7:12:2])

      """ answer is:

      !dlroW ,olleH """

- [_**Upper Case**_](https://www.geeksforgeeks.org/python-string-upper/)

  - we use the _**.upper()**_ function
  - **See below for example**

    my_string = "Hello, World!" print(my_string.upper())

    """ answer is:

    HELLO, WORLD! """

- [_**Lower Case**_](https://www.geeksforgeeks.org/python-string-lower/)

  - we use the _**.lower()**_ function
  - **See below for example**

    - click for links for _[\*\*isupper()](https://www.geeksforgeeks.org/isupper-islower-lower-upper-python-applications/)_\*\* and [_**islower()**_](https://www.geeksforgeeks.org/isupper-islower-lower-upper-python-applications/)

    my_string = "Hello, World!" print(my_string.lower())

    """ answer is:

    hello, world! """

- [_**Starts with**_](https://www.geeksforgeeks.org/python-startswith-endswidth-function/)

  - we use _**.startswith()**_ function
  - this allows us to check the string and see if it starts with something
  - returns a boolean (True/False) → **remember True/ False is case sensitive**
  - **See below for example**

    my_string = "Hello, World!" print(my_string.startswith("H")

    """ answer is:

    true """

- [_**Ends with**_](https://www.geeksforgeeks.org/string-endswith-python/)

  - we use _**.endswith()**_ function
  - this allows us to check the string and see if it ends with something
  - returns a boolean (True/False) → **remember True/ False is case sensitive**
  - **See below for example**

    my_string = "Hello, World!" print(my_string.endswith("!")

    """ answer is:

    true """

- [_**Split String**_](https://www.geeksforgeeks.org/python-string-split/)

  - we use _**.split()**_ function
  - this allows us to take a string and break it up into separate strings
  - this is common with comma separated values or if you want to split sentences
  - **See below for example**

    my_string = "Hello, World!" print(my_string.split(" "))

    """ ---> we are splitting it by the space between Hello, and World!

    answer is:

    ["Hello,", "World!] it comes back as an array/list

    """

- You can also separate it by the comma and the space so you don’t get confused with all the commas

  - **See below for example**

    my_string = "Hello, World!" print(my_string.split(", "))

    """ ---> we are splitting between the comma and the space

    answer is:

    ["Hello", "World!] it comes back as an array/list and the comma is gone """

## [](#Evaluate-conditional-expressions-and-use-boolean-operators-to-control-flow 'Evaluate-conditional-expressions-and-use-boolean-operators-to-control-flow')**Evaluate conditional expressions and use boolean operators to control flow**

Python uses boolean values to evaluate conditions. An expression in any Boolean context will evaluate to a Boolean value and then control your program’s flow. Python’s boolean values are written as True and False _(make sure you capitalize the first character)_.

Conditionals and Booleans statements

- In Python, the IF statement is how you perform decision making code.
- It allows for conditional execution of the statement or group of statements base on the value  
  of an expression.
- This allows us to perform different computations or actions depending on whether a condition evaluates to true or false.
- A boolean is used to test whether the result of an expression is True or False → **remember True/ False is case sensitive**

[**Comparison Operators**](https://www.w3schools.com/python/gloss_python_comparison_operators.asp)

- Comparison operators are used to compare two value

[Comparison Operators](https://www.notion.so/3b3b2fabbe8e4b1e8a0683cda8cfe2f2)

- the == operator

  - **See below for example**

    x = 10 print(x == 10)

    """ answer is:

    True """

- greater than sign >

  - **See below for example**

    x = 10 print(x > 5)

    """ answer is:

    True """

- greater than or equal to ≥

  - **See below for example**

    x = 10 print(x >= 5)

    """ answer is:

    True """

- less than sign <

  - **See below for example**

    x = 10 print(x < 5)

    """ answer is:

    False """

- less than or equal to ≤

  - **See below for example**

    x = 10 print(x <= 5)

    """ answer is:

    False """

- not equal to !=

  - **See below for example**

    x = 10 print(x != 5)

    """ answer is: True """

- use and + or

  - The and & or are logical operators to combine conditional statements

- [**and operator**](https://www.w3schools.com/python/python_operators.asp)

  - returns True if both statements are True
  - we can use control flow
    - _**if name is == to Elon and age is = to 49**_
      - _**print(“Yay, we found Elon!”)**_
  - **See below for example**

    name = "Elon" age = 49 if name == "Elon" and age == 49: print("Yay! we found Elon!!")

    """ answer is:

    Yay! we found Elon!! """

- If we **ONLY** change the age to 42

  - the result is **DOESN’T** print
  - **See below for example**

    name = "Elon" age = 49 if name == "Elon" and age == 42: print("Yay! we found Elon!!")

    """ answer is:

    Nothing will pring because this block of did not execute because it do not evaluate to true """

- or operator

  - returns True if one of the statements are True
  - if we wanted to only print out one of the statements that are True
    - _**if name is == to Elon or age is == to 49**_
      - _**print(“Yay, we found Elon!!”)**_
  - **See below for example**

    name = "Elon" age = 49 if name == "Elon" or age == 42: print("Yay! we found Elon!!")

    """ answer is:

    Yay! We found Elon!! """

- use in

  - “In” is part of the Membership operators which are used to test if a sequence is presented in an object

- in operator

  - Returns True if a sequence with a specified value is present in the object
  - **See below for example**

    years = [2015, 2016, 2017, 2018, 2019, 2020] year = 2019 if year in years: print("Yay!")

    """ answer is:

    Yay! """

## [](#Use-for-and-while-loops-and-break-and-continue-statements 'Use-for-and-while-loops-and-break-and-continue-statements')**Use for and while loops and break and continue statements**

You can use two types of loops in Python, a `for` loop and a `while` loop. A `for` loop iterates over a given sequence (iterator expression). A `while` loop repeats as long as a boolean context evaluates to `True`.

The `break` statement terminates the loop containing it. Control of the program flows to the statement immediately after the body of the loop. If the `break` statement is inside a nested loop (loop inside another loop), the `break` statement will only terminate the innermost loop.

You can use the `continue` statement to skip the rest of the code inside a loop _for the current iteration only_. The loop does not terminate entirely but continues with the next iteration.

Use for and while loops and break and continue statements

- Loops are a great way to iterate through a data set or through a certain range or keep going and repeating a certain action until a conditional is met.
- there are two types of loops

  1.  For loop -
      - which is used for iterating over a sequence _(that is either a list, a tuple, a dictionary, a set, or a string)_
  2.  While loop -
      - with while loop we can execute a set of statements as long as the condition is True

- [_**Range( )**_](https://www.geeksforgeeks.org/python-range-function/)

  - Range() is a build-in function of Python.
  - It is used when a user needs to perform an action for a specific number of times
  - the range() function returns a sequence of numbers
    - so when using it you will print from the starting value up until the value requested.  
      so we used 5 so it will run 4 and stop at 5

- We want to print out the values between 0 and 4

  - so we want it to be 0, 1, 2, 3, 4
  - we can do a bunch of print statements but that is repetitive
  - best practice is to use the For loop
  - **See below for example**

    for x in range(5): print(x)

    """ answer is:

        			 0
        		   1
        		   2
        		   3
        		   4

    """

- what if we want to print the values in between 1 and 10

  - first value in range is inclusive, while the second value is exclusive
  - **See below for example**

    for x in range(1, 11): print(x)

    """ answer is:

        		   1
        		   2
        		   3
        		   4
        		   5
        		   6
        		   7
        		   8
        		   9
        		   10

    """

- What if we want to just print the odd numbers

  - **See below for example**

    for x in range(1, 11, 2): print(x)

    """ --> because it starts on an odd number we can say for every two values print something

    answer is:

        		   1
        		   3
        		   5
        		   7
        		   9

    """

- [_**While loop**_](https://www.programiz.com/python-programming/while-loop)

  - While loop in Python is used to iterate over a block of code as long as the test expression (condition) is True
  - repeats as long as a boolean context evaluates to true
  - we want to print out the values 0 through 4
  - **See below for example**

    - We printed the values 0 through 4, so this loop goes 5 times
    - print each value and then increment x by 1
    - as soon as x = 5 we exit the while loop

    while x < 5: --> while x is less than 5 print(x) --> print x x += 1 --> increment x by 1

    """ answer is:

        		   0
        		   1
        		   2
          		 3
        		   4

    """

- In Loops you can also use break

  - [_**break**_](https://www.programiz.com/python-programming/break-continue)

    - In Python, _**[break](https://www.programiz.com/python-programming/break-continue)**_ and [_**continue**_](https://www.programiz.com/python-programming/break-continue) statements can alter the flow of a normal loop.
    - Loops iterate over a block of code until the test expression is False
    - But sometimes we wish to terminate the current iteration or even the whole loop without checking test
    - If the _**[break](https://www.programiz.com/python-programming/break-continue)**_ statement is inside a nested loop (loop inside another loop), the break statement will terminate the innermost loop
    - **See below for example**

      x = 0

      while True: if x == 5: break ---> spaced 8 print(x) x += 1

      """ answer is:

          		   0
          		   1
          		   2
            		 3
          		   4

      """

- What if we want to print out the odd numbers

  - [_**continue**_](https://www.programiz.com/python-programming/break-continue)

    - The [_**continue**_](https://www.programiz.com/python-programming/break-continue) statement is used to skip the rest of the code inside a loop for the current iteration **ONLY**
    - Loop does **NOT** terminate but **CONTINUES** on the next iteration
    - **See below for example**

      x = 0 while x < 10: x += 1 if x % 2 == 0: --> this means if it is even because we started with 0 continue --> spaced 8 print(x)

      """ answer is:

          		   1
          		   3
          		   5
          		   7
          		   9

      """

## [](#If…-Elif…-Else-Statements 'If…-Elif…-Else-Statements')[If… Elif… Else Statements](https://www.programiz.com/python-programming/if-elif-else)

The if…elif… else statement is used in Python for decision making

## [](#Using-elif 'Using-elif')**Using elif**

- elif is part of the _**[if…else](https://www.w3schools.com/python/python_conditions.asp)**_ conditions
- These can be used in several ways, most commonly in _**“if statements”**_ and loops
- The _**if-elif**_ statement is used to conditionally execute a statement or a block of statements
- Conditions can be True or False, executed one thing when the condition is True, something else when the condition is False
- this will help with checking many things and have to have so many if statements

  - **See below for example**

  first_statement = False second_statement = True

  if first_statement: print("first") elif second_statement: print("second") else: print("none are true")

  """ answer is:

  second """

- If both are False

  - **See below for example**

  first_statement = False second_statement = False

  if first_statement: print("first") elif second_statement: print("second") else: print("none are true")

  """ answer is:

  none are true """

- this will help with checking many things and have to have so many if statements
- **See below for example**

  first_statement = True second_statement = True

  if first_statement: print("first") elif second_statement: print("second") else: print("none are true")

  """ answer is:

  first """

## [](#Use-list-comprehensions 'Use-list-comprehensions')Use list comprehensions

List comprehensions are a potent tool. With a list comprehension, you can create a new list based on another list in a single, highly readable line.

The format of a list comprehension follows this syntax:

`[<map expression> for <name> in <sequence expression> if <filter expression>]`

The most distinctive feature of Python is the List Comprehension, which you can use to create powerful functionality within a single line of code.

List comprehensions are very powerful tool for:

- [_**Iterating**_](https://www.w3schools.com/python/python_iterators.asp)
  - An iterator is an object that contains a countable number of values
  - An iterator is an object that can be iterated upon —> meaning that you can traverse through all values
  - An iterator is an object which implements the iterator protocol
  - **Consist of the methods**
    - _\*\*\_iter_( )\*\*\_
    - _\*\*\_next_( )\*\*\_
- [_**Mapping**_](https://www.geeksforgeeks.org/python-map-function/)
  - _**map( )**_ function returns a map object _(which is an iterator)_ of the results after applying the given function of each item of a given iterable _(list, tuple, etc)_
  - Syntax:
    - _**map(fun, iter)**_
      - fun - is a function to which map passes each element of given iterable
      - iter - It is a iterable which is to me mapped
- [_**Filtering**_](https://www.geeksforgeeks.org/filter-in-python/)
  - _**filter( )**_ method filters the given sequence with the help of a function that tests each element in the sequence to be True or not
  - Syntax:
    - _**filter(function, sequence)**_
  - Parameters:
    - function - function that tests if each element of a sequence is True or Not
    - sequence - sequence which needs to be filtered, it can be sets, lists, tuples, or containers of any iterators
  - Returns:
    - returns an iterator that is already filtered.

## [](#Create-User-Defined-Functions-and-Call-Them 'Create-User-Defined-Functions-and-Call-Them')**Create User-Defined Functions and Call Them**

To make our code more readable and **[DRY](https://realpython.com/lessons/dry-principle/) (Don’t Repeat Yourself)**, we often want to encapsulate code inside a callable function.

- In any large python script you definitely want to use functions
  - it helps make your code usable
  - readable
  - avoid repeating
- This is extremely important in any large Python script you write

To create our own function you have to use the following terminology

- First define the function by using “_**def**_”
- Then we are going to put the function name
- then we will are going to pass in the function arguments via parentheses

  - **See below for example**

    def function_name(argument_1, argument_2, etc.):

- Let’s go ahead and take a look and see how this works in code.

  - We are going to create a greeting function
  - we are going to start with “_**def**_” —> short for define
  - then we are going to call the function “_**greet**_”
  - then we are going to pass our variables

    - Name
    - Greeting
      - _**def greet(name, greeting):**_

  - So with the name and greeting we are going to great that person, with the greeting they chose.

    - we are going to print “Hello %s, then the greeting %s”
    - then we will fill this in with % (name, greeting)
      - _**print(“Hello, %s, %s” % (name, greeting))**_
    - So let’s call this:
      - Greet Austen
      - then the greeting can be “nice to meet ya”
        - _**greet(“Austen”, “nice to meet ya”)**_
    - **See below for example**

      - it took the string Austen and stuck it with _**name**_
      - then it took the string and stuck that with _**greeting**_
      - it took those arguments and went ahead and used them in the print statement

      def greet(name, greeting): print("Hello, %s, %s" % (name, greeting))

      greet("Austen", "nice to meet ya!")

      """ it will return:

      Hello Austen, nice to meet ya! """

  - With functions we can use the return statement

    - The _**[return](https://realpython.com/python-return-statement/)**_ statement is a **key** component of [_**functions**_](https://realpython.com/defining-your-own-python-function/) and _**[methods](https://realpython.com/python3-object-oriented-programming/#instance-methods)**_
    - You can use the return statement to make your functions send Python objects back to the caller code.
    - These are also known as the functions [_**return value**_](https://realpython.com/python-return-statement/)

  - Let’s say we want to create a function that could double any number

    - Well call it “def” double and pass in the variable x
      - _**def double(x):**_
    - Then we want to return x multiple 2.
      - _**return x \* 2**_
    - This _**return**_ will return the value back to you
    - If we said, the variable _**eight**_ is equal to double four
      - _**eight = double(4)**_
    - Then we printed eight
      - _**print(eight)**_
    - You would see that we would get the number 8
      - This is because we passed in 4 into the function double
      - Then we went ahead and returned 4 \* 2
      - And we passed 4 \* 2 with this statement
        - _**eight = double(4)**_
      - So we set eight to equal 8
      - then we printed it
    - **See below for example**

    def double(x): return x \* 2

    eight = double(4) print(eight)

    """ answer is:

    8 """

## [](#Create-user-defined-classes-and-interact-with-instances-of-those-classes 'Create-user-defined-classes-and-interact-with-instances-of-those-classes')Create user-defined classes and interact with instances of those classes

A Python object encapsulates variables _(data)_ and functions _(behavior)_ into a single entity. An object instance gets its variables and functions from the class that was used to instantiate it. Think of a class as a blueprint or template that you can use to create objects.

- [_**Class Methods**_](https://www.geeksforgeeks.org/python-classes-and-objects/)

  - A _**class**_ is a user-defined blueprint or prototype from which objects are created
  - _**Classes**_ provide the means of bundling data and functionality together
  - Creating new _**classes**_ creates a new type of object, allowing new instances of the type to be made.
  - Each _**class**_ instance can have attributes attached to it for maintaining its state
  - _**Class**_ instances can also have methods _(defined by their class)_ for modifying their state

- _**Classes**_ are like a template

  - Objects are instances of the template
  - Every single object in Python is sort of like an instance of this template
  - We can create as many templates as possible

- **Let’s see how this work in code:**

  - In order to define a class you simply use “_**Class**_”
  - Lets call our first class my first class
    - _**class MyFirstClass:**_
  - In classes you can set variables

    - lets set a variable equal to data

      - _**variable = “data”**_

    - Then we can also _**define functions**_ within the _**classes**_

      - We will define a function called _**function**_
      - And for every function we are going to pass in our _**self**_
      - Because we are taking ourselves an instance of this _**class**_
        - _**def function(self):**_
      - Then we can do whatever we want in the function
      - In the function _**self**_ is just one of the parameters
        - You can also include as many other as you want
      - Now we can print I am in my function
        - _**print(“I am in my function!”)**_
      - In order to actually create an instance of this _**class**_
      - We again need to create an object
      - So we will create a new variable called _**a_class()**_
        - _**a_class = MyFirstClass()**_
      - So this is actually creating an instance of _**MyFirstClass()**_
      - If we print _**a_class.variable**_
        - _**print(a_class.variable)**_
      - This will return _**“data”**_
      - So now _**a_class**_ is basically an object
        - Just like JavaScript we add an object by using the _**class.**_
        - to actually get the attributes of that _class_
      - If we call _**a_class.function()**_
        - This will print _**“I am in my function!”**_
      - You can create as many instance of this _**class**_ as you want
      - We can also create a _**b_class()**_
        - _**b_class = MyFirstClass()**_
      - Then we can print out by using the function
        - _**b_class.function()**_
          - This will print out twice _**“I am in my function!”**_
          - This is because we are calling it from both our _**a_class**_ and _**b_class**_
      - **See below for example**

        class MyFirstClass: variable = "data"

            def function(self):
                print("I am in my function!")

        a_class = MyFirstClass() print(a_class.variable) a_class.function()

        b_class = MyFirstClass() b_class.function()

      - We can set different parameters so we can also pass in _**number**_
        - _**def function(self, number):**_
      - And we can actually do a ternary and print it out
        - _**print(“I am in my function!! %d” % number)**_
      - So lets pass in the go ahead an pass in a number
        - _**a_class.function(2)**_
        - _**b_class.function(5)**_
      - Run our code again
      - It will return
        - _**"I am in my function! 2**_
        - _**"I am in my function! 5**_
      - We use these functions like normal functions
      - But you have to contain this attribute of _**self**_
      - And you can access all these different attributes by using the dot method

- **See below for example**

  class MyFirstClass:

      variable = "data

      def function(self, number):
          print("I am in my function!! %d" % number)

  a_class = MyFirstClass() print(a_class.variable) a_class.function(2)

  b_class = MyFirstClass() b_class.function(5)

## [](#Perform-Basic-Dictionary-Operations 'Perform-Basic-Dictionary-Operations')**Perform Basic Dictionary Operations**

A _**[dictionary](https://www.geeksforgeeks.org/python-dictionary/)**_ is like a list, but instead of accessing values with an index, you access values with a “_**[key](https://www.programiz.com/python-programming/methods/dictionary/keys)**_.” A “_**[key](https://www.programiz.com/python-programming/methods/dictionary/keys)**_” can be any type of object _(string, number, list, etc.)._ Also, unlike lists, dictionaries do not have an order.

- _**[Dictionaries](https://www.geeksforgeeks.org/python-dictionary/)**_

  - Dictionaries in Python is an unordered collection of data values, used to store data values like a map, which unlike other Data Types that hold only single value as an element
  - Is a collection which is unordered, changeable and indexed.
  - In Python _**dictionaries**_ are written with curly brackets and they have _**keys and values**_
  - _**Dictionaries**_ holds **key: value pair**
  - _**[Key value](http://www.compciv.org/guides/python/fundamentals/dictionaries-overview/)**_ is provided in the dictionary to make it more optimized
    - **NOTE: Keys in a dictionary doesn’t allow polymorphism**
    - _**Polymorphism**_ is the condition of occurring in several different forms

- When using a _**dictionaries**_ you have:

  - _**key -**_
    - Any type of object _**(string, number, list, etc)**_
  - _**value -**_
    - which is the body of the data
  - Using the _**key/value pair**_ you are mapping one piece of data

- One key difference between _**dictionaries**_ and lists
- _**Dictionaries**_ is another way to store data

  - **_Dictionaries_ DO NOT** have any particular sort of order

- Let’s take a look at how _**dictionaries**_ work

  - Let’s say we have a phone book and in it we want to map a person’s name to there phone number
  - In order to declare a dictionary
    - you set it equal to an empty set of curly braces
      - _**phonebook = {}**_
  - In order to add a value to a dictionary you need to call the dictionary
    - In this case it is _**phonebook**_
    - we will use a bracket
    - then we are going to place the key
      - in this case it is a name
    - We will set it to equal the phone number
      - _**phonebook\[“Joshua”\] = 1233214567**_
        - the key is phonebook
        - and the value is Joshua
  - Lets add a few more values
    - _**phonebook\[“Austen”\] = 3142245555**_
    - _**phonebook\[“CoolCat”\] = 3144431515**_
  - Now we added three _**key value pairings**_ to our _**phonebook**_
  - Lets _**print**_ our _**dictionary**_ and see what it looks like
    - _**print(phonebook)**_
  - This will pull the entire _**dictionary**_
    - _**{‘Joshua’: 1233214567, ‘Austen’: 3142245555, ‘CoolCat’: 3144131515}**_
    - This shows every single key value pair

- **See below for example**

  phonebook = {} phonebook["Joshua"] = 1233214567 phonebook["Austen"] = 3142245555 phonebook["CoolCat"] = 3144431515 print(phonebook)

- Another way to _**instantiate**_ the _**dictionary**_ is to create it within the _**declaration**_ itself
  - Inside the _**curly braces**_ we can add _**“Joshua”**_ then colon and then the phone number
    - _**phonebook = {  
      “Joshua”: 1233214567  
      }**_
  - Lets add the rest in
    - _**phonebook = {  
      “Joshua”: 1233214567,  
      “Austen”: 3142245555,  
      “CoolCat”: 3144431515  
      }**_
  - Now when we _**print**_ phonebook
    - _**print(phonebook)**_
  - Now it shows the entire _**dictionary**_ again
    - _**{‘Joshua’: 1233214567, ‘Austen’: 3142245555, ‘CoolCat’: 3144131515}**_
  - We can add to the phonebook after it is _**instantiated**_
  - By doing phonebook
    - Lets add a new value “SleepyCat” and set it to equal to the phone number
      - _**phonebook\[“SleepyCat”\] = 6366331515**_
  - Now if we _**print**_ phonebook again
    - _**{‘Joshua’: 1233214567, ‘Austen’: 3142245555, ‘CoolCat’: 3144131515, ‘SleepyCat’: 6366331515}**_
- **See below for example**

  phonebook = { "Joshua": 1233214567, "Austen": 3142245555, "CoolCat": 3144431515 } print(phonebook)

  phonebook["SleepyCat"] = 6366331515 print(phonebook)

- Now that we know how to declare a _**dictionary**_, lets now _**[iterate](https://realpython.com/iterate-through-dictionary-python/)**_ through it
  - [_**Iterating**_](https://realpython.com/iterate-through-dictionary-python/) through a _**dictionary**_ is similar to iterating through anything else
  - You can use a _**for loop**_
    - _**for name, number in phonebood.items():**_
      - our name is our key
      - and our number is our value
      - we are going to iterate through its items
  - Now lets print every single one
    - _**print(“Name: %s, Phone Number: %d” % (name, number)**_
  - And it will return
    - _**Name: Joshua, Phone Number: 1233214567  
      Name: Austen, Phone Number: 3142245555  
      Name: CoolCat, Phone Number: 3144131515  
      Name: SleepyCat, Phone Number: 6366331515**_
  - So this went through every signal phonebook item and printed the name and number
- **See below for example**

  phonebook = { "Joshua": 1233214567, "Austen": 3142245555, "CoolCat": 3144431515 } print(phonebook)

  phonebook["SleepyCat"] = 6366331515

  for name, number in phonebood.items(): print("Name: %s, Phone Number: %d" % (name, number)

- Let’s talk about _**[removing](https://www.tutorialspoint.com/what-is-the-difference-between-del-remove-and-pop-on-lists-in-python)**_ items from a _**dictionary**_
  - In order to remove items form a dictionary we actually can use
    - [_**del**_](https://www.tutorialspoint.com/what-is-the-difference-between-del-remove-and-pop-on-lists-in-python) - short for delete
  - So lets start with _**del**_ phonebook of _**“Austen”**_
    - _**del phonebook\[“Austen”\]**_
  - Then print our phonebook
    - _**print(phonebook)**_
  - It will return everything but Austen’s information
    - _**{‘Joshua’: 1233214567, ‘CoolCat’: 3144131515, ‘SleepyCat’: 6366331515}**_
- **See below for example**

  phonebook = { "Joshua": 1233214567, "Austen": 3142245555, "CoolCat": 3144431515 } print(phonebook)

  phonebook["SleepyCat"] = 6366331515

  del phonebook["Austen"] print(phonebook)

- Another way to remove/delete from a dictionary is using
  - _**[pop()](https://www.tutorialspoint.com/what-is-the-difference-between-del-remove-and-pop-on-lists-in-python)**_ - removes the element at the specified position
- if we did phonebook dot _**pop**_ and passed in _**“Joshua”**_
  - _**print(phonebook.pop(“Joshua”))**_
- We will get Joshua’s phone number in return
  - _**1233214567**_
- Now if we print phonebook
  - _**print(phonebook)**_
- The return would look like this
  - _**{‘Austen’: 3142245555, ‘CoolCat’: 3144131515, ‘SleepyCat’: 6366331515}**_
- The difference between del and pop
  - pop will return the deleted item
  - del just deletes it without returning anything.
- **See below for example**

  phonebook = { "Joshua": 1233214567, "Austen": 3142245555, "CoolCat": 3144431515 } print(phonebook)

  phonebook["SleepyCat"] = 6366331515

  print(phonebook.pop("Joshua")) print(phonebook)

## [](#Import-modules 'Import-modules')**Import modules**

A [_**module**_](https://www.w3schools.com/python/python_modules.asp) is a collection of code that is written to meet specific needs.

**For example:**

- you could split up different parts of a game you were building into modules.
- Each module would be a separate Python file that you could manage separately.

The best thing about Python is that so many people already did so much of the work before us; all this work is stored in modules.

- So when you import a module —> you are importing someone else’s work
  - You can use the functions in that module
- Any Python file that ends with the _**.py**_ extension is considered a module
- Let’s take a look how this works in code

  - One of the most common modules is _**[math](https://www.w3schools.com/python/module_math.asp)**_
  - Let’s import _**[math](https://www.w3schools.com/python/module_math.asp)**_

    - _**import math**_

  - For instance if we wanted to go ahead and print a factorial of a of an number

    - It would look like this:
      - _**print(math.factorial(5))**_
        - factorial is a function inside _**[math](https://www.w3schools.com/python/module_math.asp)**_
        - and now can be used because we _**imported [math](https://www.w3schools.com/python/module_math.asp)**_
    - Now we will run it
      - it returns _**120**_
    - **See below for example**

      import math

      print(math.factorial(5))

      """ answer is:

      120 """

    - When importing _**[math](https://www.w3schools.com/python/module_math.asp)**_ we have access to all of it’s functions
    - What if we want to just import one of the functions
      - we would do from _**[math](https://www.w3schools.com/python/module_math.asp)**_ import [_**pow**_](https://www.programiz.com/python-programming/methods/built-in/pow)
        - [\*\*\*pow](https://www.programiz.com/python-programming/methods/built-in/pow)\*\*\* is another function from math

- **See below for example**

  from math import pow

  print(pow(2, 3))

  """ --> this will print 2 to the power of 3

  answer is:

  8.0

  """

If you just want to import all the functions for math

- **See below for example**

  from math import \* --> similar to sql we are selecting all

  print(factorial(6))

  """ answer is:

  720 """

- if you want to find out all the actual functions that math offers
- **See below for example**

  import math

  print(dir(math))

  """ this will bring up a list of what is in math's directory

  ['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc'] """

[Source](https://hackmd.io/@iRiEY1k4Qt6w5KIk_9uTHw/HyXw8k-iO)
