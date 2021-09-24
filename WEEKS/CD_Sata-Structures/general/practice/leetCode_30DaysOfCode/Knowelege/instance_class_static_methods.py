"""
Python's prefered way of expressing static and class method is via decorators .

Decorator is a function that applies logic or change the behavior of other functions, and they are great for reusing
the same code over and over.

EXAMPLE, we have a web app and before accessing some function, you need to check that the user is logged in, so you can
write a decorator (@loggedin_required) that either runs the function if the user is logged in or simply redirect the
user to the log in page.
"""

"""
instance methods the most used in python classes and they take in self as an argument and they use self to access
any inner data or other methods that may reside in the class. 
"""

"""
Static methods are great for utility functions, which perform a task in isolation. They don’t need to (and cannot) 
access class data. They should be completely self-contained, and only work with data passed in as arguments. 
You may use a static method to add two numbers together, or print a given string.
"""

"""
Class methods are used to call other methods (static methods) which can't be called from any instance method. They 
take in cls as a parameter. 
1- They can be used to set and change the global variables in our class
2- They can be used an alternative constructor as cls is the class so you can also create new instances by using 
cls(pass in init args)
"""


class DecoratorExample:
    name = "ahmed"

    def __init__(self, age):
        self.age = age

    @staticmethod
    def staticMethod():
        return "I am inside the static method"

    # instance method
    def show_name(self):
        return self.name

    @classmethod
    def class_method(cls, name):
        cls.name = name
        return cls.staticMethod()


ins = DecoratorExample("ahmed")
print(ins.show_name())
print(ins.class_method("mohamed"))
print(ins.staticMethod())


# # example on the class methods to create instances of the class
# import re
# class Students:
#     """
#     Students class takes in a string with the name-student_id-grade and returns a list of all of the student data ready
#     to be added to the DB
#     """
#     def __init__(self, name, student_id, grade):
#         self.name = name
#         self.student_id = student_id
#         self.grade = grade
#
#     @classmethod
#     def tranString(cls, s):
#         name, id, grade = re.findall(r"\w+" ,s)
#         # return an object of the class Students
#         return cls(name, id, grade)
#
# s_info = "ahmed-171031-100"
# student = Students.tranString(s_info)
# print(student.student_id)
