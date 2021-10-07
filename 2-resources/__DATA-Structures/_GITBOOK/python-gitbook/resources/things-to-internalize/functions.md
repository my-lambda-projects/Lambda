# Functions

Functions are the re-usable pieces of code which helps us to organize structure of the code. We create functions so that we can run a set of statements multiple times during in the program without repeating ourselves.

### Creating functions [\#](https://thepythonguru.com/python-functions/#creating-functions)

Python uses def keyword to start a function, here is the syntax:

def function_name\(arg1, arg2, arg3, .... argN\):

```text
 #statement inside function
```

**note:**

All the statements inside the function should be indented using equal spaces. Function can accept zero or more arguments\(also known as parameters\) enclosed in parentheses. You can also omit the body of the function using the `pass` keyword, like this:

Let's see an example.

def sum\(start, end\): result \= 0 for i in range\(start, end + 1\): result += i print\(result\)

sum\(10, 50\)

**Expected output:**

Above we define a function called `sum()` with two parameters `start` and `end`. The function calculates the sum of all the numbers starting from `start` to `end`.

### Function with return value. [\#](https://thepythonguru.com/python-functions/#function-with-return-value)

The above function simply prints the result to the console, what if we want to assign the result to a variable for further processing? Then we need to use the `return` statement. The `return` statement sends a result back to the caller and exits the function.

def sum\(start, end\): result \= 0 for i in range\(start, end + 1\): result += i return result

s \= sum\(10, 50\) print\(s\)

**Expected Output:**

Here we are using the `return` statement to return the sum of numbers and assign it to variable `s`.

You can also use the `return` statement without a return value.

def sum\(start, end\): if\(start &gt; end\): print\("start should be less than end"\) return \# here we are not returning any value so a special value None is returned result \= 0 for i in range\(start, end + 1\): result += i return result

s \= sum\(110, 50\) print\(s\)

**Expected Output:**

start should be less than end None

In python, if you do not explicitly return value from a function, then a special value of `None` is always returned. Let's take an example:

def test\(\): \# test function with only one statement i \= 100 print\(test\(\)\)

**Expected Output:**

As you can see, the `test()` function doesn't explicitly return any value, so `None` is returned.

### Global variables vs local variables [\#](https://thepythonguru.com/python-functions/#global-variables-vs-local-variables)

**Global variables**: Variables that are not bound to any function , but can be accessed inside as well as outside the function are called global variables.

**Local variables**: Variables which are declared inside a function are called local variables.

Let's see some examples to illustrate this point.

**Example 1**:

global_var \= 12 \# a global variable

def func\(\): local_var \= 100 \# this is local variable print\(global_var\) \# you can access global variables in side function

func\(\) \# calling function func\(\)

## print\(local_var\) \# you can't access local_var outside the function, because as soon as function ends local_var is destroyed

**Expected Output:**

**Example 2:**

xy \= 100

def cool\(\): xy \= 200 \# xy inside the function is totally different from xy outside the function print\(xy\) \# this will print local xy variable i.e 200

cool\(\)

print\(xy\) \# this will print global xy variable i.e 100

**Expected Output:**

You can bind local variable in the global scope by using the `global` keyword followed by the names of variables separated by comma \(`,`\).

t \= 1

def increment\(\): global t \# now t inside the function is same as t outside the function t \= t + 1 print\(t\) \# Displays 2

increment\(\) print\(t\) \# Displays 2

**Expected Output:**

Note that you can't assign a value to variable while declaring them global .

1 2 3 4 5 6 7 8 9 10 11 12

t \= 1

def increment\(\):

```text
#global t = 1   # this is error
global t
t \= 100        \# this is okay
t \= t + 1
print(t) \# Displays 101
```

increment\(\) print\(t\) \# Displays 101

**Expected Output:**

In fact there is no need to declare global variables outside the function. You can declare them global inside the function.

def foo\(\): global x \# x is declared as global so it is available outside the function x \= 100

foo\(\) print\(x\)

**Expected Output:** 100

### Argument with default values [\#](https://thepythonguru.com/python-functions/#argument-with-default-values)

To specify default values of argument, you just need to assign a value using assignment operator.

def func\(i, j \= 100\): print\(i, j\)

Above function has two parameter `i` and `j`. The parameter `j` has a default value of `100`, it means that we can omit value of `j` while calling the function.

func\(2\) \# here no value is passed to j, so default value will be used

**Expected Output:**

Call the `func()` function again, but this time provide a value to the `j` parameter.

func\(2, 300\) \# here 300 is passed as a value of j, so default value will not be used

**Expected Output:**

### Keyword arguments [\#](https://thepythonguru.com/python-functions/#keyword-arguments)

There are two ways to pass arguments to method: positional arguments and Keyword arguments. We have already seen how positional arguments work in the previous section. In this section we will learn about keyword arguments.

Keyword arguments allows you to pass each arguments using name value pairs like this `name=value`. Let's take an example:

def named_args\(name, greeting\): print\(greeting + " " + name \)

named_args\(name\='jim', greeting\='Hello'\)

named_args\(greeting\='Hello', name\='jim'\) \# you can pass arguments this way too

**Expected Value:**

### Mixing Positional and Keyword Arguments [\#](https://thepythonguru.com/python-functions/#mixing-positional-and-keyword-arguments)

It is possible to mix positional arguments and Keyword arguments, but for this positional argument must appear before any Keyword arguments. Let's see this through an example.

def my_func\(a, b, c\): print\(a, b, c\)

You can call the above function in the following ways.

\# using positional arguments only my_func\(12, 13, 14\)

\# here first argument is passed as positional arguments while other two as keyword argument my_func\(12, b\=13, c\=14\)

\# same as above my_func\(12, c\=13, b\=14\)

\# this is wrong as positional argument must appear before any keyword argument \# my_func\(12, b=13, 14\)

**Expected Output:**

12 13 14 12 13 14 12 14 13

### Returning multiple values from Function [\#](https://thepythonguru.com/python-functions/#returning-multiple-values-from-function)

We can return multiple values from function using the return statement by separating them with a comma \(`,`\). Multiple values are returned as tuples.

def bigger\(a, b\): if a &gt; b: return a, b else: return b, a

s \= bigger\(12, 100\) print\(s\) print\(type\(s\)\)

**Expected Output:**

\(100, 12\)
