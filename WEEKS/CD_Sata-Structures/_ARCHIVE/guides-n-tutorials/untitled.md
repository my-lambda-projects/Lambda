# Complete Beginner's Guide

## Course Content

Before I get started here is the Course Content

- Comments
  - Single-Line
  - Multi-Line
- Print Statements
  - Single-Line
  - Multi-Line
- Data Types
  - Strings
  - Integers
  - Floating Points
  - Booleans
- Variables
  - Proper Variable Names
  - Printing them
  - Changing them
  - Type Function
  - f-strings
  - .format
- String Methods
  - indexing
  - slicing
- Concatenation
  - Printing Using Concatenation
  - Assigning Variables Using Concatenation
  - Type Casting
- Operators
  - Basic Operators
  - Assignment Operators
  - Comparison Operators
- Getting Inputs
  - Storing inputs in a variable
  - Specifying input type
- Practice Problem
- Lists
  - List Methods
- Conditional Statements
  - if
  - else
  - elif
  - pass
  - logic
- Practice Problem
- Loops
  - for Loops
  - while Loops
- Practice Problem
- Escape Codes
- Functions
  - Return
  - Parameters
  - Lambda
  - Scope
    - Global
    - Local

**Let's Get Started!**

## Comments

### Single-Line Comments

Comments are blocks of code that are ignored by the computer and can be used to stay stuff about your code. The way to tell your computer that you are entering a comment is with a `#`.

So here's an example:

```text
#This is a comment
```

### Multi-Line Comments

You can also have comments that span multiple lines which are done with three single or double quotes to start and 3 to end.

Here's an example:

```text
#This is a single line comment
'''
This
is
a
multiline
comment
'''
```

Comments are mostly used when you want to say something about how your code works, so when you revisit your code you aren't confused on what you were doing. Another common use is when you want to leave some code out of your program and not have it run without completely removing it from your code.

## Printing

The `print()` function prints\(or outputs\) something to the console.

### Single-Line Printiing

Here's an example:

```text
print("Python Rules")
#You can use either Double Quotes or Single Quotes, but using Double Quotes is the best Practice
print('Python Rules')
#This works too
```

This would output

```text
Python Rules
Python Rules
```

### Multi-Line Printing

If you want to print text for multiple lines then use 3 single quotes or doubles quotes to start and 3 to end.

Here's an example:

```text
print("Here's my to do list")

print("""

To Do:

[1] Code In Python
[2] Code In Python
[3] Code In Python
""")
```

The Output:

```text
Here's My to do list


To Do:

[1] Code In Python
[2] Code In Python
[3] Code In Python
```

## Data Types

`str` or `string` is a data type that is a sequence of characters and is surrounded in double or single quotes

Ex: `"Python Rocks"`,`'Python is Fun'`

`int` or `integer` is a any positive or negative number \(without decimals\)

Ex: `5`,`69`,`-568`

`float` is any positive or negative number with a decimals

Ex: `69.69`,`5.0`,`-15.89`

`bool` or `boolean` is a True or False\(It can `only` be `True` or `False`\) value that can be used for Logic \(Make sure to capatalize it\)

## Variables

Variables are data types that are assigned to variable names and are used to store information.

### Proper Variable Names

They can use numbers,letters,and underscores, but can't start with numbers. No spaces are allowed either\(Use underscores instead\). You should use variable names that relate to the value being stored, and variable names that are also short.

Here are a few example of valid and good Variable names:

```text
Apple_Cost = 0.49
Apples_Amnt = 5
```

### Printing Variables

You can also print variables by putting them in the parenthisis of the print Statements

```text
name = "IntellectualGuy"
print(name)
```

It would output `IntellectualGuy`

### Reassigning Variables

You can also change the value of the variable by simply just reassigning it

```text
Pog = False
Pog = True
```

You can also switch the data type

```text
Bannanas = False
Bannanas = 3
```

### Type Function

After you change a variable a lot you might want to find out what data type it is so you just use the `type()` function.

```text
Apples = 5
print(type(Apples))
```

It would output `<class 'int'>`, which basically means that the data type of the variable apple is an int or integer.

### F-Strings

F-Strings print out stuff with a variable in between. This will become more useful when you learn about inputs.

Here's an example:

```text
username = "IntellectualGuy"
print(f"Hello {username}")
cycles = 100
print(f"Hello {username} you have {cycles} cycles")
```

It would output:

```text
Hello IntellectualGuy
Hello IntellectualGuy you have 100 cycles
```

### .format\(\)

Another Way to do that is using the .format method which you use like so

```python
print("Hello {}".format("IntellectualGuy"))

#You can insert more than one value
print("Hello {} you have {} cycles".format(username,cycles))

#You can use variables
print("How many {fruit} would you like to buy? Each costs ${cost}.".format(fruit = "bannanas", cost = 0.75))

#You can also use indexing
print("Hello {0} you bought {1} bannanas".format("IntellectualGuy",3))
```

Output:

```text
Hello IntellectualGuy
Hello IntellectualGuy you have 100 cycles
How many bannanas would you like to buy? Each costs $0.75.
Hello IntellectualGuy you bought 3 bannanas
```

## String Methods

There are many different string methods that you can use. String methods are basically functionsthat you can apply to your strings. FOr example the `print()` function that I explained earlier can print a string to the console.

Something to know before starting string methods it that each character in a string has an index value, starting from 0.

Here's an example

```text
"H e l l o"
 0 1 2 3 4

#This shows in the string hello, what characters are in what index positions
```

Index positions can also be in the negatives like so

```text
"H  e  l  l  o"
-5 -4 -3 -2 -1
```

Negative index positions are mainly used for things like getting the last character of a string

### Indexing

Indexing is getting the value of a certain index of a string, and you use it like so

```text
greeting = "Hello"
print(greeting[3])
```

Output: `l`

You can also use negative indexing to get a character

```text
greeting = "Hello"
print(greeting[-1])
```

Output:`o`

### Slicing

Slicing is used to get a certain part of a string like so

### Length

Length is used to get the length , the syntax is `len(string)` of a string and is used like so

```text
greeting = "Hello"
print(len(greeting))
```

Output:`5`

### Upper

The `.upper()` method is used to uppercase a string like so

```text
name = "bob"
print(name.upper())
```

Output: `BOB`

### Lower

The `.lower()` method is used to lowercase a string like so

```text
name = "SAM"
print(name.lower())
```

Output: `sam`

## Concatenation

Concatenation is when you add/join 2 or more strings together.

For example:

```text
User_Type = "Admin"
print("You are the" + User_Type)
```

Output: `You are the Admin.`

You can also assign a variable using Concatenation

For example:

```text
User_Type = "Guest"
Message = "You are a" + User_Type
print(Message)
```

Output: `You are a Guest`

Remember you can Concatenate more than 2 strings together

For Example:

```text
User_Type = "Admin"
Message = "Hello" + User_Type + "What would you like to do?"
print(Message)
```

Output: `Hello Admin What would you like to do?`

### Type Casting

You can't Concatenate strings with integers/floats/booleans, you would have to cast the type, let's say you wanted to print out a message with a number using Concatenation, then you would use tyoe casting, which let's you change the type of a variable.

Ex:

```text
Age = 5

print("Bob you are " + Age + " years old.")
#That would produce a Type error, and the way to fix that is to cast the integer age into a string.

#Let's do it again without producing an error
Age = 5
print("Bob you are " + str(age) + " years old.")

#The syntax for type casting is the data type you want to convert the variable to and then the variable inside paranthesis
#datatype(variable)

#Let's try another Example
Name = "Bob"
print("I know someone who is 5 years old, his name is" + int(Name))
#This would produce an error because you can't convert the string into an integer, as Bob is not a number
```

Note: Type casting only temporarily changes the data type of the variable, not permanently, If you wanted to though then you could assign the variable to the casted variable like solution

```text
age = 5
age = str(age)
#Now instead of being the integer 5, age is now the string "5"
```

## Operators

### Basic Operators

You can do basic Math with Python.

Addition - You can add Two numbers with a plus sign `+`  
Ex: `5 + 5` , `6.9 + 9.6`  
Output: `10` , `16.5`

Subtraction - You can subtract Two numbers with a plus sign `-`  
Ex: `10 - 5` , `9.6 - 6.9`  
Output: `5` , `2.7`

Multiplication - You can multiply Two numbers with an asterik `*`  
Ex: `5 * 5` , `5.5 * 3`  
Output: `25` , `16.5`

Division - You can divide Two numbers with a forward slash `/`  
Ex: `50 / 5` , `20.4 / 4`  
Output: `10` , `5.1`

Power - You can get a power of a number with 2 asteriks `**`  
Ex: `2 ** 3`  
Output: `8`

Modulo - You can get the remainder between Two numbers with a Percentage sign `%`  
Ex: `69 % 6` , `25 % 5`  
Output: `3` , `0`

Floor Divison: Ignores decimals when doing Division with two forward slashes `//`  
Ex:`10 // 3`,`17 // 4`  
Output: `3`,`4`

You can assign variables to use them for math  
Ex:

```text
a = 10
b = 5
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
```

Output:

```text
15
5
50
2
0
```

### Assingment Operators

Assignment operators are used to assign variables using operations. Here is a list of them.

`+=`  
`-=`  
`*=`  
`/=`  
`%=`  
`//=`  
`**=`

Now let's have a few examples of using them

```text
a = 15
b = 10

#After I print each value out prentend that I am reseting the value of a
a += b
print(a)
a -= b
print(a)
a *= b
print(a)
a /= b
print(a)
a %= b
print(a)
a //= b
print(a)
a **= b
print(a)
#I won't show the output for this because it is to big, but it would output the result of 15**10
```

Output:

```text
25
5
150
1.5
5
1
Output of 15**10
```

The Assignment operators are technically just shortened down Basic Operators. For example `a += b` is just saying `a = a + b`,it's just another way to write it, however I still recommend using the shortened version.

### Comparison Operators

Comparison operators are used to get a true or false value. Here is a list of them

Checking if a value is equal to another value. If it is equal to the other value then the it is True. Otherwise if the other value is not equal to the value it is False - `==`

Checking if a value is not equal to another value. If it is equal to the other value be compared then it is false. Otherwise if the value is not equal to the other value then it is False - `!=`

Checking if a value is greater than another value. If it is greater than the other value then it is True. Otherwise if the value is less than or equal to the other value then it is False - `>`

Checking if a value is less than another value. If it is less than the other value then it is true. Otherwise if the value is greater than or equal to the other value it is False - `<`

Checking if a value is greater than or equal to another value. If it is greater than or equal to the other value then it is True. Otherwise if the value is less than the other value then it is False - `>=`

Checking if a value is less than or equal to another value. If it is less than or equal to the other value then it is True. Otherwise if the value is greater than the other value then it is False. - `<=`

Something to remember is that there are opposite comparison operators like `==` and `!=` are opposite value because `==` is checking if the values are same and `!=` is checking if the values are different.

Opposite Pairs:

`==` and `!=`  
`>` and `<=`  
`<` and `>=`

## Getting Inputs

You can also get the user to input something using the `input()` function, here's an example of using it:

```text
input("How old are you: ")
```

Output

```text
How old are you: 69
```

It would output `How old are you` and then I could say whatever my age was.

### Storing inputs in a variable

You can store the input that you get from a user into a variable like so

```text
age = input("How old are you?")
```

Output:

`How old are you: 69`

Remember it doesn't print 69, I am just using 69 as an example input.

### Specifying input type

You can also specify the data type of the input like so

```text
age = int(input("How old are you?"))
```

Output:

`How old are you: 69`

## Practice Problem 1

Small Exercise

Try to make an multiplication calculator where you ask the user to input 2 numbers and then output the product of the 2 numbers

Solution:

```text
#Getting a number from the user
number1 = int(input("Enter a number"))
#Getting another from the user
number2 = int(input("Enter another number"))
#Adding the 2 numbers together
product = number1 * number2
#Printing out a message to the user telling them the product of the two numbers
print(f"The product of {number1} and {number2} is {product}")
```

## Lists

Lists are one of the more complex python data type. Lists hold other data types like strings, integers, floats, and even lists\(We will go over nested lists in the next tutorial\). They are declared using this syntax

```text
fruits = ['apple','bannana','orange']
```

Each list item has an index, like strings. The index starts from 0.

Here's an example to show

```text
fruits = ['apple','bannana','orange']
#            0        1        2
```

Lists also use negative indexing

```text
fruits = ['apple','bannana','orange']
#           -3       -2        -1
```

### List Methods

There are many methods that you can use with lists.

The `.append()` method adds an item to the list

Example:

```text
fruits = ['apple','bannana','orange']
fruits.append('mango')
```

Now fruits is `['apple','bannana','orange','mango']`

The `.pop()` method removes an item from a specific index

Example:

```text
fruits = ['apple','bannana','orange','mango']
fruits.pop(3)
```

Now fruits is `['apple','bannana','orange']`

The `.remove()` method remove a certain item from a list

Example:

```text
fruits = ['apple','bannana','orange','mango']
fruits.remove('orange')
```

Now fruits is `['apple','bannana','mango']`

The `del` method can delete a whole list or a specific index of a list

Example:

```text
fruits = ['apple','bannana','orange','mango']
del fruits[0]
```

Now fruits is `['bannana','orange','mango']`

Another Example:

```text
fruits = ['apple','bannana','orange','mango']
del fruits
```

Now there is no fruits list.

## Conditionals

Conditionals can be used to create code that will run if a certain condition will used, the syntax is like so

```text
if [condition]:
  code
```

If you don't specify if you want the code to run if the condition is true or false then the default is that when your code is run, if the condition is true then the code will run.

Here's an example of a valid if statement using comparison operators

```text
age = 69
if age == 69:
  print("You are 69 years old")
```

Output:

```text
You are 69 years old
```

Another Example

```text
age = 69
if age == 13:
  print("You are 13 years old")
```

Output:

```text
#Nothing because you are the varaible age is not 13, and only if the age is 13, then it will say You are 13 years old.
```

### Elif

Elif is to have multiple conditions that can check if something is true if the if statement is not true. You can have as many elif statements as you want.

Example:

```text
age = 9
if age == 13:
  print("You are 13 years old")
elif age == 9:
  print("You are 9 years old")
```

Output

```text
You are 9 years old
```

Another Example

```python
age = 11
if age == 13:
  print("You are 13 years old")
elif age == 4:
  print("You are 4 years old")
```

Output:

```text
#Nothing because in the first statement, age is not 13, so it won't run and in the second statement age is not 4 so it won't run either
```

### Else

Else conditions, are run when all of your if or elif statements are run, and haven't been executed.

Note: In if,elif, and else statements, in a single conditional, only one condition will run. So let's say you have multiple conditions, and 2 of them are true. The one that was stated the first will be run, and the second one won't be run.

Here's an example

```python
age = 8
if age == 13:
  print("You are 13 years old")
elif age == 9:
  print("You are 9 years old")
else:
  print("You are not 9 or 13 years old")
```

Another Example:

```python
age = 13
name = "Bob"
if age == 13:
  print("You are 13 years old")
elif age == 9:
  print("You are 9 years old")
elif name == "Bob":
  print("Your name is Bob")
elif name  == "Mike":
  print("Your name is Mike")
else:
  print("You are not Mike or Bob, and you are not 13 or 9.")
```

Output:

```text
You are 13 years old
```

Remember the reason it won't output "Your name is Bob" is because only one statement will run in a single conditional statement.

### pass

The `pass` keyword is used as a placeholder so when you have a if statement that you want nothing to execute if that condition is true then use the `pass` keyword

Example:

```python
age = 15
if age == 15:
	pass
else:
	print("You are not 15")
```

This wouldn't output anything because nothing happens in the if statement because there is a `pass`

### Logic

You can have multiple conditions in each if statement, using the `and` keyword and the `or` keyword.

When you used the `and` keyword then the code will only run when all conditions are true.

When you use the `or` keyword then the code will run if one or more of the conditions are true.

## Practice Problem 2

Small Exercise

Try to make an odd and even checker, where you get a number from user input and then the computer will check if the number is odd or even. If it is odd then print out the number and say that it is odd, and if it is even then print out the number and say that it is even. Go make a new repl and try it out! If it becomes too hard then feel free to check out the solution.

Solution

```python
#First Let's get the number input from the user, and let's call it number_input
number_input = int(input("What number Would you like to check?"))

#Then let's create the conditional Statements
#Checking if the number is even
if number_input % 2 = 0:
	#Printing out the message that says the number is even
	print(f"Your number {number_input} is even.")
#Now we'll have an else statement because if the number is not even then it must be odd.But it's okay if you used an elif.
else:
	#Printing out the message that says the number is odd
	print(f"Your number {number_input} is odd.")
```

## Loops

Loops are used to run things multiple times, and there are 2 main types, for loops and while loops

### For Loops

For loops are used to iterate through items in a list, dictionary, integer, or string. They can be used to do something for every item in a variable.

Example:

```python
example_list = ['item1','other item','last item']
#we now have a list

for i in example_list: #loops through everything in the list
#and assigns the current thing to the variable i
    print(i)
```

output:

```text
item1
other item
last item
```

As you can see, it looped through every value in the list `example_list`.  
The reason the `i` is there is to have a variable you can assign to the thing it is looping through. You can change `i` to any other name as long as another variable doesn't have the same name.

Another thing you can use is `range`.

```text
for i in range(10):
	print(i)
```

output:

```text
0
1
2
3
4
5
6
7
8
9
```

It starts from 0 and goes to the number before the number you said, so it has 10 numbers in it.

If you want to exit a `for` loop, you can use `break`.

```python
for i in range(10):
	if i == 5:
		break
	else:
		print(i)
```

output:

```text
0
1
2
3
4
```

As you can see, when the number reached `5`, the loop ended.  
You can also skip iterations using `continue`.

```python
for i in range(10):
	if i == 5:
		continue
	else:
		print(i)
```

output:

```text
0
1
2
3
4
6
7
8
9
```

When the loop reached 5, it skipped the print statement and went back to the beginning of the loop.

### While Loops

While loops are used to run a program while the variable stated is the condiion stated.

Example:

```python
num = 6
other = 1
while num > other:
	print(other)
	other += 1
```

output:

```text
1
2
3
4
5
```

So, the loop keeps going on so long as `num` is greater than `other`, it prints `other`. But, when they were equal \(both at 6\), the loop stopped.

You can also use `break` and `continue` in while loops. It works the same as it did in the `for` loops.  
The most common usage for `while` loops is with `bool` values.

```text
var = True
while var:
	print('hello')
```

**output**:

```python
hello
hello
hello
hello
hello
hello
hello
hello
...
```

Since `var` is never changed \(it always stays true\), the loop goes on forever.

## Practice Problem 3

Make a program where for every number from 1-100, if the number is divisible by 15, it would print Fizzbuzz, if the number is divisble by 5, it would print Fizz, if the number is divisble by 3 then bring Buzz, otherwise it wil just print the number.Then Ask the user If they want to start the program again, if yes than restart it again, otherwise break out of the loop. Go make a new repl and try it out! If it becomes too hard then feel free to check the solutions.

Challenge: Ask the user the maximum number they want the program to run to.

**Solution**:

```python
#A while loop to keep on running the program if the user wants it to
while True:
	#A for loop to iterate through each number in the range of 1-100
	for number in range(1,101):
		#An if statement to check if the number is divisble by 15
		if number % 15 == 0:
			#Printing out Fizzbuzz
			print("Fizzbuzz")
		#An elif statement to check if the number is divisble by 5
		elif number % 5 == 0:
			#Printing out Fizz
			print("Fizz")
		#An elif statement to check if the number is divisble by 3
		elif number % 3 == 0:
			#Printing out Buzz
			print("Buzz")
		#An else statement to print out the number
		else:
			#Printing out the number
			print(number)
	#Asking the user if they want the program to run again
	again = str(input("Would you like to run the program again? Enter Y/N: "))
	#An if statement checking if the user said they want the program to run
	if again.upper() == 'Y':
		#Using pass as a placeholder because we want the program to continue
		pass
	#An else statement to break the while loop
	else:
		#Breaking the loop
		break
```

Challenge solution:

```python
#A while loop to keep on running the program if the user wants it to
while True:
	#Asking the user what they would like the maximum number to be
	max_range = input("What would you like the range to be? ")
	#A for loop to iterate through each number in the range of 1- whatever number they chose
	for number in range(max_range):
		#An if statement to check if the number is divisble by 15
		if number % 15 == 0:
			#Printing out Fizzbuzz
			print("Fizzbuzz")
		#An elif statement to check if the number is divisble by 5
		elif number % 5 == 0:
			#Printing out Fizz
			print("Fizz")
		#An elif statement to check if the number is divisble by 3
		elif number % 3 == 0:
			#Printing out Buzz
			print("Buzz")
		#An else statement to print out the number
		else:
			#Printing out the number
			print(number)
	#Asking the user if they want the program to run again
	again = str(input("Would you like to run the program again? Enter Y/N: "))
	#An if statement checking if the user said they want the program to run
	if again.upper() == 'Y':
		#Using pass as a placeholder because we want the program to continue
		pass
	#An else statement to break the while loop
	else:
		#Breaking the loop
		break
```

## Escape Codes

There are multiple escape codes that you can use in your code to do different things

`\n` This prints the text on a new line.

Ex:

Code:

```text
print("Hello\nTesting\n\nBackslash n")
```

Output:

```python
Hello
Testing

Backslash n
```

`\t` This prints a tab.

Ex:

Code:

```text
print('\ttab\t\t\tmore tabs')
```

Output:

```text
  tab			more tabs
```

## Functions

A function is a block of code that runs code. They are mainly used when you want to use code again and again, without having to write it multiple times.

Here is the syntax for it

```text
def function_name():
	code_to_run
```

Here is an example:

```text
def add():
	sum = 5 + 5
	print(sum)
```

The way that you use or call functions is through this syntax

```text
add()
```

Output: `10`

And you can use the function multiple times.

### return

There is a special keyword that can be used in functions and it is the `return` keyword

What the return keyword does, is that it gives the function that you call a value. And you have to print the function out when you want the code that was run

So here's an example

```python
def try_func():
	x = 5
	return x
try_func()
```

You might think that using `try_func()` would print out 5, but really it would assign the value of 5 to the function. If you wanted it to print out 5, then you would have to do `print(tryfunc())`

### Parameters

Parameters are something used in a function to make it more versatile and interactive. Parameters are variables, that you pass in when trying to call a function.

Here's the syntax:

```text
def function_name(parameters_needed):
	code_to_run
```

Syntax to run it:

```text
function_name(parameters)
```

Here's an example of a function using paramters

```python
def add(num1, num2):
	return int(num1) + int(num2)

print(add(9,10)) # 9 and 10 are parameters
```

this should output

```text
19
```

Basically, the function is just saying, give me two numbers, and I'll add them and return the sum.

### Lambda

Lambdas are short functions that you can use in your code, and are assigned to variable names.

Here's the syntax

```text
variable_name = lambda parameters : code_to_run
```

Calling syntax:

```text
variable_name(parameters)
```

And here's an example

```text
multiply_by5 = lambda num: num * 5
```

Calling it:

```text
print(multiply_by5(5))
```

Output: `25`

You can also use lambdas in function, the are mostly used in the return

```python
def concatenator(string):
	return lambda string2 : string2 + string

er_concatenator = concatenator("er")
print(er_concatenator("Program"))
```

Output:`Programer`

### Scopes

A scope is where a variable is stored. Like if it's inside if a function.

#### Global

The global scope are variables that can be accesed by all of your code.  
eg.

```text
x = 'This is in the global scope'
```

#### Local

The local scope is the scope of a function, and you may notice, that when you set a variable inside of a function then you can't access it outside the function, and you will get an error. This happens because the version of that variable only changes inside of the function. Here is an example of the error.

```python
def y():
	x = 1

y()
print(x)
```

The way you can fix this is by using the global keyword and declaring that variable as a global variable

```python
def y():
	global x
	# Declaring x to be a global variable
	x += 1

y()
print(x)
```

The `global` keyword basically moves the `x` variable from the local scope to the global scope, and all changes that are made when the function is called is applied to the global version of `x`.
