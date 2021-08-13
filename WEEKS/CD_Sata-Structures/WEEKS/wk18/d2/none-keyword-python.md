# What is the None keyword in Python?

> What is the None keyword in Python?

![](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/cdn-cgi/image/f=auto,fit=cover,w=32,h=32/v2api/author/profile/6547532599525376/image/5933301341618176 'Edpresso Team')Edpresso Team

The **`None` keyword** is used to define a `null` variable or an object. In Python, `None` keyword is an object, and it is a data type of the class `NoneType`.

We can assign `None` to any variable, but you can not create other `NoneType` objects.

![svg viewer](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/api/edpresso/shot/6479146551083008/image/4520241998594048)

> **Note**: All variables that are assigned `None` point to the _same_ object. New instances of `None` are not created.

## Syntax

The syntax of `None` statement is:

    None

> **Note:** `None` statement supports both `is` and `==` operators.

## Interesting Facts

- `None` is not the same as `False`.
- `None` is not _0_.
- `None` is not an empty `string`.
- Comparing `None` to anything will always return `False` except `None` itself.

## Examples

1.  Checking if a variable is `None` using `is` operator:

Enter to Rename, Shift+Enter to Preview

2.  Checking if a variable is `None` using `==` operator:

\# Declaring a None variable var = None

if var == None: # Checking if the variable is None print("None") else: print("Not None")

3.  Check the type of `None` object:

\# Declaring a variable and initializing with None type typeOfNone = type(None)

print(typeOfNone)

4.  Comparing `None` with `None` type:

\# Comparing None with none and printing the result print (None == None)

5.  Comparing `None` with `False` type:

\# Comparing none with False and printing the result print(None == False)

6.  Comparing `None` with empty `string`:

\# Declaring an empty string str = ""

# Comparing None with empty string and printing the result

print (str == None)

[Source](https://www.educative.io/edpresso/what-is-the-none-keyword-in-python)
