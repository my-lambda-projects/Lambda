# **init** in Python - GeeksforGeeks

> A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.

**Prerequisites –** [Python Class](https://www.geeksforgeeks.org/python-classes-and-objects/), [Objects](https://www.geeksforgeeks.org/python-classes-and-objects/), [Self](https://www.geeksforgeeks.org/self-in-python-class/)

Whenever object oriented programming is done in Python, we mostly come across `__init__` method which we usually don’t fully understand. This article explains the main concept of `__init__` but before understanding the `__init__` some prerequisites are required.

## \_\_init\_\_

The `__init__` method is similar to **constructors** in `C++` and `Java`. Constructors are used to initialize the object’s state. The task of constructors is to initialize(assign values) to the data members of the class when an object of class is created. Like methods, a constructor also contains collection of statements(i.e. instructions) that are executed at time of Object creation. It is run as soon as an object of a class is instantiated. The method is useful to do any initialization you want to do with your object.

**Example:**

`class` `Person:`

`def` ` __init__(``self``, name): `

` self``.name ` `=` `name`

`def` ` say_hi(``self``): `

` print``(``'Hello, my name is'``, ` ` self``.name) `

`p` `=` ` Person(``'Nikhil'``) `

`p.say_hi()`

**Output:**

Hello, my name is Nikhil

#### Understanding the code

In the above example, a person name Nikhil is created. While creating a person, “Nikhil” is passed as an argument, this argument will be passed to the `__init__` method to initialize the object. The keyword `self` represents the instance of a class and binds the attributes with the given arguments. Similarly, many objects of Person class can be created by passing different names as arguments.

**Example:**

`class` `Person:`

`def` ` __init__(``self``, name): `

` self``.name ` `=` `name`

`def` ` say_hi(``self``): `

` print``(``'Hello, my name is'``, ` ` self``.name) `

`p1` `=` ` Person(``'Nikhil'``) `

`p2` `=` ` Person(``'Abhinav'``) `

`p3` `=` ` Person(``'Anshul'``) `

`p1.say_hi()`

`p2.say_hi()`

`p3.say_hi()`

**Output:**

Hello, my name is Nikhil Hello, my name is Abhinav Hello, my name is Anshul

#### \_\_init\_\_ with inheritance

[Inheritance](https://www.geeksforgeeks.org/inheritance-in-python/) is the capability of one class to derive or inherit the properties from some other class. Let’s consider the below example to see how \_\_init\_\_ works in inheritance.

`class` ` A(``object``): `

`def` ` __init__(``self``, something): `

` print``(``"A init called"``) `

` self``.something ` `=` `something`

`class` `B(A):`

`def` ` __init__(``self``, something): `

` A.__init__(``self``, something) `

` print``(``"B init called"``) `

` self``.something ` `=` `something`

`obj` `=` ` B(``"Something"``) `

**Output:**

A init called B init called

So, the parent class constructor is called first. But in Python, it is not compulsory that parent class constructor will always be called first. The order in which the \_\_init\_\_ method is called for a parent or a child class can be modified. This can simply be done by calling the parent class constructor after the body of child class constructor.

**Example:**

`class` ` A(``object``): `

`def` ` __init__(``self``, something): `

` print``(``"A init called"``) `

` self``.something ` `=` `something`

`class` `B(A):`

`def` ` __init__(``self``, something): `

` print``(``"B init called"``) `

` self``.something ` `=` `something`

` A.__init__(``self``, something) `

`obj` `=` ` B(``"Something"``) `

**Output:**

B init called A init called

**Note:** To know more about inheritance [click here](https://www.geeksforgeeks.org/inheritance-in-python/).

Attention geek! Strengthen your foundations with the [**Python Programming Foundation**](https://practice.geeksforgeeks.org/courses/Python-Foundation?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=GFG_Article_Bottom_Python_Foundation) Course and learn the basics.

To begin with, your interview preparations Enhance your Data Structures concepts with the [**Python DS**](https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=GFG_Article_Bottom_Python_DS) Course. And to begin with your Machine Learning Journey, join the **[Machine Learning – Basic Level Course](https://practice.geeksforgeeks.org/courses/machine-learning?utm_source=geeksforgeeks&utm_medium=article&utm_campaign=GFG_Article_Bottom_Python_ML)**

[Source](https://www.geeksforgeeks.org/__init__-in-python/)
