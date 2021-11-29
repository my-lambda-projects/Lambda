Step 07: Puzzles On Utility Methods, And Strings In the previous step, we learned how to print 5 \* 6 = 30. It was not a perfect solution, because we hard-coded everything. we used an in-built function named print(), passed a string to it, and invoked the method.

In this step, let’s look at a number of puzzles related to in-built methods, their parameters, and strings in general.

For example, let’s do print("5 \* 6"), as in the previous step. What does this code result in?

    >>> print("5*6")
    5*6
    >>> print('5*6')
    5*6

It just prints the string "5 \* 6".

Let’s say we try the code print(5 \* 6),

    >>> print(5*6)
    30

Without the double quotes, 5 \* 6 is an expression. What will be the output? 30.

If you call print() with an expression argument, it prints the value of the expression. However, when we pass something within double quotes, it becomes a piece of text, printed as-is.

An interesting thing to note is, that in Python you can use either double-quotes (" and "), or single-quotes (' and ') with text values.

Let’s look at a few other in-built methods within Python.

Consider abs() (which stands for absolute value), a method that accepts a numeric value. You can use abs(10.5), passing 10.5 as a value to it, and it prints the absolute value of 10.

    >>> abs 10.5
      File "<stdin>", line 1
        abs 10.5
               ^
    SyntaxError: invalid syntax
    >>> abs(10.5)
    10.5

If you pass in a string value, will it work? It complains, “abs() function will not work with a string, it only works with numeric values”.

    >>> abs("10.5")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: bad operand type for abs(): 'str'

Let’s say you want to use a function that computes “to the power of”, for instance “2 to the power of 5”. In Python, there’s an in-built function named pow(), which does just what we need. To pow(), you can pass two parameters and calculate the result. How do you do that?

Will this work: pow 2 5? No, not at all. This code does not work as well: pow(2 5). pow(2, 5) is the correct syntax.

    >>> pow 2 5
      File "<stdin>", line 1
        pow 2 5
            ^
    SyntaxError: invalid syntax
    >>> pow(2 5)
      File "<stdin>", line 1
        pow(2 5)
              ^
    SyntaxError: invalid syntax
    >>> pow(2, 5)
    32

You’ll see that 32 is printed.

Let’s see another example, “10 to the power of 3”. pow(10,3) is the alternative to saying 10 \*\* 3. This gives us 1000, similar to how pow() would.

    >>> pow(10, 3)
    1000
    >>> 10 ** 3
    1000

max() returns maximum in a set of numbers.min() function returns the minimum value.

    >>> max(34, 45, 67)
    67
    >>> min(34, 45, 67)
    34

These are some of the in-built functions in Python, and we saw how to call the in-built functions by passing in a varied number of parameters.

Python is case sensitive. So let’s say I want of calculate pow(2,5). So this would give me 32. Now, what if I say capital 'P' instead of small 'p' here? Pow(2,5) would lead to an error.

    >>> pow(2,5)
    32
    >>> Pow(2,5)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Pow' is not defined

The only things not case-sensitive in Python, are string values. Earlier we saw that the code print("Hello") displays the text "Hello". Inside a string, the text can be in any case. Hence, print("hello") displays "hello" ,with a small 'h'.

    >>> print("Hello")
    Hello
    >>> print("hello")
    hello
    >>> print("hellO")
    hellO
    >>> print ( "hellO" )
    hellO

However inside your code, you need to be very particular about the case of function names, class names, variable names, and the like.

In your code, whitespace does not really matter. You can add space here and here, and you would still get the same output. However, in case of strings, whitespace does matter.

If we say print("hellO World"), it would print "hellO World", with a space in between. And if you do print("hellO World") with three spaces, it would print the same. In expressions, white-space does not affect the output.

    >>> print ( "hellO World" )
    hellO World
    >>> print ( "hellO     World" )
    hellO     World

The last thing we want to look at, is an escape sequence. Let’s say you want to print a double quote, ", in the code. If we were to do this: print("Hello""), what would happen? The compiler says error!

    >>> print("Hello"")
      File "<stdin>", line 1
        print("Hello"")
                      ^
    SyntaxError: EOL while scanning string literal

If you want to print a " inside a string, use an escape sequence. In Python, the symbol '\' is used as an escape character. On using '\' adjacent to the ", it prints Hello" (notice the trailing "). We have used the '\' to escape the ", by forming an escape sequence \".

> > > print("Hello\"") Hello"
> > >
> > > The other reason why you would want to use a '\' is to print a <NEWLINE>. If you want to print "Hello World", but with "Hello" on one line and "World" on the next, '\n' is the escape sequence to use.

    >>> print("Hello\nWorld")
    Hello
    World

The other important escape sequence is '\t', which prints a <TAB> in the output. When you do print("Hello\tWorld"), you can see the tab-space between "Hello" and "World".

    >>> print("Hello\tWorld")
    Hello   World

Another useful escape sequence is \\ . If you want to print a \ , then use the sequence \\ . You would see that it prints Hello\World . Think about what would happen if we put six \ . Yes you’re right! It would print this string: "\\\" .

    >>> print("Hello\\World")
    Hello\World
    >>> print("Hello\\\\\\World")
    Hello\\\World

One of the things with Python is, it does not matter whether you use double quotes or single quotes to enclose strings. There are some interesting, and useful ways of using a combination of both, within the same string. Have a look at this call: print("Hello'World"), and notice the output we get. In a similar way, the following code will be accepted and run by the Python system: print('Hello"World').

    >>> print('Hello"')
    Hello"
    >>> print("Hello'World")
    Hello'World
    >>> print("Hello\"World")
    Hello"World
    >>> print("Hello\"World")
    Hello"World

The above two examples can be used as a tip by newbie programmers when they form string literals, and want to use them in their code:

If the string literal contains one or more single quotes, then you can use double quotes to enclose it. However if the string contains one or more double quotes, then prefer to use single quotes to enclose it. Summary In this step, we:

Explored a number of puzzles related to code involving: Built-in functions for numeric calculations The print() function to display expressions and strings Covered the following aspects of the above utilities: Case-sensitive aspects of names and strings The role played by whitespace The escape character, and common escape sequences Step 08: Formatted Output With print() In the previous step, we learned how to print a hard-coded string, such as "5 \* 6 = 30".

In this step, let’s try to replace the hard-coded 30 with a computed value.

Let’s start with a simple scenario. Let’s say we want to place that calculated value within a string, and display it. How do we do that?

Snippet-01: print() Formatted Output format() method can be used to print formatted text.

Let’s see an example:

    >>> print("VALUE".format(5*2))
    VALUE

We were expecting 10 to be printed, but it’s actually printing VALUE.

How do we get 10 to be printed then?

    >>> print("VALUE {0}".format(5*2))
    VALUE 10

By having an open brace {, closed brace }, and and by putting the index of the value between them. Here, the value is the first parameter, and it’s index will be 0.

"VALUE {0}" is what we need.

Let’s take another example. Suppose to the format() function, we pass three values: 10, 20 and 30.

Typically when we count positions or indexes, we start from 0.

To print the first value, you need to pass in an index of 0. To print the second value, pass an index of 1.

    >>> print("VALUE {0}".format(10,20,30))
    VALUE 10
    >>> print("VALUE {1}".format(10,20,30))
    VALUE 20
    >>> print("VALUE {2}".format(10,20,30))
    VALUE 30

Now going back to our problem, we wanted to display "5 _ 6 = 30", but without hard-coding. Instead of 30, we want the calculated value of 5 _ 6.

    >>> print("5 * 6 = 30".format(5,6,5*6))
    5 * 6 = 30

Let replace "5 _ 6 = 30" with "5 _ 6 = {2}". 2 is the index of parameter value 5\*6.

    >>> print("5 * 6 = {2}".format(5,6,5*6))
    5 * 6 = 30

Cool! Progress made.

Let’s replace 5 _ 6 with the right indices - {0} _ {1}.

    >>> print("{0} * {1} = {2}".format(5,6,5*6))
    5 * 6 = 30

The great thing about this, is now we can replace the values we passed to print() in the first place, without changing the indexes! So, we can display results for 5 _ 7 = 35 and 5 _ 8 = 40. We are now able to print 5 _ 6 = 30, 5 _ 7 = 35, 5 \* 8 = 40, and can do similar things for other table entries as well.

    >>> print("{0} * {1} = {2}".format(5,7,5*7))
    5 * 7 = 35
    >>> print("{0} * {1} = {2}".format(5,8,5*8))
    5 * 8 = 40
    >>> print("{0} * {1} = {2}".format(5,8,5*8))
    5 * 8 = 40

Summary In this step, we:

Discovered that Python provides a way to do formatted printing of string values Looked at the format() function, and saw how to call it within print() Observed how we could work only with the indexes of parameters to format(), and change the parameters we pass without changing the code Step 09: Puzzles On format() and print() In this step, let’s look at a few puzzles related to the format, and the print methods.

Snippet-01: format() And print() Puzzles Let’s say we pass in additional values, such as: 5 _ 8, 5 _ 9 and 5 \* 10. However, within the call to format(), we are only referring to the values at index 0, index 1 and index 2. The values at indexes 3 and 4 are not used at all. What would happen when we run the code?

    >>> print("{0} * {1} = {2}".format(5,8,5*8,5*9,5*10))
    5 * 8 = 40

Would this throw an error? No, it does not. You can see that the additional values which are passed in, are conveniently ignored.

Let’s say instead of passing in a value of 2, we pass 4. What would happen?

    >>> print("{0} * {1} = {4}".format(5,8,5*8,5*9,5*10))
    5 * 8 = 50

5 \* 10 is the value at index 4

Now let’s take a different scenario. We remove all the parameters passed to format(). However, inside the call to print(), we continue to say {0} \* {1} = {4}. So we are trying to print the value at index 4, but are only passing two values to the function format(). What do you think will happen?

    >>> print("{0} * {1} = {4}".format(5,8))
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: tuple index out of range

It says IndexError, which means :“you are asking me to fetch the value at index 4, but only passing in two values. How can I do what you want?”

Let’s look at a few more things related to other data types. We try to format the following inside print(): {0} _ {1} = {2}, and would pass in 2.5, 2, and 2.5 _ 2 . Here, 2 is an integer value, but 2.5 is a floating point value. You can see that it prints 2.5 \* 2 = 5.0. So this approach of formatting values with print(), works also with floating point data as well.

    >>> print("{0} * {1} = {2}".format(2.5,2,2.5*2))
    2.5 * 2 = 5.0

Now, are there are other types of data that format() works with? Yes, strings can join the party.

Let’s say over here, we do: print("My name is {0}".format("Ranga")). What would happen?

    >>> print("My name is {0}".format("Ranga"))
    My name is Ranga

Index 0 will be replaced with the first parameter to format().

Summary In this step, we:

Understood the behavior when the parameters passed to format(): Exceed the indexes accessed by print() Are less than the indexes accessed by print() Are of type integer, floating-point or string Step 10: Introducing Variables We are slowly making progress toward our main goal, which is to print the 5 multiplication table.

In the first statement, we are printing 5 _ 1 = 5, and then changing the literals. To make it print 5 _ 2 = 10, we are changing 1 to 2. Next, we are changing 2 to 3. How do we make it a little simpler, so that our effort is reduced?

    >>> print("{0} * {1} = {2}".format(5,1,5*1))
    5 * 1 = 5
    >>> print("{0} * {1} = {2}".format(5,2,5*2))
    5 * 2 = 10
    >>> print("{0} * {1} = {2}".format(5,3,5*3))
    5 * 3 = 15

Let’s try a different approach.

What would happen if you replace 1 with index, and 5 _ 1 with 5 _ index, and try to run it?

It gives an error! It says: “index is not defined”.

Let’s try and fix this, and execute index = 2. What would happen?

    >>> index = 2

Aha! This compiles.

    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 2 = 10

And this statement is printing 5 \* 2 = 10.

Let’s try something else. Let’s make index = 3. What would happen?

    >>> index = 3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15

The same statement on being run, prints 5 \* 3 = 15.

How can you check the value that index has? Just type in index.

    >>> index
    3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15

The index symbol we have used here, is what is called a variable.

In Python, it’s also called a name.

You can see that the value index referring to, can change over the duration of a program.

Initially, index was referring to a value of 1. later, index was referring to a value of 3.

Now, think about how you would print the entire table. All that you need to do, is start from 1, execute the same statement with print() and format(), to get output 5 \* 1 = 5. Next, Change the value of index to 2, and then print the same statement. Next, index = 3, and print the same statement again.

    >>> index = 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 1 = 5
    >>> index = 2
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 2 = 10
    >>> index = 3
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 3 = 15

With the same statement print("{0} * {1} = {2}".format(5,index,5*index)), we are able to print different values. The value of index varies, but the code remains the same!

Variables make the program much more easier to read, as well as more generic.

Snippet-02: Classroom Exercise On Variables Let’s do a simple exercise with variables.

We want to create three variables a, b and c. Let’s initially give them some values, say a value of 5 to a, 6 to b and 7 to c.

We want to get output of this kind: 5 + 6 + 7 = 18, without using the literal values.

You would want to use the values stored in the variables in a, b and c.

If you’re hard-coding, the way to do it is with print("5 + 6 + 7 = 18").

    >>> a = 5
    >>> b = 6
    >>> c = 7
    >>> print("5 + 6 + 7 = 18")
    5 + 6 + 7 = 18
    >>> print("5 + 6 + 7 = 18".format(a,b,c,a+b+c))
    5 + 6 + 7 = 18

The way you can do that is with code like this: print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c)).

    >>> print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c))
    5 + 6 + 7 = 18

How do you confirm we are accessing values stored in the variables?

Let’s change the values of a, b and c. Let’s make a = 6 , b = 7 , and c = 8 . Execute same statement.

    >>> a = 6
    >>> b = 7
    >>> c = 8
    >>> print("{0} + {1} + {2} = {3}".format(a,b,c,a+b+c))
    6 + 7 + 8 = 21

You can see the magic of variables at play here! Based on what values these variables are referring to, you can see that the output of the print statement changes.

Summary In this step, we:

Were introduced to variables, or names, in Python Observed how we could pass in values of variables to the format() function Step 11: Puzzles On Variables In the previous step, we were introduced to the concept of variables in Python.

We will start with looking at a few puzzles.

Snippet-01: Puzzles On Variables What if I try to refer to a variable which is not yet created?

    >>> count
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'count' is not defined
    >>> print(count)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'count' is not defined

Before using a variable, you need to have it assigned a value. If you have not defined a variable before, then you cannot use it. Consider print(count), it does not know what count is. So it would throw an error, saying: “count is not defined, I have no idea what count is.”

Once you assign a value to a variable, you can use it.

    >>> count = 4
    >>> print(count)
    4

The statement count = 4 where we are creating a variable named count for the first time, is called a variable definition.

This is the first time you’re referring to a variable, and assigning a value to it.

Python will create a variable in its memory.

Variable names are case sensitive. count and Count are not the same thing.

    >>> Count
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Count' is not defined
    >>> count
    4

There are rules to follow while naming variables.

All variable names should either start with an alphabet , or an underscore \_ . count, \_count are valid. 1count is invalid.

    >>> 1count = 5
      File "<stdin>", line 1
        1count = 5
             ^
    SyntaxError: invalid syntax
    >>> count = 5
    >>> _count = 5
    >>> 1count
      File "<stdin>", line 1
        1count
             ^
    SyntaxError: invalid syntax
    >>> 2count
      File "<stdin>", line 1
        2count
             ^
    SyntaxError: invalid syntax

After the first symbol, you can also use a numeral in variable names.

    >>> c12345 = 5

To summarize the rules for naming variables.

This should start with an alphabet (a capital or a small alphabet) or underscore. Starting the second character, it can be alphabet, or underscore, or a numeric value. Summary In this step, we:

Understood that a variable needs to be defined before it is used Learned that there are certain rules to be followed while giving names to variables Step 12: Introducing Assignment In this step, we will look at an important concept in Python, called assignment. In previous steps, we created variables, like i = 5.

Snippet-01: Introducing Assignment You can create other variables using whatever value i is referring to. If we say j = i, what would happen?

    >>> i = 5
    >>> j = i
    >>> j
    5

j would start referring to the same value that i is referring to. This statement is called an assignment.

Let’s try j = 2 \* i.

    >>> j = 2 * i
    >>> j
    10

j refers to a value of 10

= has a different meaning in programming compared to mathematics.

In mathematics, When we execute j = i, it means j and i are equal.

In prgramming, the value of the expression on right hand side is assigned to the variable on the right hand side. Can you use a constant on the left hand side of an assignment? The answer is “No”!

    >>> 5 = j
      File "<stdin>", line 1
    SyntaxError: can't assign to literal

The Python Shell throws an error, saying “Can’t assign to literal”, as 5 is a literal.

Let’s create a couple of variables. num1 = 5 and num2 = 3. We would want to add these and create a fresh variable. Let’s say the name of the variable is sum.

    >>> num1 = 5
    >>> num2 = 3
    >>> sum = num1 + num2
    >>> sum
    8

Create 3 variables a, b and c with different values and calculate their sum.

    >>> a = 5
    >>> b = 6
    >>> c = 7
    >>> sum = a + b + c
    >>> sum
    18

We have just seen the mechanics of how assignment works in Python.

Summary In this step, we:

Learned what happens when you assign a value to a variable, which may or may not exist Discovered that literal constants cannot be placed on the left hand side of the assignment(=) operator Step 13: Introducing Formatted Printing Until now, we have been using the format() method to format and print values. Let’s see a better approach to printing values.

This is the approach we used until now.

    >>> a = 1
    >>> b = 2
    >>> c = 3
    >>> sum = a + b + c
    >>> print("{0} + {1} + {2} = {3}".format(a, b, c ,sum))
    1 + 2 + 3 = 6

Python has the concept of formatted strings. The syntax to use a formatted string is very simple - f"".

If we want to print the value of a variable a, we can use {a} in the text.

    >>> print(f"")
    >>> print(f"value of a is {a}")
    value of a is 1
    >>> print(f"value of b is {b}")
    value of b is 2

The variable within braces is replaced by its value.

You can use expressions in a formatted string. Example below uses {a+b}.

    >>> print(f"sum of a and b is {a + b}")
    sum of a and b is 3

This feature was introduced in a Python 3 release.

Let’s get back to the original problem we wanted to solve: printing 5 + 6 + 7 = 18, using formatted strings.

    >>> print(f"{a} + {b} + {c} = {sum}")
    1 + 2 + 3 = 6

You can see how easy it turns out to be!

Step 14: The PMT-Challenge Revisited We want to print the 5-table from 5 _ 1 = 5 onward, until we reach to 5 _ 10 = 50. The best solution we have right now, is shown below:

Snippet-01: >>> index = 1 >>> print("{0} * {1} = {2}".format(5,index,5*index)) 5 _ 1 = 5 >>> index = 2 >>> print("{0} _ {1} = {2}".format(5,index,5*index)) 5 * 2 = 10 >>> index = 3 >>> print("{0} * {1} = {2}".format(5,index,5*index)) 5 _ 3 = 15 >>> index = 4 >>> print("{0} _ {1} = {2}".format(5,index,5*index)) 5 * 4 = 20 Can we do something, to make sure that the code remains the same all the time, but the index value gets updated?

    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 5 = 25
    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 6 = 30
    >>> index = index + 1
    >>> print("{0} * {1} = {2}".format(5,index,5*index))
    5 * 7 = 35

We used index = index + 1 to increment index value.

If we execute these same two statements again and again, we can print the entire table! This is exactly what loops help us do: execute the same statements repeatedly.

The simplest loop available in Python is the for loop.

When we run a for loop, we need to specify the range of values - 1 to 10 or 1 to 20, and so on. range() function helps us to specify a range of values.

    >>> range(1,10)
    range(1, 10)

The syntax of the for loop is: for i in range(1, 10): .... Here, i is the name of the control variable. In Python, you need to put a colon, ‘:’, and in the next line give indentation.

    >>> for i in range(1,10):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9

You would see that it prints from 1 to 9.

When we run a loop in range(1, 10), 1 is inclusive and 10 is exclusive.The loop runs from 1 to the value before 10, which is 9.

The leading whitespace before print(i) is called indentation. We’ll talk about indentation later, when we talk about puzzles related to the for loop.

How can you extend this concept to solving our PMT-Challenge problem?

    >>> print(f"{5} * {index} = {5*index}")
    5 * 7 = 35

What we were doing earlier, was calling print() with a formatted string. Now we want to print this statement for different values of i.

How can you do that?

Let’s start with a simple example.

    >>> for i in range(1,11):
    ...   print(f"{i}")
    ...
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

print(f"{i}") prints the value of i.

Now, how do we get it to print 5 _ 1 = 5 to 5 _ 10 = 50?

    >>> for i in range(1,11):
    ...   print(f"5 * {i} = {5 * i}")
    ...
    5 * 1 = 5
    5 * 2 = 10
    5 * 3 = 15
    5 * 4 = 20
    5 * 5 = 25
    5 * 6 = 30
    5 * 7 = 35
    5 * 8 = 40
    5 * 9 = 45
    5 * 10 = 50
    >>> 5 * 4 * 50
    1000

print(f"5 _ {i} = {5 _ i}") prints a specific multiple of 5.

Step 15: Loops In a previous step, we took a major step in programming. We wrote our first for loop with Python. In this step, let’s try a few puzzles to understand the for loop even further.

The syntax of the for loop we looked at earlier was:

for i in range(1, 10): print(i) Snippet-01: Let’s say we write a for loop, but don’t give a : after the range() method, to close the first line. What would happen?

    >>> for i in range(1,10)
      File "<stdin>", line 1
        for i in range(1,10)
                           ^
        SyntaxError: invalid syntax

Invalid syntax. A : is mandatory within the for loop syntax.

Let’s provide a : and in the next line, use print(i) without space before it (without indentation).

    >>> for i in range(1,10):
    ... print(i)
      File "<stdin>", line 2
        print(i)
            ^
    IndentationError: expected an indented block

Most other programming languages use open brace { and closed brace } as delimiters in a for loop. However, Python uses indentation to identify which code is part of a for loop, and which is not. So if we are writing the body of a for loop, we must use indentation, and leave atleast a single <SPACE>.

    >>> for i in range(1,10):
    ...   print(i)
    ...
    1
    2
    3
    4
    5
    6
    7
    8
    9

How do we execute two lines of code as part of the for loop?

    >>> for i in range(1,10):
    ...  print(i)
    ...  print(2*i)
    ...
    1
    2
    2
    4
    3
    6
    4
    8
    5
    10
    6
    12
    7
    14
    8
    16
    9
    18

We are indenting both statements with a space - print(i) and print(2\*i).

When for loop has only one line of code, you can specify it right after the :

    >>> for i in range(2,5): print(i)
    ...
    2
    3
    4

However, this is not considered to be a good programming practice. Even though you may want to execute just one statement in a for loop, indentation on a new line is recommended.

Another best practice is to use four <SPACE>s for indentation, instead of just two. This would give clear indentation of the code.

    >>> for i in range(2,5):
    ...     print(i)
    ...
    2
    3
    4

Anybody who looks at the code immediately understands that this print() is part of the for loop.

Let’s say you only want to print the odd numbers till 10, which are 1, 3, 5, 7 and 9. The range() function offers an interesting option.

    >>> for i in range (1,11,2):
    ...   print(i)
    ...
    1
    3
    5
    7
    9

In for i in range(1, 11, 2), we pass in a third argument, called a step. After each iteration, the value of i is increment by step.

Summary In this step, we:

Looked at a few puzzles about the for loop, which lay emphasis on the following aspects of for: The importance of syntax elements such as the colon Indentation Variations of the range() function Step 16: Programming Exercise PE-BA-02 In the previous step, after initially exploring the Python for loop, we looked at a number of puzzles.

In this step, let’s look at a few exercises.

Exercises Print the even numbers up to 10. We would want to print 2 4 6 8 10, using a for loop. Print the first 10 numbers in reverse Print the first 10 even numbers in reverse Print the squares of the first 10 numbers Print the squares of the first 10 numbers, in reverse Print the squares of the even numbers Solution 1 Instead of starting with 1, we need to start with 2. Each time, i it would be incremented by 2, and 2 4 6 8 and 10 would be printed.

    >>> for i in range (2,11,2):
    ...   print(i)
    ...
    2
    4
    6
    8
    10

Solution 2 We would want to print the numbers in reverse. Think about how you would do that using the range() function. We’d want go from 10, 9, 8, and so on up to 1.

    >>> for i in range (10,0,-1):
    ...   print(i)
    ...
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1

The value to start with is 10. As we discussed earlier, the end value is exclusive. So to print from 10 to 1, we want to end one value which is 0. range(10, 0) seems to be what we need.

Usually these step value is positive, but we need to go backwards from 10. Hence, we would give a step value of -1.

Solution 3 Now, let’s print the first 10 even numbers in reverse.

    >>> for i in range (20,0,-2):
    ...   print(i)
    ...
    20
    18
    16
    14
    12
    10
    8
    6
    4
    2

Solution 4 Next, we would want to print the squares of the first 10 numbers.

    >>> for i in range (1,11):
    ...     print(i * i)
    ...
    1
    4
    9
    16
    25
    36
    49
    64
    81
    100

Solution 5 Let’s print the squares in the reverse order.

    >>> for i in range (10,0,-1):
    ...     print(i*i)
    ...
    100
    81
    64
    49
    36
    25
    16
    9
    4
    1

Solution 6 Print the squares of the even numbers. How to do that?

    >>> for i in range (10,0,-2):
    ...     print(i*i)
    ...
    100
    64
    36
    16
    4

The key part is using a step of -2

We leave it as an exercise for you, to print squares of odd numbers.

Summary In this video, we: \* Tried out a few exercises involving the for loop, by playing around with printing sequences of numbers.

Used the for loop to simplify the solution to the PMT-Challenge problem. Step 17: Review: The Basics Of Python It must have been a roller-coaster ride to solve the multiplication table challenge so far. If you’re new to programming, there are a wide range of topics and concepts, that you would have learned during this small journey.

Let’s quickly revise the important concepts we have learned during this small journey.

1, 11, 5, … are all called literals because these are constant values. Their values don’t really change. _Consider 5 _ 4 _ 50`. This is an expression. `_`is an operator, and`5`, `4`and`50 are operands. The name i in i = 1, is called a variable. It can refer to different values, at different points in time. range() and print() are in-built Python functions. Every complete line of code is called statement. The specific statement print(), is invoking a method. The other statement which we looked at earlier, was an assignment statement. index = index + 1 would evaluate index + 1, and have the index variable refer to that value. The syntax of the for loop was very simple. for var in range(1, 10) : ..., followed by statements you would want to execute in a loop, with indentation. For the sake of indentation we left four <SPACE>s in front of each statement inside the for loop. So that, in a nutshell, is what we have learned over the course of our first section.

Chapter 03 - Introducing Methods In the last section, we introduced you to the basics of python. We learned those concepts by applying them to solve the PMT-Challenge problem. The code below is what we ended up with as we solved that chellenge.

Snippet-01: Current Solution To PMT-Challenge >>> for i in range (1,11): ... print(f"8 _ {i} = {8 _ i}") If we wanted to change the code to print the 7 table, we need to change the value 7 used in the for loop, to 8. It’s simple, but still not as friendly as you would like.

    >>> for i in range (1,11):
    ...   print(f"7 * {i} = {7 * i}")

To print a 7 table, it would be awesome if could say print_multiplication_table, and give a value of 7 beside it, and it would do the rest:

    >>> print_multiplication_table(7)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'print_multiplication_table' is not defined
    >>> print_multiplication_table(8)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'print_multiplication_table' is not defined

Similarly, print_multiplication_table(8), could print the multiplication table for 8!

To be able to do this, we need to create a method, or a function. Creating a method makes the code reusable, and we can invoke that method very easily by passing arguments.

In this section, we take an in-depth look at methods.

Step 01: Defining Your First Method Methods are very important building blocks in Python programming. In this step, we will create a simple method that prints "Hello World", twice.

Snippet-01: When we talk about a method, we need to give it a name. We are already using an in-built Python method here, which is print().

    >>> print("Hello World")
    Hello World
    >>> print("Hello World")
    Hello World

Similar to that, we need to give a name to our body of code. Let’s say the name is print_hello_world_twice.

The syntax to create a method in Python is straightforward:

At the start, use the keyword def followed by a space.

Followed by name of the method - print_hello_world_twice.

Add a pair of parenthesis: ().

This is followed by a colon : (similar to what we used in a for loop).

> > > def print_hello_world_twice(): ... print("Hello World") ... print("Hello World") ... All statements in a method should be indented. The two print("Hello World") are indented. So, they are part of the method body.

print_hello_world_twice() defines a method, and it has certain code inside its body.

How do we call this method? Is it sufficient to say print_hello_world_twice?

    >>> print_hello_world_twice
    <function print_hello_world_twice at 0x10a71ef28>

Python Shell says, there’s a function defined with that specific name.

How do we execute a method? Very simple! Add a pair of parentheses to the name, ()!

    >>> print_hello_world_twice()
    Hello World
    Hello World
    >>> print_hello_world_twice()
    Hello World
    Hello World

Now, we are able to run the method.

Summary In this step, we:

Learned we can define our own methods in the code we write Understood how to define a method, and all its syntax elements Saw how we can invoke a method we write Step 02: Programming Exercise PE-MD-01 We will now leave you with two exercises, based on what we have learned about methods so far.

Exercises Write a method called print_hello_world_thrice(). It should print "Hello World" thrice to the output. Define this method, and also invoke it.

Write and execute a method, that prints four statements:

“I have created my first variable.” “I’ve created in my first loop.” “I’ve created my first method.” “I am excited to learn Python.” You need to print these four statements on four consecutive lines. Solutions Solution 1 >>> def print_hello_world_thrice(): ... print("Hello World") ... print("Hello World") ... print("Hello World") ... >>> print_hello_world_thrice() Hello World Hello World Hello World Solution 2 >>> def print_your_progress(): ... print("Statement 1") ... print("Statement 2") ... print("Statement 3") ... print("Statement 4") ... >>> print_your_progress() Statement 1 Statement 2 Statement 3 Statement 4

    def print_your_progress():
        print("Statement 1")
        print("Statement 2")
        print("Statement 3")
        print("Statement 4")

For convenience, we have changed the exact text we need to print. Call this method with the syntax print_your_progress(), and you’re able to execute its code.

Now try another exercise. We want to print "Statement 1", "Statement 2", "Statement 3" and "Statement 4" on different lines, using just one print statement. How can you do that?

    >>> def print_your_progress():
    ...     print("Statement 1\nStatement 2\nStatement 3\nStatement 4")
    ...
    >>> print_your_progress()
    Statement 1
    Statement 2
    Statement 3
    Statement 4

We are using the newline character \n.

Let’s look at the difference between defining and executing a method.

When we are writing a method definition, we are writing the code as part of its body. It has a specific syntax, and starts with the def keyword.

A definition by itself cannot cause the code in its body to be executed.

print_your_progress() represents a method call. The code inside the method is executed.

Summary In this step, we:

Implemented solutions to a few exercises that test our understanding of Python methods. We touched concepts such as: Defining a method body The way to invoke a method, to run its code The difference between the two Step 03: Passing Parameters To Methods In the previous step,we created methods. We defined print_hello_world_twice(), and this printed "Hello World" twice. In this step, let’s talk about method arguments, or parameters.

Snippet-01: >>> print_hello_world_twice() Hello World Hello World >>> print_hello_world_thrice() Hello World Hello World Hello World Earlier, we wrote code for print_hello_world_thrice(), which prints the message three times.

Let’s say you want to print it five times. You would need to write another method that does what you need. Doesn’t that seem monotonous?

Instead of that, Won’t it be great if I can call the method by the same name, say print_hello_world(5), and it would print “Hello World” five times?

The 5 which we are passing here is called an argument.

How do we define our method to accept this argument?

Let’s call our argument no_of_times. If you have any experience with other programming languages, they generally need you to specify the parameter type. Something like This parameter is an integer/float/string, or other types. But Python does not require parameter type.

    >>> def print_hello_world(no_of_times):
    ...    print("Hello World")
    ...    print(no_of_times)
    ...

Although we are not doing exactly what we set out to, let’s see what would happen. What would happen if we say print_hello_world() ?

    >>> print_hello_world()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: print_hello_world() missing 1 required positional argument: 'no_of_times'

Error! Something like “Hey, you have created print_hello_world with a parameter, but not passing anything in here! Go ahead and pass a value”. Let’s pass in a value, such as 5.

    >>> print_hello_world(5)
    Hello World
    5
    >>> print_hello_world(10)
    Hello World
    10
    >>> print_hello_world(100)
    Hello World
    100

With print_hello_world(5), you can see "Hello World" and 5 being printed. We are now able to define this method to accept a value, and print that value by invoking it. You can pass in any value, such as10, 100, or others.

Now think of a different solution for this method, where you don’t repeat the same piece of code to print "Hello World". Consider print_hello_world(5), it should still print "Hello World" 5 times. How do you do that?

Think about using something along the lines of a loop.

Snippet-02: For now, what we are doing is we are printing "Hello World" 10 times.

    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,10):
    ...       print("Hello World")
    ...

    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World

Our method call print_hello_world(5) now prints "Hello World" 10 times.

However just print the message 5 times. We need to make use of the parameter no_of_times inside the for loop as well.

    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,no_of_times):
    ...       print("Hello World")
    ...

    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World

Now let’s execute the method again. You can see that it’s printing 4 times only.

Why is it not printing 5 times?

That’s because no_of_times as a second parameter to range() is exclusive.

    >>> def print_hello_world(no_of_times):
    ...    for i in range(1,no_of_times+1):
    ...       print("Hello World")
    ...
    >>> print_hello_world(5)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World

Great, it’s now printing the message 5 times!

    >>> print_hello_world(7)
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World
    Hello World

If you pass a different argument like 7, the message is displayed 7 times.

Something you need to always be cautious about in Python, is the indentation. Over here, the for loop is part of the method body. So we have extra indentation for it. The print is part of the for loop body. So guess what, even more indentation for that code.

Summary In this step, we:

Learned how to pass arguments to a method Understood that the method definition needs to have parameters coded in Observed that arguments passed during a method call can be accessed inside a methods body Step 04: Classroom Exercise CE-MD-01 In this step, Let’s look at a few exercises related to the method parameter.

Exercises Write a method called print_numbers(), that would print all successive integers from 1 to n.

The second one is to write a method called print_squares_of_numbers(), that prints squares of all successive integers from 1 to n.

Solutions Solution 1 >>> def print_numbers(n): ... for i in range(1, n+1): ... print(i) ... >>> print_numbers(5) 1 2 3 4 5 >>> If you are programming in other languages such as Java, you are used to naming methods in this way: printNumbers(). This convention is popularly known as “Camel Case”.

That’s NOT how Python programmers name their methods. Pythonic way is to use underscore \_ to separate words in the method name, as in print_numbers().

Solution 2 Let’s define print_squares_of_numbers(). This would be very similar to print_numbers(), working with the same range. Only, we need to say print(i\*i) .

    >>> def print_squares_of_numbers(n):
    ...    for i in range(1, n+1):
    ...       print(i*i)
    ...
    >>> print_squares_of_numbers(5)
    1
    4
    9
    16
    25

How is a parameter different from an argument?

Inside the definition of the method, the name within parentheses is referred to as a parameter. In our recent exercise, n is a parameter, because it’s used in the definition of print_squares_of_numbers. When you are passing a value to a method during a method call, say 5, that value is called an argument. Don’t worry too much about it. Just follow this convention for now: In the method call, call it an argument. In a method definition, call it a parameter. Summary In this step, we looked at a few simple exercises related to passing method arguments
