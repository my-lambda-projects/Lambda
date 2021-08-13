![Python Reverse String](https://cdn.journaldev.com/wp-content/uploads/2018/10/python-reverse-string-1.png.webp)

Python String doesn’t have a built-in reverse() function. However, there are various ways to reverse a string in Python.

## 1\. How to Reverse a String in Python?

Some of the common ways to reverse a string are:

- Using [Slicing](https://www.journaldev.com/23584/python-slice-string) to create a reverse copy of the string.
- Using [for loop](https://www.journaldev.com/14136/python-for-loop-example) and appending characters in reverse order
- Using [while loop](https://www.journaldev.com/14152/python-while-loop) to iterate string characters in reverse order and append them
- Using [string join()](https://www.journaldev.com/23571/python-string-join) function with [reversed()](https://www.journaldev.com/23113/python-reversed-function) iterator
- Creating a [list](https://www.journaldev.com/14353/python-list) from the string and then calling its `reverse()` function
- Using Recursion

### 1.1) Python Reverse String using Slicing

```

def reverse_slicing(s):
    return s[::-1]

input_str = 'ABç∂EF'

if __name__ == "__main__":
    print('Reverse String using slicing =', reverse_slicing(input_str))
```

If you run above Python script, the output will be:

```

Reverse String using slicing = FE∂çBA
```

### 1.2) Reverse String using For Loop

```

def reverse_for_loop(s):
    s1 = ''
    for c in s:
        s1 = c + s1
    return s1

input_str = 'ABç∂EF'

if __name__ == "__main__":
    print('Reverse String using for loop =', reverse_for_loop(input_str))
```

Output: `Reverse String using for loop = FE∂çBA`

### 1.3) Reverse a String using While Loop

```

def reverse_while_loop(s):
    s1 = ''
    length = len(s) - 1
    while length >= 0:
        s1 = s1 + s[length]
        length = length - 1
    return s1

input_str = 'ABç∂EF'

if __name__ == "__main__":
    print('Reverse String using while loop =', reverse_while_loop(input_str))
```

### 1.4) Reverse a String using join() and reversed()

```

def reverse_join_reversed_iter(s):
    s1 = ''.join(reversed(s))
    return s1
```

### 1.5) Python Reverse String using List reverse()

```

def reverse_list(s):
    temp_list = list(s)
    temp_list.reverse()
    return ''.join(temp_list)
```

### 1.6) Python Reverse String using Recursion

```

def reverse_recursion(s):
    if len(s) == 0:
        return s
    else:
        return reverse_recursion(s[1:]) + s[0]
```

## 2\. Best Way to Reverse a String in Python

We can reverse a string through multiple algorithms. We have already seen six of them. But which of them you should choose to reverse a string.

We can use [timeit module](https://www.journaldev.com/20549/python-timeit-module) to run multiple iterations of these functions and get the average time required to run them.

All the above functions are stored in a python script named `string_reverse.py`. I executed all these functions one by one for 1,00,000 times using the [timeit module](https://www.journaldev.com/20549/python-timeit-module) and got the average of the best 5 runs.

```

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_slicing("ABç∂EF"*10)'
100000 loops, best of 5: 0.449 usec per loop

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_list("ABç∂EF"*10)'
100000 loops, best of 5: 2.46 usec per loop

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_join_reversed_iter("ABç∂EF"*10)'
100000 loops, best of 5: 2.49 usec per loop

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_for_loop("ABç∂EF"*10)'
100000 loops, best of 5: 5.5 usec per loop

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_while_loop("ABç∂EF"*10)'
100000 loops, best of 5: 9.4 usec per loop

$ python3.7 -m timeit --number 100000 --unit usec 'import string_reverse' 'string_reverse.reverse_recursion("ABç∂EF"*10)'
100000 loops, best of 5: 24.3 usec per loop
```

![Python Reverse String](https://cdn.journaldev.com/wp-content/uploads/2018/10/python-reverse-string.png)

The below table presents the results and slowness of an algorithm from the best one.

Algorithm

TimeIt Execution Time (Best of 5)

Slowness

Slicing

0.449 usec

1x

List reverse()

2.46 usec

5.48x

reversed() + join()

2.49 usec

5.55x

for loop

5.5 usec

12.25x

while loop

9.4 usec

20.94x

Recursion

24.3 usec

54.12x

## 3\. Summary

We should use slicing to reverse a string in Python. Its code is very simple and small and we don’t need to write our own logic to reverse the string. Also, it’s the fastest way to reverse a string as identified by the above test executions.

You can checkout complete python script and more Python examples from our [GitHub Repository](https://github.com/journaldev/journaldev/tree/master/Python-3/basic_examples/strings).

## 4\. References

- [reversed() API Doc](https://docs.python.org/3/library/functions.html#reversed)
- [str.join() API Doc](https://docs.python.org/3/library/stdtypes.html#str.join)
