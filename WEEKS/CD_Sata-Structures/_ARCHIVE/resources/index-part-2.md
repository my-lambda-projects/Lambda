# Index Part 2:

Let’s use `while` around the `if`. We cannot predict what choice the user enters. We’ll say: `while choice != 5:...` and at the end, we would want to ask the user for a choice. If your choice is anything other than `5`, we will give the output, and print the whole menu again.

```text
number1 = int(input("Enter Number1: "))
number2 = int(input("Enter Number2: "))

print("\n\n1 - Add")
print("2 - Subtract")
print("3 - Divide")
print("4 - Multiply")
print("5 - Exit")

choice = int(input("Choose Operation: "))

while(choice != 5):

    # print(number1 + number2)
    # print(choice)
    if choice==1:
        result = number1 + number2
    elif choice==2:
        result = number1 - number2
    elif choice==3:
        result = number1 / number2
    elif choice==4:
        result = number1 * number2
    else:
        result = "Invalid Choice"

    print(result)

    choice = int(input("Choose Operation: "))

print("Thank You")
```

These are the kind of situations where `while` loop is good. W

**Summary**

In this step, we:

- Enhanced the menu exercise done earlier, to allow the user to give operation choices repeatedly
- Found that a `while` loop was ideal to solve this exercise

#### Step 09 - Loops - Puzzles - break and continue

We would be discussing about a wide variety of puzzles related to `for` loop, and `while loop`.

**Snippet-01:**

What would be the output of this script?

```text
    for i in range(1,11,2):
        print(i, end=' ')
```

Output : `1 3 5 7 9`

\``range()`function accept a`step`parameter. It starts with`1`, and at each step it increments by `2`.`11`is exclusive. So\`11\`\`\` is not printed.

Let’s look at the next one.

```text
for i in range(11,0,-1):
    print(i,  end=' ')
```

Output : `1 10 9 8 7 6 5 4 3 2 1`

On to the next puzzle.

```text
i = 5
while i*i < 10:
    print(i)
print("done")
```

Output : `done`

On to the next puzzle.

```text
i = 2
while i * i < 10:
  print(i, end=" ")
print('done')
```

Output : `222222222222....`

It’s printing `2` continuously. We forgot the increment. Let’s try and fix this.

```text
 i = 2
 while i*i < 10:
     print(i,  end=' ')
     i = i + 1
 print("done")
```

Output : `2 3 'done'`.

Now, let’s look at a new puzzle, with a new key word, **break**.

```text
for i in range(1,11):
    if i==5:
       break
    print(i,  end=' ')
print("done")
```

Output : `1 2 3 4 'done'`

`break` breaks out of the loop when executed. With `5`, the condition matches `if i==5`. `break` is executed, and we get outside the `for` loop.

Let’s look at the next puzzle:

```text
for i in range(1,11):
    if i%2:
       break
    print(i ,  end=' ')
print("done")
```

Output : `'done'`

You don’t really see anything being printed from the for loop.

When you evaluate `1 % 2`, it returns `1` as the remainder. Any non-zero number is considered to be `True`. We break out of the loop.

Next Puzzle:

```text
for i in range(2,11):
    if i%2:
       break
    print(i ,  end=' ')
print("done")
```

It prints `2`, because `2 % 2` is `0`, and `0` is `False`, so the print is executed as the `break` is not called. However when it becomes `3`, `3 % 2` is 1, which is considered to be `True`. The `break` is executed, and we exit out of the loop.

Let’s look at a new keyword, called **continue**. Look at the following code:

```text
for i in range(1,11):
   if i%2==0:
     continue
   print(i ,  end=' ')
print("done")
```

It’s printing `1 3 5 7 9 'done'`

What do you think will be the output?

`continue` skips the code inside the `for` loop for the current iteration, and then resumes the next one.

Lines after `continue` in loop are skipped and you’d start the next iteration of the loop.

What would happen, if we remove the `i%2 == 0`, and only have condition as `i%2`?

```text
for i in range(1,11):
   if i%2:
     continue
   print(i ,  end=' ')
print("done")
```

It prints even numbers only. For odd numbers, `i%2` is `True`. They are skipped.

The last puzzle we’ll be looking at is exactly a modification of the earlier one. Instead of. `i%2`, we give the condition as `i % 2 != 0`.

```text
for i in range(1,11):
   if i%2!=0:
     continue
   print(i ,  end=' ')
print("done")
```

What do you think will be the output? Yes you’re right. No change in output, because `if i % 2 !=0` is the same as a `if i % 2`. That’s because if `i % 2` is `0`, then `i % 2` will be `False`. If `i % 2` is `0`, then `i % 2 != 0` also will be `False`.

### Chapter 08 - Python Tips

#### Tip 1 - Using Predefined Python Modules

There are a number of predefined modules in Python, providing a wide variety of features for use. In this step, let’s learn how to import a module, and how to use methods from specific modules.

Let’s talk about the `math` `module` to start off with. Import it by saying `import math`. If you do `math.` and press `<TAB>`, it shows all the functions that are defined in the `math` `module`.

```text
    >>> import math
    >>> math.
    math.acos(       math.erf(        math.inf         math.pi
    math.acosh(      math.erfc(       math.isclose(    math.pow(
    math.asin(       math.exp(        math.isfinite(   math.radians(
    math.asinh(      math.expm1(      math.isinf(      math.sin(
    math.atan(       math.fabs(       math.isnan(      math.sinh(
    math.atan2(      math.factorial(  math.ldexp(      math.sqrt(
    math.atanh(      math.floor(      math.lgamma(     math.tan(
    math.ceil(       math.fmod(       math.log(        math.tanh(
    math.copysign(   math.frexp(      math.log10(      math.tau
    math.cos(        math.fsum(       math.log1p(      math.trunc(
    math.cosh(       math.gamma(      math.log2(
    math.degrees(    math.gcd(        math.modf(
    math.e           math.hypot(      math.nan
```

`math.floor(4.5)` gives you back `4`.

If you want to find out a little bit more about the `math.floor()`, say `help(math.floor)`.

This command would show you the documentation for this `floor()` function. It says “floor\(x\) returns the floor of x as an integer. This is the largest integer, which is less than or equal to x”.

```text
    >>> math.floor(4.5)
    4
    >>> help(math.floor)
    >>> help(math)
```

You can import all the members from the entire module by using `from math import *`.

What would happen now, is all the functions which are present in `math`, are visible in your namespace.

You can directly call `floor(5)`, without the need for `math.floor()`.

You can do `gcd(2, 4)`, where `gcd()` finds the greatest common divisor of these two numbers.

For help, You can use `help(gcd)`, and it responds with the documentation.

An important things to remember, is when you do `import * from math`, you are importing everything from there. This means if you have any local variable with the names as these functions, they might get shadowed.

```text
    >>> from math import *
    >>> floor(5)
    5
    >>> gcd(34,56)
    2
```

Typically it’s not really considered to be a good practice to import everything into the namespace.

If there are specific things that you would want to import and use them directly, Then you can import just that, by doing this: `from math import floor`. Also `from math import gcd`.

```text
    >>> from math import gcd
    >>> gcd(56,68)
    4
```

#### Step 74: Tip 2 - Getting Index Element

Let’s next look at a tip regarding loops. In certain scenarios with loops, you might want to access the index of the element. That’s what we would be looking at, in this specific tip.

Let’s say we have a list `numbers = [1, 4, 6, 3, 4]`. Looping through this will be like this: `for number in numbers: print(number)`, which will simply print the numbers. However, if you want to find the index of a specific element from within the loop, how would you do that?

```text
    >>> numbers = [1,4,6,3,4]
    >>> for number in numbers:
    ...   print(number)
    ...
    1
    4
    6
    3
    4
```

You can achieve that by saying `for index, number in enumerate(numbers): print(number)`.

`enumerate()` is a built-in Python method, which makes available both the index, and the number.

We can now print a formatted string, by accessing `{index}` and `{number}`.

```text
    >>> for index,number in enumerate(numbers):
    ...    print(f'{index} - {number}')
    ...
    0 - 1
    1 - 4
    2 - 6
    3 - 3
    4 - 4
```

This would also work for strings, consider `'aeiou'`. This contain all the vowel characters. Now if we loop around it: `for index, vowel in enumerate (values): print(f'{index}{vowel}')`. Nothing fancy in here. You can print the index, as well as the particular vowel character.

```text
    >>> values = list('aeiou')
    >>> values
    ['a', 'e', 'i', 'o', 'u']

    >>> for index, vowel in enumerate(values):
    ...     print(f'{index} - {vowel}')
    ...
    0 - a
    1 - e
    2 - i
    3 - o
    4 - u
```

#### Short Hand If Statement

In this step, let’s look at a way in which you can make your `if` statements, even simpler.

Let’s say you have a number, `number = 5`. You want to find out, if it’s even or not, and store it in a name call `isEven`. Typically, the way you can write that is really simple, isn’t it! You can use `if number % 2 == 0: isEven = True else: isEven = False`.However, there is even simpler way of doing this!

```text
    >>> number = 5
    >>> if(number%2==0):
    ...   isEven = True
    ... else:
    ...   isEven = False
    ...
```

You can use `isEven = True if number % 2 == 0 else isEven = False` . You can see what it contains.

```text
    >>> isEven = True if number%2==0 else False
    >>> isEven
    False
```

Now let’s have `number = 6`, and do it again.

```text
    >>> number = 6
    >>> isEven = True if number%2==0 else False
    >>> isEven
    True
```

his is a shortcut `if` statement, which is very useful when you have simple condition, based on which you want to set the values.

Actually the even easier way of doing this, would have been to do this - `isEven = number%2 == 0` .

If the return value is something like a string, what would you do?

Let’s say you want, instead of `True` or `False`, a `'yes'` or `'no'` result. You can use `isEven = 'yes' if number%2 == 0 else 'no'`.

```text
    >>> isEven = number%2==0
    >>> isEven = "Yes" if number%2==0 else "No"
    >>> isEven
    'Yes'
```

In this step, we quickly took a look at shortcuts for `if` statement.

#### Tip 4 - Beginners Mistakes - Shadowing

In this step, we’ll talk about a mistake which a lot of beginners make.

Let’s talk about the built-in `sum()` function. You can pass it lists of values, and it would add them up.

```text
    >>> sum
    <built-in function sum>
    >>> sum([12,34,56])
    102
```

Now let’s say you are trying to solve a problem, where you want to have two numbers: `number = 10`, and `number2 = 20`. During the validating logic,we have to add these up, so what we do is `sum = number1 + number2`.

```text
    >>> number1 = 10
    >>> number2 = 20
    >>> sum = number1 + number2
    >>> sum
    30
```

What would happen now if you call this `sum([12,34,56])`?

```text
    >>> sum([12,34,56])
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'int' object is not callable
```

The compiler says “`TypeError` in object”. It’s not callable. Why is it coming up , is we are shadowing the global built-in `sum()` function, with a local variable of our own.

The bad practice we’re doing in here is shadowing a global function with a local variable. And that’s not good.

The way we could have avoided that is by using a different name, maybe calling it `sum_of_two_numbers`, or even \` \`\`sum\_\`\`\`. This would prevent us from shadowing some built-in function.

```text
    >>> sum_ = number1 + number2
    >>> del sum
    >>> sum
    <built-in function sum>
    >>> sum([12,34,56])
    102
```

**Summary**

The best practice is to avoid having variables named with the same names as a building function.

#### Tip 3 - Python is Strongly Typed and Dynamic Language

In this step, we look at important concept about Python, that it is **strongly typed**, but is also a **dynamically typed** language.

What is the strongly typed property of Python? Let’s say a variable `a` has a value, so `a = 1` . Can I do a `len(1)` ? Nope, it’s not allowed, because the type of `a` does not allow it. What is the `type(1)`? It is the type of `a` here, which is `int`. On an `int`, an operation called `len()` is not really defined.

```text
    >>> a = 1
    >>> len(1)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: object of type 'int' has no len()
    >>> type(a)
    <class 'int'>
```

Now consider the variable `str`, that has the text `'Value'` stored inside it. On this variable , we would be able to say `str.upper()`, and this would print `'VALUE'`.

```text
    >>> str = "Value"
    >>> str.upper()
    'VALUE'
```

Will I be able to do `a.upper()`, in a similar fashion? In `a`, a method called `upper()` is not really defined. In Python, as we have already seen, everything is an object.

```text
    >>> a.upper()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'int' object has no attribute 'upper'
```

Even Consider `type(1)`, it’s always `int`. `1.5` is always a `float`, `'value'` was, ans is, a `str`.

```text
    >>> type(1)
    <class 'int'>
    >>> type(1.5)
    <class 'float'>
    >>> type("1.5")
    <class 'str'>
```

What about `boolean` values? It’s `bool`. So everything that you see in a Python program, including methods and the data values, are instances of some `class`.

```text
    >>> type(True)
    <class 'bool'>
    >>> type(str)
    <class 'str'>
```

The two important things we have learned over here are:

- Python is strongly typed. You cannot do anything that is not allowed by a specific type on an instance of that specific type. And if you do, so you would get an error.
- The second thing which we looked at, was the fact that everything in Python is an object.

The other important concept over here is, we have `str` binding to `'value'`. What is the value of `type(str)` right now? It’s a `str`, a string.

However one can always say in Python, `str = 1`, that is reassign `str` with `1` .

What would be the `type(str)` now? it’s of a type `int`.

Type of the `str` can change during the run-time of the program.

```text
    >>> str = 1
    >>> type(str)
    <class 'int'>
```

It can be now a `boolean`, or and you can assign a `list` to it as well.

```text
    >>> str = True
    >>> type(str)
    <class 'bool'>
```

What is `type(str)` right now? The type is `list`.

```text
    >>> str = [1,2]
    >>> type(str)
    <class 'list'>
```

#### Step 79: Tip-6 - PEP8 Python Style Guide

In this quick step, we’ll talk about **PEP 8**. PEP stands for Python Enhancement Proposal, and PEP 8 Is the style guide for Python programs. If you search on Google for PEP 8, you’ll land up on with this document, and you can see it’s quite old. This was actually created in 2001, and the awesome thing is, it lays down all the guidelines on how you can write good Python code.

An important thing we love about Python, is the fact that it is very practical, and has a variety of resources surrounding it. While defining this style guide, one of the PEP 8 statements says: “Do not follow the PEP blindly. Think about it, and then follow the guidelines”. Guidelines may not be applicable to 100% of the code scenarios. Make sure that you’re using your judgment in the best way.

What are the different things that are discussed in this style guide?

You can find it out here - [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/)

**Summary**

As you get better with Python, spend more time with PEP8, so that you get a better understanding of good coding practices.

#### Step 80: Tip-7 - PEP20 Zen Of Python

In this quick tip, we look at **PEP 20**.

It’s also popularly called the “**Zen of Python**”. This document was created way back in 2004.

The Zen Of Python says: “Beautiful is better than ugly”, “Explicit is better than implicit” and “Simple is better than complex”.

This is how you should think, when you are writing your Python code. The Zen of Python tries to explain what are the code design decisions you should take while programming.

One of the things which it focuses a lot on, is expressing clarity. Your code should be simple to read, and easy to understand. As soon as you look at a piece of code, you should be able to understand what it is doing. You can see a phrase saying “Readability counts”, and “Flat is better than nested”.

If you have a lot of nested structure, the code is inherently difficult to understand. Rather than that approach, having a flat structure is considered to be better.

Making sure that what you are writing is explicit or clear to look at, is much more important than being implicit, because it makes code obscure.

“Never hide errors”. If there’s an error,and it can be handled, don’t try to suppress it. Make sure that you are trying to handle it, and that there is enough information for someone to look at, to handle at a later point in time.

PEP 20 also says “Keep the implementation easy to explain”.

If you are lazy like us, and you don’t want to go to Internet to read the Zen Of Python, all that you need to do is import this document, and this would print The Zen Of Python on your computer.

```text
>>> import this
The Zen of Python, by Tim Peters
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
>>>
```

As a beginning programmer, a lot of these might not really make sense.

This is a document we would recommend you to visit, every once in a while to gain some insights. As you work and write more code, you will see that most of these start making sense.

An important thing to realize, is that the basic idea behind all these 19 principles is very simple. Whatever code you write, should be understandable for other programmers.

### Chapter 09 - Introducing Object Oriented Programming

Welcome to section on object oriented programming. The way you think in structured or procedural programming, is completely different from how you would think in **object oriented programming**, or **OOP**. In this chapter, you’ll be introduced to thinking in terms of objects. We will discuss about: what is a class, what is an object, what is state, what is behavior, and also discuss about a few basic and important OOP concepts, such as encapsulation and abstraction. Of course, we will use a lot of examples to discuss these aspects of OOP, and the different terminology which is used with respect to the same. We are excited to bring this section to you.

#### Step 01: OOP - The Basics

Object oriented programming is all about thinking in terms of objects. Before we get into depth with this, we’ll talk a little bit about structured programming.

If you have written programs in a language such as C or Pascal, you’d be doing _procedural_ or _structured_ programming. Such programming involves thinking in terms of procedures. These are also popularly known as methods or functions.

Let’s say you have a problem to solve. The first thing you would try and do, is to split the problem into multiple functions, or multiple procedures. You would start thinking in terms of: OK, what are the functions I would need to write? What are the different steps involved in doing this?

Humans think in a step by step process.

Let’s say I’ve to take a flight from London to New York. This is how I would think:

- Take a cab to London Airport
- Check in
- Pass Security
- Board the flight
- Wish the Hostess
- Take Off
- Cruise
- Land
- Get off the plane
- Take a cab to ..

Procedural programming is just a reflection of this thought process. A procedural program for above process would look something like this:

```text
takeACabToLondonAirport();
checkIn();
passSecurity();
boardPlane();
wishHostess();
takeOff();
cruiseMode();
land();
getOffPlane();
//...
```

Object Oriented Programming \(OOP\) brings in a new thought process around this.

How about thinking in terms of the different Actors? How about storing data related to each actor right beside itself? How about giving them some responsiblity and let them do their own actions?

Here’s how our program would look like when we think in terms of different actors and give them data and responsibilities

```text
    Person
        name
        boardFlight(Plane flight), wishHostess (Hostess hostess), getOffFlight(Plane flight)

    AirPlane
        altitude, pilot, speed, flightMode
        takeOff(), cruiseMode(), land()

    Hostess
        welcome()
```

Do not worry about the implementation details. Focus on the difference in approaches.

We have **encapsulated** data and methods into these entities, which are now called **objects**. We have defined object boundaries, and what it can \(and cannot\) do.

An object has

- **State** : Its data
- **Behavior** : Its operations

The `position` of an `Airplane` can change over time. The operations that can be performed on an `Airplane` include `takeOff()`, `land()` and `cruiseMode()`. Each of these actions can change its `position`. Therefore, an object’s behavior can affects its own state.

It’s now time to introduce you to some core **OOP** terms, which will make our future discussions easier.

#### Step 02 - OOP Terminology

Let’s visit and enhance the `Planet` example we had written a few sections ago. This time, let’s also explore the conceptual angle.

_**Planet**_

```text
    class Planet
        name, location, distanceFromSun // data / state / fields
        rotate(), revolve() // actions / behavior / methods

    earth : new Planet
    venus : new Planet
```

Let’s look at some **OOP** terminology.

A **class** is a template. An **object** is an instance of a class. In above example, `Planet` is a class. `earth` and `venus` are objects.

- `name`, `location` and `distanceFromSun` compose object state.
- `rotate()` and `revolve()` define object’s behavior.

**Fields** are the elements that make up the object state. Object behavior is implemented through **Methods**.

Each Planet has its own state:

- `name`: “Earth”, “Venus”
- `location` : Each has its own orbit
- `distanceFromSun` : They are at unique, different distances from the sun

Each has its own unique behavior:

- `rotate()` : They rotate at different rates \(and in fact, different directions!\)
- `revolve()` : They revolve round the sun in different orbits, at different speeds

**Summary**

In this step, we:

- Understood how OOP is different from Prodedural Programming
- Learned about a few basic OOP terms

#### Step 03: Programming Exercise PE-01

**Exercises**

In each of the following systems, identify the basic entities involved, and organize them using object oriented terminology:

1. Online Shopping System
2. Person

**Solution-1: Online Shopping System**

```text
    Customer
        name, address
        login(), logout(), selectProduct(Product)

    ShoppingCart
        items
        addItem(), removeItem()

    Product
        name, price, quantityAvailable
        order(), changePrice()
```

**Solution-2: Person**

```text
    Person
        name, address, hobbies, work
        walk(), run(), sleep(), eat(), drink()
```

#### Step 04: Classes And Objects

After hearing a lot of theory about OOP, it’s time to get our hands dirty.

Let’s get started, with trying to create a `class` in Python.

The syntax is very simple. Let’s say you want to create a `Country` `class`, `class Country`. For now, you don’t want to do anything in this class, so we’ll say **`pass`**.

`pass` helps us to create an empty `class`. `pass` can also be used to create an empty method. `class` is the key word and colon is part of the syntax. `Country` is the name of the `class`.

```text
    >>> class Country:
    ...     pass
    ...
```

`class` acts as a template. It’s a blueprint, and based on this blueprint, we can create instances of the `class`.

How can we create instances of class in Python?

`india` is the name of the instance, and `Country` is the name of the class.

```text
    >>> india = Country()
    >>> usa = Country()
    >>> netherlands = Country()
```

These instances are also called objects. We have created three objects of the `Country` `class`.

Each of these objects have their own state. Right now, the class does not provide any data elements, the state of these objects is empty.

Let’s add a little bit of state to these objects. How can you add state? By creating attributes.

Let’s use : `india.name` = ‘`India`’. We can also say `india.capital` = ‘`New Delhi`’.

```text
    >>> india.name = 'India'
    >>> india.capital = 'New Delhi'
```

What is the state of the `india` object?

It has the name of ‘`India`’, the capital of ‘`New Delhi`’.

However the state of `usa`, and `netherlands` are still empty.

Let’s create some state for them as well.

```text
    >>> usa.name = 'USA'
    >>> usa.capital = 'Washington'
    >>> netherlands.name = 'Netherlands'
    >>> netherlands.capital = 'Amsterdam'
```

Now we have state in each of these objects.

Each of these objects have their own individual state. When we are changing the state of `netherlands`, or the state of `usa`, the state of `india` does not change.

```text
    >>> india.name
    'India'
```

#### Step 05: The `MotorBike` Class Example

In this step, Let’s create a `class` in the IDE. We want to call the class as `Motorbike`. We create a few instances of the specific `class`.

How can we define a class?

How do we create instances of the class? You just need to say `honda` = `MotorBike()` , `ducati` = `MotorBike()`.

We’ll go ahead, and print these objects, `print(honda)` and `print(ducati)`.

Let’s see what would happen when we run this code.

```text
class MotorBike:pass

honda = MotorBike()
ducati = MotorBike()

print(honda)
print(ducati)
```

Output

```text
<__main__.MotorBike object at 0x7fbceddd41d0>
<__main__.MotorBike object at 0x7fbceddd4278>
```

You can see that two objects are being printed.

We can also add a little bit of state to these motor bikes.

```text
class MotorBike:pass

honda = MotorBike()
ducati = MotorBike()
honda.speed = 50
ducati.speed = 250

print(honda)
print(ducati)

print(honda.speed)
print(ducati.speed)
```

Output

```text
<__main__.MotorBike object at 0x7fbceddd41d0>
<__main__.MotorBike object at 0x7fbceddd4278>
50
250
```

The state of an object can change during the lifetime of the object.

**Time for an Exercise : Book class**

Create a new class called `Book`. Create three instances of `Book`. Have you favorite books as the name of the object instances, let each of these instances have an attribute `name`, and set the name of the book into that object. At the end, print the name of all three instances of the books.

Here’s the solution:

```text
class Book: pass

the_art_of_computer_programming = Book()
learning_python = Book()
learning_restful_services = Book()

the_art_of_computer_programming.name = 'The Art of Computer Programming'
learning_python.name = 'Learning Python'
learning_restful_services.name =  'Learning Restful Services In 50 Steps'

print(the_art_of_computer_programming.name)
print(learning_python.name)
print(learning_restful_services.name)
```

The initial versions of the `MotorBike` and the `Book` class we are creating here, are quite basic.

During the course of this section, will enhance these two classes to be having more functionality.

#### Step 06: Class And Objects: Puzzles

In this quick step, we will look at a few puzzles related to what we have learned about: classes and objects.

Let’s create a new class, and call it `class Planet`, and we’ll have it as an empty class.

```text
    >>> class Planet: pass
    ...
```

How do you create instances of the `Planet` class?

```text
    >>> earth = Planet()
```

You cannot do a `new Planet()` - like in Java, for example.

```text
    >>> earth = new Planet()
      File "<stdin>", line 1
        earth = new Planet()
                         ^
    SyntaxError: invalid syntax
```

We have just created an instance called earth. So what would happen now if we say `earth.name`? The compiler says: ‘`Planet` object has no attribute `name`’.

```text
    >>> earth.name
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'Planet' object has no attribute 'name'
```

Let’s set `earth.name = 'The Earth'`. now if we `print(earth.name)` what would happen?

```text
    >>> earth.name = 'The Earth'
    >>> earth.name
    'The Earth'
```

It prints `'The Earth'`.

Now let’s create a new instance of the `Planet`. Let’s call this `venus`. What happens if we do `venus.name`? It does not have an attribute `name`.

```text
    >>> venus = Planet()
    >>> venus.name
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'Planet' object has no attribute 'name'
```

An important thing to note is, each object has its own data, its own attributes. The fact we have set attributes on `earth`, does not mean the same attributes would exist on `venus`.

What we need to do, is set the name for `venus` as well. Now, You’d be able to use `venus.name`.

```text
    >>> venus.name = 'Venus'
    >>> venus.name
    'Venus'
```

The last thing we will be looking at, is the behavior. What would happen if we call a non-existent method?

```text
    >>> venus.do_something()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'Planet' object has no attribute 'do_something'
```

An interesting thing to note is that Python considers **methods**, as well as **data**, as **attributes**. In Python, you can add attributes dynamically. During the run-time of the program, you can add new data and methods, as attributes as well.

#### Step 07: A Constructor For The `MotorBike` Class

How to set an initial state for an object when it is being created?

That’s where a **constructor** comes into picture.

In this step, we will define a constructor for the `MotorBike` `class`.

How do you define a constructor for a `MotorBike` class? Once we decide to have a constructor, this cannot be an empty `class` anymore. We’ll remove `pass` and define a method.

```text
class MotorBike:
    def __init__(self):
        print("MotorBike instance created")

honda = MotorBike()
ducati = MotorBike()
```

A constructor is a special method. Syntax is `def __init__(self)` .

For all the instance methods in a class, you need to pass in an attribute called `self`. We’ll talk about a few puzzles related to `self` a little later. For now, it’s important that you follow this exact syntax.

When a `MotorBike` object is created, we might want to print a message. We can say `print("MotorBike instance created")`.

```text
MotorBike instance created
MotorBike instance created
```

`'MotorBike instance created'` is printed twice - once for each instance created, `honda` and `ducati`.

Typically we do not use constructors to print statements. We use them to initialize data.

We want to set initial speed for `honda` and `ducati`.

```text
honda = MotorBike(50)
ducati = MotorBike(250)
```

We can add `speed` as a parameter to the constructor.

Here’s the syntax - `def __init__(self, speed)`

```text
class MotorBike:
    def __init__(self, speed):
        print(speed)

honda = MotorBike(50)
ducati = MotorBike(250)
```

Output

```text
50
250
```

How can we set the value into an instance of the object?

`self.speed = speed` where `self.speed` represents a `speed` attribute of the `MotorBike` instance. On the current object we would want to set an attribute called `speed`, with the value that is passed to this parameter.

```text
class MotorBike:
    def __init__(self, speed):
        self.speed = speed

honda = MotorBike(50)
ducati = MotorBike(250)

print(honda.speed)
print(ducati.speed)
```

If we print the `speed` values of `honda` and `ducati`, we get the following: `honda.speed` is `50`, and `ducati.speed` is `250`.

#### Step 08: A Constructor For `Book` Class

Let’s start with an exercise. Enhance the book class to have a constructor to enable create Book with a name - `Book('Learning Python In 100 Steps')`

```text
class Book:
    def __init__(self, name):
        self.name = name

    learning_python = Book('Learning Python In 100 Steps')
    print(learning_python.name);
```

#### Step 09: Constructors - Puzzles

In this step, let’s look at a few puzzles related to constructors.

Let’s create the `Planet` `class` again, this time with a constructor. We’re not passing anything in here, and also saying `pass`, so it’s an empty constructor.

```text
    >>> class Planet:
    ...    def __init__(): pass
    ...
```

What would happen When we execute `Planet()`?

```text
    >>> Planet()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: __init__() takes 0 positional arguments but 1 was given
```

It says error! “**init** takes 0 positional arguments, but 1 was given”

What’s happening here?

All instance methods in a class need to have `self` as a parameter.

Whenever you’re creating an object, we are calling the constructor and by default, Python would pass the current instance as an argument. Even though we are not passing any arguments in here, Python would pass one secretly. If we really want to actually create the right constructor, then we would need to have `self` as the first parameter of the constructor method.

```text
    >>> class Planet:
    ...    def __init__(self): pass
    ...
    >>> Planet()
    <__main__.Planet object at 0x10426bc88>
```

Now, in addition to the existing constructor, we want to create another constructor, `def __init__(self, name)`, and let’s make it an empty method for now.

We’re creating two constructors, one with one parameter, and the other one with two parameters.

```text
    >>> class Planet:
    ...    def __init__(self, name): pass
    ...    def __init__(self): pass
    ...
```

Let’s create `Planet()` and `Planet("Jupiter")`.

```text
    >>> Planet()
    <__main__.Planet object at 0x10426bdd8>
    >>> Planet("Jupiter")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: __init__() takes 1 positional argument but 2 were given
```

For `Planet("Jupiter")`, we got “TypeError: **init**\(\) takes 1 positional argument but 2 were given”.

There are two constructors definitions but only the second one is available.

In Python, you can only have one constructor per `class`.

When you define the class - whichever constructor comes last, is the one which is available.

> Exercise : Try reversing the order of constructors and creating instances

What if I would want to be able to create `Planet` instances using `Planet()` and `Planet("Jupiter")`? Solution - default parameter values.

You can use, `def __init__(self, name = 'Earth')`. By default, `Planet` instance has a name of `'Earth'`.

```text
    >>> class Planet:
    ...    def __init__(self, name="Earth"): pass
    ...
    >>> Planet()
    <__main__.Planet object at 0x10426beb8>
    >>> Planet("Jupiter")
    <__main__.Planet object at 0x10426bef0>
```

Let’s consider the code below: a real constructor

```text
    >>> class Planet:
    ...    def __init__(self, name="Earth"):
    ...        self.speed = 10
    ...        self.name = name
    ...        self.distance_from_sun = 10000
    ...
```

If we now create a new object `earth = Planet()`, and execute `earth.name`, what would be the value?

```text
    >>> earth = Planet()
    >>> earth.name
    'Earth'
    >>> earth.speed
    10
    >>> earth.distance_from_sun
    10000
```

Typically in Python, you will have your constructor define all the properties and set initial values to them.

Earlier we looked at naming variables. `distance_from_sun` is a variable. We used small case, and we use underscores to separate the words. We use the same convention, when we name methods as well.

However, when we name classes, typically CamelCase is used. That’s the reason why, when we named the class “`MotorBike`”.

The program would work even if the class is named `motor_bike`. But, what we are talking about are conventions followed across the world of Python programming.

#### Step 10: Class And Objects : Methods And Behavior

The state of an object changes with time.

Let’s say we want to increase the `speed` of `honda`: `honda.speed = honda.speed + 150`. We can also do: `ducati.speed += 25`. We are modifying the state of the object, from outside the class.

In this step, we will talk about encapsulation, and how we can encapsulate this kind of behavior directly inside the `class`.

Encapsulation is one of the most important object oriented principles, that says: all the data changes should be through methods, the behavior of a `class`.

In the previous example, we are directly changing the value of an attribute. That is not considered to be a good practice, when it comes to object oriented programming. Ideally, the increase in `speed` should happen through a method call, which is defined inside the `MotorBike` `class`.

Let’s look at how we could define a method, inside `MotorBike` `class`.

Note that this is at the same indentation level as the constructor.

Let’s name the method as `increase_speed()`. For instance methods, we need to pass `self` as one of the parameters.

```text
def increase_speed(self, how_much):
    self.speed += how_much
```

You can call this method on the instances, like `honda.increase_speed(150)`.

```text
honda.increase_speed(150)
ducati.increase_speed(25)
```

What if you want to decrease the speed? Let’s write a method called `decrease_speed()`.

```text
def decrease_speed(self, how_much):
   self.speed -= how_much
```

Here is the full code for your reference:

```text
class MotorBike:
    def __init__(self, speed):
        self.speed = speed #State

    def increase_speed(self, how_much):
        self.speed += how_much

    def decrease_speed(self, how_much):
        self.speed -= how_much

honda = MotorBike(50)
ducati = MotorBike(250)
print(honda)
print(ducati)

honda.increase_speed(150)
ducati.increase_speed(25)
honda.decrease_speed(50)

ducati.decrease_speed(25)
honda.decrease_speed(350)
print(honda.speed)
print(ducati.speed)

honda.speed = 150
print(honda.speed)
print(ducati.speed)
```

#### Step 11: Exercise - `EnhancedBook` Class With Copies

Let’s start with an exercise.

Enhance the `Book` class we created, to have a new property called `copies`, which says how many copies of the book are available. Have a method to **increase** the copies, and one to **decrease** the copies as well. The other thing is to have `copies` has a constructor argument.

In the constructor, we’ll set the default values of `copies` to `0`.

```text
def __init__(self, name, copies=0):
        self.name = name
        self.copies = copies
```

We want to have a method called `increase_copies()`, which we define and call it as `learning_python.increase_copies()`.

```text
def increase_copies(self, how_much):
        self.copies += how_much
```

We also want a method to decrease the `copies`, to be used as `learning_python.decrease_copies()`.

```text
def decrease_copies(self, how_much):
        self.copies -= how_much
```

This is how you can use all the methods we created earlier

```text
learning_python = Book('Learning Python in 100 Steps', 100)

learning_python.increase_copies(25)
learning_python.decrease_copies(10)
```

Here is the code in full, for your perusal:

```text
class Book:
    def __init__(self, name, copies=0):
        self.name = name
        self.copies = copies

    def increase_copies(self, how_much):
        self.copies += how_much

    def decrease_copies(self, how_much):
        self.copies -= how_much

the_art_of_computer_programming = Book('The Art of Computer Programming')
learning_python = Book('Learning Python in 100 Steps', 100)
learning_restful_services = Book('Learning RestFul Service in 50 Steps')

print(the_art_of_computer_programming.name)
print(learning_python.name)
print(learning_restful_services.name)

learning_python.increase_copies(25)
learning_python.decrease_copies(10)
learning_python.copies = 50

print(learning_python.copies)
```

#### Step 12: Methods And Behavior - Puzzles On `self`

In this step, let’s look at a few puzzles related to behavior, or the methods we create on a `class`. Let’s get back to our favorite `Planet` `class`, and this time, let’s create a method.

Consider the steps below. What would be the result of `earth.revolve()`?

```text
    >>> class Planet:
    ...    def revolve(): pass
    ...
    >>> earth = Planet()
    >>> earth.revolve()
```

Here’s the result

```text
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: revolve() takes 0 positional arguments but 1 was given'
```

Remember `self`. When we call a method on an instance of a `class`, one parameter automatically gets passed, that’s `self`. We saw that when we were invoking the constructor. The same is the case with all the methods inside a class. So on all of the instance methods, you’d need to create a parameter called `self`.

Let’s look at this code:

```text
class Planet(object):
    def rotate(self):
        print("rotate")

    def revolve(self):
        print("revolve")
```

We want to create a method inside `Planet` to call both `rotate` and `revolve` methods.

```text
    def rotate_and_revolve(self):
        rotate()
        revolve()
```

Will this work? No.

You need to use `self`.

```text
    def rotate_and_revolve(self):
        self.rotate()
        self.revolve()
```

You need to have `self` to call a method on the same object - `self.<specific-method>()`.

```text
earth = Planet()
earth.rotate_and_revolve()
```

#### Step 13: Advantages Of Encapsulation

An important question that a number of people ask about encapsulation, is do we really need it?

In this small step, We’ll give you an example of why we need encapsulation.

What we have with the `MotorBike` `class`, are methods to increase speed and decrease speed.

```text
class MotorBike:
    def __init__(self, speed):
        self.speed = speed #State

    def increase_speed(self, how_much):
        self.speed += how_much

    def decrease_speed(self, how_much):
        self.speed -= how_much

honda = MotorBike(50)
honda.decrease_speed(350)

print(honda.speed)
```

Consider above snippet. Should `honda.decrease_speed(350)` be allowed? The initial speed of `honda` is `50`, and by saying decrease speed by `350`, it becomes `-300`. Negative Speed.

How do we prevent it?

To prevent it from happening, you can enhance `decrease_speed` method.

```text
    def decrease_speed(self, how_much):
        if(self.speed-how_much>0):
            self.speed -= how_much
        else:
            print("Get a life")
```

If you use behavior to change the state of the object, then you can add additional logic, such as validation, at a later point in time.

That’s one of the reasons why encapsulation is good.

#### Step 14: Everything Is `object` In Python

In Python, everything is an object. What do we mean by ‘everything is an object’?

Let’s check type of some values. They all are instances of some `class`.

```text
    >>> 5
    5
    >>> type(5)
    <class 'int'>
    >>> type(True)
    <class 'bool'>
    >>> type('Hello')
    <class 'str'>
    >>> type(5.5)
    <class 'float'>
```

You can call methods on these values as well.

```text
    >>> 'Hello'.upper()
    'HELLO'
```

This is possible because everything in Python is an object of some class!

The interesting part comes when we talk about methods. We have created methods earlier. Let’s say `def do_something()`, an empty method.If you type in `do_something()` on the prompt, it says: ‘function `do_something` at’. a method is also an object.

```text
    >>> def do_something(): pass
    ...
    >>> do_something
    <function do_something at 0x104275488>
```

You can actually define a method `do_something()`, let’s say `print('something')` . `do_something` points to a new address.

```text
    >>> def do_something():
    ...    print("something")
    ...
    >>> do_something
    <function do_something at 0x104275510>
    >>> do_something()
    something
```

Let’s try `test = do_something`.

```text
    >>> test = do_something
    >>> test
    <function do_something at 0x104275510>
    >>> test()
    something
    >>>
```

`test` refers to the same function and you can run it using `test()`.

This is possible, because even a function is an object in Python.

**Summary**

The most important thing to understand from this step, is in Python, everything is an object. The constant values that you create are objects of specific classes, and methods are objects as well.

### Chapter 10 : Python Data Structures

Welcome to this section on data structures in Python. Here, we’ll discuss why we need data structures, and what are the important in-built data structures that Python provides.

#### Step 01: Why We Need Data Structures

In this step, let’s focus on the first question: “why do we need data structures?”

Suppose we have multiple values to store, like marks of different students in a course. Let’s say these are as follows:

- first student: `mark1` is `45`
- second student: `mark2` is `54`.\(These are quite average students, maybe like me!\)
- and third student: `mark3` is say, `80`. This guy is a very good student.

Let’s assume the professor asked: “What’s the sum, and what is the average?”.

```text
    >>> mark1 = 45
    >>> mark2 = 54
    >>> mark3 = 80
    >>> mark1 + mark2 + mark3
    179
    >>> (mark1 + mark2 + mark3)/3
    59.666666666666664
```

The professor says: “There’s a new student”. What?

We would need to add a new student with this mark. Not just that, the formulas for calculating sum and average will also need to be changed.

```text
    >>> mark4 = 43
    >>> (mark1 + mark2 + mark3 + mark4)/3
    74.0
    >>> (mark1 + mark2 + mark3 + mark4)/4
    55.5
```

When you have a list of marks, you’d rather store them in a specific data structure, that would allow easy manipulation. And that’s where the data structures in Python are useful.

Let’s look at a specific data structure in Python, called list, and how it helps us to solve the problem.

Creating data structures in Python is very simple. You don’t need to be even aware of which `class` our data structure belongs to. Let’s say we want to store the marks.

```text
    >>> marks = [45, 54, 80]
```

We initialized `marks` with these three values.

We want to find the sum and average.

```text
    >>> sum(marks)
    179
    >>> sum(marks)/len(marks)
    59.666666666666664
```

We get a new student.

```text
    >>> marks.append(43)
    >>> sum(marks)/len(marks)
    55.5
    >>> type(marks)
    <class 'list'>
```

The code to find sum and average does not change.

#### Summary

In this step, we discussed the need for data structures in Python programs.

#### Step 02: Operations On List Data Structures

In this step, let’s look at the `list` data structure.

How do you create a list structure?

All that do you need to do, is use the square brackets `[]` syntax, and put the elements you’d want to have in the list. So `[23, 56, 67]` is a list.

```text
    >>> marks = [23,56,67]
```

Let’s look at the basic things you can do with a list.

We saw `sum(marks)`. You can do `max(marks)`, `min(marks)`, and `len(marks)`. All these functions are very obvious, aren’t they! `len()` gives you how many elements are present, `min()` is the minimum, `max()` the maximum, and `sum()` returns the sum of the elements.

```text
    >>> sum(marks)
    146
    >>> max(marks)
    67
    >>> min(marks)
    23
    >>> len(marks)
    3
```

If you want to add more elements, you can do `max.append(76)`.

```text
    >>> marks.append(76)
    >>> marks
    [23, 56, 67, 76]
```

If you want to add element at a specific index, you can do that as well; `marks.insert(...)`.

Let’s say you would want to insert `60` in between `56` and `67`. You would want to insert it at index `2`.

Indexes in a python list start at `0`, going through `1`, `2`, etc. Now if we do `marks`, you would see that `60` is inserted in here.

```text
    >>> marks.insert(2, 60)
    >>> marks
    [23, 56, 60, 67, 76]
```

You can remove a value from `marks` as well. All you need to do is say `marks.remove(60)`.

```text
    >>> marks.remove(60)
```

You can also check if a specific element is in the list or not. All that you need to do is, `55 in marks`, which returns `False`. `56 in marks` returns `True` .

```text
    >>> 55 in marks
    False
    >>> 56 in marks
    True
```

Also, you can search for a specific element; you do `marks.index(...)`.

```text
    >>> marks.index(67)
    2
    >>> marks
    [23, 56, 67, 76]
```

Let’s try `marks.index(69)`, on a non-existing element `69`. What does it return? It returns an error, that says: “69 is not in list”.

```text
    >>> marks.index(69)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: 69 is not in list
```

The next thing you can do, is loop around the elements in the list. You can use `for mark in marks: print(mark)`.

```text
    >>> for mark in marks:
    ...   print(mark)
    ...
    23
    56
    67
    76
```

**Summary**

In this step, we looked some of the basic operations that you can perform on lists. We saw operations like `sum()`, `max()`, `min()`, `len()`, appending a new element, inserting a new element, removing a specific element, checking whether the element is in the list or not. We understood how to find a specific elements in the list, and how to loop around a list.

#### Step 03: An Exercise With `list` Of `Student`

In this step, let’s look at an exercise using the `list` we created earlier.

Create a `Student` `class` accepting a name, and a list of marks. We want to be able to perform all of these operations which are listed in here, on the `Student` `class`:

- Find out how many number of marks are there,
- Find out what the total sum of marks,
- Determine the maximum mark,
- Determine the minimum mark,
- Calculate the average,
- Add a new mark, as well as remove a mark, at a specific index.

Suppose the list is `[23, 45, 56, 75]`, which are his marks in different subjects.

Let’s define a constructor:

```text
def __init__(self, name, marks):
        self.name = name
        self.marks = marks
```

We need to define the `get_number_of_marks()` method, next up.

```text
def get_number_of_marks(self):
        return len(self.marks)
```

We can easily create the other methods as well.

```text
def determine_maximum_mark(self):
        return max(self.marks)

def determine_minimum_mark(self):
        return min(self.marks)
```

There is a statistic module in Python, which helps us with the average, but let’s keep things simple and directly use the methods we already have in here.

```text
def determine_average(self):
        return self.get_total_sum_of_marks()/self.get_number_of_marks()
```

The next one we would want to define is `add_number_of_marks()`. How would you add a mark? We need a parameter, say `new_mark`.

```text
    def add_new_mark(self, new_mark):
        self.marks.append(new_mark)
```

The last function we have, is `remove_mark_at_index(5)`. The method which we looked at earlier, `remove()`, will only remove a specific value, and cannot be used to specify the element index.

```text
    def remove_mark_at_index(self, index):
        del self.marks[index]
```

The code to do what we need, would be: `del self.marks[index]` .

We’ll print out these values one by one to complete the program functionality.

One of the features you can make use of to print strings that have content split over distinct lines, is to use the triple quote `"""`.

```text
print(f"""Student[
    number_of_marks-{number}
    sum_of_marks-{sum_of_marks}
    max-{maximum_mark}
    min-{minimum_mark}
    avg-{average} ] """)
```

What it allows us to do, is split the console output of the string into multiple lines.

Here is the code for your reference:

```text
class Student:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def get_number_of_marks(self):
        return len(self.marks)

    def get_total_sum_of_marks(self):
        return sum(self.marks)

    def determine_maximum_mark(self):
        return max(self.marks)

    def determine_minimum_mark(self):
        return min(self.marks)

    def determine_average(self):
        return self.get_total_sum_of_marks()/self.get_number_of_marks()

    def add_new_mark(self, new_mark):
        self.marks.append(new_mark)

    def remove_mark_at_index(self, index):
        del self.marks[index]

student = Student ("Ranga", [23, 45, 56, 75])
number = student.get_number_of_marks()

sum_of_marks = student.get_total_sum_of_marks()
maximum_mark = student.determine_maximum_mark()
minimum_mark = student.determine_minimum_mark()
average = student.determine_average()

student.add_new_mark(35)
student.remove_mark_at_index(2)

print(student.marks)

print(f"""Student[
    number_of_marks-{number}
    sum_of_marks-{sum_of_marks}
    max-{maximum_mark}
    min-{minimum_mark}
    avg-{average} ] """)
```

Output

```text
[23, 45, 75, 35]
Student[
    number_of_marks-4
    sum_of_marks-199
    max-75
    min-23
    avg-49.75 ]
```

**Summary**

In this step, we explored an exercise on how to call methods on a list, to do basic arithmetic on its elements. We computed values such as number fo elements, sum, minimum, maximum, average. We also showed you how to add a new element to, or delete an existing element from, the list.

#### Step 04: Puzzles With `list` Of Strings

In this step, we will look at a few puzzles to help us understand lists even better.

Let’s create a simple list.

```text
    >>> animals = ['Cat', 'Dog','Elephant']
    >>> len(animals)
    3
```

What would `sum(animals)` give?

```text
    >>> sum(animals)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Error, obviously! Because `sum()` is not defined on a `str`.

Here are other basic list operations on `str`.

```text
    >>> animals.append('Fish')
    >>> animals
    ['Cat', 'Dog', 'Elephant', 'Fish']
    >>> animals.remove('Dog')
    >>> animals
    ['Cat', 'Elephant', 'Fish']
```

You can use index to access elements from list.

`animals[2]` will print `'Fish'` , much to your surprise!

This is exactly the kind of the array-indexing, we use in C or Java programming. `animals[1]` returns `'Elephant'`, and `animals[0]` gives you `'Cat'` . But make sure you actually use an accurate index, because if you do things like `animals[4]`, the compiler would throw an `IndexError`.

```text
    >>> animals
    ['Cat', 'Elephant', 'Fish']
    >>> animals[2]
    'Fish'
    >>> animals[1]
    'Elephant'
    >>> animals[0]
    'Cat'
    >>> animals[4]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    IndexError: list index out of range
```

Let’s look at difference between `animals.remove()` and `del`.

`animals.remove()` would remove the specified value from the list. When we do `del animals[2]`, we are specifying the `index`.

If you do `del animals[2]`, the list contents goes down to `['Cat', 'Elephant']`. The last element which was at index 2, `'Fish'`, got deleted.

```text
    >>> del animals[2]
    >>> animals
    ['Cat', 'Elephant']
```

Let’s look at the difference between `append()` and `extend()`.

If you invoke the `extend()` method with `'Fish'`, what would happen?

```text
    >>> animals.extend('Fish')
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h']
```

You can see that individual character symbols are being added in. So, `'F', 'i', 's', 'h'` are added in.

If you do `animals.append('Fish')`, it would add an element called `'Fish'` to the list.

```text
    >>> animals.append('Fish')
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h', 'Fish']
```

`animals.extend()` is actually used to add a list of values. You can use `['Giraffe', 'Horse']` \(if we got the spelling right!\) , You can see that the elements are added in.

```text
    >>> animals.extend(['Giraffe', 'Horse'])
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h', 'Fish', 'Giraffe', 'Horse']
```

There is another way you can actually do the `extend()`. `animals = animals + ['Jackal', 'Kangaroo']`.

```text
    >>> animals = animals + ['Jackal','Kangaroo']
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h', 'Fish', 'Giraffe', 'Horse', 'Jackal',
    'Kangaroo']
```

With a list, you can also use `+=` ! `animals += ['Lion', 'Monkey']` !

```text
    >>> animals += ['Lion','Monkey']
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h', 'Fish', 'Giraffe', 'Horse', 'Jackal',
    'Kangaroo', 'Lion', 'Monkey']
```

In Python, is there is no restriction on what you can have in a list.

You can easily say `animals.append(10)`, and `animals` would have now include a value of `10` . So there is no type restrictions on the `list`.

```text
    >>> animals.append(10)
    >>> animals
    ['Cat', 'Elephant', 'F', 'i', 's', 'h', 'Fish', 'Giraffe', 'Horse', 'Jackal',
        'Kangaroo', 'Lion', 'Monkey', 10]
```

#### Step 05: List Slicing

In this step, we look at one of my favorite features in Python. It’s called **List slicing**.

It’s a really powerful feature, which can help you to break lists into different kinds of values, without a lot of code.

Let’s look at what it is, with a simple example, of creating a list called `numbers`. It has strings from `'Zero'` to `'Nine'`.

```text
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
```

How many elements does it have? `len(numbers)`, or `10`, right? You want to find out what is the second element, or what is the element at `index` `2`. `numbers[2]` gives you `'Two'`. The same index you used, `2`, can be used to get a subset of elements from this list.

```text
    >>> len(numbers)
    10
    >>> numbers[2]
    'Two'
```

How do we get elements from index `2`, to `6`?

Welcome List Slicing?

Syntax is very simple. Let’s try `numbers[2:6]`

```text
    >>> numbers[2:6]
    ['Two', 'Three', 'Four', 'Five']
```

index `6` is exclusive. We should do `numbers[2:7]`

There are multiple ways in which you can use lists slicing.

`numbers[:6]` doesn’t have a start index. `0` is default.

```text
    >>> numbers[:6]
    ['Zero', 'One', 'Two', 'Three', 'Four', 'Five']
```

`numbers[3:]` doesn’t have end index. default is up to the end of the list.

```text
    >>> numbers[3:]
    ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
```

Let’s make it even more powerful. What we can even do, is specify we want to start from index `1`, going up to index `8`, but only want to get every second element.

```text
    >>> numbers[1:8:2]
    ['One', 'Three', 'Five', 'Seven']
```

How to get every third element?

```text
    >>> numbers[1:8:3]
    ['One', 'Four', 'Seven']
```

`numbers[::3]`. You get `'Zero'`. `'Three'`, `'Six'`, `'Nine'`. Isn’t this awesome!

```text
    >>> numbers[::3]
    ['Zero', 'Three', 'Six', 'Nine']
```

You can also use slicing to access the list in reverse order.

So `numbers[::-1]` will return the list elements, but this time in the reverse order.

```text
    >>> numbers[::-1]
    ['Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One', 'Zero']
```

When you say `numbers[::-3]`, it starts from the end of the list, and fetches every third element from the end, backwards.

```text
    >>> numbers[::-3]
    ['Nine', 'Six', 'Three', 'Zero']
```

A lot of programmers from other languages struggle with slicing, because when they first see this syntax `::`, they go mad!

What is it doing? What’s the `:`? What is it doing all over the place? `[1:8:2]`… Oh My God!

Python seems like a weird language to them.

Once you understand slicing well, then it makes your code much simpler.

You can use slicing to delete elements from a list.

Let’s say you want to delete all the elements starting from index `3`. You could do `del numbers[3:]`.

```text
    >>> del numbers[3:]
    >>> numbers
    ['Zero', 'One', 'Two']
```

Let’s re-initialize the list, and try to delete numbers in the middle of the list, starting from index `5` to `7`. The thing to remember, is `7` here is exclusive.

```text
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    >>> del numbers[5:7]
```

Another important thing that you can do with slicing, is replace the values in the list.

```text
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    >>> numbers[3:7] = [3,4,5,6]
    >>> numbers
    ['Zero', 'One', 'Two', 3, 4, 5, 6, 'Seven', 'Eight', 'Nine']
```

We’ve replaced values `'Three','Four','Five','Six'` with `3, 4, 5, 6`.

**Summary**

In this step, we looked at how you can use slicing to retrieve values from a list, delete values from a list, and update values in a list. When you’re coming from other languages to Python, slicing is one of the important things that you need to understand very well.

#### Step 06: `list` - Sorting, Looping And Reversing

We have been talking about different features of lists, in the last few steps. And there are still a few more steps to come.

In this step, let’s focus on a few simple pieces of code to **sort**, to **reverse**, and also a few other tips related to **looping** around a list, using an _index_.

Let’s get started with initializing `numbers` again. We allow `numbers` to have values from `'Zero'` to `'Nine'`, so we have something to play with.

```text
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    >>> numbers.reverse()
```

The first thing we look at, is reversing the list, by doing `numbers.reverse()`. It reverses the existing list. `numbers.reverse()` is an **in-place reverse**. That means, it is modifying the existing list directly.

```text
    >>> numbers
    ['Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One', 'Zero']
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
```

However, if you’d want to loop through the list in a reverse direction, this is not necessary.

Let’s re-initialize `numbers` again, so we have the original `list` back. If you don’t want to do an in-place reverse, but only access the elements in reverse order, then you can use `reversed()`. `reversed(numbers)` would actually give you an **iterator**, that helps you access the elements in a reverse direction.

```text
    >>> numbers
    ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    >>> reversed(numbers)
    <list_reverseiterator object at 0x109560ba8>
    >>> for number in reversed(numbers):
    ...    print(number)
    ...
    Nine
    Eight
    Seven
    Six
    Five
    Four
    Three
    Two
    One
    Zero
```

What is the difference between `reverse()` and `reversed()`? `reverse()` does an in-place reverse. So, the original list gets reversed. However, when want to access the elements in reverse without changing them, we can use `reversed()`.

Let’s say we want to sort the list. `numbers.sort()` sorts strings in alphabetical order.

`sort()` does an in-place sort.

```text
    >>> numbers
    ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    >>> numbers.sort()
    >>> numbers
    ['Eight', 'Five', 'Four', 'Nine', 'One', 'Seven', 'Six', 'Three', 'Two', 'Zero']
```

Let’s initialize `numbers` again. If you don’t want to do an in place sort, rather just access elements in a sorted order, there is something else for it. What you can do, is use `sorted()`.

Iterating is simple: `for number in sorted(numbers): print number`.

```text
    >>> numbers = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
    >>> for number in sorted(numbers):
    ...   print(number)
    ...
    Eight
    Five
    Four
    Nine
    One
    Seven
    Six
    Three
    Two
    Zero
```

Another interesting feature in `sorted()`, is you can pass in a key to use.

We are passing in `len` , length of the string, or the number of characters present in it. We will get the elements in the increasing order of their length.

```text
    >>> numbers
    ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    >>> for number in sorted(numbers, key=len):
    ...   print(number)
    ...
    One
    Two
    Six
    Zero
    Four
    Five
    Nine
    Three
    Seven
    Eight
```

Another interesting feature of the `sorted()` method is `reverse=True`.

What would happen?

```text
    >>> for number in sorted(numbers, key=len, reverse=True):
    ...   print(number)
    ...
    Three
    Seven
    Eight
    Zero
    Four
    Five
    Nine
    One
    Two
    Six
```

You are right, **it starts printing elements in the reverse order of the length**.

These are really powerful things that you can do with a key in here. You can also use a `Lambda Expression`. We will look at it, when we talk about functional programming.

Instead of `sorted()`, we can use `numbers.sort()` function.

```text
    >>> numbers.sort(key=len)
    >>> numbers
    ['One', 'Two', 'Six', 'Zero', 'Four', 'Five', 'Nine', 'Three', 'Seven', 'Eight']
    >>> numbers.sort(key=len, reverse=True)
    >>> numbers
    ['Three', 'Seven', 'Eight', 'Zero', 'Four', 'Five', 'Nine', 'One', 'Two', 'Six']
```

**Summary**

In this step, we focused on two important features. `sort()` versus `sorted()`, and `reverse()` versus `reversed()`. We saw that the basic methods on the list directly does an in-place change. If you call `numbers.sort()` or `numbers.reverse()`, then the original list get affected. However, `sorted()` and `reversed()` are returning iterators, which do not change the original list. We also looked at the fact we can pass in a **key** to the sorted\(\), indicating how we would want to sort it, what is the criteria based on how we would want to sort. And we can also pass in a parameter called **reverse**, to indicate we would want to sort in reverse order. There’s a lot of stuff we learned in this specific step.

#### Step 07: Using `list` As Stack And Queue

In this step, we look at the features which a list provides, where it can act as a **stack**, and a **queue**.

First of all, what is a stack, and what is a queue?

A **stack** is typically called a **Last In, First Out** data structure. If you insert elements in the order `1` `2` `3` and `4`, then to take out the elements from the stack, the first one which come out is `4`, the next one is `3`, Next one is `2`, and next to one is `1`. So it’s called Last In, First Out.

A **Queue**, as we all know, is **first in, first out**. If you insert elements in this order, to take out an element of the queue, you would get `1` out first.

How can we use a list as stack, or a queue?

Let’s start with the stack.

Let’s create a simple list.

```text
    >>> numbers = []
    >>> numbers.append(1)
    >>> numbers.append(2)
    >>> numbers.append(3)
    >>> numbers.append(4)
```

The way you can use a list as a stack is by saying `numbers.pop()`.

```text
    >>> numbers.pop()
    4
```

`pop()` method retrieves the last inserted element as well as deletes it. If you look at numbers right now, `4` is removed from the list.

You can look at the result of multiple `pop` operations below.

```text
    >>> numbers
    [1, 2, 3]
    >>> numbers.pop()
    3
    >>> numbers
    [1, 2]
    >>> numbers.append(10)
    >>> numbers.pop()
    10
    >>> numbers
    [1, 2]
```

How do we use it as a queue?

Let’s create the list again.

```text
    >>> numbers = []
    >>> numbers.append(1)
    >>> numbers.append(2)
    >>> numbers.append(3)
    >>> numbers.append(4)
```

`numbers.pop(0)` would take the first inserted element out of the list. If you look at `numbers`, it would only have `[2, 3, 4]`.

```text
    >>> numbers.pop(0)
    1
    >>> numbers
    [2, 3, 4]
```

Look at few more operations below:

```text
    >>> numbers.pop(0)
    2
    >>> numbers
    [3, 4]
    >>> numbers.append(10)
    >>> numbers.pop(0)
    3
    >>> numbers.pop(0)
    4
    >>> numbers.pop(0)
    10
    >>> numbers
    []
```

#### Step 09: `list` With a custom `class`

In this step, let’s look at using instances of custom classes inside a list. Let’s create a `class Country`.

```text
from operator import attrgetter

class Country:
    def __init__(self, name, population, area):
        self.name = name
        self.population = population
        self.area = area
    def __repr__(self):
        return repr((self.name,self.population,self.area))

countries = [Country('India',1200,100),
             Country('China', 1400, 200),
             Country('USA', 120, 300)]
```

Most of the class is self explanatory.

`__repr__(self)` method provides the string representation of a class. When you print an object of this class, the return value from this method is printed.

Some of the operations you can perform are shown below:

```text
countries.append(Country('Russia',80,900))


print(countries[0])
print(countries[0:2])
print(countries[2:])
```

Output

```text
('India', 1200, 100)
[('India', 1200, 100), ('China', 1400, 200)]
[('USA', 120, 300), ('Russia', 80, 900)]
```

**Summary**

In this step, we looked at how to create lists using custom classes in Python. In the next step, we would look at how to sort, and manipulate this list.

#### Step 10: `list` With a custom `class` - Part 2

In the previous step, we created a `Country` `class`, and we created a list of countries. In this step, Let’s focus on trying to find the:

- country with the maximum population
- country with the maximum area
- country with the minimum area
- sorted list of countries, in a specific order

  from operator import attrgetter

  class Country: def **init**\(self, name, population, area\): self.name = name self.population = population self.area = area def **repr**\(self\): return repr\(\(self.name,self.population,self.area\)\)

  countries = \[Country\(‘India’,1200,100\), Country\(‘China’, 1400, 200\), Country\(‘USA’, 120, 300\)\]

  countries.append\(Country\(‘Russia’,80,900\)\)

Now what we want to do is sort countries. Can we do this, `countries.sort()`? You get an error

```text
Traceback (most recent call last):
  File "main.py", line 15, in <module>
    countries.sort()
TypeError: '<' not supported between instances of 'Country' and 'Country'
```

If the values were numbers, or strings, then Python knows how to compare them. The values in this list belong to a user-defined `class`. How do we help Python compare one `Country` with another?

Let’s say we want to sort by `population`.

You can do it by `countries.sort(key=attrgetter('population'))`. `attrgetter` method needs to be imported in - `from operator import attrgetter()` .

Output

```text
[('Russia', 80, 900), ('USA', 120, 300), ('India', 1200, 100), ('China', 1400, 200)]
```

Countries are sorted in the increasing order of population.

How can you sort them in the reverse order, in the decreasing order?

```text
countries.sort(key=attrgetter('population'), reverse=True)
```

Output

```text
[('China', 1400, 200), ('India', 1200, 100), ('USA', 120, 300), ('Russia', 80, 900)]
```

We can use `max()`, `min()` and all the other stuff using the same approach.

```text
>>> print(max(countries, key=attrgetter('population')))
('China', 1400, 200)
>>> print(min(countries, key=attrgetter('population')))
('Russia', 80, 900)
>>> print(min(countries, key=attrgetter('area')))
('India', 1200, 100)
>>> print(max(countries, key=attrgetter('area')))
('Russia', 80, 900)
```

Here’s the complete program we wrote during this step.

```text
from operator import attrgetter

class Country:

    def __init__(self, name, population, area):
        self.name = name
        self.population = population
        self.area = area

    def __repr__(self):
        return repr((self.name,self.population,self.area))
countries = [Country('India',1200,100),
             Country('China', 1400, 200),
             Country('USA', 120, 300)]

countries.append(Country('Russia',80,900))

countries.sort(key=attrgetter('population'), reverse=True)
print(max(countries, key=attrgetter('population')))
print(min(countries, key=attrgetter('population')))
print(min(countries, key=attrgetter('area')))
print(max(countries, key=attrgetter('area')))

print(countries)
```

#### Step 11: `list` Comprehension

We know we have been playing with lists a lot, and the final thing we talk about is list comprehension.

Why do we need list comprehension? Great question.

Let’s get back to the `numbers` example.

We want filter elements that have length `4`.

Let’s look at the traditional approach:

```text
    >>> numbers = ['Zero', 'One','Two','Three','Four','Five','Six','Seven', 'Eight','Nine']
    >>> numbers_length_four=[]
    >>> for number in numbers:
    ...    if len(number)== 4:
    ...      numbers_length_four.append(number)
    ...
```

Lot of code. Isn’t it?

List comprehension allows you to do this in a much simpler way.

The basic syntax is `numbers_length_four = [number for number in numbers]`.

```text
    >>> numbers_length_four = [ number for number in numbers  ]
    >>> numbers_length_four
    ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
```

We are printing complete list again.

Let’s try something else, say `[len(number) for number in numbers]`.

```text
    >>> numbers_length_four = [ len(number) for number in numbers  ]
    >>> numbers_length_four
    [4, 3, 3, 5, 4, 4, 3, 5, 5, 4]
```

Interesting. We created a list with lengths of each element.

Let’s get back to the problem we wanted to solve, where we only wanted to get the ones of length 4.

We can add an `if` condition between the `[...]`: `[number for numbers in numbers if len(number) == 4]`.

```text
    >>> numbers_length_four = [ number for number in numbers if len(number)==4 ]
    >>> numbers_length_four
    ['Zero', 'Four', 'Five', 'Nine']
```

Isn’t that cool? You can see that `numbers_length_four` contains `'Zero'`, `'Four'`, `'Five'`, `'Nine'`.

Now let’s create another list, `values = [3, 6, 9, 1, 4, 15, ...]`, which can have duplicates as well. so it might have `6` twice, even thrice. You want to create another list named `values_even` filtering only the even numbers.

`values_even = [value for value in values if value %2 == 0]` will do the job for us.

```text
    >>> values = [3, 6, 9, 1, 4, 15, 6, 3]
    >>> values_even = [ value for value in values if value%2==0]
    >>> values_even
    [6, 4, 6]
```

To extract only the odd numbers instead, use the condition `value % 2 == 1`.

```text
    >>> values_odd = [ value for value in values if value%2==1]
    >>> values_odd
    [3, 9, 1, 15, 3]
```

#### Step 12: Introduction To `set`

A `list` can contain duplicates. So if we create a **list** `numbers = [1, 2, 3, 2, 1]`, it is a valid `list`. A list is more based on the index, or position of elements. So in `numbers`, at **index** `[0]` is element 1, the element at **index** `[1]` is `2`,and so on. A `list` is a _positional_ data structure. You can add things at the end, or anywhere in-between.

A set, on the other hand, does not contain duplicates.

You can create a set from a list `numbers`, by `set(numbers)`.

```text
    >>> numbers = [1,2,3,2,1]
    >>> numbers
    [1, 2, 3, 2, 1]
    >>> numbers_set = set(numbers)
    >>> numbers_set
    {1, 2, 3}
```

You can see that the `numbers_set` is printed using `{`, `}` as delimiters. It does not have duplicates.

You can add a number to a set. Let’s add an element already present in the set. No change. No duplicates.

```text
    >>> numbers_set.add(3)
    >>> numbers_set
    {1, 2, 3}
```

If we add a fresh element , it would be added to the set.

```text
    >>> numbers_set.add(4)
    >>> numbers_set
    {1, 2, 3, 4}
    >>> numbers_set.add(0)
    >>> numbers_set
    {0, 1, 2, 3, 4}
```

When you do `numbers_set.remove(0)`, `0` is deleted.

```text
    >>> numbers_set.remove(0)
    >>> numbers_set
    {1, 2, 3, 4}
```

Set does not support access using index. So you cannot say `numbers_set[0]` and try to access the first element in the set.

```text
    >>> numbers_set[0]
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'set' object does not support indexing
```

You can check if an element is in a set, or not. You can use `1 in numbers_set`, to get a boolean result.

```text
    >>> 1 in numbers_set
    True
    >>> 5 in numbers_set
    False
```

You can do aggregate operations - `min`, `max`, `sum` and `len`.

```text
    >>> min(numbers_set)
    1
    >>> max(numbers_set)
    4
    >>> sum(numbers_set)
    10
    >>> len(numbers_set)
    4
```

In a set, you can perform operations like **intersection, union and disjoint**.

Let’s create a new set `numbers_1_to_5_set`, to hold the set `{1, 2, 3, 4, 5}`. We want to have a set `numbers_4_to_10_set` to have the set `{4, 5, 6, 7, 8, 9, 10}`.

```text
    >>> numbers_1_to_5_set = set(range(1,6))
    >>> numbers_1_to_5_set
    {1, 2, 3, 4, 5}
    >>> numbers_4_to_10_set = set(range(4,11))
    >>> numbers_4_to_10_set
    {4, 5, 6, 7, 8, 9, 10}
```

Now, if you do `numbers_1_to_5_set + numbers_4_to_10_set`, what would happen?

```text
    >>> numbers_1_to_5_set + numbers_4_to_10_set
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'set' and 'set'
```

It says ‘unsupported operation’.

Union can be done using `|`. The union of two sets combines the set elements, and finds the unique ones among them. So it returns `{1, 2, 3, 4, 5, 6, 9, 10}`.

```text
    >>> numbers_1_to_5_set | numbers_4_to_10_set
    {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```

Intersection is doing using the ‘`&`’ operator. It returns elements which are present in both these sets, `{4, 5}`.

```text
    >>> numbers_1_to_5_set & numbers_4_to_10_set
    {4, 5}
```

The other operation you can do is subtraction represented by `-`. This would return the elements in first set, but not present in the second set.

```text
    >>> numbers_1_to_5_set - numbers_4_to_10_set
    {1, 2, 3}

    >>> numbers_4_to_10_set - numbers_1_to_5_set
    {6, 7, 8, 9, 10}
```

#### Step 13: Introduction To `dict`

In this step, let’s look at dictionary - represented by the `class` `dict`. Dictionary represent key-value pairs.

Let’s say we have a sentence, and we would want to find out how many times each character occurred in that sentence. In those kind of situations, you can use a dictionary. Suppose `'a'` occurred `10` times, `'b'` occurred `15` times, `'c'` occurred’ `25` times. If you are familiar with Java, then this is like a `HashMap`, where it stores a key and its value. The key can be any object, and the value can be any object as well.

Let’s create a dictionary. Syntax is `occurrances = dict(a=5, b=6, c=8)`.

```text
    >>> occurances = dict(a=5,b=6,c=8)
    >>> occurances
    {'a': 5, 'b': 6, 'c': 8}
    >>> type(occurances)
    <class 'dict'>
```

A dictionary allows us to access values, using a key, something like `occurrences['d'] = 15`.

```text
    >>> occurances['d'] = 15
    >>> occurances
    {'a': 5, 'b': 6, 'c': 8, 'd': 15}
    >>> occurances['d'] = 10
    >>> occurances
    {'a': 5, 'b': 6, 'c': 8, 'd': 10}
```

In a list, the index used was a number. However, in a dictionary, the index can be anything. It can be any object, and over here, we are using a string.

You can also print the value of `occurrences['d']`.

```text
    >>> occurances['d']
    10
```

You should be cautious when using the approach. If the key does not exist, you get a `KeyError`.

```text
    >>> occurances['e']
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    KeyError: 'e'
```

A better way, without throwing an exception, would be `get()`.

```text
    >>> occurances.get('d')
    10
    >>> occurances.get('e')
```

You can use `occurrances.get('e', 10)` to provide a default value. If key `e` is not present, it returns `10` back.

```text
    >>> occurances.get('e', 10)
    10
```

There are a number of useful methods which are present in a dictionary. Let’s look at some of them.

```text
    >>> occurances
    {'a': 5, 'b': 6, 'c': 8, 'd': 10}
    >>> occurances.keys()
    dict_keys(['a', 'b', 'c', 'd'])
    >>> occurances.values()
    dict_values([5, 6, 8, 10])
```

`occurrances.items()` returns the key-value pairs, in the format of a **tuple**. Each tuple has key as the first element, and value as the second element. You can loop around all the items, by using this way.

```text
    >>> occurances.items()
    dict_items([('a', 5), ('b', 6), ('c', 8), ('d', 10)])
    >>> for (key,value) in occurances.items():
    ...    print(f"{key} {value}")
    ...
    a 5
    b 6
    c 8
    d 10
```

You can also delete a specific key - `del occurances['a']`.

```text
    >>> occurances
    {'a': 0, 'b': 6, 'c': 8, 'd': 10}
    >>> del occurances['a']
    >>> occurances
    {'b': 6, 'c': 8, 'd': 10}
```

#### Step 14: An Exercise With `dict`

In this step, let’s do a simple exercise with a dictionary. We have a simple string for you here:

`"This is an awesome question. This has never happened before This is your first time learning Python. Hopefully this has never happened before."`

With this string, we want to do two things:

- Compute how many times has each word is present in the string.
- Find out how many times each character is present in this string.

**Solution 1**

```text
str = "This is an awesome occasion. This has never happened before."
# key:value
char_occurances = {} #[]
for char in str:
    char_occurances[char] = char_occurances.get(char, 0) + 1
print(char_occurances)
```

Output

```text
{'T': 2, 'h': 4, 'i': 4, 's': 6, ' ': 9, 'a': 5, 'n': 4, 'w': 1, 'e': 8, 'o': 4, 'm': 1, 'c': 2, '.': 2, 'v': 1, 'r': 2, 'p': 2, 'd': 1, 'b': 1, 'f': 1}
```

What this does is

- It checks the `char_occurrances` to see how many times `char` is present.
- If it’s not present, then return `0`.
- The first time you find `char`, the value which would be set to `0 + 1`, or `1`.
- The second time you’ll find the character, you’ll have `1` in the dictionary, add `1` to it, and store and return a `2`.

**Solution 2**

```text
str = "This is an awesome occasion. This has never happened before."

word_occurances = {} #[]

for word in str.split():
    word_occurances[word] = word_occurances.get(word, 0) + 1
print(word_occurances)
```

Output

```text
{'This': 2, 'is': 1, 'an': 1, 'awesome': 1, 'occasion.': 1, 'has': 1, 'never': 1, 'happened': 1, 'before.': 1}
```

#### Step 15: Puzzles With Data Structures

In this step on data structures, we look at a number of puzzles related to set, lists and dictionary.

We want to create a simple list which has the squares of the first `10` numbers. How do you do that? The simplest way to do that in Python, would be to use list comprehension.

```text
    >>> squares_first_ten_numbers = [  i*i for i in range(1,11) ]
    >>> type(squares_first_ten_numbers)
    <class 'list'>
```

We would want to create a set, with the same values. We can use set comprehension. Use braces `{}` instead of square brackets `[]` - `squares_first_ten_numbers_set = { i*i for i in range(1,11) }`. If you do a `type(squares_first_ten_numbers_set)`, you get a `'set'`.

```text
    >>> squares_first_ten_numbers_set = set(squares_of_first_10_numbers)
    >>> squares_first_ten_numbers_set = { i*i for i in range(1,11)}
    >>> type(squares_first_ten_numbers_set)
    <class 'set'>
```

Square brackets `[]` denote `list`. Braces `{}`, denotes `set` or a `dict`.

To create a dictionary, you need a key and a value pair - `{ i : i*i for i in range(1,11)}`. `i : i*i` is `key : value` pair.

```text
    >>> squares_first_ten_numbers_dict = { i:i*i for i in range(1,11)}
    >>> type(squares_first_ten_numbers_dict)
    <class 'dict'>
    >>> squares_first_ten_numbers_dict
    {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}
```

`type([])` is `list` and `type({})` is `dict`. If you want to create an empty set, you can use the `set()` function.

```text
    >>> type([])
    <class 'list'>
    >>> type({})
    <class 'dict'>
    >>> type(set())
    <class 'set'>
```

The other way you can create a set, by actually having an element - `type({1})`.

```text
    >>> type({1})
    <class 'set'>
```

However if you actually make it a key-value pair… ? It would be of type ‘dict’.

```text
    >>> type({'A':5})
    <class 'dict'>
```

You can create `tuple` by using `()`, We will look at `tuple` in the next step.

```text
    >>> type(())
    <class 'tuple'>
    >>> type((1,2,3))
    <class 'tuple'>
    >>>
```

**Summary**

These are all pretty nuanced but these are powerful things you would need to understand to make complete use of the power of Python. I think understanding all the things we are discussing in this specific step, are key to making great use of all Python data structures.

`()` represents tuples, `[]` represents a list, and `{}` might be a set or a dictionary. If `{}` does not contain anything it’s a dictionary. If the `{]` contain a set of elements, it’s a set. If the `{}` contains key-value pairs, then it’s a dictionary. _Make sure that you understand every word of this_.

#### Step 16: Introducing `tuple`

In this quick tip, we would be looking at interesting data type in Python, called the **tuple**. Now what does that mean, how do you use it, and how is it different from a list?

Let’s look at it right now. Let’s define a method called `create_ranga()`, and let’s return `'Ranga'`, followed by the date of birth `1981`, as well as the country, `'India'`.

Is this really allowed? Of course!

```text
    >>> def create_ranga():
    ...    return 'Ranga',1981,'India'
```

We are returning multiple values from above method.

Let’s call this method: `ranga = create_ranga()`.

```text
    >>> ranga = create_ranga()
```

What’s the return type? It’s of type `tuple`.

```text
    >>> type(ranga)
    <class 'tuple'>
    >>> ranga
    ('Ranga', 1981, 'India')
```

A `tuple` is nothing but a sequence of values, separated by a comma.

Let’s say you want to take `ranga`, and assign values to three different variables. `name, year, country = ranga`.

```text
    >>> name, year, country = ranga
    >>> name
    'Ranga'
    >>> year
    1981
    >>> country
    'India'
```

`name, year, country = ranga` is called **destructing**. We are assigning the values from the tuple, to three different variables.

On the tuple, you can do a number of operations. For example, you can do a `len(ranga)`, which returns `3`. You can use an index to retrieve the values of a tuple, as in `ranga[1]`, and `ranga[2]`.

```text
    >>> len(ranga)
    3
    >>> ranga[0]
    'Ranga'
    >>> ranga[1]
    1981
    >>> ranga[2]
    'India'
```

Now let’s try and change a value. Suppose `ranga` was not born in `1981`. We would want to reduce his age.

```text
    >>> ranga[1] = 1991
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'tuple' object does not support item assignment
```

It does not allow you to do that, because a tuple is by definition, immutable. The values in a tuple cannot change. For that reason, in certain situations, tuples might be more efficient to use than a list.

Typically, a list is a collection of different values or objects of same type - a list of persons, a list of numbers etc. Typically, a tuple is a set of related attributes - details of a person.

A tuple typically stores details about a specific thing and the list stores a number of things.

Let’s look at a few simple tips regarding usage of tuples.

You an create a tuple by using `person = ('Ranga', 1981, 'India')` or `person = 'Ranga', 5, 'India'`. And once you have it, you can destruct it.

```text
    >>> person = ('Ranga', 5, 'India')
    >>> person = 'Ranga', 5, 'India'
    >>> type(person)
    <class 'tuple'>
    >>> name, age, country = person
```

What would happen, if we have only two variables on the left hand side? Obviously, it would throw an error!

```text
    >>> name, age = person
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: too many values to unpack (expected 2)
```

Tuples make swapping very easy.

Let’s have two values `x = 0`, `y = 1`. You want to swap values.

```text
    >>> x = 0
    >>> y = 1
```

Swap is easy.

```text
    >>> x, y = 0, 1
    >>> x, y = y, x
    >>> x
    1
    >>> y
    0
```

R.H.S of `x, y = y, x` is a tuple `(y, x)` and it is destructed to the L.H.S variables.

We could’ve done both assignments together.

```text
    >>> x, y = 0, 1
```

An interesting thing is related to how do you create a tuple with one element. Consider `x = (0)`, what would happen? What would be the type of `x`? It’s of `class` `int`.

```text
    >>> x = (0)
    >>> type(x)
    <class 'int'>
```

How do you create a tuple with just one value? The way you can do that, is by putting a comma. So you can do `x = 1,`, and it is actually a tuple .

```text
    >>> x = (0,)
    >>> x = 1,
    >>> type(x)
    <class 'tuple'>
```

It’s typically an interesting piece of code, for people who come from other languages. They would be worrying: `Oh!! what does it really mean?` Time for Python programmers to have some fun!

### Chapter 11 - Object Oriented Programming Revisited

Welcome to this section, a continuation on Object-Oriented Programming. In an earlier section, we understood the basics of object oriented programming.

In this section, we will focus on more advanced stuff related to object oriented programming, such as:

- Object composition
- Inheritance
- Abstract classes, and class design

Recommended Video

- Java Advanced Object Oriented Programming Tutorial - [https://www.youtube.com/watch?v=0flBHkyET\\\_E](https://www.youtube.com/watch?v=0flBHkyET%5C_E)

#### Step 01: OOP Basics Revised

In this first step, we will revise the concepts we learned earlier: **class**, **object**, **state** and **behavior**. As We understood earlier, a class is a template. The `MotorBike` class hence is a **template**, for all the objects of its kind. `honda` is an object or instance, and so is `ducati`. `honda` has a specific state at this point: it has a value of `50` for its speed. The state of an object is represented by the values of its properties, or member members. `speed` is a property and a member variable. We change the state of an object through the behavior of an object. Here we have `increase_speed()` and `decrease_speed()` as the methods to change the `speed` of the object. We saw that the state of the object can change during the lifetime of the program.

#### Step 02: Designing A `Fan` Class

In the previous step, we talked about a few important questions that you need to ask when you are talking about your classes:

- What is the state? That means, what are the member variables you need to have.
- How do you want to allow creation of a specific object? That is, what is the kind of constructor that you want to allow?
- What is what is the behavior you want? That would be the member method definitions.

Let’s consider the example of a ceiling fan. For this `Fan` `class`, you can think about the different elements that represent the state of a specific `Fan` object. You can think about how you want to allow construction of a `Fan` object, and how to define its behavior. In other words, what kind of changes you want to allow in the state of a `Fan` class.

The state we’re looking at is `make` \(manufacturer\), `radius` \(wing radius\), `color`, `isOn` \(a `bool`, representing whether it’s on\), and `speed`. It’s now time to represent the `Fan` class in our code. Above are the different things that make up the state of a `Fan`.

An important thing you need to take care of, when you’re designing the behavior of a class, is to think about the consumers. Think about who’s going to use your class, and how they would like to see it. When we talk about a fan, the typical behavior is:

- Switch it on
- Switch it off
- Increase the speed
- Decrease the speed

This is the typical behavior that might be expected by consumers, who would use our class. Even when you’re not really designing classes to be consumed by others, we would recommend you to think about what kind of behavior you would want, and get an outside in perspective.

All that theory aside, Python is all about getting things done, as fast as possible. Let’s try and keep this analysis to a bare minimum. Let’s get down to business.

Let’s create the constructor first.

When we’re creating a fan all we will need to decide is the make, radius and the color. Therefore, we want to pass in `make`, `radius`, `color` to this constructor.

```text
class Fan:
    def __init__(self, make, radius, color):
        self.make = make
        self.radius = radius
        self.color = color
        self.speed = 0
        self.is_on = False
```

Let’s define the representation method so that we can see the content of the object.

```text
    def __repr__(self):
        return repr((self.make,self.radius,self.color,self.speed,self.is_on))
```

When we run this code:

```text
fan = Fan('Manufacturer 1', 5, 'Green')
print(fan)
```

We get `('Manufacturer 1', 5, 'Green', 0, False)`

Now let’s go ahead and represent the behavior we wanted to have, for this specific class.

`switch_on` starts the fan and gives a initial `speed` value.

```text
    def switch_on(self):
        self.is_on = True
        self.speed = 3
```

`switch_off` stops the fan and makes `speed` `0`.

```text
    def switch_off(self):
        self.is_on = False
        self.speed = 0
```

Here is the full code so far, for your reference:

```text
class Fan:
    def __init__(self, make, radius, color):
        self.make = make
        self.radius = radius
        self.color = color
        self.speed = 0
        self.is_on = False

    def __repr__(self):
        return repr((self.make,self.radius,self.color,self.speed,self.is_on))

    def switch_on(self):
        self.is_on = True
        self.speed = 3

    def switch_off(self):
        self.is_on = False
        self.speed = 0

fan = Fan('Manufacturer 1', 5, 'Green')
fan.switch_on()
print(fan)
fan.switch_off()
print(fan)
```

We leave it as an exercise, to implement the `increased_speed()` and the `decrease_speed()`. It should be very easy. All that you need to do, is and given the speed, increment and decrement the speed variables.

#### Step 03: Object Composition - `Book` And `Review`s

In this step, we want to do a simple exercise on object composition.

First of all, what is object composition?

Up until now, we stored simple elements inside our object, so **id** is a number, **name** is a string, **author** is a string. In a class, you can use instances of other classes as well. Earlier we used instances of the predefined classes in Python.

In this step, we’ll create a custom class called `Review`. In the `Book` class, we will have a `list` of `Reviews`. This is called **object composition**.

Let’s look at the solution.

Let’s have a constructor, as in: `def __init__(self, id, name, author)`. Let’s define a `repr` method as well.

```text
class Book(object):
    def __init__(self, id, name, author):
        self.id = id
        self.name = name
        self.author = author
        self.reviews = []

    def __repr__(self):
        return repr((self.id,self.name,self.author,self.reviews))
```

Let’s create an **instance** of the `Book`, read the book as well. You’re able to see the content of the book, but the reviews are still empty.

```text
book = Book(123, 'Object Oriented Programming with Python', 'Ranga')

print(book)
```

Output

```text
(123, 'Object Oriented Programming with Python', 'Ranga', [])
```

How do we add reviews?

Before we are able to add reviews, we need to have a `class` called `Review`.

In Python, You can have multiple classes in the same file.

Let’s start with this

```text
class Review:
    def __init__(self, id, description, rating):
        self.id = id
        self.description = description
        self.rating = rating

    def __repr__(self):
        return repr((self.id,self.description,self.rating))
```

Let’s create a Review and print it as well.

```text
review = Review(10, "Great Book", 5)
print(review)
```

Output

```text
(10, 'Great Book', 5)
```

There is no relationship between the `Book` and `Review`. Let’s fix it by creating an `add_review()` method. Let’s add this to `Book` class.

```text
    def add_review(self, review):
        self.reviews.append(review)
```

Let’s use this to add a couple of reviews:

```text
book.add_review(Review(10, "Great Book", 5))
book.add_review(Review(101, "Awesome", 5))

print(book)
```

Output

```text
(123, 'Object Oriented Programming with Python', 'Ranga', [(10, 'Great Book', 5), (101, 'Awesome', 5)])
```

Here’s the complete code we have until now.

```text
class Book(object):
    def __init__(self, id, name, author):
        self.id = id
        self.name = name
        self.author = author
        self.reviews = []

    def __repr__(self):
        return repr((self.id,self.name,self.author,self.reviews))

    def add_review(self, review):
        self.reviews.append(review)

class Review:
    def __init__(self, id, description, rating):
        self.id = id
        self.description = description
        self.rating = rating

    def __repr__(self):
        return repr((self.id,self.description,self.rating))
book = Book(123, 'Object Oriented Programming with Python', 'Ranga')

# book.add_review()
book.add_review(Review(10, "Great Book", 5))
book.add_review(Review(101, "Awesome", 5))

print(book)
```

Output

```text
(123, 'Object Oriented Programming with Python', 'Ranga', [(10, 'Great Book', 5), (101, 'Awesome', 5)])
```

**Summary**

We created a `Book` `class`, a `Review` `class`, and added behavior to the `Book` so we can add Reviews to it. The relationship between `Book` and `Review` is called composition. A `Book` instance consists of instances of Review.

In the next step, we would look at on the relationship called inheritance.

#### Step 04: Why Do We Need Inheritance

In this step, let’s look at why we need **inheritance**. We consider a simple example involving an `Animal` and a `Pet`, and understand its importance.

Let’s create a simple class called `Animal` with a method `bark` and create an instance of it.

```text
    >>> class Animal:
    ...   def bark(self):
    ...     print("bark")
    >>> animal = Animal()
    >>> animal.bark()
    bark
```

We want to create another class `Pet` with ability to `bark` and `groom`.

```text
    >>> class Pet:
    ...   def bark(self):
    ...     print("bark")
    ...   def groom(self):
    ...     print("groom")
    >>> pet = Pet()
    >>> pet.bark()
    bark
    >>> pet.groom()
    groom
```

In above classes, there is an unnecessary repetition of `bark()`. Why can’t `Pet` inherit the behavior from `Animal`? That’s where **inheritance** comes in.

Let’s see how can how we can do that.

Look at this class definition: `class Pet(Animal)` indicates that `Pet` extends `Animal` class.

```text
    >>> class Pet(Animal):
    ...   def groom(self):
    ...     print("groom")
    ...
    >>> dog = Pet()
```

You can obviously do `pet.groom()` on the `Pet`.

But the interesting thing is you would be able to even do `pet.bark()`, even though pet does not contain `bark()`. It inherits the behavior from the `Animal` `class`.

```text
    >>> dog.bark()
    >>> bark
```

`Animal` class is called a super-class, and `Pet` is called a **subclass**. The subclass inherits the behavior and properties of the super-class.

Inheritance is a powerful concept. One of the most important things to understand, is to use inheritance only when there is an **is-a relationship**. Over here, **Pet is-a Animal**.

Sometimes, inheritance is misused in situations where there is no is-a relationship, and that can lead to problems.

#### Step 05: All Classes In Python 3 Inherit From `object`

object is a base for all classes in Python.

It has the methods that are common to all instances of Python classes

Let’s define Book class, create an instance and print it

```text
class Book(): pass

book = Book()

print(book)
```

Output is `<__main__.Book object at 0x7f78e7fe1588>`.

Where is the output coming from?

`Book` class inherits from `object` class.

The default implementation of `repr` method return the value shown in the output.

Let’s override the `repr` method.

```text
class Book():
  def __repr__(self):
     return repr('new book')

book = Book()

print(book)
```

Output is `'new book'`.

We are now overriding the default `repr` implementation from `object` class.

#### Step 06: Multiple Inheritance

In this step, let’s look at an interesting feature which is supported by Python. It’s called multiple inheritance. It means a single `class` can inherit from multiple classes.

We will create two classes - `LandAnimal` and `WaterAnimal`.

```text
class LandAnimal: pass

class WaterAnimal: pass
```

We want to create `Amphibian` class extending both `WaterAnimal` and `LandAnimal`.

```text
class Amphibian(WaterAnimal, LandAnimal): pass

amphibian = Amphibian()
```

What we are doing in here is called **multiple** **inheritance**.

The `Amphibian` `class` is inheriting from `WaterAnimal` and the `LandAnimal`. If these classes have any methods, then the `Amphibian` class will also inherit those.

Let’s add constructors to these classes.

First thing we do is we’ll delegate to the superclass constructor - `super().__init__()`.

We will add a `walking_speed` to `LandAnimal` and `swimming_speed` to `WaterAnimal`.

```text
class LandAnimal:
    def __init__(self):
        super().__init__()
        self.walking_speed = 5

class WaterAnimal:
    def __init__(self):
        super().__init__()
        self.swimming_speed = 10

class Amphibian(WaterAnimal, LandAnimal):
    def __init__(self):
        super().__init__()

amphibian = Amphibian()
print(amphibian.swimming_speed)
print(amphibian.walking_speed)
```

Output

```text
10
5
```

You can see that `amphibian` object inherits properties from both super classes.

Let’s add behavior as well : method `increase_walking_speed` in `LandAnimal` and method `increase_swimming_speed` in `WaterAnimal`.

```text
class LandAnimal:
    def __init__(self):
        super().__init__()
        self.walking_speed = 5

    def increase_walking_speed(self, how_much):
        self.walking_speed += how_much

class WaterAnimal:
    def __init__(self):
        super().__init__()
        self.swimming_speed = 10

    def increase_swimming_speed(self, how_much):
        self.swimming_speed += how_much

class Amphibian(WaterAnimal, LandAnimal):
    def __init__(self):
        super().__init__()

amphibian = Amphibian()
amphibian.increase_swimming_speed(25)
amphibian.increase_walking_speed(50)
print(amphibian.swimming_speed)
print(amphibian.walking_speed)
```

Output

```text
35
55
```

You can see that we are successfully able to call super class methods on the `amphibian` object.

**Summary**

In Python, you can have multiple inheritance. We saw how you can inherit from two classes. `Amphibian` `class` inherit data and behavior from the two super-classes.

#### Step 07: Creating And Using An Abstract Class

In this step let’s look at an important feature in related to object oriented programming called **abstract** **class**. We’ll understand how you can create abstract classes, and also see where you can use abstract classes.

What do we mean by an abstract class?

Let’s say we have a class called `Animal`. It’s an empty `class`. Typically, you’ll be able to create instances of this class.

There might be certain situations where we don’t know what the code inside a method should be. However, you want the sub-classes to define how this method should behave.

When we created `Animal`, it might not know how to `bark`. We would want to leave the definition of the method to sub-classes. In such situations, we go for an abstract class.

An abstract class might have several **abstract methods**.

Let’s define `AbstractAnimal` class with abstract method `bark`.

We would need to extend a class called `ABC` - Abstract Base Class. We need add a decorator on abstract method - `@abstractmethod`.

```text
from abc import ABC, abstractmethod

class AbstractAnimal(ABC):
    @abstractmethod
    def bark(self): pass
```

We cannot create an instance of abstract class.

```text
animal = AbstractAnimal()
```

Error from above code - `TypeError: Can't instantiate abstract class AbstractAnimal with abstract methods bark`

You can create a sub class implementing the abstract methods in the abstract class.

```text
class Dog(AbstractAnimal):
    def bark(self):
        print("Bow Bow")

print(Dog().bark())
```

This prints `'Bow Bow'`

Let’s look at more related to abstract classes in the next step.

#### Step 08: Template Method Pattern With `Recipe` Class

In the previous step, we looked at the basics of abstract class.

In this step. Let’s look at a real world example of how you can use an abstract class.

Let’s create a class called `Recipe`. Typically when we cook something, there are typically three steps involved.

- The first one is to prepare. You’d want to make sure, that you have all the raw materials ready, you have clean vessels, and the dishes are done and ready for use.
- The second one, is to execute the recipe, so you need to follow the instructions.
- The last step is to do a clean up. Make sure that you clean and things like that.

Let’s say now, you’re creating a `class` to represent a `Recipe`, and you want to make sure that each of the sub-classes follow these three steps.

How do we do that?

One of the solutions we can use, is to use abstract class.

Let’s create the class `AbstractRecipe`.

It has three abstract methods - `prepare` and `recipe` and `cleanup`. Sub classes can implement these methods.

The `execute` method calls these three steps.

```text
from abc import ABC, abstractmethod
class AbstractRecipe(ABC):

    def execute(self):
        self.prepare()
        self.recipe()
        self.cleanup()

    @abstractmethod
    def prepare(self): pass

    @abstractmethod
    def recipe(self): pass

    @abstractmethod
    def cleanup(self): pass
```

What we are saying is, we don’t know what are the steps which are involved in the preparation, recipe or cleanup. However, we want to ensure that these three steps are defined by all the sub-classes. And when we execute something, we would want to follow these steps in that order.

We are defining an algorithm, and leaving the implementation of individual steps to the sub-classes. This design pattern is also called a **Template Method design pattern**.

Let’s create `Recipe1` .

```text
class Recipe1(AbstractRecipe):

    def prepare(self):
        print('do the dishes')
        print('get raw materials')

    def recipe(self):
        print('execute the steps')

    def cleanup(self): pass
```

When you run this:

```text
Recipe1().execute()
```

You get

```text
do the dishes
get raw materials
execute the steps
```

Let’s create another recipe - `MicrowaveRecipe`.

```text
class MicrowaveRecipe(AbstractRecipe):

    def prepare(self):
        print('do the dishes')
        print('get raw materials')
        print('switch on microwave')

    def recipe(self):
        print('execute the steps')

    def cleanup(self):
        print('switch off microwave')
```

When you run this:

```text
MicrowaveRecipe().execute()
```

You get

```text
do the dishes
get raw materials
switch on microwave
execute the steps
switch off microwave
```

#### Step 09: A Quick Revision

In this section, we looked at a wide variety of object oriented concepts.

- We started with revising the basic concepts - classes, objects - state and behavior. We created a couple of simple object oriented programming examples. We designed a Fan and Book classes with state and behavior.
- We looked at object composition. We created a Book class having a number of Reviews.
- We looked at inheritance. We created multiple examples of inheritance, and we looked at an example of multiple inheritance as well. Inheritance helps us to design a class hierarchy, and to use properties from the super-class.
- We looked at a specific type of a class called abstract class, for which you’ll not be able to create instances. We looked at examples where abstract classes are really useful.
- We looked at the Template Method design pattern, where you define a template, and leave specific implementation details to the subclass. We saw how abstract classes help us to implement Template Method design pattern.

### Chapter 12 - Error Handling

#### Step 01: Introduction To Error Handling - Your Thought Process

Welcome to this section, where we’ll focus on all the important things concerned with **exception handling**. We’ll discuss how to handle exceptions, and how a programmer’s thought process needs to be when implementing exception handling.

An important things to note is, it’s not just the bad programmers who cause exceptions. Even code written by good programmers can have exceptions. Exceptions can occur because of bad code. Exceptions can also occur when your expectations about the environment did not match. Maybe you were expecting a directory to be there on the system, or a folder structure was not present on your deployment environment. You could be expecting some configuration to be done on a database, which was not done.

What are the keys to exception handling?

The most important thing is, if something that goes wrong is in your system, you should give a good message to the end user. You should tell him what are the next steps he can take. If let’s say, your system expects a file to be there, and the file was not, you should tell the user: “Hey! The file was not there, That’s the reason why the program terminated”.

If the exception happened due to a programming error, you should not just gobble up the exception. You should give enough information to the debugging team to debug the problem. Try and make sure that that information is logged, to help the person who is going to debug the problem.

**Summary**

In this step, we looked at the fact that both good and bad programmers cause exceptions. But the great programmers are the ones who implement exception handling properly, so that there’s a friendly message to the end user, as well as there is enough information logged for someone to debug the problem.

#### Step 02: Basics Of Exception Hierarchy

Let’s look at a variety of exceptions.

Let’s do `1/0`. What do you think will happen?

```text
    >>> 1/0
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ZeroDivisionError: division by zero

    >>> i = 0
    >>> j = 10/i
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ZeroDivisionError: division by zero
```

The result of this is undefined, and that’s why an error is **thrown**: `ZeroDivisionError`.

Earlier we looked at this one as well: `'2' + 2`.

We are trying to add a string `'2'`, to a number `2`. What would happen?

```text
    >>> 2 + '2'
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

It says “`TypeError`: I don’t know how to add `'int'` to a `'str'`”.

Let’s create a simple `list` of numbers: `values = [1, '2']`,

and we do `sum(values)`, what would happen? Again, the same error: `TypeError`.

```text
    >>> values = [1,'2']
    >>> sum(values)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: unsupported operand type(s) for +: 'int' and 'str''
```

Let’s try to access a variable, which is not defined. What would happen?

```text
    >>> value
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'value' is not defined
```

It says “`NameError`! The name ‘`value`’ is not defined yet”.

Earlier we created a list called `values`, so on that, let’s call an attribute which is does not exist.

```text
    >>> values.non_existing
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'list' object has no attribute 'non_existing'
```

If we try to say `values.<non-existing>` ,what would happen? It throws `AttributeError`, that says: "`list` does not have an attribute `non_existing`’.

The same thing happens, If you try to call a non-existing method.

```text
    >>> values.non_existing()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'list' object has no attribute 'non_existing'
```

`ZeroDivisionError`, `TypeError`, `NameError` and `AttributeError`: all are different kinds of exceptions that are defined in Python.

If you want to see the complete list of exceptions, you can import the `builtins` `module`, and do `help(builtins)`.

You would see at the top are classes, and you’d see later a class called `BaseException`, from which `Exception` inherits. And after that is a set of errors. The one which we looked at earlier, is `ZeroDivisionError`:

```text
    >>> import builtins
    >>> help(builtins)
    Help on built-in module builtins:
    NAME
        builtins - Built-in functions, exceptions, and other objects.
    DESCRIPTION
        Noteworthy: None is the `nil' object; Ellipsis represents `...' in slices.
    CLASSES
        object
            BaseException
                Exception
                    ArithmeticError
                        FloatingPointError
                        OverflowError
                        ZeroDivisionError
                    AssertionError
                    AttributeError
                    BufferError
                    EOFError
                    ImportError
                        ModuleNotFoundError
                    LookupError
                        IndexError
```

You can see that `ZeroDivisionError` inherits from `ArithmeticError`, which inherits from `Exception`, which inherits from `BaseExeption`, which inherit from `Object`.

You also have `IndentationError`:

```text
    >>>     values = [1,'1']
      File "<stdin>", line 1
        values = [1,'1']
        ^
    IndentationError: unexpected indent
    >>>     sum(values)
      File "<stdin>", line 1
        sum(values)
        ^
    IndentationError: unexpected indent
```

In this step, we looked at a high level hierarchy of exceptions. We’ll talk about this a little more in the subsequent step.

#### Step 03: Basics Of Error- Handling - `try`-`except`

In this step, let’s get started with understanding how to **handle** **exceptions**.

We know that `1/0` throws an error.

```text
1/0
```

Output

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    1/0
ZeroDivisionError: division by zero
```

You can see that the line which throws the error is also printed.

Consider this piece of code. Will j be printed?

```text
i = 0
j = 10/i
print(j)
```

Nope it will not be.

When an exception occurs, program execution terminates, then and there. Unless, you handle the exception.

Even if we had a hundred lines of code right below it, not one of those would get executed. And that’s why you would want to handle exceptions.

We would want to make sure that if an exception happens here, we can give a default value to `j`.

How can you do that? That’s where the `try` **block** comes in.

`try except` has a simple syntax. You put the code you want to look out for exceptions in `try`. You would write the code to handle the exception in `except` block.

```text
try:
    i = 0
    j = 10/i
except:
    print("Exception")
    j = 0
print(j)
```

Output

```text
Exception
0
```

You can see that `j` is assigned a value 0 and the `print` method is also called.

**Summary**

In this step, we looked at the basics of exception handling. We learned that if an exception is not handled, then the subsequent lines of code are not executed. We used a `try` block to protect our code and we created an `except` block to say what should happen, if an exception is thrown.

At the end, we saw we were able to handle the exception, and continue with the rest of the code.

#### Step 04: Handling Multiple Errors With Multiple `except`- Blocks

In this we do let’s dig deeper and try to learn more about the `try- except` **block**.

When we run the code, what would happen?

```text
try:
    i = 0
    j = 10/i
except:
    print("Exception")
    j = 0
print(j)
print("End")
```

It would print

```text
Exception
0
End
```

What would result, if the exception did not occur? Let’s say `i` had a value of `1` or `2`.

```text
try:
    i = 1
    j = 10/i
except:
    print("Exception")
    j = 0
print(j)
print("End")
```

It would print

```text
10.0
End
```

You can see that `'Exception'` is not printed.

The code in `except` block is executed, only when there is an exception. If there is no exception, all `except` blocks are skipped.

Let’s look at code below: We are doing a `sum` on list with different types of values.

```text
try:
    i = 1
    j = 10/i
    values = [1, '1']
    print(sum(values))
except:
    print("Exception")
    j = 0
print(j)
print("End")
```

Output

```text
Exception
0
End
```

It prints an exception, `Exception`. But it does not give us a clue as to what went wrong?

You might be thinking, “What if I want to handle these two exceptions differently?” You might want to be able to say: “For this one, I want to handle and assign a different value to the name. However, if a divide by zero exception happened, then I would want to do something different.” How do you do that?

You can specify what kind of exceptions you would want to handle, is by saying something like `except: TypeError`.

If you only want the handle `TypeError`s, and have code specific to that, as in `print('Type Error')`. What would this do? If a `TypeError` happens, it prints `'Type Error'`, assigns a value of `0` to `j`, and the code continues execution as expected.

```text
try:
    i = 1
    j = 10/i
    values = [1, '1']
    print(sum(values))
except TypeError:
    print("TypeError")
    j = 0
print(j)
print("End")
```

Output

```text
TypeError
0
End
```

If a divide by zero exception happens, it is not handled, and will get thrown out.

The block says _OK! I only know how to handle a `TypeError`. I don’t know how to handle the `ZeroDivisionError`_.

How can you handle this?

We can define **another** `except` block.

```text
try:
    i = 0
    j = 10/i
    values = [1, '1']
    print(sum(values))
except TypeError:
    print("TypeError")
    j = 0
except ZeroDivisionError:
    print("ZeroDivisionError")
    j = 0
print(j)
print("End")
```

Output

```text
ZeroDivisionError
0
End
```

In this step, we looked at two basic things.

We saw that if no exception happens, then the code in `except` is not executed.

The second thing we learnt, is You can have specific exception blocks, tailored to handle specific exceptions. So if we say `except TypeError`, then I would only handle `TypeError`. `except ZeroDivisionError` would only match `ZeroDivisionError`.

#### Step 05: Error Handling Puzzles And Exception Details

In this step, we will be talking about a number of puzzles related to exception handling.

Now let’s start with a very basic example.

What will be the output for this? Think about it.

```text
try:
    10/0
except TypeError:
    print("TypeError")
except ZeroDivisionError:
    print("ZeroDivisionError")

print("End")
```

You run the code, and the output is `ZeroDivisionError`, and `'End'`.

Now let’s look at the next one. We want to do `10/0`. Also, you know that `object` is the super-class of all the classes in Python.

```text
try:
    10/0
except object:
    print("ZeroDivisionError")
# catching classes that do not inherit from BaseException is not allowed
print("End")
```

You’ll see that it throws an error: “catching classes that do not inherit from `BaseException` is not allowed”. Even though `object` is a valid Python `class`, you cannot catch it. You can only catch those classes which inherit from `BaseException`.

What will be the output?

Code is throwing a divide by zero error, handling `Exception`.

```text
try:
    10/0
except Exception:
    print("Exception")
```

Output - `Exception`

`Exception` will match all its sub classes as well. One of which is `ZeroDivisionError`.

Here’s the hierarchy

```text
BaseException
    Exception
        ArithmeticError
            FloatingPointError
            OverflowError
            ZeroDivisionError
```

To handle `ZeroDivisionError`, you can handle `ZeroDivisionError` or any of its super classes - `ArithmeticError`, `Exception` or `BaseException`

Now let’s look at the next puzzle.

You can also handle multiple errors in the same `except` block.

```text
try:
    sum([1, '1'])
except (ZeroDivisionError, TypeError):
    print("Exception")

print("End")
```

Output is `'Exception'`

The last puzzle shows how you can print the exception details. You would want to get the details of the error, and print them out.

```text
try:
    sum([1,'1'])
except TypeError as error:
    print(error)
print("End")
```

Output

```text
unsupported operand type(s) for +: 'int' and 'str'
End
```

You can see the error details. So, you can handle it better.

**Summary**

These were a few interesting puzzles related to exception handling. There are two new things we learned in this step. One is, you can handle multiple exceptions in a single except block. The second thing we learned was you can get the error details as well.

#### Step 06: Error Handling - `finally` And `else`

We looked at `try` and `except`. The other two things which are typically part of a `try`-`except` block are `else` and `finally`.

We keep this example very simple for now. Let’s see what would happen, if we run the code as it is:

```text
try:
    # Business Logic to read
    i = 1 # Not hardcoded, getting a input from user
    j = 10/i
except Exception as error:
    print(error)
    j = 0
else:
    print("Else")
finally:
    # Close
    print("Finally")

print(j)
print("End")
```

Output

```text
Else
Finally
10.0
End
```

Exception is not thrown. So, `else` and `finally` are executed. `except` is not executed.

What if an error is thrown?

Let’s change `i` to 0.

```text
    i = 0 # Not hardcoded, getting a input from user
```

Output

```text
division by zero
Finally
0
End
```

Exception is thrown. So, `except` and `finally` are executed. `else` is not executed.

Here’s the summary:

- `except` is called when exception is thrown and exception matches.
- `else` is executed only when an exception is not thrown.
- `finally` is always executed

#### Step 07: Error Handling Again

In this step, let’s look at a few more things related to exception handling blocks. We have a `try` block, `except` block, `else` block and `finally` block. What are the allowed combinations?

- With a `try`, you can have multiple `except` blocks.
- You cannot have an `else` without `except` blocks.
- You can have a `try` with just `finally` - If there is an exception, code in finally is executed.

#### Step 08: Raising Exceptions

In the previous steps, we looked at how to handle exceptions. But you might be writing code which might throw exceptions as well. So how do you throw exceptions?

Let’s get started with creating a simple example, about currencies. Let’s say we have `20 USD`, and you would want to be able to add `30 USD` to it. What would be the result? `50 USD`.

We want to develop a simple program, which allows us to add currencies.

Think of a scenario where you have to add `INR 500` to `USD 50`.

Let’s say the first version of the program we write, we don’t support the exchange feature. When different kinds of currencies are passed, we want to throw an exception.

Let’s see how to do that.

Let’s create a `Currency` `class` with a constructor and `repr`.

```text
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __repr__(self):
        return repr((self.currency,self.amount))
```

All simple stuff.

Let’s create a couple of instances and try to add them.

```text
value1 = Currency("USD", 20)
value2 = Currency("INR", 30)
print(value1 + value2)
```

Output

```text
Traceback (most recent call last):
  File "main.py", line 11, in <module>
    print(value1 + value2)
TypeError: unsupported operand type(s) for +: 'Currency' and 'Currency'
```

You cannot add two currencies. How can we support adding currencies?

We can do **operator overloading**, so you can give a new meaning for `+` operator for the `Currency` class.

We will implement the `__add__()` method.

```text
    def __add__(self, other):
        total_amount = self.amount + other.amount
        return Currency(self.currency, total_amount)
```

If we are doing `value1 + value2`, `self` would be `value1`, and `other` would be `value2`. Let’s assume for the time being that the both of them have the same currency.

Let’s run this program.

Output - `('USD', 50)`

We are assuming that both currencies have the same type. We need to have a check if the currencies are the same. If not, throw an exception.

How do we do that?

You can do that in Python, by saying `raise`, and mention `Exception` class, by passing in a text message such as `'currencies do not match'`.

```text
    def __add__(self, other):
        if self.currency != other.currency:
            raise Exception("Currencies Do Not Match")
        total_amount = self.amount + other.amount
        return Currency(self.currency, total_amount)
```

Let’s create currencies that have different currencies and add them.

```text
value1 = Currency("USD", 20)
value2 = Currency("INR", 30)
print(value1 + value2)
```

You can see that `"Currencies Do Not Match"` is thrown.

Output

```text
Traceback (most recent call last):
  File "main.py", line 17, in <module>
    print(value1 + value2)
  File "main.py", line 11, in __add__
    raise Exception("Currencies Do Not Match")
Exception: Currencies Do Not Match
```

Here is the entire code of the program, for your reference:

```text
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __repr__(self):
        return repr((self.currency,self.amount))

    def __add__(self, other):
        if self.currency != other.currency:
            raise Exception("Currencies Do Not Match")
        total_amount = self.amount + other.amount
        return Currency(self.currency, total_amount)

value1 = Currency("USD", 20)
value2 = Currency("INR", 30)
print(value1 + value2)
```

#### Step 09: Creating a Custom Exception class

In the previous step, we looked at how to raise an exception. In this step, create a new exceptio type and raise it.

Just like the `Exception` `class`, we would want to create our own `CurrenciesDoNotMatchError`.

Let’s get started with `CurrenciesDoNotMatchError`

```text
class CurrenciesDoNotMatchError: pass
```

Can you `raise` this?

What do you think will happen if we say `raise CurrenciesDoNotMatchError("currencies do not match")`?

Error - “exceptions should drive from `BaseException`”

Whenever you create a custom exception, you need to extend `BaseException`, or a subclass of `BaseException`. Let us choose to extend `Exception`.

Let’s add a constructor accepting a message.

```text
class CurrenciesDoNotMatchError(Exception):
    def __init__(self,message):
        super().__init__(message)
```

You can also pass in the values of `self.currency` and `other.currency`, so that it’s clear why the exception happened.

```text
raise CurrenciesDoNotMatchError(self.currency + " " + other.currency)
```

Here is the entire code for your reference:

```text
class CurrenciesDoNotMatchError(Exception):
    def __init__(self,message):
        super().__init__(message)
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __repr__(self):
        return repr((self.currency,self.amount))

    def __add__(self, other):
        if self.currency != other.currency:
            raise CurrenciesDoNotMatchError(self.currency + " " + other.currency)
        total_amount = self.amount + other.amount
        return Currency(self.currency, total_amount)

value1 = Currency("USD", 20)
value2 = Currency("INR", 30)
print(value1 + value2)
```

Output

```text
Traceback (most recent call last):
  File "main.py", line 20, in <module>
    print(value1 + value2)
  File "main.py", line 14, in __add__
    raise CurrenciesDoNotMatchError(self.currency + " " + other.currency)
__main__.CurrenciesDoNotMatchError: USD INR
```

#### Step 10: Exception Handling Best Practices

Let’s review some of the important exception handling best practices, from our experience.

So what’s the first best practice?

Never hide exceptions. If an exception happens, put the entire stack trace into your logs. In the example which we saw, We understood ‘currencies do not match’. And we also listed what currencies did not match. So that kind of context really helps somebody from outside your team, who’s trying to handle the exception. The moment you start hiding the exceptions, the guy who’s trying to solve it, does not know where to start. He knows something is going wrong, but he does not know which line of code threw the exception.

The second thing is - do not use exception handling for flow control. You cannot have exception handling to redirect the way logic flows in a program, like an `if`-`else`. Exception handling is very expensive.

The most important thing about exception handling, is think about your user. If an exception happens, what does your end user want to see, and what can he do about it? As long as you are thinking about it, then you are doing very well.

The other thing is, plan on supporting the guy who’s going to handle the call from your end user. What kind of information does he need to solve the error? The support team might also include the developer, who might want to have a lot of information in the log.

Also, think about the calling method. If you’re designing an API, think about what the calling method can do about this exception.

Last one is have global exception handling. Make sure that you have something sitting on top of everything which is like the global exception handling, so that no exceptions actually go to the end user. It should always be a proper exception message that end user sees, which should tell him what he can do about it. Remember that na end user will not be able to do anything with the stack trace.

We know some of these are not easy to implement, but the most important thing is for you to keep thinking about this.

Once you have the attitude of to think about the end user, your support team, and the calling method, that’s all you would need to make sure that you have some exception handling.

### Chapter 13 - More Python Tips

#### Tip-1: `math` Module And `Decimal` Class

In this quick step, we look at how you can do mathematical calculations accurately, and also at a few important contents of the `math` module.

`float` `class` is not really that accurate. If you do `4.5 - 3.2` , the value that get is something like `1.29999.....999998`.

```text
    >>> print(4.5 - 3.2)
    1.2999999999999998
```

That’s where the Decimal class steps in.

```text
    >>> value1 = Decimal('4.5')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'Decimal' is not defined
```

`decimal` module needs to be imported. Make sure that you create `Decimal` instances using string constructors. `value1 - value2` is printed as `1.3` - which is accurate.

```text
    >>> import decimal
    >>> from decimal import Decimal
    >>> value1 = Decimal('4.5')
    >>> value2 = Decimal('3.2')
    >>> value1 - value2
    Decimal('1.3')
```

Let’s look more closely at the `math` module, and other components present within it.

```text
    >>> import math
    >>> math.
    math.acos(       math.erf(        math.inf         math.pi
    math.acosh(      math.erfc(       math.isclose(    math.pow(
    math.asin(       math.exp(        math.isfinite(   math.radians(
    math.asinh(      math.expm1(      math.isinf(      math.sin(
    math.atan(       math.fabs(       math.isnan(      math.sinh(
    math.atan2(      math.factorial(  math.ldexp(      math.sqrt(
    math.atanh(      math.floor(      math.lgamma(     math.tan(
    math.ceil(       math.fmod(       math.log(        math.tanh(
    math.copysign(   math.frexp(      math.log10(      math.tau
    math.cos(        math.fsum(       math.log1p(      math.trunc(
    math.cosh(       math.gamma(      math.log2(
    math.degrees(    math.gcd(        math.modf(
    math.e           math.hypot(      math.nan
```

You can also find out the value of `math.pi`, which a constant, and `math.e`.

```text
    >>> math.pi
    3.141592653589793
    >>> math.e
    2.718281828459045
```

If you want to do any mathematical operation, like those involving trigonometry, logarithms, mathematical conversions \(degrees to radians, for example\), this is your go to module.

#### Tip-02: `None`

In this quick tip, we will be talking about `None`. What is `None`? Where do you use it? What are the best practices with it?

The way you think about `None` is very similar to how you think about `NULL` in `SQL`. In `SQL`, if we say something is `NULL`, it means that it does not have a value. Java programmers would be familiar with that concept as well. When a variable object is `null`, that means it’s not referring to anything.

In Python, `None` is very similar, except for the fact that `None` actually is an instance of a class. If you look at `type(None)`, it is `NoneType`. `None` is the only instance of this class.

```text
    >>> None
    >>> type(None)
    <class 'NoneType'>
```

Let’s look at a simple example using `None`.

Let’s create a simple method, and call it `email()`. We would put the `subject`, `content`, `to`, `cc`, `bcc` as parameters to this method. Let’s say this is the definition of `email`, and it’s just simply print everything in the body, using a formatted string. We are printing upto `{cc}` among the parameters.

```text
    >>> def email(subject, content, to , cc , bcc):
    ...    print(f" {subject}, {content}, {to}, {cc}, "
    ... )
    ...
```

Let’s call the method as shown below:

```text
    >>> email("subject", "great work", "in28minutes@gmail.com")
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: email() missing 2 required positional arguments: 'cc' and 'bcc'
```

You can to see that `email` is missing required positional arguments, which are `cc` and `bcc`. But if `cc` and `bcc` are not relevant to my particular email, what to do? Is there a way we can assign default values to them? The default should be something that means “nothing is to be used”.

The solution is: set `cc = None` and `bcc = None`. Also, print the `cc` and `bcc` inside the method for display.

```text
    >>> def email(subject, content, to , cc=None , bcc=None):
    ...    print(f" {subject}, {content}, {to}, {cc}, {bcc}");
    ...
```

We can now call the method again. This time we see the right result.

```text
    >>> email("subject", "great work", "in28minutes@gmail.com")
     subject, great work, in28minutes@gmail.com, None, None
```

If you want to indicate that you don’t want to have a `subject`, specify the `subject` as `None`.

```text
    >>> email(None, "great work", "in28minutes@gmail.com", None, None)
     None, great work, in28minutes@gmail.com, None, None
```

Using `None` is considered to be good programming practice, because you can compare variables against it.

Here’s an example:

```text
    >>> var = "123"
    >>> if var is None : print ("do something");
    ...
    >>> var = None
    >>> if var is None : print ("do something");
    ...
    do something
    >>>
```

#### Tip-2: `statistics` Module - Find Mean And Median

In this step, let’s try and understand the `statistics` module within Python.

Let’s create a simple list, and play around with a few of the functions which are present in the `Statistics` `class`.

```text
    >>> import statistics
    >>> statistics.
    statistics.Decimal(          statistics.mean(
    statistics.Fraction(         statistics.median(
    statistics.StatisticsError(  statistics.median_grouped(
    statistics.bisect_left(      statistics.median_high(
    statistics.bisect_right(     statistics.median_low(
    statistics.chain(            statistics.mode(
    statistics.collections       statistics.numbers
    statistics.decimal           statistics.pstdev(
    statistics.groupby(          statistics.pvariance(
    statistics.harmonic_mean(    statistics.stdev(
    statistics.math              statistics.variance(
```

Let’s say we have `marks`, having entries `[1, 6, 9, 23, 2]`. Let’s say you want to find the average mark in the list. What is the average called in statistics? It’s called mean.

```text
    >>> marks = [1, 6, 9, 23, 2]
    >>> statistics.mean(marks)
    8.2
```

There are other statistical functions which are present in here. Let’s say you want to find the median of `marks`. The median of a list is the entry that is placed in the middle, when you arrange the numbers in sorted order. Over here, the median seems to be `6`. If there are even number of numbers \(suppose there was a `7` also in `marks`\) `median(marks)` returns the average of the two values in the center, `6` and `7`. The result is `6.5`.

```text
    >>> statistics.median(marks)
    6
    >>> marks = [1, 6, 9, 23, 2, 7]
    >>> statistics.median(marks)
    6.5
```

If you want to get the higher of those, you can use `median_high()`, which will return 7. For the lower one, use `median_low()`, which gives back `6`.

```text
    >>> statistics.median_high(marks)
    7
    >>> statistics.median_low(marks)
    6
```

The other interesting function is `variance()`, which gives an estimate of how much these values vary.

```text
    >>> statistics.variance(marks)
    63.2
```

#### Tip-3: `collections` Module - `deque` For Queue And Stack

In one of the previous tips, we understood the fact that a list can be used both as a queue and a stack. List is not the most efficient representation of a stack.

The best data structure to represent them is a `deque`. It’ a double-ended queue. That means you can remove values from the start, or at the end.

You can create a simple queue, by using a `deque` and passing it a `list`.

```text
    >>> from collections import deque
    >>> queue = deque(['Zero','One','Two'])
    >>> queue.pop()
    'Two'
```

If you wanted to start using values from the right, do `queue.pop()`. You could also append a new value, by doing `queue.append('Three')`. If you look at the queue right now, it would have entries `['Zero', 'One', 'Three']`.

```text
    >>> queue.append('Three')
    >>> queue
    deque(['Zero', 'One', 'Three'])
    >>> queue.append('Four')
    >>> queue.append('Five')
```

You can even append at the start of the queue. The way you can do it is to call `appendleft()`. Now if you print the contents of `queue`, `"Minus One"` would be the one at the start of the queue.

```text
    >>> queue.appendLeft('Minus One')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'collections.deque' object has no attribute 'appendLeft'
    >>> queue.append
    queue.append(      queue.appendleft(
    >>> queue.appendleft('Minus One')
    >>> queue
```

The other operation is to `popleft()`, which returns the first value inside the queue, starting from the left.

```text
    deque(['Minus One', 'Zero', 'One', 'Three', 'Four', 'Five'])
    >>> queue.pop()
    'Five'
    >>> queue.popleft()
    'Minus One'
```

#### Tip-4: `date` Module

In this quick tip, we look at how to handle dates in Python.

Let’s get started with importing the `datetime` module, which has most of the date and time features.

Let’s say we would want to get the value of today’s date.

How do you do that? `datetime.datetime.today()`

```text
    >>> import datetime
    >>> datetime.datetime.today()
    datetime.datetime(2018, 5, 21, 9, 59, 57, 450683)
```

Let’s take this into a variable: `today_date = datetime.datetime.today()`. The structure is very simple, it’s year, month, day of the month, followed by hour, minute, second, and micro-seconds.

```text
    >>> today_date = datetime.datetime.today()
    >>> today_date
    datetime.datetime(2018, 5, 21, 10, 0, 39, 732463)
```

How do you get information from this structure?

To get year - `today_date.year`.

Few more examples:

```text
    >>> today_date.year
    2018
    >>> today_date.month
    5
    >>> today_date.day
    21
    >>> today_date.hour
    10
    >>> today_date.minute
    0
    >>> today_date.second
    39
```

How do you create a specific date?

```text
    >>> some_date = datetime.datetime(2019, 5, 27)
    >>> some_date
    datetime.datetime(2019, 5, 27, 0, 0)
```

You can also create a date with time by adding additional time attributes.

```text
    >>> some_date = datetime.datetime(2019, 5, 27, 9, 5,25)
    >>> some_date
    datetime.datetime(2019, 5, 27, 9, 5, 25)
    >>> some_date = datetime.datetime(2019, 5, 27, 9, 5,25, 234567)
    >>> some_date
    datetime.datetime(2019, 5, 27, 9, 5, 25, 234567)
    >>> some_date.time()
    datetime.time(9, 5, 25, 234567)
```

Now we looked at some of the basic things you can do with `datetime`, we’ll look at a few operations to manipulate the date.

We have a date, that is currently `2019, 5, 27`.

```text
    >>> day = some_date
    >>> day
    datetime.datetime(2019, 5, 27, 9, 5, 25, 234567)
```

We want to add to this, a specific number of days, or weeks, or things like that. How to do that?

That’s where a concept called `timedelta` is used.

We have a day variable which contains the value of the date. To this date, you can add a time delta, or remove a time delta.

```text
    >>> day + datetime.timedelta(days=90)
    datetime.datetime(2019, 8, 25, 9, 5, 25, 234567)
```

An important thing to note, is that the original value of `day` is not modified.

```text
    >>> day
    datetime.datetime(2019, 5, 27, 9, 5, 25, 234567)
```

You can add weeks and number of hours.

```text
    >>> day + datetime.timedelta(days=90)
    datetime.datetime(2019, 8, 25, 9, 5, 25, 234567)
    >>> day + datetime.timedelta(weeks=3)
    datetime.datetime(2019, 6, 17, 9, 5, 25, 234567)
    >>> day + datetime.timedelta(hours=48)
    datetime.datetime(2019, 5, 29, 9, 5, 25, 234567)
```

#### Tip-5: Methods And Arguments - The Basics

Methods in Python are very very powerful. There are a variety of things that you can pass to them. In this specific step, let’s focus on understanding all the different things that you can pass to a method: **normal arguments, default argument, variable arguments, and keyword arguments**.

Let’s create a very very simple method, and call this `example_method()`.

```text
def example_method(mandatory_parameter, default_parameter="Default"
                   , *args, **kwargs):
    print(f"""
        mandatory_parameter = {mandatory_parameter} {type(mandatory_parameter)}
        default_parameter = {default_parameter} {type(default_parameter)}
        args = {args} {type(args)}
        kwargs = {kwargs} {type(kwargs)}
        """)
```

`*args` represents variable arguments. `**kwargs` is called `keyword argument`. All we do in this method, is print all the values out.

Let’s look at how we can call this method. The idea behind what we do, is to understand all these parameters being passed in, how can you call this method with certain order of values, and what get passed to this method, in different ways.

What would happen if we just say `example_method()`?

```text
example_method() #example_method() missing 1 required positional argument
```

It says “it’s missing one required positional argument”. You should definitely pass a value to `mandatory_parameter`.

Let’s say you call this with a value, say `15`. What does it do?

```text
example_method(15)
```

Output

```text
    mandatory_parameter = 15 <class 'int'>
    default_parameter = Default <class 'str'>
    args = () <class 'tuple'>
    kwargs = {} <class 'dict'>
```

You can also use the named parameter to get the same result.

```text
example_method(mandatory_parameter=15)
```

Let’s pass two parameters.

```text
example_method(25,"Some String")
```

Output

```text
        mandatory_parameter = 25 <class 'int'>
        default_parameter = Some String <class 'str'>
        args = () <class 'tuple'>
        kwargs = {} <class 'dict'>
```

Instead of the default values, `default_parameter` gets the `Some String` value.

Let’s say you want to pass more values.

```text
example_method(25,"String 1","String 2","String 3")
```

Output

```text
  mandatory_parameter = 25 <class 'int'>
        default_parameter = String 1 <class 'str'>
        args = ('String 2', 'String 3') <class 'tuple'>
        kwargs = {} <class 'dict'>
```

Additional arguments are passed as variable arguments into `args`.

What if we have even more arguments?

```text
example_method(25,"String 1","String 2","String 3","String 4","String 5")
```

Output

```text
        mandatory_parameter = 25 <class 'int'>
        default_parameter = String 1 <class 'str'>
        args = ('String 2', 'String 3', 'String 4', 'String 5') <class 'tuple'>
        kwargs = {} <class 'dict'>
```

Same result : All additional arguments are passed as variable arguments into `args`.

#### Tip-6: Methods And Arguments - Keyword Arguments

In this step, let’s focus on the last argument: `kwargs` or keyword arguments.

```text
def example_method(mandatory_parameter, default_parameter="Default"
                   , *args, **kwargs):
```

Let’s pass a few key-value pairs to the method.

```text
example_method(25,"String 1","String 2","String 3",key1='a', key2='b')
```

Output

```text
        mandatory_parameter = 25 <class 'int'>
        default_parameter = String 1 <class 'str'>
        args = ('String 2', 'String 3') <class 'tuple'>
        kwargs = {'key1': 'a', 'key2': 'b'} <class 'dict'>
```

You can see the key value pairs are now part of keyword arguments - `kwargs`.

Let’s see what would happen if we don’t pass in any of the variable arguments.

```text
example_method(25,"String 1",key1='a', key2='b')
```

Output

```text
        mandatory_parameter = 25 <class 'int'>
        default_parameter = String 1 <class 'str'>
        args = () <class 'tuple'>
        kwargs = {'key1': 'a', 'key2': 'b'} <class 'dict'>
```

As expected, the variable arguments param `args` is empty.

You can also use named parameters: Result does not change.

```text
example_method(key1='a', key2='b',mandatory_parameter=25,default_parameter="String 1")
```

One of the things we would recommend you to do, is now that you have this method, play around with it. Try to understand the different ways of calling it. Make sure that you are trying different combinations, and understand what is happening in the background.

I think having a good understanding of what are the possibilities, that you can do with your method signatures, is one of the most important things to be a good Python programmer.

#### Tip-7: Methods And Arguments - Unpacking Lists And Dictionaries

Welcome to another very useful tip about how to pass values to a method in Python.

Let’s say we have a simple list of values, `example_list = [1,2,3]`. We want to use the values from this list, as parameters to call a method. How can I do that?

```text
example_list = [1,2,3]
example_method(example_list[0],example_list[1],example_list[2])
```

Output

```text
        mandatory_parameter = 1 <class 'int'>
        default_parameter = 2 <class 'int'>
        args = (3,) <class 'tuple'>
        kwargs = {} <class 'dict'>
```

Is there a simpler way? Code below give you same result.

```text
example_method(*example_list)
```

This cool concept is called **unpacking**. When you say `*example_list`, all the elements in the list are passed as individual arguments.

Let’s say you have keyword arguments to pass in, but they are all defined in a dictionary. You can use `**example_dict`.

```text
example_list = [1,2,3]
example_dict = {'a':'1', 'b':'2'}
example_method(*example_list, **example_dict)
```

Output

```text
        mandatory_parameter = 1 <class 'int'>
        default_parameter = 2 <class 'int'>
        args = (3,) <class 'tuple'>
        kwargs = {'a': '1', 'b': '2'} <class 'dict'>
```

You can see that values in `example_dict` are picked by argument `kwargs`.

**Summary**

In this step, we learned that unpacking of data structures is a very useful feature in Python. When you have the parameter values that you would want to pass, in a list or a dictionary, you can use unpacking.

#### Tip-8: Creating Custom Modules

In this specific step, we will try and understand the concept of a `module`.

Let’s create a new Python file `module_1`.

A python file can contain methods and classes.

```text
#module_1.py
def method_1():
    print("method 1")

class ClassA:
    def class_method_1(self):
        print("class_method_1 method 1")

method_1()
ClassA().class_method_1()
```

If you’re coming from an object oriented programming language like Java, where each `class` is defined in its own source file, you need to change how you think about it. When it comes to Python, a single source file can contain multiple classes.

The way you organize a module in Python, would be to have all of the things which are related to it in a single file. So if you have a group of classes which are related, you take them and put them in a single file.

Whatever code you have directly outside the boundary of a `class` or a method would automatically get executed. Here, `method1()` will be executed. `ClassA().class_method_1()` will be executed next.

You can **reuse one module in another**. We’re going to create a new file `module_2`.

And over here, you would want to start using the code from `module_1`.

The first thing to do is to **import** it, by saying `import module_1` . Now, you can use all the features available in `module_1`, by doing things such as `module_1.method_one()`, or `module_1.ClassA()` . And on that `ClassA()` instance, you can call `class_method_1()`.

```text
#module_2.py
import module_1

module_1.method_1()
module_1.ClassA().class_method_1()
```

When this code is run, you would see that the messages are shown twice.

- Once from module_1 import
- Once from module_2 execution

**If you have any code that’s not within a class or a method, then that code is executed automatically.**

How can we prevent code outside a class or a method from executing when it is imported?

You can update module_1 with an if condition

```text
if __name__ == '__main__':
    method_1()
    ClassA().class_method_1()
```

#### Tip-9: Defining Equality For Classes

In this tip, we will be looking at how to compare objects in Python.

Let’s create a simple class, `Student`, and and let’s say it’s an empty class. Let’s create a couple of instances of it, `student1` and `student2`. Are these two `Student`s equal?

```text
    >>> class Student: pass
    ...
    >>> student1 = Student()
    >>> student2 = Student()
```

`id(student1)` gives you an indication of where it is stored in memory.

```text
    >>> id(student1)
    4554811768
    >>> id(student2)
    4554811992
```

These two are different objects with different values returned by `id`.

You can use `is` to compare objects. With `student1 is student2` , what we’re really comparing is where they are stored. Is it the same location? Is `student1` the same object as `student2`?

```text
    >>> student1 is student2
    False
```

The answer is No.

Let’s create a new variable `student3` as shown below. You can see that `student3` and `student1` are referring to the same location. `student1 is student3` returns `True`.

```text
    >>> student3 = student1
    >>> id(student3)
    4554811768
    >>> id(student1)
    4554811768
    >>> student1 is student3
    True
```

In Python, you can use `==` to check equality. The default implementation of `==` uses `'is'`.

```text
    >>> student1 == student2
    False
    >>> student1 == student3
    True
```

Let’s create the `Student` `class` again, but this time with a constructor. We are creating a simple class, which can have in it, a constructor accepting an `id`. We have also added in an implementation of `def __eq__(self, other)` comparing the id’s.

```text
    >>> class Student:
    ...    def __init__(self, id):
    ...       self.id = id
    ...    def __eq__(self, other):
    ...       return self.id == other.id
    ...
```

Let’s update the definitions of our students. If you look at these objects, `student4` and `student1` are referring to the same object, aren’t they!

```text
    >>> student1 = Student(1)
    >>> student2 = Student(2)
    >>> student3 = Student(1)
    >>> student4 = student1
```

All statements except for `student1 is student4` return `False`.

```text
    >>> student1 is student4
    True
    >>> student1 is student2
    False
    >>> student1 is student3
    False
    >>> student1 == student3
    False
```

Are `student4` and `student1` equal? They are pointing to the same object. They are definitely equal.

```text
    >>> student4 == student1
    True
```

Is `student2` == `student1`? `False`, because they have different `id`s.

```text
    >>> student2 == student1
    False
```

Let’s see if `student3 == student1` Interesting to note, because we have now provided our own implementation of `==`.

```text
    >>> student3 == student1
    True
```

If you are defining a class, and you would want equality for that class to be looking at the content of the class, then we would need to override the `__eq__` method. When you compare objects using `==` , the `__eq__` method would be called.
