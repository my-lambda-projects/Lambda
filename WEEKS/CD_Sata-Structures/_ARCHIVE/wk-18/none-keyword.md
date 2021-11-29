# None Keyword

The **`None` keyword** is used to define a `null` variable or an object. In Python, `None` keyword is an object, and it is a data type of the class `NoneType`.

We can assign `None` to any variable, but you can not create other `NoneType` objects.![svg viewer](https://www.educative.io/api/edpresso/shot/6479146551083008/image/4520241998594048)

> **Note**: All variables that are assigned `None` point to the _same_ object. New instances of `None` are not created.

## Syntax

The syntax of `None` statement is:

```text
None
```

> **Note:** `None` statement supports both `is` and `==` operators.

## Interesting Facts

- `None` is not the same as `False`.
- `None` is not _0_.
- `None` is not an empty `string`.
- Comparing `None` to anything will always return `False` except `None` itself.

## Examples

1. Checking if a variable is `None` using `is` operator:

1234567\# Declaring a None variablevar = Noneif var is None: \# Checking if the variable is None print\("None"\)else: print\("Not None"\)Run

1. Checking if a variable is `None` using `==` operator:

1234567\# Declaring a None variablevar = Noneif var == None: \# Checking if the variable is None print\("None"\)else: print\("Not None"\)Run

1. Check the type of `None` object:

1234\# Declaring a variable and initializing with None typetypeOfNone = type\(None\) print\(typeOfNone\)Run

1. Comparing `None` with `None` type:

12\# Comparing None with none and printing the resultprint \(None == None\)Run

1. Comparing `None` with `False` type:

12\# Comparing none with False and printing the resultprint\(None == False\)Run

1. Comparing `None` with empty `string`:

1234\# Declaring an empty stringstr = ""\# Comparing None with empty string and printing the resultprint \(str == None\)Run
