# Untitled

## How to round Python values to whole numbers?

> Three Python functions round numbers to an integer. round\(\) rounds up and down, math.floor\(\) rounds down, and math.ceil\(\) rounds up to a whole number.

When our Python program works with numerical values, every so often we have turn values with a fractional component into whole \(integer\) numbers. But how to do so? And what options does Python have? Let’s find out together.

### \[\#\]\(\#round-numerical-values-up-and-down-in-python "Bookmark for 'Round numerical values up and down in Python'"\) Round numerical values up and down in Python

When we round values, we go from a numerical value with decimal places to a whole number. With this process we do lose some precision, but the rounded value is often much easier to read and interpret.

Python has three ways to turn a floating-point value into a whole \(integer\) number:

- The built-in `round()` function rounds values up and down.
- The `math.floor()` function rounds _down_ to the next full integer.
- The `math.ceil()` function rounds _up_ to the next full integer.

If you just want a string or script output with a whole number, then a Python format string can perform that task too. That way you also don’t lose precision in the original value.

Let’s see how these three approaches work.

### \[\#\]\(\#round-values-up-and-down-pythons-round-function "Bookmark for 'Round values up and down: Python’s `round()` function'"\) Round values up and down: Python’s `round()` function

To round floating-point values up and down we use Python’s `round()` function \(Lutz, 2013; Python Docs, n.d. a\). There are two ways to use this function. The first option is to [round values to a certain number of decimals](https://kodify.net/python/math/round-decimals/). The other option turns a floating-point value into a whole number.

To do that latter, we call `round()` with one argument: the value to turn into an integer. For example:

```python
    round(5.4598)
    # Returns: 5
```

The `round()` function rounds values of `.5` towards an even integer \(Python Docs, n.d. a\). So `.5` is round up for positive values and round down for negative values.

For instance, both `round(0.5)` and `round(-0.5)` return `0`, while `round(1.5)` gives `2` and `round(-1.5)` gives `-2`. This Python behaviour is a bit different from how rounding usually goes.

When we give `round()` an integer, the function simply returns that whole number. There’s no error in that case, and so we don’t have to check if the function’s argument has a fractional value. It does need to be a number though; string values are not allowed in `round()`.

#### \[\#\]\(\#example-round-python-numbers-to-the-nearest-full-integer "Bookmark for 'Example: round Python numbers to the nearest full integer'"\) Example: round Python numbers to the nearest full integer

To see how the `round()` function works in practice, let’s consider the following mini-program:

```python
    # Some numbers to round
    valueA = 3.14159265359
    valueB = 1845.7409947
    valueC = -100.95
    valueD = 9.5432
    valueE = 34.49953

    # Round values to whole numbers
    roundA = round(valueA)
    roundB = round(valueB)
    roundC = round(valueC)
    roundD = round(valueD)
    roundE = round(valueE)

    # Output rounded values
    print("Value:".ljust(15), "Rounded:")

    print(str(valueA).ljust(15), roundA)
    print(str(valueB).ljust(15), roundB)
    print(str(valueC).ljust(15), roundC)
    print(str(valueD).ljust(15), roundD)
    print(str(valueE).ljust(15), roundE)
```

Here we first make five variables with floating-point values. Some have a lot of decimal places and others just a few.

Then we do some rounding. For that we call the `round()` function and provide one argument: the value to round. We store the rounded integers in the variables `roundA` through `roundE`.

Next we output the results with the `print()` function. For each variable we display the original value \(e.g., `valueA`\) and its rounded result \(`roundA`\). With the `ljust()` string method we justify that first value to the left. That aligns the values for a prettier output.

Here’s how the rounded values look:

```text
Value:          Rounded:
3.14159265359   3
1845.7409947    1846
-100.95         -101
9.55432         10
34.49953        34
```

### \[\#\]\(\#round-down-to-the-next-integer-pythons-mathfloor-function "Bookmark for 'Round down to the next integer: Python’s `math.floor()` function'"\) Round down to the next integer: Python’s `math.floor()` function

The `math.floor()` function returns the _floor value_ of its argument, which is the nearest integer less than or equal to that argument’s value \(Python Docs, n.d. b\).

That sounds abstract, but is just another way of saying that `math.floor()` rounds down to the next whole number. So `7.8` becomes `7` and `5.4` is turned into `5`. And since the function rounds _down_ to a smaller value, `-8.2` becomes `-9`.

Here’s a quick example of the `math.floor()` function:

```text
    import math

    math.floor(12.75)
    # Returns: 12
```

`math.floor()` only accepts one argument: the value to round down. With a small custom function we can also round down to a number of decimal places. See [round down to a specific decimal amount](https://kodify.net/python/math/round-decimals/) for more.

#### \[\#\]\(\#example-round-values-down-to-the-next-full-integer "Bookmark for 'Example: round values down to the next full integer'"\) Example: round values down to the next full integer

To explore how the `math.floor()` function works in practice, let’s examine the following Python program:

```python
    import math

    # Some random values
    valueA = 11.2829850
    valueB = 19.2545879
    valueC = 0.50000001
    valueD = 34.6403001
    valueE = -9.9121138

    # Round values down to the nearest full integer
    roundA = math.floor(valueA)
    roundB = math.floor(valueB)
    roundC = math.floor(valueC)
    roundD = math.floor(valueD)
    roundE = math.floor(valueE)

    # Print the results
    print(valueA, "rounded =", roundA)
    print(valueB, "rounded =", roundB)
    print(valueC, "rounded =", roundC)
    print(valueD, "rounded =", roundD)
    print(valueE, "rounded =", roundE)
```

We first import the `math` module. That makes it possible to use the `math.floor()` function. Then we make five variables, `valueA` through `valueE`. Each holds a floating-point value.

Next we round those values down. For that we call the `math.floor()` function on each variable. We store the outcome in new variables \(`roundA` through `roundE`\).

The program’s third part outputs the variables with Python’s `print()` function. Here each `print()` statement displays the original value and its rounded down version. Here’s how that looks:

```python
    11.282985 rounded = 11
    19.2545879 rounded = 19
    0.50000001 rounded = 0
    34.6403001 rounded = 34
    -9.9121138 rounded = -10
```

### \[\#\]\(\#round-up-to-the-next-integer-pythons-mathceil-function "Bookmark for 'Round up to the next integer: Python’s `math.ceil()` function'"\) Round up to the next integer: Python’s `math.ceil()` function

The `math.ceil()` function returns the _ceiling_ of its argument, which is the nearest integer greater than or equal to that argument’s value \(Python Docs, n.d. b\).

That’s just a way of saying that `math.ceil()` rounds up to a whole number: `3.2` becomes `4` and `7.75` gets turned into `8`. And because the function rounds _up_ to a greater value, `-9.8` becomes `-9`.

Here’s a quick example of `math.ceil()`:

```python
    import math

    math.ceil(12.45)
    # Returns: 13
```

Here’s a way to remember the difference between `math.floor()` and `math.ceil()`. As you know, each floating-point value lies between two consecutive integers. `12.45`, for instance, is between `12` and `13`.

Now the “ceiling” is the higher endpoint of this interval. So `math.ceil()` returns `13`. The lower start point of that integer interval is called the “floor”. So `math.floor()` returns 12.

Python’s `math.ceil()` function always rounds up to a full integer. But with a small custom function we can also round up to a number of decimal places. See [round Python values to decimal places](https://kodify.net/python/math/round-decimals/) for how.

#### \[\#\]\(\#example-round-python-values-up-to-whole-numbers "Bookmark for 'Example: round Python values up to whole numbers'"\) Example: round Python values up to whole numbers

Let’s see how `math.ceil()` works in practice. This example program rounds several floating-point values up to a whole number:

```python
    import math

    # Some random values
    valueA = 11.2829850
    valueB = 19.2545879
    valueC = 0.50000001
    valueD = 34.6403001
    valueE = -9.9121138

    # Round values up to the nearest full integer
    roundA = math.ceil(valueA)
    roundB = math.ceil(valueB)
    roundC = math.ceil(valueC)
    roundD = math.ceil(valueD)
    roundE = math.ceil(valueE)

    # Output the results
    print(valueA, "rounded =", roundA)
    print(valueB, "rounded =", roundB)
    print(valueC, "rounded =", roundC)
    print(valueD, "rounded =", roundD)
    print(valueE, "rounded =", roundE)
```

We first import the `math` module. That makes the `math.ceil()` function available. Then we make five different variables, named `valueA` through `valueE`. Each has a number with several decimal places.

The next part rounds those values up to a full integer. To make that happen we call the `math.ceil()` function on each variable. We put the values returns by that function in new variables, `roundA` through `roundE`.

The third code segment has the `print()` function output both the original and rounded value. Here’s what that displays:

```python
    11.282985 rounded = 12
    19.2545879 rounded = 20
    0.50000001 rounded = 1
    34.6403001 rounded = 35
    -9.9121138 rounded = -9
```

### \[\#\]\(\#round-all-values-in-a-python-list-or-array "Bookmark for 'Round all values in a Python list or array'"\) Round all values in a Python list or array

Of course there are also situations where we have a bunch of values to round, rather than a single value. There are two main ways to do that: with a list comprehension or `for` loop. Let’s see.

#### \[\#\]\(\#round-python-values-with-a-list-comprehension "Bookmark for 'Round Python values with a list comprehension'"\) Round Python values with a list comprehension

When we have a sequence of floating-point values, one way to round them is with a list comprehension. That requires just a bit of code and runs efficiently.

Here’s a mini-program that does just that:

```python
    import math

    # Some random values
    values = [
        3.46410162, 6.70820393, 11.04536102,
        15.29705854, 21.21320344, 31.4960315
    ]

    # Generate new lists with values rounded
    valuesRounded = [round(number) for number in values]
    valuesRoundUp = [math.ceil(number) for number in values]
    valuesRoundDown = [math.floor(number) for number in values]

    # Output data
    print("Original values:\n", values)
    print("Rounded:\n", valuesRounded)
    print("Rounded up to next integer:\n", valuesRoundUp)
    print("Rounded down to next integer:\n", valuesRoundDown)
```

First we import the `math` module. That makes the `math.ceil()` and `math.floor()` rounding functions available. Then we make a list named `values`, which holds several floating-point values.

To round those values to whole numbers we make three list comprehensions. The first one executes `round()` for each list value. The other two execute `math.ceil()` and `math.floor()` functions on the list values.

We generate the values that those functions use with an in-line `for` loop: `for number in values`. This takes one value from the `values` list at a time, and makes it available through the `number` variable.

Those list comprehensions generate new lists. We assign those to the `valuesRounded`, `valuesRoundUp`, and `valuesRoundDown` variables.

The last part of the program outputs the original list and the three rounded ones. Here’s how that looks:

```text
Original values:
 [3.46410162, 6.70820393, 11.04536102, 15.29705854, 21.21320344, 31.4960315]
Rounded:
 [3, 7, 11, 15, 21, 31]
Rounded up to next integer:
 [4, 7, 12, 16, 22, 32]
Rounded down to next integer:
 [3, 6, 11, 15, 21, 31]
```

In the above example we kept the original list. If you don’t need to retain those values, you can also overwrite the original list with rounded values. Here’s how a list comprehension does that:

```text
# Round all numbers in the 'values' list,
# in place (to replace the original numbers)
values = [round(value) for value in values]
```

#### \[\#\]\(\#round-all-values-with-pythons-for-loop "Bookmark for 'Round all values with Python’s `for` loop'"\) Round all values with Python’s `for` loop

Of course we can also round list or array values with a regular `for` loop. This requires a bit more code than a list comprehension, but makes it easier to perform additional operations on each element. Plus a `for` loop is easier to read in complex situations.

Here’s how a Python program rounds values inside a `for` loop:

```python
    import math

    # Some random values
    values = [
        3.46410162, 6.70820393, 11.04536102,
        15.29705854, 21.21320344, 31.4960315
    ]

    # Create the new lists
    valuesRounded = []
    valuesRoundUp = []
    valuesRoundDown = []

    # Populate new lists with rounded values
    for number in values:
        valuesRounded.append(round(number))
        valuesRoundUp.append(math.ceil(number))
        valuesRoundDown.append(math.floor(number))

    # Output data
    print("Original values:\n", values)
    print("Rounded (standard):\n", valuesRounded)
    print("Rounded up to next integer:\n", valuesRoundUp)
    print("Rounded down to next integer:\n", valuesRoundDown)
```

We again first import the `math` module to be able to use `math.ceil()` and `math.floor()`. Then we make a list \(`values`\) with floating-point values.

Then we make three initially empty lists: `valuesRounded`, `valuesRoundUp`, and `valuesRoundDown`. These are going to hold our rounded values.

To fill those lists we make a Python `for` loop. This loop goes through all elements in the `values` list. During each loop cycle the `number` variable holds a single element from that list.

Inside the loop we call the `append()` method on each of the three new lists. That way we add a new element to them. The value we add each pass through the loop is the `number` variable rounded with `round()`, `math.ceil()`, and `math.floor()`. After this loop is done, each of those three lists has a rounded value from the original list.

The program ends with several `print()` statements. That displays the original list and its rounded derivatives. Here’s what that output looks like:

```text
Original values:
 [3.46410162, 6.70820393, 11.04536102, 15.29705854, 21.21320344, 31.4960315]
Rounded (standard):
 [3, 7, 11, 15, 21, 31]
Rounded up to next integer:
 [4, 7, 12, 16, 22, 32]
Rounded down to next integer:
 [3, 6, 11, 15, 21, 31]
```

By the way, you don’t have to make a new list when you round values. If you’re fine with losing the original data, you can also overwrite the existing list. Doing so is easy when you combine a `for` loop with the `enumerate()` function:

```python
    # Loop through the original 'values' list, and
    # round the numbers (in place)
    for index, value in enumerate(values):
        values[index] = round(value)
```

### \[\#\]\(\#summary "Bookmark for 'Summary'"\) Summary

Python has three ways to round a floating-point value to a whole number. The `round()` function rounds a value up or down. A decimal digit of `.5` has Python round towards an even integer. That makes it round up for positive values and down for negative ones.

The `math.floor()` function, on the other hand, always rounds down to the nearest full integer. `math.ceil()` does the opposite. That function always rounds up to a whole number.

All three functions work in the same way: provide the function with one argument, which is the floating-point value to round.
