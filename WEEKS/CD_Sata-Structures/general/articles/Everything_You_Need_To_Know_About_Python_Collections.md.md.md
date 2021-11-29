[![Aayushi Johari](https://miro.medium.com/fit/c/96/96/0*qi14KVra23cQqJzE)](https://medium.com/@aayushijohari?source=post_page-----d0bc0ed8d938--------------------------------)

![](https://miro.medium.com/max/1280/1*Pxbi0ced43gIrPcily-hog.png)

Collections in Python — Edureka

Python programming language has four collection data types- list, tuple, sets, and dictionary. But python also comes with a built-in module known as collections which have specialized data structures which basically covers for the shortcomings of the four data types. In this article, we will go through each of those specialized data structures in detail. Following are the subjects shrouded in this article:

- What Are Collections In Python?
- Specialized Collection Data Structures

1.  namedtuple( )
2.  deque
3.  ChainMap
4.  Counter
5.  OrderedDict
6.  defaultdict
7.  UserDict
8.  UserList

Collections in python are basically container data types, namely lists, sets, tuples, dictionary. They have different characteristics based on the declaration and usage.

- A list is declared in square brackets, it is mutable, stores duplicate values and elements can be accessed using indexes.
- A tuple is ordered and immutable in nature, although duplicate entries can be there inside a tuple.
- A set is unordered and declared in square brackets. It is not indexed and does not have duplicate entries as well.
- A dictionary has key-value pairs and is mutable in nature. We use square brackets to declare a dictionary.

These are the python’s general-purpose built-in container data types. But as we all know, python always has a little something extra to offer. It comes with a python module named collections which has specialized data structures.

Collections module in python implements specialized data structures which provide an alternative to python’s built-in container data types. Following are the specialized data structures in the collections module.

1.  namedtuple( )
2.  deque
3.  Chainmap
4.  Counter
5.  OrderedDict
6.  defaultdict
7.  UserDict
8.  UserList
9.  UserString

## namedtuple( )

It returns a tuple with a named entry, which means there will be a name assigned to each value in the tuple. It overcomes the problem of accessing the elements using the index values. With namedtuple( ) it becomes easier to access these values since you do not have to remember the index values to get specific elements.

**How It Works?**

First of all, you must import the collections module, it does not require installation.

from collections import namedtuple

Look at the following code to understand how you can use namedtuple.

a = namedtuple('courses' , 'name , tech')  
s = a('data science' , 'python')  
print(s)

#the output will be courses(name='python' , tech='python')

**How To Create A namedtuple Using A List?**

s.\_make(\['data science' , 'python'\])  
#the output will be same as before.

## deque

deque pronounced as ‘deck’ is an optimized list to perform insertion and deletion easily.

**How it works?**

#creating a deque  
from collections import deque

a = \['d' , 'u' , 'r' , 'e' , 'k'\]  
a1 = deque(a)  
print(a1)  
#the output will be deque(\[ 'd' , 'u' , 'r' , 'e' , 'k' \])

Now let's take a look at how we will insert and remove items from deque.

a1.append('a')  
print(a1)  
\# the output will be deque(\[ 'd' , 'u' , 'r' , 'e' , 'k' , 'a' \])  
a1.appendleft('e')  
print(a1)  
\# the output will be deque(\['e' , 'd' , 'u' , 'r' , 'e' , 'k' , 'a' \])

As should be obvious, inserting a component is enhanced utilizing deque, also you can remove components as well.

a1.pop()  
print(a1)  
#the output will be deque(\[ 'e' , 'd' , 'u' , 'r' , 'e' , 'k' \])  
a1.popleft()  
print(a1)  
#the output will be deque(\[ 'd' , 'u' , 'r' , 'e' , 'k' \])

Similar to the built-in data types, there are several other operations that we can perform on a deque. Like counting elements or clearing the deque etc.

## ChainMap

It is a dictionary-like class which is able to make a single view of multiple mappings. It basically returns a list of several other dictionaries. Suppose you have two dictionaries with several key-value pairs, in this case, ChainMap will make a single list with both the dictionaries in it.

**How it works?**

from collections import ChainMap  
a = { 1: 'edureka' , 2: 'python'}  
b = {3: 'data science' , 4: 'Machine learning'}  
c = ChainMap(a,b)  
print(c)  
#the output will be ChainMap\[{1: 'edureka' , 2: 'python'} , {3: 'data science' , 4: 'Machine learning'}\]

To access or insert elements we use the keys as an index. But to add a new dictionary in the ChainMap we use the following approach.

a1 = { 5: 'AI' , 6: 'neural networks'}  
c1 = c.new_child(a1)  
print(c1)  
#the output will be ChainMap\[{1: 'edureka' , 2: 'python'} , {3: 'data science' , 4: 'Machine learning'}, { 5: 'AI' , 6: 'neural networks'}\]

## Counter

It is a dictionary subclass which is used to count hashable objects.

**How it works?**

from collections import Counter  
a = \[1,1,1,1,2,3,3,4,3,3,4\]  
c = Counter(a)  
print(c)  
#the output will be Counter = ({1:4 , 2:1 , 3:4 , 4:2})

In addition to the operations, you can perform on a dictionary Counter has 3 more operations that we can perform.

1.  element function — It returns a list containing all the elements in the Counter.
2.  Most_common( ) — It returns a sorted list with the count of each element in the Counter.
3.  Subtract( ) — It takes an iterable object as an argument and deducts the count of the elements in the Counter.

## OrderedDict

It is a dictionary subclass which remembers the order in which the entries were added. Basically, even if you change the value of the key, the position will not be changed because of the order in which it was inserted in the dictionary.

**How it works?**

from collections import OrderedDict  
od = OrderedDict()  
od\[1\] = 'e'  
od\[2\] = 'd'  
od\[3\] = 'u'  
od\[4\] = 'r'  
od\[5\] = 'e'  
od\[6\] = 'k'  
od\[7\] = 'a'  
print(od)  
#the output will be OrderedDict\[(1 , 'e'), (2 , 'd') , (3 , 'u'), (4 , 'r'), (5 , 'e'), (6 , 'k'), (7 , 'a')\]

It does not matter what value gets inserted in the dictionary, the OrderedDict remembers the order in which it was inserted and gets the output accordingly. Even if we change the value of the key. Let's say, if we change the key-value 4 to 8, the order will not change in the output.

## defaultdict

It is a dictionary subclass which calls a factory function to supply missing values. In general, it does not throw any errors when a missing key value is called in a dictionary.

**How it works?**

from collections import defaultdict  
d = defaultdict(int)  
#we have to specify a type as well.  
d\[1\] = 'edureka'  
d\[2\] = 'python'  
print(d\[3\])  
#it will give the output as 0 instead of keyerror.

## UserDict

This class acts as a wrapper around dictionary objects. The need for this class came from the necessity to subclass directly from dict. It becomes easier to work with this class as the underlying dictionary becomes an attribute.

class collections.UserDict(\[initialdata\])

This class simulates a dictionary. The content of the instance are kept in a regular dictionary which can be accessed with the ‘data’ attribute of the class UserDict. The reference of initial data is not kept, for it to be used for other purposes.

## UserList

This class acts like a wrapper around the list-objects. It is a useful base class for other lists like classes which can inherit from them and override the existing methods or even add fewer new ones as well.

The need for this class came from the necessity to subclass directly from the list. It becomes easier to work with this class as the underlying list becomes an attribute.

class collections.UserList(\[list\])

It is the class that simulates a list. The contents of the instance are kept in a customary list. The sub-classes of the list are relied upon to offer a constructor which can be called with either no or one contention.

In this article, we have learned about the specialized data structures that come with the collections module in python. Optimization leads to better performance and enhanced results. Same applies to our own career and skills as well. If you wish to check out more articles on the market’s most trending technologies like Artificial Intelligence, DevOps, Ethical Hacking, then you can refer to [Edureka’s official site.](https://www.edureka.co/blog/?utm_source=medium&utm_medium=content-link&utm_campaign=collections-in-python)

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
> 6\. [Web Scraping With Python](https://medium.com/edureka/web-scraping-with-python-d9e6506007bf)
>
> 7\. [Python Modules](https://medium.com/edureka/python-modules-abb0145a5963)
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
