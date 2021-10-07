# Creating Python Modules

### Creating module

Create a new file called `mymodule.py` and write the following code.

|     |     |
| :-- | :-- |

As you can see we have defined a global variable `foo` and a function `hello()` in our module. Now to use this module in our programs we first need to import it using import statement like this

```text
import mymodule
```

Now you can use variable and call functions in the `mymodule.py` using the following code.

|     |     |
| :-- | :-- |

**Expected Output:**

|     |     |
| :-- | :-- |

Remember you need to specify name of module first to access it's variables and functions, failure to so will result in error.

### Using `from` with `import`

Using import statements imports everything in the module, what if you want to access only specific function or variable? This is where the `from` statement comes, here is how to use it.

|     |     |
| :-- | :-- |

**Expected output:**

```text
100
```

**Note:**

In this case you don't need to specify module name to access variables and function.

### dir\(\) method

The `dir()` is an in-built method used to find all attributes \(i.e all available classes, functions, variables and constants \) of the object. As we have already discussed everything in python is object, we can use the `dir()` method to find attributes of the module like this:

```text
dir(module_name)
```

The `dir()` returns a list of string containing the names of the available attributes.

|     |     |
| :-- | :-- |

As you can see besides foo and hello there are additional attributes in the `mymodule`. These are in-built attributes which python provides to all the modules automatically.
