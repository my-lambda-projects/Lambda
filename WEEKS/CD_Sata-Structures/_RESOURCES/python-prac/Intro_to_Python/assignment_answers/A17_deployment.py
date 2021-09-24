""" Assignment 17

For this assignment you should design, build and deploy a Python3 package
and answer the following:

1. What is the fundamental difference between a python package and a module?

2. What changes do we need to make in the `setup.py` script in relation to
developing a package vs a module?

"""

# Answer
""" 
1. A module is a single python file where a package is a directory of one or 
more python files. Packages are marked by the existence of the 
`__init__.py` file. Modules do not require this file. 

2. The setup file for a module uses the py_modules=['my_module'] keyword argument,
where a package requires this to be changed to the packages=['my_package'] keyword argument.
"""
