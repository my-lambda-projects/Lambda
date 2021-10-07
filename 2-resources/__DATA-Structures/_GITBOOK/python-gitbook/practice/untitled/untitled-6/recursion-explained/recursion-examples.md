# Recursion Examples

{% tabs %} {% tab title="explained" %}

```python
from typing import List, Optional, Sequence


# A recursive function is a function that calls itself. They're an alternative option to iteration, like using a while
# or for loop. Sometimes, they can make code easier to read and write. The examples below are overly simplified and
# have obviously better alternatives.

def multiply_string(s: str, n: int) -> str:
    # There are 3 main parts to a recursive function.
    # 1. A way to go to either the base case (no recursion) or recursive case (function calls itself).
    if n == 0:  # The switch between base and recursive is often an if statement.
        # 2. The base case. This is the case that doesn't require recursion.
        return ''  # Any string times 0 is empty string. That's easy.
    # 3. The recursive case. This same function gets called again, but slightly differently.
    # This needs to eventually get to the base case.
    return s + multiply_string(s, n - 1)  # Add the string to result of multiplying the string times n -1.
    # Eventually, n will be 0 and we'll be at the base case.


# This is also a good order to first write your recursive functions, even if you rewrite in a different order later.
# 1. What input is the base case?
# 2. What calculation needs to be done for the base case (if any)?
# 3. What calculation needs to be done for the recursive case?

# For the base case, there are some common patterns. It's often when an integer input is 0 or 1, the collection is
# totally empty, or you're at the thing you're looking for. A good question is: "What's the easiest possible case?"
# There can also be more than one base case! You've searched everywhere and haven't found the thing could be one
# base case, and you've found the thing could be another.
# For the recursive case, it's often easiest to think of being one step away from a base case. If your base case is
# n=0, think of how to get from n=0 to n=1. This is usually easier than how to get from n=9 to n=10.

def triangle_number(n: int) -> int:
    """Calculate the sum of 1, 2, n. This is like a triangle with n items on the bottom."""
    if n == 0:  # Easy case. n == 1 is just as easy, but this way our function also supports 0.
        return 0
    return n + triangle_number(n - 1)  # This will sum the numbers from highest to lowest. The calculation is like:
    # (3 + (2 + (1 + (0))))


# Recursive functions often have default arguments. These aren't used when you call the function from the outside,
# but they are used when you call the function recursively. They often hold data about the path to get where you are,
# or what you've already looked at.
def contains(item: object, sequence: Sequence, index: int = 0) -> bool:
    # When this function gets called by a user, they won't provide an index and we'll start at 0.
    if index == len(sequence):  # This means we've gone past the last index in the sequence.
        return False
    if sequence[index] == item:  # Another base case. We've found the item.
        return True
    # For the recursion, the item stays the same, the sequence stays the same, but let's check what's at the next index.
    # Any outside user of this function won't provide the index, but we can provide it now and check the next item.
    return contains(item, sequence, index + 1)


# The default arguments also might be mutated. This can help runtime. Rather than create a new thing every time,
# just mutate what was provided. Maybe you return it at the end.
def path_to_zero(n: int, path: Optional[List[int]] = None) -> List[int]:
    """Returns a list of how to get from n to 0 by subtracting 1."""
    if path is None:  # Classic Python mutable default stuff.
        path = []

    if n == 0:  # If we're already at 0 (the end)
        path.append(0)  # Our base case, no recursion required.
        return path
    else:
        path.append(n)  # Put the current number on the path.
        path_to_zero(n - 1, path)  # The path will get mutated in the recursive calls, adding the remaining numbers.
        return path


#  It can be helpful to write recursive functions in a verbose (if: base case, else: recursive) way, then refactor
#  them to be simpler. Here's the function above, refactored.
def path_to_zero_refactored(n: int, path: Optional[List[int]] = None) -> List[int]:
    if path is None:
        path = []

    path.append(n)  # Add the number we're at.
    if n:  # If we're not at 0
        path_to_zero_refactored(n - 1, path)  # Add the next thing until we are.
    return path


#  A good exercise is translating recursive functions to iterative, or vice versa.
def path_to_zero_iterative(n: int) -> List[int]:
    # This isn't the best code, but it's the closest to the recursive version above.
    path = []
    while n != 0:  # Recursive to iterative translations will often have "while not base case" loops.
        path.append(n)
        n -= 1  # This is the same transformation to n that happens in the recursive call above.
    path.append(0)  # Our while loop skips the base case, so we do it here.
    return path


#  The above examples are contrived, but this is an example where the recursive version makes for code that's just
#  as good or better than the iterative version.
def collatz(n: int, steps: int = 0) -> int:
    """Calculates how many steps to get from n to 1 following the Collatz rules.

    The Collatz rules are:
        If the number is even, get the next number by dividing it by 2.
        If the number is odd, get the next number by multiplying by 3 and adding 1.
    """
    if n == 1:  # We're at the end.
        return steps
    elif n % 2 == 0:  # If n is even
        return collatz(n // 2, steps + 1)
    else:  # n is odd
        return collatz(n * 3 + 1, steps + 1)  # Woah, a second recursive case!


# A downside to recursion in Python is that there is a limit to the call stack. This means there's a limit to how
# deep your recursion can go. The default is 1,000.
def deep_recursion():
    """Requires over 1,000 recursive calls, raising a RecursionError on most Python implementations."""
    collatz(9780657630)

# Those are some recursion in Python basics. Go find some other recursive problems and enjoy!
```

{% endtab %}

{% tab title="1" %}

```python
from typing import List, Optional, Sequence


# A recursive function is a function that calls itself. They're an alternative option to iteration, like using a while
# or for loop. Sometimes, they can make code easier to read and write. The examples below are overly simplified and
# have obviously better alternatives.

def multiply_string(s: str, n: int) -> str:
    # There are 3 main parts to a recursive function.
    # 1. A way to go to either the base case (no recursion) or recursive case (function calls itself).
    if n == 0:  # The switch between base and recursive is often an if statement.
        # 2. The base case. This is the case that doesn't require recursion.
        return ''  # Any string times 0 is empty string. That's easy.
    # 3. The recursive case. This same function gets called again, but slightly differently.
    # This needs to eventually get to the base case.
    return s + multiply_string(s, n - 1)  # Add the string to result of multiplying the string times n -1.
    # Eventually, n will be 0 and we'll be at the base case.


# This is also a good order to first write your recursive functions, even if you rewrite in a different order later.
# 1. What input is the base case?
# 2. What calculation needs to be done for the base case (if any)?
# 3. What calculation needs to be done for the recursive case?

# For the base case, there are some common patterns. It's often when an integer input is 0 or 1, the collection is
# totally empty, or you're at the thing you're looking for. A good question is: "What's the easiest possible case?"
# There can also be more than one base case! You've searched everywhere and haven't found the thing could be one
# base case, and you've found the thing could be another.
# For the recursive case, it's often easiest to think of being one step away from a base case. If your base case is
# n=0, think of how to get from n=0 to n=1. This is usually easier than how to get from n=9 to n=10.

def triangle_number(n: int) -> int:
    """Calculate the sum of 1, 2, n. This is like a triangle with n items on the bottom."""
    if n == 0:  # Easy case. n == 1 is just as easy, but this way our function also supports 0.
        return 0
    return n + triangle_number(n - 1)  # This will sum the numbers from highest to lowest. The calculation is like:
    # (3 + (2 + (1 + (0))))


# Recursive functions often have default arguments. These aren't used when you call the function from the outside,
# but they are used when you call the function recursively. They often hold data about the path to get where you are,
# or what you've already looked at.
def contains(item: object, sequence: Sequence, index: int = 0) -> bool:
    # When this function gets called by a user, they won't provide an index and we'll start at 0.
    if index == len(sequence):  # This means we've gone past the last index in the sequence.
        return False
    if sequence[index] == item:  # Another base case. We've found the item.
        return True
    # For the recursion, the item stays the same, the sequence stays the same, but let's check what's at the next index.
    # Any outside user of this function won't provide the index, but we can provide it now and check the next item.
    return contains(item, sequence, index + 1)


# The default arguments also might be mutated. This can help runtime. Rather than create a new thing every time,
# just mutate what was provided. Maybe you return it at the end.
def path_to_zero(n: int, path: Optional[List[int]] = None) -> List[int]:
    """Returns a list of how to get from n to 0 by subtracting 1."""
    if path is None:  # Classic Python mutable default stuff.
        path = []

    if n == 0:  # If we're already at 0 (the end)
        path.append(0)  # Our base case, no recursion required.
        return path
    else:
        path.append(n)  # Put the current number on the path.
        path_to_zero(n - 1, path)  # The path will get mutated in the recursive calls, adding the remaining numbers.
        return path


#  It can be helpful to write recursive functions in a verbose (if: base case, else: recursive) way, then refactor
#  them to be simpler. Here's the function above, refactored.
def path_to_zero_refactored(n: int, path: Optional[List[int]] = None) -> List[int]:
    if path is None:
        path = []

    path.append(n)  # Add the number we're at.
    if n:  # If we're not at 0
        path_to_zero_refactored(n - 1, path)  # Add the next thing until we are.
    return path


#  A good exercise is translating recursive functions to iterative, or vice versa.
def path_to_zero_iterative(n: int) -> List[int]:
    # This isn't the best code, but it's the closest to the recursive version above.
    path = []
    while n != 0:  # Recursive to iterative translations will often have "while not base case" loops.
        path.append(n)
        n -= 1  # This is the same transformation to n that happens in the recursive call above.
    path.append(0)  # Our while loop skips the base case, so we do it here.
    return path


#  The above examples are contrived, but this is an example where the recursive version makes for code that's just
#  as good or better than the iterative version.
def collatz(n: int, steps: int = 0) -> int:
    """Calculates how many steps to get from n to 1 following the Collatz rules.

    The Collatz rules are:
        If the number is even, get the next number by dividing it by 2.
        If the number is odd, get the next number by multiplying by 3 and adding 1.
    """
    if n == 1:  # We're at the end.
        return steps
    elif n % 2 == 0:  # If n is even
        return collatz(n // 2, steps + 1)
    else:  # n is odd
        return collatz(n * 3 + 1, steps + 1)  # Woah, a second recursive case!


# A downside to recursion in Python is that there is a limit to the call stack. This means there's a limit to how
# deep your recursion can go. The default is 1,000.
def deep_recursion():
    """Requires over 1,000 recursive calls, raising a RecursionError on most Python implementations."""
    collatz(9780657630)

# Those are some recursion in Python basics. Go find some other recursive problems and enjoy!
```

{% endtab %}

{% tab title="factorial" %}

```python
#recursions example-2
def factorial(n):
    print("Factoriaal called with " + str(n))
    if n < 2:
        print("Returning 1")
        return 1
    result = n * factorial(n - 1)
    print("Returning " + str(result) + " for factorial of " + str(n))
    return result
factorial(4)

#output
#Factoriaal called with 4
#Factoriaal called with 3
#Factoriaal called with 2
#Factoriaal called with 1
#Returning 1
#Returning 2 for factorial of 2
#Returning 6 for factorial of 3
#Returning 24 for factorial of 4
```

{% endtab %}

{% tab title="3" %}

```python
from collections.abc import MutableSequence

from src.typehints import T


def selection_sort_recur(seq: MutableSequence[T], i=0) -> None:
    """Use selection sort recursively on a list in-place."""
    if i >= len(seq) - 1:
        return
    min_val = min(seq[i:])
    min_val_i = seq.index(min_val, i)
    seq[min_val_i] = seq[i]
    seq[i] = min_val
    selection_sort_recur(seq, i + 1)

```

{% endtab %}

{% tab title="4" %}

```

```

{% endtab %}

{% tab title="5" %}

```

```

{% endtab %}

{% tab title="6" %}

```

```

{% endtab %}

{% tab title="7" %}

```

```

{% endtab %} {% endtabs %}
