# Things To Internalize:

```python
"""
There are two main keywords for making loops of code in Python: for and while.
There are other ways to make repeating code (comprehensions, generators, etc.) but these are the main
ones to used when you have a block of code you want to run over and over.
"""

# Use "for" when you have an iterable and you want to run some code on each item in it
for letter in 'abc':
    print(letter)

# The items in the iterable don't have to be known ahead of time (it can be a generator)
for n in range(10):
    print(n)

# If you modify the items in the iterable while looping things can get weird (or not work at all).
# Usually better to make a copy and loop over that.
d = {'a': 0, 'A': 1}
for k in list(d):
    if k.isupper():
        del d[k]

# Use "while" when you want to do something repeatedly and
# then stop at a certain condition which can't be calculated ahead of time.
i = 1
while i < 100:
    i *= 2

# While loops also work nicely with mutating data structures, especially stacks and queues
stack: list = [3, 2, 1]
while stack:
    n = stack.pop()
    if n != 1:
        stack.extend([1] * n)

# Both types of loops share the same controls
# You can end the loop at any time with break
i = 0
while i < 100:
    i += 1
    if i == 7:
        break

# You can immediately proceed to the next iteration with continue.
# This is usually used after an if statement and is equivalent to putting everything after it in an else statement.
for i in range(100):
    if i % 2 == 0:
        continue
    print(i)


# Not commonly known or used, you can follow while and for loops with an else clause.
# Else clauses run when your loops end not because of a break statement.
number = 97
for factor in range(2, 11):
    if number % factor == 0:
        print(f'{number} is divible by {factor}')
        break
else:
    print(f'{number} isn\'t divisible by 2 through 10')
```
