# Industry Standard Algorithms

{% embed url="https://replit.com/@bgoonz/main-prac\#directed\_graph.py" %}

## Reverse String:

```python
def reverse(lines):
    return "Reverse order: " + lines[::-1] + "\n" + "Normal Order: " + lines
print(reverse("I am printing a sentence in reverse order"))
print(reverse("printing strings in reverse order using python"))
```

### Implement a function recursively to get the desired Fibonacci sequence value. Your code should have the same input/output as the iterative code in the instructions.

```python
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
