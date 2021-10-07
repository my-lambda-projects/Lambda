# cc73linkedList https://repl.it/student/submissions/1891345
"""
Now it's time to implement a linked list in Python!
The main takeaway of this exercise is to delve into classes and OOP in Python.

We'll start off by defining a Node class.
Each linked list node will be an instance of a Node.

OO programming in Python is very similar to what you've seen in JavaScript.
The main surface-level differences are that, in Python, the class constructor
method is called __init__, and also that every class method accepts self as
its first input parameter, in order to delineate to the Python interpreter
that it is a class method instead of a regular function.
Lastly, there is no new keyword in Python that is needed to instantiate a new
class instance. We would just define a new node with something like
new_node = Node(data).

Note that when we invoke a class method, you don't actually pass self into the
class method. For example, if we want to instantiate a new Node instance, we can
do that with new_node = Node(data), where data is the piece of data we want the
Node to hold. We don't need to actually pass in some context as the first parameter.
"""
