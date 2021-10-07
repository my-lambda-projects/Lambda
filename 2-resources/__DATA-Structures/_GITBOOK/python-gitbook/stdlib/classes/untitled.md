# index

> Creating object and classes \# Python is an object-oriented language. In python everything is object i.e int, str, bool even modules, functions are al…

1. [Home](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/)
2. [Blog](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/)
3. Python Object and Classes

\(Sponsors\) Get started learning Python with [DataCamp's](https://www.datacamp.com/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials) free [Intro to Python tutorial](https://www.datacamp.com/courses/intro-to-python-for-data-science/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials). Learn Data Science by completing interactive coding challenges and watching videos by expert instructors. [Start Now!](https://www.datacamp.com/courses/intro-to-python-for-data-science/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials)

Updated on Jan 07, 2020

## Creating object and classes [\#]()

Python is an object-oriented language. In python everything is object i.e `int`, `str`, `bool` even modules, functions are also objects.

Object oriented programming use objects to create programs, and these objects stores data and behaviours.

## Defining class [\#]()

Class name in python is preceded with `class` keyword followed by a colon \(`:`\). Classes commonly contains data field to store the data and methods for defining behaviors. Also every class in python contains a special method called _initializer_ \(also commonly known as constructors\), which get invoked automatically every time new object is created.

Let's see an example.

|     |     |
| :-- | :-- |

Here we have created a class called `Person` which contains one data field called `name` and method `whoami()`.

## What is self? [\#]()

All methods in python including some special methods like initializer have first parameter `self`. This parameter refers to the object which invokes the method. When you create new object the `self` parameter in the `__init__` method is automatically set to reference the object you have just created.

## Creating object from class [\#]()

|     |     |
| :-- | :-- |

**Expected Output:**

**note:**

When you call a method you don't need to pass anything to `self` parameter, python automatically does that for you behind the scenes.

You can also change the `name` data field.

|     |     |
| :-- | :-- |

**Expected Output:**

Although it is a bad practice to give access to your data fields outside the class. We will discuss how to prevent this next.

## Hiding data fields [\#]()

To hide data fields you need to define private data fields. In python you can create private data field using two leading underscores. You can also define a private method using two leading underscores.

Let's see an example

|     |     |
| :-- | :-- |

**Expected Output:**

|     |     |
| :-- | :-- |

Let's try to access `__balance` data field outside of class.

**Expected Output:**

AttributeError: 'BankAccount' object has no attribute '\_\_balance'

As you can see, now the `__balance` field is not accessible outside the class.

In next chapter we will learn about [operator overloading](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/python-operator-overloading/).

Other Tutorials \(Sponsors\)

This site generously supported by [DataCamp](https://www.datacamp.com/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials). DataCamp offers online interactive [Python Tutorials](https://www.datacamp.com/courses/?utm_source=thepythonguru&utm_campaign=thepythonguru_tutorials) for Data Science. Join over a million other learners and get started learning Python for data science today!

[Source](https://thepythonguru.com/python-object-and-classes/)
