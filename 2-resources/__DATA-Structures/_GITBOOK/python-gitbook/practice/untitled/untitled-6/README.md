# Recursion

When a function call itself is knows as recursion. Recursion works like loop but sometimes it makes more sense to use recursion than loop. You can convert any loop to recursion.

Here is how recursion works. A recursive function calls itself. As you you'd imagine such a process would repeat indefinitely if not stopped by some condition. This condition is known as base condition. A base condition is must in every recursive programs otherwise it will continue to execute forever like an infinite loop.

Overview of how recursive function works:

1. Recursive function is called by some external code.
2. If the base condition is met then the program do something meaningful and exits.
3. Otherwise, function does some required processing and then call itself to continue recursion. Here is an example of recursive function used to calculate factorial.

Factorial is denoted by number followed by \(`!`\) sign i.e `4!`.

For e.g:

4! = 4 \* 3 \* 2 \* 1 2! = 2 \* 1 0! = 1

Here is an example

def fact\(n\): if n \== 0: return 1 else: return n \* fact\(n-1\)

print\(fact\(0\)\) print\(fact\(5\)\)

**Expected Output:**

Now try to execute the above function like this:

You will get:

RuntimeError: maximum recursion depth exceeded in comparison

This happens because python stop calling recursive function after `1000` calls by default. To change this behavior you need to amend the code as follows.

import sys sys.setrecursionlimit\(3000\)

def fact\(n\): if n \== 0: return 1 else: return n \* fact\(n-1\)

print\(fact\(2000\)\)

```python
"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the
iterative code in the instructions."""

def get_fib(position):

    output = 0
    if(position==0):
        return output

    if(position==1):
        return position
    else:
        output += get_fib(position-1)+get_fib(position-2)
        return output

# Test cases
print get_fib(9)
print get_fib(11)
print get_fib(0)

```
