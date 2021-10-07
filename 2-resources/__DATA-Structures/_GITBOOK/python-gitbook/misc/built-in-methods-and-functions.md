# Built-in Methods & Functions

The purpose of Python `zip()` method is to **map the similar index of multiple containers** so that they can be used just using as single entity.

> **Syntax :** zip\(\*iterators\)
>
> **Parameters :**  
> Python iterables or containers \( list, string etc \)
>
> **Return Value :**  
> Returns a single iterator object, having mapped values from all the  
> containers.

```python

# Python code to demonstrate the working of
# zip()

# initializing lists
name = [ "Manjeet", "Nikhil", "Shambhavi", "Astha" ]
roll_no = [ 4, 1, 3, 2 ]
marks = [ 40, 50, 60, 70 ]

# using zip() to map values
mapped = zip(name, roll_no, marks)

# converting values to print as set
mapped = set(mapped)

# printing resultant values
print ("The zipped result is : ",end="")
print (mapped)
```
