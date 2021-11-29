# Python Modules

Python programming language is one of the most popular language nowadays. It has numerous applications and developers are switching over to python for the implementation it provides us with. The modular programming approach where the code is broken down into separate parts is where python modules come into the picture. This article will help you understand the above topic in detail.

Following are the topics that will be covered in this article:

- What Are Python Modules?
- How To Create Python Modules?
- How To Use Python Modules?
- Built-in Modules In Python

Modules are simply a ‘program logic’ or a ‘python script’ that can be used for a variety of applications or functions. We can declare functions, classes, etc in a module.

The focus is to break down the code into different modules so that there will be no or minimum dependencies on one another. Using modules in a code helps to write a lesser line of codes, a single procedure developed for reuse of the code as well. It also eliminates the need to write the same logic again and again.

One more advantage of using modules is that the programs can be designed easily since a whole team works only on a part or module of the entire code.

Let us try to understand this with an example:

Suppose you want to make a program for a calculator. There will be operations like addition, subtraction, multiplication, division, etc.

We will break the code into separate parts, we can simply create one module for all these operations or separate modules for each of the operations. And then we can call these modules in our main program logic.

The idea is to minimize the code, and if we create modules, it doesn’t mean we can only use it for this program, we can even call these modules for other programs as well.

![](https://miro.medium.com/max/1056/1*J2zzWGSStktgZVqMbAxTqA.png)

Now that we have understood the concept of modules, let us try to understand how we can create a module in python.

Creating a module in python is similar to writing a simple python script using the **.py** extension. For the above example, lets try to make a module for the various operations.

def add(x,y):  
 return x + y

def sub(x, y):  
 return x - y

def prod(x, y):  
 return x \* y

def div(x, y):  
 return x / y

Save the above code in a file **Calc.py**. This is how we create a module in python. We have created different functions in this module. We can use these modules in our main file, let us take a look at how we are going to use them in a program.

We will use the **import** keyword to incorporate the module into our program, **from** keyword is used to get only a few or specific methods or functions from a module. Let us see what are different methods to use a module in your program.

Let us say we have our file with a name **main.py.**

import calc as a  
a = 10  
b = 20

addition = a.add(a,b)  
print(addition)

In the above code, we have created an alias using the “**as”** keyword. The output of the above code will be the addition of the two numbers a and b using the logic specified in the add function in the calc.py module.

Let us take a look at another approach.

from calc import \*  
a = 20  
b = 30

print(add(a,b))

In the above code, we have imported all the functions using the asterisk and we can simply mention the function name to get the results.

## Python Module Path

When we import a module, the interpreter looks for the module in the build-in modules directories in sys.path and if not found, it will look for the module in the following order:

import sys  
print(sys.path)

When you run the above code, you will get the list of directories. You can make changes in the list to create your own path.

Built-in modules are written in C and integrated with python interpreter. Each built-in module contains resources for certain specific functionalities like Operating system management, disk input/output etc.

The standard library also has many python scripts containing useful utilities. There are several built-in modules in python at our disposal that we can use whenever we want.

To get the list of all the modules in python, you can write the following command in the python console.

help('modules')

You will get a list of all the modules in python. Below are a few modules in python.

![](https://miro.medium.com/max/1066/1*h38pMb4G0mz-ervaPnMnJg.png)

## **dir( ) Built-in Function**

It returns a sorted list of strings containing the names defined in a module. The list contains the names of all the variables, functions, classes, etc.

import calc  
print(dir(calc))

You will get the list output like this:

![](https://miro.medium.com/max/1400/1*lk6bDa0nsLCXWUChL0h8bQ.png)

Similarly, you can get the names defined in any module using the dir( ) function.

In this article, we have learned about modules in python, how we can create a module and use it in the program. We have also learned about the built-in modules in python. Python programming language has enormous applications and with the use of modules, the task becomes easier, maintainable and efficient. If you wish to check out more articles on the market’s most trending technologies like Artificial Intelligence, DevOps, Ethical Hacking, then you can refer to [Edureka’s official site.](https://www.edureka.co/blog/?utm_source=medium&utm_medium=content-link&utm_campaign=python-modules)

Do look out for other articles in this series which will explain the various other aspects of Python and Data Science.

> 1\. [Machine Learning Classifier in Python](https://medium.com/edureka/machine-learning-classifier-c02fbd8400c9)
>
> 2\. [Python Scikit-Learn Cheat Sheet](https://medium.com/edureka/python-scikit-learn-cheat-sheet-9786382be9f5)
>
> 3\. [Machine Learning Tools](https://medium.com/edureka/python-libraries-for-data-science-and-machine-learning-1c502744f277)
>
> 4\. [Python Libraries For Data Science And Machine Learning](https://medium.com/edureka/python-libraries-for-data-science-and-machine-learning-1c502744f277)
>
> 5\. [Chatbot In Python](https://medium.com/edureka/how-to-make-a-chatbot-in-python-b68fd390b219)
>
> 6\. [Python Collections](https://medium.com/edureka/collections-in-python-d0bc0ed8d938)
>
> 7\. [Web Scraping With Python](https://medium.com/edureka/web-scraping-with-python-d9e6506007bf)
>
> 8\. [Python developer Skills](https://medium.com/edureka/python-developer-skills-371583a69be1)
>
> 9\. [OOPs Interview Questions and Answers](https://medium.com/edureka/oops-interview-questions-621fc922cdf4)
>
> 10\. [Resume For A Python Developer](https://medium.com/edureka/python-developer-resume-ded7799b4389)
>
> 11\. [Exploratory Data Analysis In Python](https://medium.com/edureka/exploratory-data-analysis-in-python-3ee69362a46e)
>
> 12\. [Snake Game With Python’s Turtle Module](https://medium.com/edureka/python-turtle-module-361816449390)
>
> 13\. [Python Developer Salary](https://medium.com/edureka/python-developer-salary-ba2eff6a502e)
>
> 14. [Principal Component Analysis](https://medium.com/edureka/principal-component-analysis-69d7a4babc96)
>
> 15\. [Python vs C++](https://medium.com/edureka/python-vs-cpp-c3ffbea01eec)
>
> 16\. [Scrapy Tutorial](https://medium.com/edureka/scrapy-tutorial-5584517658fb)
>
> 17\. [Python SciPy](https://medium.com/edureka/scipy-tutorial-38723361ba4b)
>
> 18\. [Least Squares Regression Method](https://medium.com/edureka/least-square-regression-40b59cca8ea7)
>
> 19\. [Jupyter Notebook Cheat Sheet](https://medium.com/edureka/jupyter-notebook-cheat-sheet-88f60d1aca7)
>
> 20\. [Python Basics](https://medium.com/edureka/python-basics-f371d7fc0054)
>
> 21\. [Python Pattern Programs](https://medium.com/edureka/python-pattern-programs-75e1e764a42f)
>
> 22\. [Generators in Python](https://medium.com/edureka/generators-in-python-258f21e3d3ff)
>
> 23\. [Python Decorator](https://medium.com/edureka/python-decorator-tutorial-bf7b21278564)
>
> 24. [Python Spyder IDE](https://medium.com/edureka/spyder-ide-2a91caac4e46)
>
> 25\. [Mobile Applications Using Kivy In Python](https://medium.com/edureka/kivy-tutorial-9a0f02fe53f5)
>
> 26\. [Top 10 Best Books To Learn & Practice Python](https://medium.com/edureka/best-books-for-python-11137561beb7)
>
> 27\. [Robot Framework With Python](https://medium.com/edureka/robot-framework-tutorial-f8a75ab23cfd)
>
> 28\. [Snake Game in Python using PyGame](https://medium.com/edureka/snake-game-with-pygame-497f1683eeaa)
>
> 29\. [Django Interview Questions and Answers](https://medium.com/edureka/django-interview-questions-a4df7bfeb7e8)
>
> 30\. [Top 10 Python Applications](https://medium.com/edureka/python-applications-18b780d64f3b)
>
> 31\. [Hash Tables and Hashmaps in Python](https://medium.com/edureka/hash-tables-and-hashmaps-in-python-3bd7fc1b00b4)
>
> 32\. [Python 3.8](https://medium.com/edureka/whats-new-python-3-8-7d52cda747b)
>
> 33\. [Support Vector Machine](https://medium.com/edureka/support-vector-machine-in-python-539dca55c26a)
>
> 34\. [Python Tutorial](https://medium.com/edureka/python-tutorial-be1b3d015745)
