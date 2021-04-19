# Analysis of Algorithms

## Exercise I

Give an analysis of the running time of each snippet of
pseudocode with respect to the input size n of each of the following:

```python
a)  a = 0
    while (a < n * n * n):
      a = a + n * n
```

a) O(n) because n is the difference between the powers n^2 (worth of each step) and n^3 (max)

```
b)  sum = 0
    for i in range(n):
      j = 1
      while j < n:
        j *= 2
        sum += 1
```
b) O(n^2) because there are two nested loops

```
c)  def bunnyEars(bunnies):
      if bunnies == 0:
        return 0

      return 2 + bunnyEars(bunnies-1)
```

c) O(n log n) because it is recursive

## Exercise II

Suppose that you have an n-story building and plenty of eggs. Suppose also that an egg gets broken if it is thrown off floor f or higher, and doesn't get broken if dropped off a floor less than floor f. Devise a strategy to determine the value of f such that the number of dropped + broken eggs is minimized.

Write out your proposed algorithm in plain English or pseudocode AND give the runtime complexity of your solution.

- loop through 0 to n-1 to represent each story
- you will not actually loop through every story, only up to where the eggs start breaking
- try to drop an egg off of each floor
- if it is successful (no breakage), go to next floor
- if egg breaks, save current story as variable and exit loop
- subtract 1 from current story
- return story
- The runtime of this would be O(n) because there is one loop and it is dependent on the number of building stories.

- Alternatively, you could do a binary search, start at n/2 and then do upper or lower half depending on if it breaks or not until you get the max floor.
- This would be runtime O(log n).
