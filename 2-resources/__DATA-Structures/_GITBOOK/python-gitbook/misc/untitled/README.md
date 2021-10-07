# About Python

## What is Python? <a id="b4c3"></a>

Python in simple words is a **High-Level Dynamic Programming Language** which is **interpreted**. Guido van Rossum , the father of Python had simple goals in mind when he was developing it, **easy looking code, readable and open source.** Python is ranked as the 3rd most prominent language followed by JavaScript and Java in a survey held in 2018 by Stack Overflow which serves proof to it being the most growing language.![](https://miro.medium.com/max/60/1*eyS89-AW_3UQ5bQl7GrxnA.png?q=20)

![](https://miro.medium.com/max/718/1*eyS89-AW_3UQ5bQl7GrxnA.png)

## Features of Python <a id="b2af"></a>

Python is currently my favorite and most preferred language to work on because of its _simplicity, powerful libraries, and readability_. You may be an old school coder or may be completely new to programming, Python is the best way to get started!

Python is currently my favorite and most preferred language to work on because of its _simplicity, powerful libraries, and readability_. You may be an old school coder or may be completely new to programming, is the best way to get started!

Python provides features listed below :

- **Simplicity:** Think less of the syntax of the language and more of the code.
- **Open Source:** A powerful language and it is free for everyone to use and alter as needed.
- **Portability:** Python code can be shared and it would work the same way it was intended to. Seamless and hassle-free.
- **Being Embeddable & Extensible:** Python can have snippets of other languages inside it to perform certain functions.
- **Being Interpreted:** The worries of large memory tasks and other heavy CPU tasks are taken care of by Python itself leaving you to worry only about coding.
- **Huge amount of libraries:** Data Science Python has you covered. Web Development? Python still has you covered. Always.
- **Object Orientation:** Objects help breaking-down complex real-life problems into such that they can be coded and solved to obtain solutions.

To sum it up, Python has a **simple syntax**, is **readable**, and has **great community support**. You may now have the question, What can you do if you know Python? Well, you have a number of options to choose from.

- Data Scientist
- Machine Learning and Artificial Intelligence
- Internet of Things
- Web Development
- Data Visualization
- Automation

Now when you know that Python has such an amazing feature set, why don’t we get started with the Python Basics?

## Jumping to the Python Basics <a id="93a6"></a>

To get started off with the Python Basics, you need to first **install Python** in your system right? So let’s do that right now! You should know that most **Linux** and **Unix** distributions these days come with a version of Python out of the box. To set yourself up, you can follow this **step-to-step guide**.

Once you are set up, you need to create your first project. Follow these steps:

- Create **Project** and enter the name and click **create**.
- **Right-click** on the project folder and create a **python file** using the New-&gt;File-&gt;Python File and enter the file name

You’re done. You have set up your files to start [coding with Python](https://www.edureka.co/blog/python-programming-language). Are you excited to start coding? Let’s begin. The first and foremost, the “Hello World” program.

```text
print('Hello World, Welcome to edureka!')
```

**Output**: Hello World, Welcome to edureka!

There you are, that’s your first program. And you can tell by the syntax, that it is **super easy** to understand. Let us move over to comments in Python Basics.

## Comments in Python <a id="e842"></a>

Single line comment in Python is done using the \# symbol and “‘ for multi-line commenting. If you want to know more about **comments**, you can read this full-fledged guide. Once you know commenting in Python Basics, let’s jump into variables in Python Basics.

## Variables <a id="89e6"></a>

![](https://miro.medium.com/max/603/1*ndKnYewSMNvMRfLE-3OIVQ.png)

Variables in simple words are **memory spaces** where you can store **data** or **values**. But the catch here in Python is that the variables don’t need to be declared before the usage as it is needed in other languages. The **data type** is **automatically assigned** to the variable. If you enter an Integer, the data type is assigned as an Integer. You enter a [string](https://www.edureka.co/blog/what-is-string-in-python/), the variable is assigned a string data type. You get the idea. This makes Python **dynamically typed language**. You use the assignment operator \(=\) to assign values to the variables.

```text
a = 'Welcome to edureka!'
b = 123
c = 3.142
print(a, b, c)
```

**Output**: Welcome to edureka! 123 3.142  
You can see the way I have assigned the values to those variables. This is how you assign values to variables in Python. And if you are wondering, yes, you can **print multiple variables** in a single print statement. Now let us go over Data Types in Python Basics.

## Data Types in Python <a id="c3e1"></a>

Data types are basically **data** that a **language supports** such that it is helpful to define real-life data such as salaries, names of employees and so on. The possibilities are endless. The data types are as shown below:![](https://miro.medium.com/max/60/1*_Ma-JYiEt2JuvDQ0wneuig.png?q=20)

![](https://miro.medium.com/max/851/1*_Ma-JYiEt2JuvDQ0wneuig.png)

### Numeric Data Types <a id="22b1"></a>

As the name suggests, this is to store numerical data types in the variables. You should know that they are **immutable**, meaning that the specific data in the variable cannot be changed.

There are 3 numerical data types :

- **Integer:** This is just as simple to say that you can store integer values in the variables. Ex : a = 10.
- **Float:** Float holds the real numbers and are represented by a decimal and sometimes even scientific notations with E or e indicating the power of 10 \(2.5e2 = 2.5 x 102 = 250\). Ex: 10.24.
- **Complex Numbers:** These are of the form a + bj, where a and b are floats and J represents the square root of -1 \(which is an imaginary number\). Ex: 10+6j.

```text
a = 10
b= 3.142
c = 10+6j
```

So now that you have understood the various numerical data types, you can understand converting one data type into another data type in this blog of Python Basics.

### Type Conversion <a id="8d36"></a>

Type Conversion is the **conversion of a data type into another data type** which can be really helpful to us when we start programming to obtain solutions for our problems. Let us understand with examples.

```text
a = 10
b = 3.142
c = 10+6j
print(int(b), float(a), str(c))
```

**Output**: 10.0 3 ‘10+6j’  
You can understand, type conversion by the code snippet above. ‘a’ as an integer, ‘b’ as a float and ‘c’ as a complex number. You use the float\(\), int\(\), str\(\) methods that are in-built in Python which helps us to convert them. **Type Conversion** can be really important when you move into real-world examples.

A simple situation could be where you need to compute the salary of the employees in a company and these should be in a float format but they are supplied to us in the string format. So to make our work easier, you just use type conversion and convert the string of salaries into float and then move forward with our work. Now let us head over to the List data type in Python Basics.

### Lists <a id="fd64"></a>

List in simple words can be thought of as in them, i.e, **arrays** that exist in other languages but with the exception that they can have **heterogeneous elementsdifferent data types in the same list**. Lists are **mutable**, meaning that you can change the data that is available in them.

For those of you who do not know what an array is, you can understand it by imagining a Rack that can hold data in the way you need it to. You can later access the data by calling the position in which it has been stored which is called as **Index** in a programming language. Lists are defined using either the a=list\(\) method or using a=\[\] where ‘a’ is the name of the list.![](https://miro.medium.com/max/60/1*_hJY-TJt77YpleUTS_MUBQ.png?q=20)

![](https://miro.medium.com/max/642/1*_hJY-TJt77YpleUTS_MUBQ.png)

You can see from the above figure, the data that is stored in the list and the index related to that data stored in the list. Note that the Index in **Python always starts with ‘0’**. You can now move over to the operations that are possible with Lists.

List operations are as shown below in the tabular format.![](https://miro.medium.com/max/50/1*vQC-BPPmQQHpCyr63o5OFw.png?q=20)

![](https://miro.medium.com/max/851/1*vQC-BPPmQQHpCyr63o5OFw.png)

Now that you have understood the various list functions, let’s move over to understanding Tuples in Python Basics.

### Tuples <a id="3811"></a>

Tuples in Python are the . That means that once you have declared the tuple, you cannot add, delete or update the tuple. Simple as that. This makes **same as lists**. Just one thing to remember, tuples are **immutabletuples much faster than Lists** since they are constant values.

Operations are similar to Lists but the ones where updating, deleting, adding is involved, those operations won’t work. Tuples in Python are written a=\(\) or a=tuple\(\) where ‘a’ is the name of the tuple.

```text
a = ('List', 'Dictionary', 'Tuple', 'Integer', 'Float')
print(a)
```

**Output** = \(‘List’, ‘Dictionary’, ‘Tuple’, ‘Integer’, ‘Float’\)

That basically wraps up most of the things that are needed for tuples as you would use them only in cases when you want a list that has a constant value, hence you use tuples. Let us move over to Dictionaries in Python Basics.

## Dictionary <a id="5e2f"></a>

Dictionary is best understood when you have a real-world example with us. The most easy and well-understood example would be of the telephone directory. Imagine the telephone directory and understand the various fields that exist in it. There is the Name, Phone, E-Mail and other fields that you can think of. Think of the _Name_ as the **key** and the **name** that you enter as the **value**. Similarly, _Phone_ as **key**, _entered data_ as **value**. This is what a dictionary is. It is a structure that holds the **key, value** pairs.

Dictionary is written using either the a=dict\(\) or using a={} where a is a dictionary. The key could be either a string or integer which has to be followed by a “:” and the value of that key.

```text
MyPhoneBook = { 'Name' : [ 'Akash', 'Ankita' ] ,
'Phone' : [ '12345', '12354' ] ,
'E-Mail' : [ 'akash@rail.com', 'ankita@rail.com' ]}
print (MyPhoneBook)
```

**Output**: { ‘Name’ : \[‘Akash’, ‘Ankita’\], ‘Phone’ : \[‘12345’, ‘12354’\], ‘E-Mail’ : \[‘akash@rail.com’,’ankita@rail.com’\]}

### **Accessing elements of the Dictionary** <a id="bf5c"></a>

You can see that the keys are Name, Phone, and EMail who each have 2 values assigned to them. When you print the dictionary, the key and value are printed. Now if you wanted to obtain values only for a particular key, you can do the following. This is called accessing elements of the dictionary.

```text
print(MyPhoneBook['E-Mail'])
```

**Output** : \[‘akash@rail.com’,’ankita@rail.com’\]

### **Operations of Dictionary** <a id="401d"></a>

You may now have a better understanding of dictionaries in Python Basics. Hence let us move over to Sets in this blog of Python Basics.![](https://miro.medium.com/max/60/1*aClBfbhJEurNyYtoTasaNQ.png?q=20)

![](https://miro.medium.com/max/851/1*aClBfbhJEurNyYtoTasaNQ.png)

## Sets <a id="e9b9"></a>

A set is basically an You can see that even if there are similar elements in set ‘a’, it will still be printed only once because **un-ordered collection of elements** or items. Elements are sets are a collection of unique elements. **unique** in the set. In Python, they are written inside **curly brackets** and **separated by commas**.

```text
a = {1, 2, 3, 4, 4, 4}
b = {3, 4, 5, 6}
print(a,b)
```

**Output** : {1, 2, 3, 4} {3, 4, 5, 6}

### **Operations in Sets** <a id="580c"></a>

Sets are simple to understand, so let us move over to strings in Python Basics.![](https://miro.medium.com/max/60/1*1s-_lkpcLFDpFZXgWjTnJQ.png?q=20)

![](https://miro.medium.com/max/851/1*1s-_lkpcLFDpFZXgWjTnJQ.png)

## Strings <a id="71c9"></a>

Strings in Python are the most used data types, especially because they are easier for us humans to interact with. They are literally words and letters which makes sense as to how they are being used and in what context. Python hits it out of the park because it has such a powerful integration with strings. Strings are written within a **single** \(‘’\) or **double quotation marks** \(“”\). Strings are **immutable** meaning that the data in the string cannot be changed at particular indexes.

The operations of strings with Python can be shown as:

**Note: The string here I use is : mystsr =”edureka! is my place”**![](https://miro.medium.com/max/60/1*NgUL1c6Ba0Foya96mVQyCg.png?q=20)

![](https://miro.medium.com/max/851/1*NgUL1c6Ba0Foya96mVQyCg.png)

These are just a few of the functions available and you can find more if you search for it.

### Splicing in Strings <a id="39b7"></a>

Splicing is **breaking the string** into the format or the way you want to obtain it.

That basically sums up the data types in Python. I hope you have a good understanding of the same and if you have any doubts, please leave a comment and I will get back to you as soon as possible.

Now let us move over to Operators in Python Basics.

## Operators in Python <a id="5644"></a>

Operators are **constructs** you use to **manipulate** the **data** such that you can conclude some sort of solution to us. A simple example would be that if there were 2 friends having 70 rupees each, and you wanted to know the total they each had, you would add the money. In Python, you use the + operator to add the values which would sum up to 140, which is the solution to the problem.

Python has a list of operators which can be grouped as :![](https://miro.medium.com/max/60/1*2VGkh3PeaC0tZFN7F8jSIg.png?q=20)

![](https://miro.medium.com/max/642/1*2VGkh3PeaC0tZFN7F8jSIg.png)

Let us move ahead and understand each of these operators carefully.

**Note: Variables are called operands that come on the left and right of the operator. Ex :**

```text
a=10
b=20
a+b
```

Here ‘a’ and ‘b’ are the operands and + is the operator.

### Arithmetic Operator <a id="8240"></a>

They are used to perform **arithmetic operations** on data.![](https://miro.medium.com/max/60/1*lRPSioc3nAXpK52sJu4Dag.png?q=20)

![](https://miro.medium.com/max/851/1*lRPSioc3nAXpK52sJu4Dag.png)

The code snippet below will help you understand it better.

```text
a = 2
b = 3
print(a+b, a-b, a*b, a/b, a%b, a**b, end=',')
```

**Output** : 5, -1, 6, 0.6666666666666666, 2, 8

Once you have understood what the arithmetic operators are in Python Basics, let us move to assignment operators.

### Assignment Operators <a id="dcb7"></a>

As the name suggests, these are used to **assign values to the variables**. Simple as that.

The various assignment operators are :![](https://miro.medium.com/max/60/1*2xfO2Tbjx01praGwpCxQyQ.png?q=20)

![](https://miro.medium.com/max/851/1*2xfO2Tbjx01praGwpCxQyQ.png)

Let us move ahead to comparison operators in this blog of Python Basics.

### Comparison Operators <a id="b5d6"></a>

These operators are used to **bring out the relationship** between the left and right operands and derive a solution that you would need. It is as simple as to say that you use them for **comparison purposes**. The output obtained by these operators will be either true or false depending if the condition is true or not for those values.

![](https://miro.medium.com/max/60/1*Xc9ap8Wwost71hR5oBfcYA.png?q=20)

![](https://miro.medium.com/max/851/1*Xc9ap8Wwost71hR5oBfcYA.png)

You can see the working of them in the example below :

```text
a = 21
b = 10
if a == b:
    print ( 'a is equal to b' )
if a != b
    print ( 'a is not equal to b' )
if a < b:
    print ( 'a is less than b' )
if a > b:
    print ( 'a is greater than b' )
if a <= b:
    print ( 'a is either less than or equal to b' )
if a >= b:
    print ( 'a is either greater than or equal to b' )
```

**Output :**  
a is not equal to b  
a is greater than b  
a is either greater than or equal to b

Let us move ahead with the bitwise operators in the Python Basics.

### Bitwise Operators <a id="57b9"></a>

To understand these operators, you need to understand the **theory of bits**. These operators are used to **directly manipulate the bits**.![](https://miro.medium.com/max/60/1*_aR6uYOJNfxQLqvdJFTgEQ.png?q=20)![](https://miro.medium.com/max/851/1*_aR6uYOJNfxQLqvdJFTgEQ.png)

It would be better to practice this by yourself on a computer. Moving ahead with logical operators in Python Basics.

### Logical Operators <a id="8b6d"></a>

These are used to obtain a certain **logic** from the operands. We have 3 operands.

- **and** \(True if both left and right operands are true\)
- **or** \(True if either one operand is true\)
- **not** \(Gives the opposite of the operand passed\)

```text
a = True
b = False
print(a and b, a or b, not a)
```

**Output:** False True False

Moving over to membership operators in Python Basics.

### Membership Operators <a id="7375"></a>

These are used to test whether a **particular variable** or value **exists** in either a list, dictionary, tuple, set and so on.

The operators are :

- **in** \(True if the value or variable is found in the sequence\)
- **not in** \(True if the value is not found in the sequence\)

```text
a = [1, 2, 3, 4]
if 5 in a:
    print('Yes!')
if 5 not in a:
    print('No!')
```

**Output**: No!

Let us jump ahead to identity operators in Python Basics.

### Identity Operator <a id="ab51"></a>

These operators are used to **check whether the values**, variables are **identical** or not. As simple as that.

The operators are :

- is \(True if they are identical\)
- is not \(True if they are not identical\)

```text
a = 5
b = 5
if a is b:
    print('Similar')
if a is not b:
    print('Not Similar!')
```

That right about concludes it for the operators of Python.

## Namespacing and Scopes <a id="611f"></a>

You do remember that **everything in Python is an object,** right? Well, how does Python know what you are trying to access? Think of a situation where you have 2 functions with the same name. You would still be able to call the function you need. How is that possible? This is where namespacing comes to the rescue.

Namespacing is the system that Python uses to assign **unique names** to all the objects in our code. And if you are wondering, objects can be variables and methods. Python does namespacing by **maintaining a dictionary structure**. Where _names act as the keys_ and the _object or variable acts as the values in the structure_. Now you would wonder what is a name?

Well, a is just a way that you use to **nameaccess the objects**. These names act as a reference to access the values that you assign to them.

**Example**: a=5, b=’edureka!’

If I would want to access the value ‘edureka!’ I would simply call the variable name by ‘b’ and I would have access to ‘edureka!’. These are names. You can even assign methods names and call them accordingly.

```text
import math
square_root = math.sqrt
print('The square root is ',square_root(9))
```

**Output**: The root is 3.0

Namespacing works with scopes. **Scopes** are the _validity of a function/variable/value inside the function or class they belong to_. Python **built-in functions** namespacing **covers all the other scopes of Python**. Functions such as print\(\) and id\(\) etc. can be used even without any imports and be used anywhere. Below them is the **global** and **local** namespacing. Let me explain the scope and namespacing in a code snippet below :

```text
def add():
    x = 3
    y = 2
    def add2():
        p, q, r = 3, 4, 5
        print('Inside add2 printing sum of 3 numbers:'(p+q+r))
    add2()
    print('The values of p, q, r are :', p, q, r)
    print('Inside the add printing sum of 2 numbers:'(x+y))
add()
```

As you can see with the code above, I have declared 2 functions with the name add\(\) and add2\(\). You have the definition of the add\(\) and you later call the method add\(\). Here in add\(\) you call add2\(\) and so you are able to get the output of 12 since 3+4+5 is 12. But as soon as you come out of add2\(\), the scope of p,q,r is terminated meaning that p,q,r are only accessible and available if you are in add2\(\). Since you are now in add\(\), there is no p,q,r and hence you get the error and execution stops.

You can get a better understanding of the scopes and namespacing from the figure below. The **built-in scope** covers all of Python making them _available whenever needed_. The **global scope** covers all of the _programs_ that are being executed. The **local scope** covers all of the _methods_ being executed in a program. That is basically what namespacing is in Python. Let us move ahead with flow control in Python Basics.![](https://miro.medium.com/max/60/1*BHJxYyvPze04URWsOj2o_Q.png?q=20)![](https://miro.medium.com/max/245/1*BHJxYyvPze04URWsOj2o_Q.png)

## Flow Control and Conditioning in Python <a id="1592"></a>

You know that code runs sequentially in any language, but what if you want to **break that flow** such that you are able to **add logic and repeat certain statements** such that your code reduces and are able to obtain a **solution with lesser and smarter code**. After all, that is what coding is. Finding logic and solutions to problems and this can be done using loops in Python and conditional statements.![](https://miro.medium.com/max/60/1*wDSyHKX-H1tYsj2l0a56_A.png?q=20)![](https://miro.medium.com/max/851/1*wDSyHKX-H1tYsj2l0a56_A.png)

Conditional statements are **executed** only if a **certain condition is met**, else it is **skipped** ahead to where the condition is satisfied. Conditional statements in Python are the **if, elif and else.**

**Syntax:**

```text
if condition:
    statement
elif condition:
    statement
else:
    statement
```

This means that if a condition is met, do something. Else go through the remaining elif conditions and finally if no condition is met, execute the else block. You can even have nested if-else statements inside the if-else blocks.

```text
a = 10
b = 15
if a == b:
    print ( 'They are equal' )
elif a > b:
    print ( 'a is larger' )
else :
    print ( 'b is larger' )
```

**Output**: b is larger

With conditional statements understood, let us move over to loops. You would have certain times when you would want to execute certain statements again and again to obtain a solution or you could apply some logic such that a certain similar kind of statements can be executed using only 2 to 3 lines of code. This is where you use **loops in Python.**![](https://miro.medium.com/max/60/1*B1a8LKdS2J8yaBVwwSq7Bg.png?q=20)![](https://miro.medium.com/max/629/1*B1a8LKdS2J8yaBVwwSq7Bg.png)

Loops can be divided into 2 kinds.

- **Finite:** This kind of loop works until a certain condition is met
- **Infinite:** This kind of loop works infinitely and does not stop ever.

Loops in Python or any other language have to test the condition and they can be done either before the statements or after the statements. They are called :

- **Pre-Test Loops:** Where the condition is tested first and statements are executed following that
- **Post Test Loops:** Where the statement is executed once at least and later the condition is checked.

You have 2 kinds of loops in Python:

- **for**
- **while**

Let us understand each of these loops with syntaxes and code snippets below.

**For Loops:** These loops are used to perform a **certain set of statements** for a given **condition** and continue until the condition has failed. You know the **number of times** that you need to execute the for loop.

**Syntax:**

```text
for variable in range: statements
```

The code snippet is as below :

```text
basket_of_fruits= ['apple', 'orange', 'pineapple', 'banana']
for fruit in basket_of_fruits:
    print(fruit, end=',')
```

**Output**: apple, orange, pineapple, banana

This is how the for loops work in Python. Let us move ahead with the while loop in Python Basics.

**While Loops:** While loops are the **same as the for loops** with the exception that you may not know the ending condition. For loop conditions are known but the [**while loop**](https://www.edureka.co/blog/while-loop-in-python/) **conditions** may not.

**Syntax:**

```text
while condition:
     statements
```

The code snippet is as :

```text
second = 10
while second >= 0:
    print(second, end='->')
    second-=1
print('Blastoff!')
```

**Output** : 10-&gt;9-&gt;8-&gt;7-&gt;6-&gt;5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;Blastoff!

This is how the while loop works.

You later have **nested loops** where you **embed a loop into another.** The code below should give you an idea.

```text
count = 1
for i in range(10):
    print(str(i) * i)
    for j in range(0, i):
        count = count+1
```

**Output :**

1

22

333

4444

55555

666666

777777

88888888

999999999

You have the first for loop which prints the string of the number. The other for loop adds the number by 1 and then these loops are executed until the condition is met. That is how for loop works. And that wraps up our session for loops and conditions. Moving ahead with file handling in Python Basics.

## File Handling with Python <a id="ddd3"></a>

Python has built-in functions that you can use to **work with files** such as **reading** and **writing** **data** **from or to a file**. A **file object** is returned when a file is called using the open\(\) function and then you can do the operations on it such as read, write, modify and so on.

The flow of working with files is as follows :

- **Open** the file using the open\(\) function
- Perform **operations** on the file object
- **Close** the file using the close\(\) function to avoid any damage to be done with the file

**Syntax:**

```text
File_object = open('filename','r')
```

Where mode is the way you want to interact with the file. If you do not pass any mode variable, the default is taken as the read mode.![](https://miro.medium.com/max/60/1*lz4DmzzNVB_bWSGPLkCBfg.png?q=20)![](https://miro.medium.com/max/851/1*lz4DmzzNVB_bWSGPLkCBfg.png)

**Example:**

```text
file = open('mytxt','w')
string = ' --Welcome to edureka!-- '
for i in range(5):
    file.write(string)
file.close()
```

**Output**: -Welcome to edureka!- -Welcome to edureka!- -Welcome to edureka!- -Welcome to edureka!- -Welcome to edureka!- in mytxt file

You can go ahead and try more and more with files. Let’s move over to the last topics of the blog. OOPS and objects and classes. Both of these are closely related.

## OOPS <a id="bf2d"></a>

Older programming languages were structured such that **data** could be **accessed by any module of the code**. This could lead to **potential security issues** that led developers to move over to **Object-Oriented Programming** that could help us emulate real-world examples into code such that better solutions could be obtained.

There are 4 concepts of OOPS which are important to understand. They are:

- **Inheritance:** Inheritance allows us to **derive attributes and methods** from the parent class and modify them as per the requirement. The simplest example can be for a car where the structure of a car is described and this class can be derived to describe sports cars, sedans and so on.
- **Encapsulation:** Encapsulation is **binding data and objects together** such that other objects and classes do not access the data. Python has private, protected and public types whose names suggest what they do. Python uses ‘\_’ or ‘\_\_’ to specify private or protected keywords.
- **Polymorphism:** This allows us to have a **common interface for various types of data** that it takes. You can have similar function names with differing data passed to them.
- Abstraction can be used to **Abstraction: simplify complex reality by modeling classes** appropriate to the problem.
